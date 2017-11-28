import GLFrameBuffer from "dlib/gl/GLFrameBuffer.js";
import GLTexture from "dlib/gl/GLTexture.js";
import GLProgram from "dlib/gl/GLProgram.js";
import BlurShader from "dlib/shaders/BlurShader.js";
import GLMesh from "dlib/gl/GLMesh.js";
import Ticker from "dlib/utils/Ticker.js";

const FRAME_BUFFER_SIZE = 256;
const BLUR_PASSES = 4;

export default class WebCam {
  constructor({gl}) {
    this.gl = gl;

    this.video = document.createElement("video");
    this.video.autoplay = true;

    this.motionRatio = 0;

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
    for (let i = 0; i < 4; i++) {
      const frameBuffer = new GLFrameBuffer({gl: this.gl});
      frameBuffer.attach({
        texture: new GLTexture({
          gl: this.gl,
          minFilter: this.gl.LINEAR,
          width: i === 3 ? 1 : FRAME_BUFFER_SIZE,
          height: i === 3 ? 1 : FRAME_BUFFER_SIZE,
          wrapS: this.gl.CLAMP_TO_EDGE,
          wrapT: this.gl.CLAMP_TO_EDGE,
        })
      });
      frameBuffer.unbind();
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

    navigator.mediaDevices.getUserMedia({ audio: false, video: { width: window.innerWidth * .2, height: window.innerHeight * .2, facingMode: "user" } }).then((stream) => {
      this.video.srcObject = stream;
    }).catch(function (err) {
      /* handle the error */
    });
  }
  
  update() {
    if(this.video.readyState !== HTMLVideoElement.HAVE_ENOUGH_DATA) {
      return;
    }

    this._mesh.bind();
    this.program.attributes.set(this._mesh.attributes);    

    this.gl.disable(this.gl.CULL_FACE);  
    this.gl.disable(this.gl.DEPTH_TEST);

    this.frameBuffers[0].bind();
    this.videoTexture.data = this.video;
    this.program.use();
    this.program.uniforms.set("videoTexture", 0);
    this.draw({
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
        this.draw({
          width: FRAME_BUFFER_SIZE,
          height: FRAME_BUFFER_SIZE
        });
        this.frameBuffers[(i + 1) % 2].unbind();
      }
    }

    this.frameBuffers[3].bind();
    this.endProgram.use();
    this.frameBuffers[1].colorTextures[0].bind();
    this.endProgram.uniforms.set("frame", 0);
    this.frameBuffers[2].colorTextures[0].bind({
      unit: 1
    });
    this.endProgram.uniforms.set("previousFrame", 1);
    this.draw({
      width: 1,
      height: 1
    });

    const pixels = new Uint8Array(4);
    this.gl.readPixels(0, 0, 1, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, pixels);

    let motionRatio = pixels[0] / 255 * 100;
    motionRatio = motionRatio || (this.motionRatio * .8);
    this.motionRatio += (motionRatio - this.motionRatio) * .1;

    this.frameBuffers[3].unbind();

    // this.debugProgram.use();
    // this.frameBuffers[2].colorTextures[0].bind();
    // this.debugProgram.uniforms.set("frame", 0);
    // this.draw();

    [this.frameBuffers[1], this.frameBuffers[2]] = [this.frameBuffers[2], this.frameBuffers[1]];
  }

  get frameTexture() {
    return this.frameBuffers[2].colorTextures[0];
  }

  draw({
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
