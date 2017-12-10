import GLMesh from "dlib/gl/GLMesh.js";
import GLProgram from "dlib/gl/GLProgram.js";
import DepthShader from "dlib/shaders/DepthShader.js";
import PBRShader from "dlib/shaders/PBRShader.js";
import NoiseShader from "dlib/shaders/NoiseShader.js";
import RayShader from "dlib/shaders/RayShader.js";
import LightShader from "dlib/shaders/LightShader.js";
import GLTexture from "dlib/gl/GLTexture.js";
import GLTFLoader from "dlib/gl/GLTFLoader.js";
import GLTFMesh from "dlib/gl/GLTFMesh.js";
import Matrix4 from "dlib/math/Matrix4.js";
import { COLORS } from "./colors.js";
import { hexToRGB } from "dlib/math/Color.js";
import "gsap/TweenLite";
import CameraShader from "dlib/shaders/CameraShader.js";

const INSTANCE_COUNT = 500;

const TYPES_DATA = new Map([
  ["mouse", {
    position: -3,
    color: hexToRGB(COLORS[4])
  }],
  ["keyboard", {
    position: -1,
    color: hexToRGB(COLORS[3])
  }],
  ["motion", {
    position: 1,
    color: hexToRGB(COLORS[2])
  }],
  ["sound", {
    position: 3,
    color: hexToRGB(COLORS[1])
  }]
]);

export default class ActionCubes {
  constructor({
    gl,
    webcam,
    noiseTexture,
    actionsDetector
  }) {
    this.gl = gl;
    this.webcam = webcam;
    this.noiseTexture = noiseTexture;
    this.actionsDetector = actionsDetector;
    
    this.transform = new Matrix4();

    this._time = 0;

    const instanceIDs = new Float32Array(INSTANCE_COUNT);
    for (let i = 0; i < INSTANCE_COUNT; i++) {
      instanceIDs[i] = i;
    }

    GLTFLoader.load("src/webgl/objects/objects.gltf").then((data) => {
      for (const mesh of data.meshes) {
        if(mesh.name === "cube") {
          this._mesh = new GLTFMesh({
            gl: this.gl,
            data: mesh,
            attributes: [
              ["instanceID", {
                data: instanceIDs,
                size: 1,
                divisor: 1
              }]
            ]
          });
        }
      }
    });

    this.program = new GLProgram({
      gl: this.gl,
      uniforms: [
        ["instanceCount", INSTANCE_COUNT]
      ],
      vertexShader: `#version 300 es
        ${CameraShader.Camera()}

        uniform mat4 transform;
        uniform Camera camera;
        uniform float instanceCount;
        uniform float time;
        uniform float progress;
        uniform float seed;
        uniform sampler2D noiseTexture;

        in float instanceID;
        in vec3 position;
        in vec3 normal;
        in vec2 uv;

        out vec3 vPosition;
        out vec4 vGLPosition;
        out vec3 vNormal;

        ${NoiseShader.random()}
        ${NoiseShader.common()}
        ${NoiseShader.simplexNoise()}
        ${NoiseShader.curlNoise()}

        vec3 rotateByQuaternion(vec3 position, vec4 quaternion) { 
          return position + 2.0 * cross(quaternion.xyz, cross(quaternion.xyz, position) + quaternion.w * position);
        }

        void main() {
          vec3 position = position; 
          float randomSeed = random(instanceID + seed);
          position += random(randomSeed + position.x + position.y + position.z) * 2. - 1.;          
          position *= .1;
          vec4 randomTexelFromId = texture(noiseTexture, vec2(randomSeed));
          vec3 curl = texture(noiseTexture, randomTexelFromId.xy + seed * 3. + progress * .1).rgb * 2. - 1.;
          vec3 positionId = vec3(instanceID);
          vec4 quaternion = vec4(normalize(curl), 0.);
          position = rotateByQuaternion(position, quaternion);
          
          // float progress = smoothstep(0., 1., instanceID * .002 + time * .1);
          float progress = smoothstep(0., 1., progress);
          
          position *= max(0., 1. - progress);
          position *= smoothstep(0., .1, progress);

          position.xz += curl.xz;
          position.y += curl.y * progress * 5.;

          vec3 normal = normal;
          normal = rotateByQuaternion(normal, quaternion);
          
          gl_Position = camera.projectionView * transform * vec4(position, 1.);
          vGLPosition = gl_Position;
          vPosition = position;
          vNormal = normal;
        }
      `,
      fragmentShader: `#version 300 es
        precision highp float;

        ${CameraShader.Camera()}

        uniform sampler2D noiseTexture;
        uniform sampler2D envMapTexture;
        uniform vec3 diffuseColor;
        uniform float progress;
        uniform Camera camera;

        in vec3 vPosition;
        in vec3 vNormal;
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
            vec3 color = texture(envMapTexture, ray.direction.xz).rgb;
            color += max(0., pow(ray.direction.y, .1));
            return color;
          `
        })}

        void main() {
          Ray ray = rayFromCamera(vGLPosition.xy / vGLPosition.z, camera);
          vec4 envMap = texture(envMapTexture, normalize(vPosition + vNormal).xy);

          vec3 color = computePBRLighting(
            ray, 
            Light(vec3(1.), vec3(0.), vec3(-1.), .9),
            vPosition,
            vNormal,
            PhysicallyBasedMaterial(diffuseColor + progress, 0., 0., 1.)
            // PhysicallyBasedMaterial(diffuse * (1. - textTexel.a), pattern * .2, (1. - pattern), 1. - textTexel.a * .8)
            // PhysicallyBasedMaterial(diffuse * (1. - textTexel.a), 0., 1., 0.)
          );

          float opacity = 1.;
          fragColor = vec4(color, opacity);
        }
      `
    });

    this.actionsDetector.onActionComplete.add(this.onActionComplete.bind(this));

    this._objects = new Map();
    for (const [type, typeData] of TYPES_DATA) {
      let array = [];
      this._objects.set(type, array);
      for (let i = 0; i < 3; i++) {
        array.push({
          progress: 0,
          seed: Math.random()
        });
      }
    }

    setTimeout(() => {
      for (const type of TYPES_DATA.keys()) {
        this.onActionComplete({
          action: {
            type,
            success: true
          }
        });
      }
    }, 1000);
  }

  onActionComplete({action}) {
    if(action.success) {
      for (const object of this._objects.get(action.type)) {
        if(object.progress !== 0) {
          continue;
        }
        object.seed = Math.random();
        TweenLite.to(object, 1, {
          progress: 1,
          // ease: Power2.easeIn,
          onComplete: () => {
            object.progress = 0;
          }
        });
        break;
      }
    }
  }

  draw({camera}) {
    if(!this._mesh) {
      return;
    }

    this._time += .1;
    
    this.program.attributes.set(this._mesh.attributes);
    
    this.program.use();
    this.noiseTexture.bind();
    this.program.uniforms.set("noiseTexture", 0);
    this.webcam.envMap.bind({
      unit: 1
    });
    this.program.uniforms.set("envMapTexture", 1);
    this.program.uniforms.set("time", this._time);
    this.program.uniforms.set("camera", camera);

    this._mesh.indices.buffer.bind();

    for (const [type, typeData] of TYPES_DATA) {
      const objects = this._objects.get(type);
      this.transform.x = typeData.position;
      this.program.uniforms.set("transform", this.transform);
      this.program.uniforms.set("diffuseColor", typeData.color);
      for (const object of objects) {
        if(!object.progress) {
          // continue;
        }
        this.program.uniforms.set("seed", object.seed);
        this.program.uniforms.set("progress", object.progress);
        this._mesh.draw({
          instanceCount: INSTANCE_COUNT
        });
      }
    }
    
  }
}