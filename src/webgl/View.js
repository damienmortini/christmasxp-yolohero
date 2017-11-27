import Matrix4 from "dlib/math/Matrix4.js";
import GLProgram from "dlib/gl/GLProgram.js";
import GLMesh from "dlib/gl/GLMesh.js";
import GLText from "dlib/gl/GLText.js";
import Camera from "dlib/3d/Camera.js";
import TrackballController from "dlib/3d/controllers/TrackballController.js";
import Background from "./Background.js";
import Loader from "dlib/utils/Loader.js";

Loader.load("src/Shrikhand-Regular.ttf");

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
      distance: 10
    });

    this.background = new Background({
      gl: this.gl,
      webcam: this.webcam
    });

    this.text = new GLText({
      gl: this.gl,
      scale: .5,
      textAlign: "center",
      textContent: "Move",
      fillStyle: "white",
      font: "100px Shrikhand-Regular",
      paddingX: 4
    });
  }

  resize(width, height) {
    this.camera.aspectRatio = width / height;
    this.update();
  }
 
  update() {
    this.gl.clearColor(0, 0, 0, 1);
    this.gl.enable(this.gl.CULL_FACE);

    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

    this.cameraController.update();
    
    this.background.draw();

    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    this.text.draw({
      camera: this.camera
    });
    this.gl.disable(this.gl.BLEND);
  }
}
