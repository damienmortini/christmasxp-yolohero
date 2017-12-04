import GLMesh from "dlib/gl/GLMesh.js";
import GLProgram from "dlib/gl/GLProgram.js";
import { hexToRGB } from "dlib/math/Color.js";
import Matrix4 from "dlib/math/Matrix4.js";

export default class Ground {
  constructor({
    gl,
    player,
    webcam,
    noiseTexture
  }) {
    this.gl = gl;
    this.webcam = webcam;
    this._noiseTexture = noiseTexture;

    this.transform = new Matrix4();

    const width = 10;
    const height = 40;

    this._time = 0;

    this.mesh = new GLMesh({
      gl: this.gl,
      attributes: [
        ["position", {
          data: new Float32Array([
            -width * .5, 0, -height,
            -width * .5, 0, 0,
            width * .5, 0, -height,
            width * .5, 0, 0,
          ]),
          size: 3
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

        in vec3 position;
        in vec2 uv;

        out vec2 vUv;

        void main() {
          gl_Position = projectionView * transform * vec4(position, 1.);
          vUv = uv;
        }
      `,
      fragmentShader: `#version 300 es
        precision highp float;

        uniform float motion;
        uniform float volume;
        uniform float time;
        uniform sampler2D noiseTexture;

        in vec2 vUv;

        out vec4 fragColor;

        void main() {
          vec3 color = vec3(0.);
          float opacity = 1.;
          float displaced = vUv.x;
          vec4 noise = texture(noiseTexture, vec2(vUv.x, vUv.y * 4. + time * .3) * .2);
          float displacementRatio = volume * pow(1. - abs(vUv.y * 2. - 1.), 1.);
          displaced += cos(vUv.y * 40. + time * 10. + vUv.x * 3.14) * displacementRatio * .5;
          opacity = 1. - step(.01, fract(clamp(displaced, .05, .95) * 5. + .025));
          // opacity += (1. - step(.0005, vUv.y)) * (1. - pow(abs(vUv.x * 2. - 1.), 10.));
          opacity *= 1. - vUv.y;
          fragColor = vec4(color, opacity);
        }
      `
    });
  }

  draw({camera} = {}) {
    this._time += .1;

    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

    this._noiseTexture.bind();

    this.program.use();
    this.program.uniforms.set("projectionView", camera.projectionView);
    this.program.uniforms.set("transform", this.transform);
    this.program.uniforms.set("volume", this.webcam.volume);
    this.program.uniforms.set("motion", this.webcam.motionRatio);
    this.program.uniforms.set("time", this._time);
    this.program.attributes.set(this.mesh.attributes);
    this.mesh.draw({
      mode: this.gl.TRIANGLE_STRIP,
      count: 4
    });

    this.gl.disable(this.gl.BLEND);
  }
}