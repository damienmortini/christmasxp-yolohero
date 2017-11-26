import GLMesh from "dlib/gl/GLMesh.js";
import GLProgram from "dlib/gl/GLProgram.js";

export default class Background {
  constructor({gl}) {
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

    this.program = new GLProgram({
      gl: this.gl,
      uniforms: [
        ["data", 0]
      ],
      vertexShader: `#version 300 es
        in vec2 position;
        in vec2 uv;

        out vec2 vUv;

        void main() {
          gl_Position = vec4(position, 0., 1.);
          vUv = uv;
        }
      `,
      fragmentShader: `#version 300 es
        precision highp float;

        uniform sampler2D data;

        in vec2 vUv;

        out vec4 fragColor;

        void main() {
          fragColor = texture(data, vUv);
          fragColor.rgb *= fragColor.a;
        }
      `
    });
    this.program.attributes.set(this._mesh.attributes);
  }

  draw() {
    this.program.use();
    this._mesh.draw();
  }
}