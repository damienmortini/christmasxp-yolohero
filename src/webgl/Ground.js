import GLMesh from "dlib/gl/GLMesh.js";
import GLProgram from "dlib/gl/GLProgram.js";
import { hexToRGB } from "dlib/math/Color.js";
import Matrix4 from "dlib/math/Matrix4.js";

export default class Ground {
  constructor({
    gl,
    player
  }) {
    this.gl = gl;

    this.transform = new Matrix4();

    this.mesh = new GLMesh({
      gl: this.gl,
      attributes: [
        ["position", {
          data: new Float32Array([
            -1, 1,
            -1, -1,
            1, 1,
            1, -1,
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
        uniform mat4 projectionView;
        uniform mat4 transform;

        in vec2 position;
        in vec2 uv;

        out vec2 vUv;

        void main() {
          gl_Position = projectionView * transform * vec4(position.x, 0., -position.y * 10., 1.);
          vUv = uv;
        }
      `,
      fragmentShader: `#version 300 es
        precision highp float;

        uniform float motion;

        in vec2 vUv;

        out vec4 fragColor;

        void main() {
          fragColor = vec4(1.);
        }
      `
    });
  }

  draw({camera} = {}) {
    this.program.use();
    this.program.uniforms.set("projectionView", camera.projectionView);
    this.program.uniforms.set("transform", this.transform);
    this.program.attributes.set(this.mesh.attributes);
    this.mesh.draw({
      mode: this.gl.TRIANGLE_STRIP,
      count: 4
    });
  }
}