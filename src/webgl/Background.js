import GLMesh from "dlib/gl/GLMesh.js";
import GLProgram from "dlib/gl/GLProgram.js";
import DepthShader from "dlib/shaders/DepthShader.js";
import PBRShader from "dlib/shaders/PBRShader.js";
import NoiseShader from "dlib/shaders/NoiseShader.js";
import RayShader from "dlib/shaders/RayShader.js";
import LightShader from "dlib/shaders/LightShader.js";
import { hexToRGB } from "dlib/math/Color.js";
import GLTexture from "dlib/gl/GLTexture.js";
import GLTFLoader from "dlib/gl/GLTFLoader.js";
import GLTFMesh from "dlib/gl/GLTFMesh.js";
import Matrix4 from "dlib/math/Matrix4.js";

export default class Background {
  constructor({
    gl,
    webcam
  }) {

    this.gl = gl;
    this.webcam = webcam;

    this.transform = new Matrix4();

    // this.envMap = new GLTexture({
    //   gl: this.gl,
    //   data: 
    // });

    GLTFLoader.load("src/webgl/background/background.gltf").then((data) => {
      this._mesh = new GLTFMesh({
        gl: this.gl,
        data: data.meshes[0]
      })
    });

    this.program = new GLProgram({
      gl: this.gl,
      uniforms: [
        ["data", 0]
      ],
      vertexShader: `#version 300 es
        uniform mat4 transform;
        uniform mat4 projectionView;

        in vec3 position;
        in vec3 normal;
        in vec2 uv;

        out vec2 vPosition;
        out vec3 vNormal;
        out vec2 vUv;

        void main() {
          gl_Position = projectionView * transform * vec4(position, 1.);
          vNormal = normalize(mat3(transform) * normal);
          vPosition = position.xy;
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
        in vec3 vNormal;

        out vec4 fragColor;

        ${LightShader.Light()}
        ${RayShader.Ray()}
        ${PBRShader.PhysicallyBasedMaterial()}
        ${NoiseShader.random()}
        ${PBRShader.ggx()}
        ${PBRShader.computeGGXLighting()}
        ${PBRShader.computePBRLighting({
          pbrReflectionFromRay: `
            vec3 webcamTexel = texture(webcamTexture, ray.direction.xy * 2.).rgb;
            float grey = (webcamTexel.r + webcamTexel.g + webcamTexel.b) / 3.;

            vec3 rainbow = mix(colors[0], colors[1], smoothstep(0., .33, grey));
            rainbow = mix(rainbow, colors[2], smoothstep(.33, .66, grey));

            vec3 color = .95 + vec3(grey) * .05;

            color = mix(color, rainbow, motion);

            // return .8 + vec3(step(.5, grey)) * .2;
            return color;
          `
        })}

        ${DepthShader.bumpFromDepth({
          getDepth: `
            // uv.y = 1. - uv.y;
            vec4 texel = texture(depthTexture, uv * 3.);
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

          float roughness = pow(vNormal.y, 10.);

          vec4 bump = bumpFromDepth(webcamTexture, vUv, resolution * .01, .1 + motion * .2);
          bump = mix(bump, vec4(vNormal, 0.), roughness);

          vec3 normal = normalize(vNormal + bump.xyz);

          float black = smoothstep(.01, .015, abs(fract((vUv.x + bump.x * bump.w * .1) * 58.) * 2. - 1.));
          black *= smoothstep(.02, .03, abs(fract((vUv.y + bump.y * bump.w * .1) * 58.) * 2. - 1.));

          vec3 diffuse = vec3(1.);
          // diffuse *= black;

          vec3 color = computePBRLighting(
            Ray(vec3(0., 0., 1.), normalize(vec3(vPosition, -1.))), 
            Light(vec3(1.), vec3(0.), vec3(-1.), 1.),
            vec3(vPosition, 0.),
            bump.xyz,
            PhysicallyBasedMaterial(diffuse, 0., roughness + (1. - diffuse.r), diffuse.r)
          );

          // vec3 color = colors[0];
          // color = vec3(0.);
          // color = vec3(step(.4, bump.w));

          float light1 = max(0., dot(normalize(vec3(1., 0., 1.)), bump.xyz));
          // color = mix(color, colors[1], light1);
          // color += pow(light1, .5) * .5;
          
          float light2 = max(0., dot(normalize(vec3(-1., 1., 1.)), bump.xyz));
          // color = mix(color, colors[2], light2);
          // color += light2 * .1;

          fragColor = vec4(color, 1.);
          // fragColor = vec4(1., 0., 0., 1.);
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

  draw({camera}) {
    if(!this._mesh) {
      return;
    }

    this.program.use();
    this.webcam.frameTexture.bind();
    this.program.attributes.set(this._mesh.attributes);
    this.program.uniforms.set("projectionView", camera.projectionView);
    this.program.uniforms.set("transform", this.transform);
    this.program.uniforms.set("resolution", [this.gl.canvas.width, this.gl.canvas.height]);
    this.program.uniforms.set("motion", this.webcam.motionRatio);
    
    this._mesh.indices.buffer.bind();
    this._mesh.draw();
  }
}