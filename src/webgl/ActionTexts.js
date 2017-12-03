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
import TweenLite from "gsap/TweenLite";

let DEFAULT_TEXT;

const MATRIX4 = new Matrix4();
const SCALE = .6;

const TEXTS = new Map([
  ["mouse", "Move your mouse"],
  ["keyboard", "Press "],
  ["motion", "Move your body"],
  ["sound", "Shout!"],
]);

const TYPES_DATA = new Map([
  ["mouse", {
    rotation: 0,
    position: -3,
    uvOffset: [0, 0],
    color: hexToRGB("#0018a1")
  }],
  ["keyboard", {
    rotation: 0,
    position: -1,
    uvOffset: [.5, 0],
    color: hexToRGB("#7942b1")
  }],
  ["motion", {
    rotation: 0,
    position: 1,
    uvOffset: [0, .5],
    color: hexToRGB("#f8c401")
  }],
  ["sound", {
    rotation: 0,
    position: 3,
    uvOffset: [.5, .5],
    color: hexToRGB("#bd0004")
  }]
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
    this.transform = new Matrix4();

    Promise.all([
      GLTFLoader.load("src/webgl/button/buttons.gltf"), 
      Loader.load("src/webgl/button/pattern.png")
    ]).then(([data, image]) => {
      this._patternTexture = new GLTexture({
        gl: this.gl,
        data: image,
        minFilter: this.gl.LINEAR
      });

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
          uniform vec2 uvOffset;
  
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
            vNormal = mat3(transform) * normal;
            vNormal = normalize(vNormal);

            vUv2 = fract(uv * .5 + uvOffset) * 20.;
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
            
            vec3 color = vec3(0.);

            vec4 text = texture(textTexture, vUv);
            vec4 pattern = texture(patternTexture, vUv2 );

            color += computePBRLighting(
              ray, 
              Light(vec3(1.), vec3(0.), vec3(-1.), 1.),
              vPosition,
              vNormal,
              // PhysicallyBasedMaterial(diffuse, pattern.r, (1. - pattern.r), 1.)
              PhysicallyBasedMaterial(diffuse, 0., 1., 1.)
            );

            // color = mix(vec3(1.), diffuse, pattern.r);

            fragColor.rgb = color;
            // fragColor.rgb += text.rgb * text.a;
            fragColor.a = opacity;
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

    for (let action of this.player.actions) {
      if(!action.type) {
        continue;
      }
      let text = TEXTS.get(action.type);
      if(!text) {
        text = TEXTS.get("keyboard") + action.type.toUpperCase();
      }
      const typeData = TYPES_DATA.get(action.type);
      this._texts.set(action, {
        type: action.type,
        textContent: text,
        position: typeData.position,
        transform: new Matrix4(),
        opacity: 0,
        rotation: typeData.rotation,
        color: typeData.color
      });
    }

    this._texturesData = new Map();
    this._socles = new Map();

    for (let actionType of TYPES_DATA.keys()) {
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

      this._socles.set(actionType, {
        push: 0
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
    this.actionsDetector.onAction.add(this.onAction.bind(this));
  }

  onAction({type}) {
    TweenLite.to(this._socles.get(type), .1, {
      push: 1
    });
  }

  onActionComplete({action}) {
    const text = this._texts.get(action);
    if(!text) {
      return;
    }
    // text.color = hexToRGB(action.success ? "#00ff00" : "#ff0000");
  }

  resize({width, height}) {
    this._width = width;
  }

  draw({camera} = {}) {
    if(!this.program) {
      return;
    }

    for (let action of this.player.actions) {
      const text = this._texts.get(action);
      if(!text) {
        continue;
      }
      const progress = (this.player.currentTime - action.time) * 5;
      text.opacity = Math.max(0, 1. - Math.abs(progress) * (progress < 0 ? .05 : .2));
      if(!text.opacity) {
        continue;
      }
      text.transform.identity();
      text.transform.rotateY(text.rotation - progress);
      text.transform.x = text.position;
      text.transform.z = progress;
      text.transform.scale(SCALE);
      // text.transform.scale(1 + Math.max(0, 1. - Math.abs(progress) * 2));
      text.transform.multiply(this.transform, text.transform);
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
      const typeData = TYPES_DATA.get(type);
      textureData.texture.bind();
      this.program.uniforms.set("uvOffset", typeData.uvOffset);
      this.program.uniforms.set("scaleOffset", textureData.scaleOffset);
      this.program.uniforms.set("diffuse", typeData.color);
      
      const mesh = this._meshes.get(type);
      mesh.indices.buffer.bind();
      this.program.attributes.set(mesh.attributes);
      
      for (let text of textsArray) {
        if(!text.opacity) {
          continue;
        }
        this.program.uniforms.set("opacity", text.opacity);
        this.program.uniforms.set("transform", text.transform);
        mesh.draw();
      }
    }

    for (let nameMesh of ["socleoutside", "socleinside"]) {
      const mesh = this._meshes.get(nameMesh);
      mesh.indices.buffer.bind();
      this.program.attributes.set(mesh.attributes);
      
      for (let [type, typeData] of TYPES_DATA) {
        this.program.uniforms.set("opacity", 1);
        MATRIX4.identity();
        MATRIX4.x = typeData.position;
        if(nameMesh === "socleinside") {
          const socle = this._socles.get(type);
          socle.push += -socle.push * .2;
          MATRIX4.y = (socle.push - 1) * .3;
        }
        MATRIX4.scale(SCALE);
        MATRIX4.multiply(this.transform, MATRIX4);
        this.program.uniforms.set("diffuse", typeData.color);
        this.program.uniforms.set("transform", MATRIX4);
        mesh.draw();
      }
    }

    this.gl.disable(this.gl.BLEND);
  }
}