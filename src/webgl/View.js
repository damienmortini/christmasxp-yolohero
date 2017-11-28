import Matrix4 from "dlib/math/Matrix4.js";
import GLProgram from "dlib/gl/GLProgram.js";
import GLMesh from "dlib/gl/GLMesh.js";
import GLText from "dlib/gl/GLText.js";
import Camera from "dlib/3d/Camera.js";
import TrackballController from "dlib/3d/controllers/TrackballController.js";
import Background from "./Background.js";
import Loader from "dlib/utils/Loader.js";
import ActionTexts from "./ActionTexts.js";
import MainText from "./MainText.js";

Loader.load("src/Shrikhand-Regular.ttf");

export default class View {
  constructor({
    gl,
    webcam,
    player
  } = {}) {
    this.gl = gl;
    this.webcam = webcam;
    this.player = player;

    this.camera = new Camera();

    this.cameraController = new TrackballController({
      matrix: this.camera.transform,
      distance: 10
    });

    this.background = new Background({
      gl: this.gl,
      webcam: this.webcam
    });

    this.actionTexts = new ActionTexts({
      gl: this.gl,
      player
    });
    
    this.mainText = new MainText({
      gl: this.gl,
      player
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

    this.mainText.draw({
      camera: this.camera
    });

    this.actionTexts.draw({
      camera: this.camera
    });
  }
}
