import Matrix4 from "dlib/math/Matrix4.js";
import GLProgram from "dlib/gl/GLProgram.js";
import GLMesh from "dlib/gl/GLMesh.js";
import Camera from "dlib/3d/Camera.js";
import TrackballController from "dlib/3d/controllers/TrackballController.js";
import Background from "./Background.js";

export default class View {
  constructor({
    gl,
    webcam
  } = {}) {
    this.gl = gl;
    this.webcam = webcam;

    this.camera = new Camera();

    this.cameraController = new TrackballController({
      matrix: this.camera.transform,
      distance: 5
    });

    this.background = new Background({
      gl: this.gl,
      webcam: this.webcam
    });
  }

  resize(width, height) {
    this.camera.aspectRatio = width / height;
    this.update();
  }
 
  update() {
    this.gl.clearColor(0, 0, 0, 1);
    // this.gl.disable(this.gl.CULL_FACE);
    // this.gl.enable(this.gl.DEPTH_TEST);

    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

    // this.cameraController.update();
    
    this.background.draw();
  }
}
