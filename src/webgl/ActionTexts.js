import Loader from "dlib/utils/Loader.js";
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
  ["mouse", "Move your mouse"],
  ["keyboard", "Press "],
  ["motion", "Move your body"],
  // ["click", "Click!"],
  ["sound", "Shout!"],
]);

const ROTATIONS = new Map([
  ["mouse", 1],
  ["keyboard", 0],
  ["motion", 0],
  ["sound", 0],
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

    Promise.all([
      GLTFLoader.load("src/webgl/button/buttons.gltf"), 
      Loader.load("src/webgl/button/pattern.png")
    ]).then(([data, image]) => {
      this._patternTexture = new GLTexture({
        gl: this.gl,
        data: image,
        minFilter: this.gl.LINEAR
      });

      console.log(data.meshes);

      this._meshes = new Map();

      for (let mesh of data.meshes) {
        const glMesh = new GLTFMesh({
            gl: this.gl, 
            data: mesh
        });
        this._meshes.set(mesh.name, glMesh);
      }

      this.program = new GLProgram({
        gl: this.gl,
        uniforms: [
          ["patternTexture", 1]
        ],
        vertexShader: `#version 300 es
          ${CameraShader.Camera()}

          uniform mat4 transform;
          uniform Camera camera;
          uniform vec4 scaleOffset;
  
          in vec3 position;
          in vec3 normal;
          in vec2 uv;
  
          out vec2 vUv;
          out vec2 vUv2;
          out vec3 vPosition;
          out vec3 vNormal;
          out vec4 vGLPosition;
  
          void main() {
            vec3 position = position;
            gl_Position = camera.projectionView * transform * vec4(position, 1.);
            vGLPosition = gl_Position;
            vPosition = position;

            // compute text uv
            vUv = uv;
            vUv = vUv * 2. - 1.;
            vUv.xy *= 1. / scaleOffset.xy;
            vUv.y *= .25;
            vUv *= 4.;
            vUv = vUv * .5 + .5;
            vNormal = normal;

            vUv2 = mix(position.xy, position.xz,abs(normal.y));
            vUv2 *= 2.;
            vUv2 = uv * 10.;
          }
        `,
        fragmentShader: `#version 300 es
          precision highp float;
  
          ${CameraShader.Camera()}

          uniform sampler2D textTexture;
          uniform sampler2D patternTexture;
          uniform float opacity;
          uniform vec3 diffuse;
          uniform Camera camera;
  
          in vec3 vNormal;
          in vec2 vUv;
          in vec2 vUv2;
          in vec4 vGLPosition;
          in vec3 vPosition;
  
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
              vec3 color = texture(patternTexture, ray.direction.xy * 2.).rgb;
              return color;
            `
          })}
  
          void main() {

            Ray ray = rayFromCamera(vGLPosition.xy / vGLPosition.z, camera);
            
            vec3 color = vec3(1.);

            vec4 text = texture(textTexture, vUv);
            vec4 pattern = texture(patternTexture, vUv2);

            color = computePBRLighting(
              ray, 
              Light(vec3(1.), vec3(0.), vec3(-1.), 1.),
              vPosition,
              vNormal,
              PhysicallyBasedMaterial(diffuse, pattern.r, opacity * (1. - pattern.r), 1.)
              // PhysicallyBasedMaterial(diffuse, 0., 1., 1.)
            );

            fragColor.rgb = color;
            // fragColor.rgb += text.rgb * text.a;
            // fragColor.a = opacity;
            fragColor.a = 1.;
          }
        `
      });
    });

    if(!DEFAULT_TEXT) {
      DEFAULT_TEXT = new GLText({
        gl: this.gl,
        textScale: 1,
        textAlign: "center",
        textContent: "",
        fillStyle: "white",
        font: "50px Shrikhand-Regular",
        offsetYPercentage: .2,
        paddingPercentageWidth: .2,
        paddingPercentageHeight: .2
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

    
    const ACTION_TYPES = [...TEXTS.keys()];

    for (let action of this.player.actions) {
      if(!action.type) {
        continue;
      }
      let text = TEXTS.get(action.type);
      if(!text) {
        text = TEXTS.get("keyboard") + action.type.toUpperCase();
      }
      this._texts.set(action, {
        type: action.type,
        textContent: text,
        position: ACTION_TYPES.indexOf(action.type) - (ACTION_TYPES.length - 1) * .5,
        transform: new Matrix4(),
        opacity: 0,
        rotation: ROTATIONS.get(action.type),
        color: hexToRGB("#7942b1")
      });
    }

    this._texturesData = new Map();

    for (let actionType of ACTION_TYPES) {
      const texture = new GLTexture({
        gl: this.gl,
        minFilter: this.gl.LINEAR,
        wrapS: this.gl.CLAMP_TO_EDGE,
        wrapT: this.gl.CLAMP_TO_EDGE,
      });
      DEFAULT_TEXT.textContent = TEXTS.get(actionType);
      texture.data = DEFAULT_TEXT._canvas;
      this._texturesData.set(actionType, {
        texture,
        scaleOffset: new Vector4(DEFAULT_TEXT._scaleOffset)
      });
    }

    this._typeSortedTexts = new Map();
    for (let text of this._texts.values()) {
      let array = this._typeSortedTexts.get(text.type);
      if(!array) {
        array = [];
        this._typeSortedTexts.set(text.type, array);
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
    if(!this.program) {
      return;
    }

    const angle = .3;
    const y = -2;

    for (let action of this.player.actions) {
      const text = this._texts.get(action);
      if(!text) {
        continue;
      }
      const progress = (this.player.currentTime - action.time) * 5;
      text.opacity = Math.max(0, 1. - Math.abs(progress) * .1);
      if(!text.opacity) {
        continue;
      }
      text.transform.identity();
      text.transform.rotateX(angle);
      text.transform.rotateY(text.rotation);
      // text.transform.x = text.position;
      text.transform.y = -progress * Math.sin(angle);
      text.transform.y += y;
      text.transform.z = progress * Math.cos(angle);
      text.transform.z += -y;
      // text.transform.z = progress;
      text.transform.scale(.5);
      text.transform.scale(1 + Math.max(0, 1. - Math.abs(progress) * 2));
    }

    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    this.program.use();
    this.program.uniforms.set("camera", camera);
    this._patternTexture.bind({
      unit: 1
    });
    
    for (let [type, textsArray] of this._typeSortedTexts) {
      const textureData = this._texturesData.get(type);
      textureData.texture.bind();
      this.program.uniforms.set("scaleOffset", textureData.scaleOffset);
      
      const mesh = this._meshes.get(type);
      mesh.indices.buffer.bind();
      this.program.attributes.set(mesh.attributes);
      
      for (let text of textsArray) {
        if(!text.opacity) {
          continue;
        }
        this.program.uniforms.set("diffuse", text.color);
        this.program.uniforms.set("opacity", text.opacity);
        this.program.uniforms.set("transform", text.transform);
        mesh.draw();
      }
    }
    this.gl.disable(this.gl.BLEND);
  }
}