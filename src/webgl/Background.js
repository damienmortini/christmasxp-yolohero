import GLMesh from "dlib/gl/GLMesh.js";
import GLProgram from "dlib/gl/GLProgram.js";
import DepthShader from "dlib/shaders/DepthShader.js";
import PBRShader from "dlib/shaders/PBRShader.js";
import NoiseShader from "dlib/shaders/NoiseShader.js";
import RayShader from "dlib/shaders/RayShader.js";
import LightShader from "dlib/shaders/LightShader.js";
import { hexToRGB } from "dlib/math/Color.js";
import GLTexture from "dlib/gl/GLTexture.js";

export default class Background {
  constructor({
    gl,
    webcam
  }) {

    this.gl = gl;
    this.webcam = webcam;

    // this.envMap = new GLTexture({
    //   gl: this.gl,
    //   data: 
    // });

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

        out vec2 vPosition;
        out vec2 vUv;

        void main() {
          gl_Position = vec4(position, 0., 1.);
          vUv = uv;
        }
      `,
      fragmentShader: `#version 300 es
        precision highp float;

        uniform vec3 colors[3];

        uniform vec2 resolution;
        uniform float motion;
        uniform sampler2D webcamTexture;

        in vec2 vUv;
        in vec2 vPosition;

        out vec4 fragColor;

        ${LightShader.Light()}
        ${RayShader.Ray()}
        ${PBRShader.PhysicallyBasedMaterial()}
        ${NoiseShader.random()}
        ${PBRShader.ggx()}
        ${PBRShader.computeGGXLighting()}
        ${PBRShader.computePBRLighting({
          pbrReflectionFromRay: `
            vec3 color = texture(webcamTexture, ray.direction.xy * 2.).rgb;
            float grey = (color.r + color.g + color.b) / 3.;
            color = mix(colors[0], colors[1], smoothstep(0., .33, grey));
            color = mix(color, colors[2], smoothstep(.33, .66, grey));
            return .8 + vec3(step(.5, grey)) * .2;
            // return color;
          `
        })}

        ${DepthShader.bumpFromDepth({
          getDepth: `
            vec4 texel = texture(depthTexture, uv);
            return (texel.r + texel.g + texel.b) / 3.;
          `
        })}

        void main() {
          vec4 webcam = texture(webcamTexture, vUv);
          float grey = (webcam.r + webcam.g + webcam.b) / 3.;
          fragColor.rgb = mix(colors[0], colors[1], smoothstep(0., .33, grey));
          fragColor.rgb = mix(fragColor.rgb, colors[2], smoothstep(.33, .66, grey));
          // fragColor.rgb = colors[0];
          // fragColor.rgb = mix(fragColor.rgb, colors[1], step(.1, grey));
          // fragColor.rgb = mix(fragColor.rgb, colors[2], step(.2, grey));
          // fragColor.rgb = mix(fragColor.rgb, colors[0], step(.3, grey));
          // fragColor.rgb = mix(fragColor.rgb, colors[1], step(.3, grey));
          // fragColor.rgb = mix(fragColor.rgb, colors[2], step(.4, grey));
          // fragColor.rgb = mix(fragColor.rgb, colors[0], step(.5, grey));
          // fragColor.rgb = mix(fragColor.rgb, colors[1], step(.6, grey));
          // fragColor.rgb = mix(fragColor.rgb, colors[2], step(.7, grey));
          // fragColor.rgb = mix(fragColor.rgb, colors[0], step(.8, grey));
          // fragColor.rgb = mix(fragColor.rgb, colors[1], step(.9, grey));
          // fragColor.rgb += .5 * motion;

          vec4 bump = bumpFromDepth(webcamTexture, vUv, resolution * .01, .1 + motion * .2);

          vec3 color = computePBRLighting(
            Ray(vec3(0., 0., 1.), normalize(vec3(vPosition, -1.))), 
            Light(vec3(1.), vec3(0.), vec3(-1.), 1.),
            vec3(vPosition, 0.),
            bump.xyz,
            PhysicallyBasedMaterial(colors[2], 0., .1, 2.)
          );

          // vec3 color = colors[0];
          // color = vec3(0.);

          float light1 = max(0., dot(normalize(vec3(1., 0., 1.)), bump.xyz));
          // color = mix(color, colors[1], light1);
          // color += pow(light1, .5) * .5;
          
          float light2 = max(0., dot(normalize(vec3(-1., 1., 1.)), bump.xyz));
          // color = mix(color, colors[2], light2);
          // color += light2 * .1;

          fragColor = vec4(color, 1.);
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
    this.program.uniforms.set("resolution", [this.gl.canvas.width, this.gl.canvas.height]);
    this.program.uniforms.set("motion", this.webcam.motionRatio);
    
    this._mesh.draw({
      mode: this.gl.TRIANGLE_STRIP,
      count: 4
    });
  }
}