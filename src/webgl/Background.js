import GLMesh from "dlib/gl/GLMesh.js";
import GLProgram from "dlib/gl/GLProgram.js";
import { hexToRGB } from "dlib/math/Color.js";

export default class Background {
  constructor({
    gl,
    webcam
  }) {

    this.gl = gl;
    this.webcam = webcam;

    this._mesh = new GLMesh({
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

        uniform vec3 colors[3];

        uniform float motion;
        uniform sampler2D webcam;

        in vec2 vUv;

        out vec4 fragColor;

        void main() {
          fragColor = texture(webcam, vUv);
          float grey = (fragColor.r + fragColor.g + fragColor.b) / 3.;
          fragColor.rgb = mix(colors[0], colors[1], smoothstep(0., .33, grey));
          fragColor.rgb = mix(fragColor.rgb, colors[2], smoothstep(.33, .66, grey));
          // fragColor.rgb = mix(colors[0], colors[1], step(.33, grey));
          // fragColor.rgb = mix(fragColor.rgb, colors[2], step(.66, grey));
          fragColor.rgb += .5 * motion;
        }
      `
    });

    this.program.use();
    this.program.uniforms.set("colors", [
      hexToRGB("#f9ef03"),
      hexToRGB("#f2018c"),
      hexToRGB("#02aef0"),
    ]);
  }

  draw() {
    this.program.use();
    this.webcam.frameTexture.bind();
    this.program.attributes.set(this._mesh.attributes);
    this.program.uniforms.set("motion", this.webcam.motionRatio);
    this._mesh.draw({
      mode: this.gl.TRIANGLE_STRIP,
      count: 4
    });
  }
}