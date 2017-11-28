import GLMesh from "dlib/gl/GLMesh.js";
import GLProgram from "dlib/gl/GLProgram.js";
import { hexToRGB } from "dlib/math/Color.js";

export default class Plane {
  constructor({
    gl
  }) {
    this.gl = gl;

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
        uniform vec2 size;

        in vec2 position;
        in vec2 uv;

        out vec2 vUv;

        void main() {
          vec2 position = position * size * .01;
          gl_Position = projectionView * transform * vec4(position, 0., 1.);
          vUv = uv;
        }
      `,
      fragmentShader: `#version 300 es
        precision highp float;

        uniform vec3 colors[3];

        uniform float motion;
        uniform sampler2D diffuse;

        in vec2 vUv;

        out vec4 fragColor;

        void main() {
          fragColor = texture(diffuse, vUv);
        }
      `
    });
  }

  draw() {
    this.mesh.draw({
      mode: this.gl.TRIANGLE_STRIP,
      count: 4
    });
  }
}