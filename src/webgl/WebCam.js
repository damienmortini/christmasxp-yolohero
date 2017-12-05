import GLFrameBuffer from "dlib/gl/GLFrameBuffer.js";
import GLTexture from "dlib/gl/GLTexture.js";
import GLProgram from "dlib/gl/GLProgram.js";
import BlurShader from "dlib/shaders/BlurShader.js";
import GLMesh from "dlib/gl/GLMesh.js";
import Ticker from "dlib/utils/Ticker.js";
import { hexToRGB } from "dlib/math/Color.js";
import { COLORS } from "./Colors.js";

const FRAME_BUFFER_SIZE = 256;
const BLUR_PASSES = 2;

export default class WebCam {
  constructor({gl}) {
    this.gl = gl;

    this.video = document.createElement("video");
    this.video.autoplay = true;

    this.motionRatio = 0;
    this.volume = 0;

    this._mesh = new GLMesh({
      gl: this.gl,
      attributes: [
        ["position", {
          data: new Float32Array([
            -1, -1,
            -1, 1,
            1, -1,
            1, 1
          ]),
          size: 2
        }],
        ["uv", {
          data: new Float32Array([
            0, 1,
            0, 0,
            1, 1,
            1, 0
          ]),
          size: 2
        }]
      ]
    });

    this.videoTexture = new GLTexture({
      gl: this.gl
    });
    this.videoTexture.minFilter = this.gl.LINEAR;
    this.videoTexture.wrapS = this.videoTexture.wrapT = this.gl.CLAMP_TO_EDGE;

    this.frameBuffers = [];
    for (let i = 0; i < 5; i++) {
      const frameBuffer = new GLFrameBuffer({gl: this.gl});
      frameBuffer.attach({
        texture: new GLTexture({
          gl: this.gl,
          minFilter: this.gl.LINEAR,
          internalformat: i === 4 ? this.gl.BGR8 : this.gl.RGB,
          format: i === 4 ? this.gl.RGBA : this.gl.RGB,
          width: i === 4 ? 1 : FRAME_BUFFER_SIZE,
          height: i === 4 ? 1 : FRAME_BUFFER_SIZE,
          wrapS: this.gl.MIRRORED_REPEAT,
          wrapT: this.gl.MIRRORED_REPEAT,
        })
      });
      this.frameBuffers.push(frameBuffer);
    }

    this.program = new GLProgram({
      gl: this.gl,
      vertexShaderChunks: [
        ["start", `
          in vec2 position;
          in vec2 uv;

          out vec2 vUv;
        `],
        ["end", `
          vec2 uv = vec2(1. - uv.x, uv.y);
          vUv = uv;
          gl_Position = vec4(position, 0., 1.);
        `]
      ],
      fragmentShaderChunks: [
        ["start", `
          precision highp float;
          
          uniform sampler2D videoTexture;

          in vec2 vUv;
        `],
        ["end", `
          fragColor = texture(videoTexture, vUv);
        `]
      ]
    });
    this.program.attributes.set(this._mesh.attributes);

    this.blurProgram = new GLProgram({
      gl: this.gl,
      vertexShaderChunks: [
        ["start", `
          in vec2 position;
          in vec2 uv;
        `],
        ["end", `
          vec2 uv = vec2(uv.x, 1. - uv.y);
          gl_Position = vec4(position, 0., 1.);
        `]
      ],
      shaders: [BlurShader.shader(), {fragmentShaderChunks: [
        ["start", "precision highp float;"]
      ]}]
    });
    this.blurProgram.attributes.set(this._mesh.attributes);

    this.envMapProgram = new GLProgram({
      gl: this.gl,
      vertexShaderChunks: [
        ["start", `
          in vec2 position;
          in vec2 uv;

          out vec2 vUv;
        `],
        ["end", `
          vec2 uv = vec2(uv.x, 1. - uv.y);
          vUv = uv;
          gl_Position = vec4(position, 0., 1.);
        `]
      ],
      fragmentShaderChunks: [
        ["start", `
          precision highp float;

          uniform sampler2D frame;
          uniform vec3 colors[3];

          in vec2 vUv;
        `],
        ["end", `
          vec3 frameTexel = texture(frame, vUv).rgb;
          float grey = (frameTexel.r + frameTexel.g + frameTexel.b) / 3.;
          vec3 rainbow = mix(colors[0], colors[1], smoothstep(0., .33, grey));
          rainbow = mix(rainbow, colors[2], smoothstep(.33, .66, grey));
          fragColor.rgb = rainbow;
        `]
      ]
    });
    this.envMapProgram.use();
    this.envMapProgram.uniforms.set("colors", [
      hexToRGB(COLORS[1]),
      hexToRGB(COLORS[2]),
      hexToRGB(COLORS[3]),
    ]);
    this.envMapProgram.attributes.set(this._mesh.attributes);

    this.endProgram = new GLProgram({
      gl: this.gl,
      vertexShaderChunks: [
        ["start", `
          in vec2 position;
          in vec2 uv;

          out vec2 vUv;
        `],
        ["end", `
          vec2 uv = vec2(uv.x, 1. - uv.y);
          vUv = uv;
          gl_Position = vec4(position, 0., 1.);
        `]
      ],
      fragmentShaderChunks: [
        ["start", `
          precision highp float;

          uniform sampler2D frame;
          uniform sampler2D previousFrame;

          in vec2 vUv;
        `],
        ["end", `
          float difference = texture(frame, vUv).r - texture(previousFrame, vUv).r;
          fragColor.rgb = vec3(difference);
        `]
      ]
    });
    this.endProgram.attributes.set(this._mesh.attributes);

    this.debugProgram = new GLProgram({
      gl: this.gl,
      vertexShaderChunks: [
        ["start", `
          in vec2 position;
          in vec2 uv;

          out vec2 vUv;
        `],
        ["end", `
          vec2 uv = vec2(uv.x, 1. - uv.y);
          vUv = uv;
          gl_Position = vec4(position, 0., 1.);
        `]
      ],
      fragmentShaderChunks: [
        ["start", `
          precision highp float;

          uniform sampler2D frame;

          in vec2 vUv;
        `],
        ["end", `
          fragColor.rgb = texture(frame, vUv).rgb;
        `]
      ]
    });
    this.debugProgram.attributes.set(this._mesh.attributes);

    navigator.mediaDevices.getUserMedia({ audio: true, video: { width: 320, height: 240, facingMode: "user" } }).then((stream) => {
      this.video.srcObject = stream;
      this.video.muted = true;

      const audioContext = new AudioContext();
      const input = audioContext.createMediaStreamSource(stream);
      this._analyser = audioContext.createAnalyser();
      this._audioData = new Uint8Array(this._analyser.frequencyBinCount);
      input.connect(this._analyser);
    }).catch(function (err) {
      /* handle the error */
    });
  }
  
  update() {
    if(this.video.readyState !== HTMLVideoElement.HAVE_ENOUGH_DATA) {
      return;
    }

    this.program.attributes.set(this._mesh.attributes);    

    this.gl.disable(this.gl.CULL_FACE);
    this.gl.disable(this.gl.DEPTH_TEST);

    this.frameBuffers[0].bind();
    this.videoTexture.data = this.video;
    this.videoTexture.bind();
    this.program.use();
    this.program.uniforms.set("videoTexture", 0);
    this._draw({
      width: FRAME_BUFFER_SIZE,
      height: FRAME_BUFFER_SIZE
    });
    this.frameBuffers[0].unbind();

    for (let i = 0; i < BLUR_PASSES; i++) {
      for (let i = 0; i < 2; i++) {
        this.frameBuffers[(i + 1) % 2].bind();
        this.blurProgram.use();
        this.frameBuffers[i].colorTextures[0].bind();
        this.blurProgram.uniforms.set("blurDistance", [(i + 1) % 2, i]);
        this._draw({
          width: FRAME_BUFFER_SIZE,
          height: FRAME_BUFFER_SIZE
        });
        this.frameBuffers[(i + 1) % 2].unbind();
      }
    }

    this.frameBuffers[4].bind();
    this.endProgram.use();
    this.frameBuffers[1].colorTextures[0].bind();
    this.endProgram.uniforms.set("frame", 0);
    this.frameBuffers[2].colorTextures[0].bind({
      unit: 1
    });
    this.endProgram.uniforms.set("previousFrame", 1);
    this._draw({
      width: 1,
      height: 1
    });
    this.frameBuffers[4].unbind();

    this.frameBuffers[3].bind();
    this.envMapProgram.use();
    this.frameBuffers[2].colorTextures[0].bind();
    this.envMapProgram.uniforms.set("frame", 0);
    this._draw({
      width: FRAME_BUFFER_SIZE,
      height: FRAME_BUFFER_SIZE
    });
    this.frameBuffers[3].unbind();

    // this.debugProgram.use();
    // this.frameBuffers[2].colorTextures[0].bind();
    // this.debugProgram.uniforms.set("frame", 0);
    // this._draw();

    [this.frameBuffers[1], this.frameBuffers[2]] = [this.frameBuffers[2], this.frameBuffers[1]];

    // Sound
    let frequenciesSum = 0;
    this._analyser.getByteFrequencyData(this._audioData);
    for (var i = 0; i < this._audioData.length; i++) {
      frequenciesSum += this._audioData[i];
    }
    frequenciesSum /= this._audioData.length;
    this.volume = frequenciesSum / 255;

    this.gl.enable(this.gl.CULL_FACE);
    this.gl.enable(this.gl.DEPTH_TEST);

    // this._animationFrameId = requestAnimationFrame(() => {
    //   cancelAnimationFrame(this._animationFrameId);
      this.frameBuffers[4].bind();
  
      let motionRatio = 0;

      const pixels = new Uint8Array(4);
      this.gl.readPixels(0, 0, 1, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, pixels);
      motionRatio = pixels[0] / 255 * 100;
  
      motionRatio = motionRatio || (this.motionRatio * .8);
      this.motionRatio += (motionRatio - this.motionRatio) * .1;
  
      this.frameBuffers[4].unbind();
    // });
  }

  get frameTexture() {
    return this.frameBuffers[2].colorTextures[0];
  }

  get envMap() {
    return this.frameBuffers[3].colorTextures[0];
  }

  _draw({
    width = this.gl.canvas.width,
    height = this.gl.canvas.height,
  } = {}) {
    this.gl.viewport(0, 0, width, height);
    this._mesh.draw({
      mode: this.gl.TRIANGLE_STRIP,
      count: 4
    });
  }
}
