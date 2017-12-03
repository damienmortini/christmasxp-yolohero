import GLText from "dlib/gl/GLText.js";
import GLTexture from "dlib/gl/GLTexture.js";
import Matrix4 from "dlib/math/Matrix4.js";
import Vector4 from "dlib/math/Vector4.js";
import GLTFLoader from "dlib/gl/GLTFLoader.js";
import GLTFMesh from "dlib/gl/GLTFMesh.js";
import { hexToRGB } from "dlib/math/Color.js";
import GLProgram from "dlib/gl/GLProgram.js";
import LightShader from "dlib/shaders/LightShader.js";
import RayShader from "dlib/shaders/RayShader.js";
import PBRShader from "dlib/shaders/PBRShader.js";
import CameraShader from "dlib/shaders/CameraShader.js";
import NoiseShader from "dlib/shaders/NoiseShader.js";

let DEFAULT_TEXT;

const TEXTS = new Map([
  ["motion", "Move your body"],
  ["click", "Click!"],
  ["mouse", "Move your mouse"],
  ["sound", "Shout!"],
  ["keyboard", "Press "]
]);

export default class ActionTexts {
  constructor({
    gl,
    player,
    actionsDetector
  }) {
    this.gl = gl;
    this.player = player;
    this.actionsDetector = actionsDetector;

    GLTFLoader.load("src/webgl/button/button.gltf").then((data) => {
      this.mesh = new GLTFMesh({
          gl: this.gl, 
          data: data.meshes[0]
      });

      this.program = new GLProgram({
        gl: this.gl,
        vertexShader: `#version 300 es
          ${CameraShader.Camera()}

          uniform mat4 transform;
          uniform Camera camera;
          uniform vec4 scaleOffset;
  
          in vec3 position;
          in vec3 normal;
          in vec2 uv;
  
          out vec2 vUv;
          out vec3 vNormal;
          out vec4 vGLPosition;
  
          void main() {
            vec3 position = position;
            // position *= scaleOffset.xy;
            // position += scaleOffset.zw;
            gl_Position = camera.projectionView * transform * vec4(position, 1.);
            vGLPosition = gl_Position;

            // compute text uv
            vUv = uv;
            vUv = vUv * 2. - 1.;
            vUv.xy *= 1. / scaleOffset.xy;
            vUv.y *= .25;
            vUv *= 4.;
            vUv = vUv * .5 + .5;
            vNormal = normal;
          }
        `,
        fragmentShader: `#version 300 es
          precision highp float;
  
          ${CameraShader.Camera()}

          uniform sampler2D textTexture;
          uniform float opacity;
          uniform vec3 diffuse;
          uniform Camera camera;
  
          in vec3 vNormal;
          in vec2 vUv;
          in vec4 vGLPosition;
  
          out vec4 fragColor;

          ${LightShader.Light()}
          ${RayShader.Ray()}
          ${CameraShader.rayFromCamera()}
          ${PBRShader.PhysicallyBasedMaterial()}
          ${NoiseShader.random()}
          ${PBRShader.ggx()}
          ${PBRShader.computeGGXLighting()}
          ${PBRShader.computePBRLighting({
            pbrReflectionFromRay: `
              // vec3 color = texture(webcamTexture, ray.direction.xy * 2.).rgb;
              // float grey = (color.r + color.g + color.b) / 3.;
              // color = mix(colors[0], colors[1], smoothstep(0., .33, grey));
              // color = mix(color, colors[2], smoothstep(.33, .66, grey));
              // return color;
              return vec3(.5);
            `
          })}
  
          void main() {

            Ray ray = rayFromCamera(vGLPosition.xy / vGLPosition.z, camera);
            
            vec3 color = vec3(1.);

            vec4 text = texture(textTexture, vUv);

            color = computePBRLighting(
              ray, 
              Light(vec3(1.), vec3(0.), vec3(-1.), 1.),
              vGLPosition.xyz,
              vNormal,
              PhysicallyBasedMaterial(diffuse, 0., .1, 2.)
            );

            fragColor.rgb = color;
            fragColor.rgb += text.rgb * text.a;
            fragColor.a = opacity;
          }
        `
      });
    });

    if(!DEFAULT_TEXT) {
      DEFAULT_TEXT = new GLText({
        gl: this.gl,
        textScale: .5,
        textAlign: "center",
        textContent: "Move",
        fillStyle: "white",
        // font: "100px Shrikhand-Regular",
        paddingX: .2,
        paddingY: .2
      });
    }
    //   DEFAULT_TEXT.program.add({
    //     vertexShaderChunks: [
    //       ["start", `
    //         precision highp float;

    //         in vec3 normal;
            
    //         out vec3 vNormal;
    //       `],
    //       ["end", `
    //         vNormal = normal;
    //       `]
    //     ],
    //     fragmentShaderChunks: [
    //       ["start", `
    //         precision highp float;

    //         uniform float opacity;
    //         uniform vec3 color;

    //         in vec3 vNormal;
    //       `],
    //       ["end", `
    //         fragColor.rgb *= color;
    //         fragColor.a *= opacity;
    //         fragColor.rgb *= vNormal;
    //       `]
    //     ]
    //   })
    // }

    this._texts = new Map();

    const textContents = new Set();
    
    for (let action of this.player.actions) {
      if(!action.type) {
        continue;
      }
      let text = TEXTS.get(action.type);
      if(!text) {
        text = TEXTS.get("keyboard") + action.type.toUpperCase();
      }
      this._texts.set(action, {
        textContent: text,
        transform: new Matrix4(),
        opacity: 0,
        color: [1, 1, 1]
      });
      textContents.add(text);
    }

    this._texturesData = new Map();

    for (let actionText of textContents) {
      const texture = new GLTexture({
        gl: this.gl,
        minFilter: this.gl.LINEAR,
        wrapS: this.gl.CLAMP_TO_EDGE,
        wrapT: this.gl.CLAMP_TO_EDGE,
      });
      DEFAULT_TEXT.textContent = actionText;
      texture.data = DEFAULT_TEXT._canvas;
      this._texturesData.set(actionText, {
        texture,
        scaleOffset: new Vector4(DEFAULT_TEXT._scaleOffset)
      });
    }

    this._textContentSortedTexts = new Map();
    for (let text of this._texts.values()) {
      let array = this._textContentSortedTexts.get(text.textContent);
      if(!array) {
        array = [];
        this._textContentSortedTexts.set(text.textContent, array);
      }
      array.push(text);
    }

    this.actionsDetector.onActionComplete.add(this.onActionComplete.bind(this));
  }

  onActionComplete({action}) {
    const text = this._texts.get(action);
    if(!text) {
      return;
    }
    text.color = hexToRGB(action.success ? "#00ff00" : "#ff0000");
  }

  resize({width, height}) {
    this._width = width;
  }

  draw({camera} = {}) {
    if(!this.mesh) {
      return;
    }

    const angle = .4;
    const y = -2;

    for (let action of this.player.actions) {
      const text = this._texts.get(action);
      if(!text) {
        continue;
      }
      text.transform.identity();
      text.transform.rotateX(angle);
      const progress = (this.player.currentTime - action.time) * 5;
      text.transform.y = -progress * Math.sin(angle);
      text.transform.y += y;
      text.transform.z = progress * Math.cos(angle);
      text.transform.z += -y;
      // text.transform.z = progress;
      text.transform.scale([.5, .2, .5]);
      text.transform.scale(1 + Math.max(0, 1. - Math.abs(progress) * 2));
      text.opacity = Math.max(0, 1. - Math.abs(progress) * .05);
    }

    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    this.program.use();
    this.program.attributes.set(this.mesh.attributes);
    this.program.uniforms.set("camera", camera);
    this.mesh.indices.buffer.bind();
    
    for (let [textContent, textsArray] of this._textContentSortedTexts) {
      const textureData = this._texturesData.get(textContent);
      textureData.texture.bind();
      this.program.uniforms.set("scaleOffset", textureData.scaleOffset);

      for (let text of textsArray) {
        if(!text.opacity) {
          continue;
        }
        this.program.uniforms.set("diffuse", text.color);
        this.program.uniforms.set("opacity", text.opacity);
        this.program.uniforms.set("transform", text.transform);
        this.mesh.draw();
      }
    }
    this.gl.disable(this.gl.BLEND);
  }
}