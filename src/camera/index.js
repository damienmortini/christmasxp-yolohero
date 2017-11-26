import "@webcomponents/custom-elements";

import GLFrameBuffer from "dlib/gl/GLFrameBuffer.js";
import LoopElement from "dlib/customelements/LoopElement.js";
import WebGLVideoElement from "dlib/customelements/WebGLVideoElement.js";
import GLTexture from "dlib/gl/GLTexture.js";
import GLProgram from "dlib/gl/GLProgram.js";
import BlurShader from "dlib/shaders/BlurShader.js";

const FRAME_BUFFER_SIZE = 256;
const BLUR_PASSES = 2;

window.customElements.define("christmasxp-yolohero-camera", class extends WebGLVideoElement {
  connectedCallback() {
    super.connectedCallback();

    this.autoplay = true;

    this.frameBuffers = [];
    for (let i = 0; i < 3; i++) {
      const frameBuffer = new GLFrameBuffer({gl: this.gl});
      frameBuffer.attach({
        texture: new GLTexture({
          gl: this.gl,
          minFilter: this.gl.LINEAR,
          width: FRAME_BUFFER_SIZE,
          height: FRAME_BUFFER_SIZE
        })
      });
      frameBuffer.unbind();
      this.frameBuffers.push(frameBuffer);
    }

    this.program.add({
      fragmentShaderChunks: [
        ["main", `
          vec2 vUv = vec2(1. - vUv.x, vUv.y);
        `],
        ["end", `
          vec3 video = fragColor.rgb;
          fragColor.rgb = vec3((fragColor.r + fragColor.g + fragColor.b) / 3.);
        `]
      ]
    });

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
          fragColor.rgb = texture(frame, vUv).rgb - texture(previousFrame, vUv).rgb;
          fragColor.rgb *= 3.;
        `]
      ]
    });
    this.endProgram.attributes.set(this._mesh.attributes);

    console.log(this.endProgram);

    navigator.mediaDevices.getUserMedia({ audio: false, video: { width: window.innerWidth * .2, height: window.innerHeight * .2, facingMode: "user" } }).then((stream) => {
      this.srcObject = stream;
    }).catch(function (err) {
      /* handle the error */
    });
  }

  update() {
    this.frameBuffers[0].bind();
    this._texture.data = this._data;
    this.program.use();
    this.program.uniforms.set("data", 0);
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

    this.endProgram.use();
    this.frameBuffers[1].colorTextures[0].bind();
    this.endProgram.uniforms.set("frame", 0);
    this.frameBuffers[2].colorTextures[0].bind({
      unit: 1
    });
    this.endProgram.uniforms.set("previousFrame", 1);
    this.draw();

    [this.frameBuffers[1], this.frameBuffers[2]] = [this.frameBuffers[2], this.frameBuffers[1]];
  }
});
