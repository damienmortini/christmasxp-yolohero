import Matrix4 from "dlib/math/Matrix4.js";
import GLProgram from "dlib/gl/GLProgram.js";
import GLMesh from "dlib/gl/GLMesh.js";
import Camera from "dlib/3d/Camera.js";
import TrackballController from "dlib/3d/controllers/TrackballController.js";

export default class View {
  constructor({gl} = {}) {
    this.gl = gl;

    this.camera = new Camera();

    this.cameraController = new TrackballController({
      matrix: this.camera.transform,
      distance: 5
    });

    this.program = new GLProgram({
      gl: this.gl,
      uniforms: [
        ["transform", new Matrix4()]
      ],
      vertexShaderChunks: [
        ["start", `
          uniform mat4 projectionView;
          uniform mat4 transform;

          in vec3 normal;
          in vec3 position;

          out vec3 vNormal;
        `],
        ["end", `
          gl_Position = projectionView * transform * vec4(position, 1.);
          vNormal = normal;
        `]
      ],
      fragmentShaderChunks: [
        ["start", `
          precision highp float;
          in vec3 vNormal;
        `],
        ["end", `
          fragColor = vec4(vNormal * .5 + .5, 1.);
        `]
      ]
    });

    this.mesh = new GLMesh({
      gl: this.gl,
      attributes: [
        ["position", {
          data: new Float32Array([-0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5]),
          size: 3
        }],
        ["normal", {
          data: new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0]),
          size: 3
        }]
      ],
      indiceData: new Uint8Array([0, 2, 3, 0, 3, 1, 4, 6, 7, 4, 7, 5, 8, 10, 11, 8, 11, 9, 12, 14, 15, 12, 15, 13, 16, 18, 19, 16, 19, 17, 20, 22, 23, 20, 23, 21])
    });
  }

  resize(width, height) {
    this.camera.aspectRatio = width / height;
    this.update();
  }
 
  update() {
    this.gl.clearColor(0, 0, 0, 1);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.enable(this.gl.DEPTH_TEST);

    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

    this.cameraController.update();
    
    this.mesh.bind();

    this.program.use();
    this.program.uniforms.set("projectionView", this.camera.projectionView);
    this.program.attributes.set(this.mesh.attributes);

    this.mesh.draw();
  }
}