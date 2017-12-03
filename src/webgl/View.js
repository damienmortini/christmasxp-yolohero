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
import UI from "./ui/UI.js";
import ScoreText from "./ScoreText.js";

Loader.load("src/Shrikhand-Regular.ttf");

export default class View {
  constructor({
    gl,
    webcam,
    actionsDetector,
    player
  } = {}) {
    this.gl = gl;
    this.webcam = webcam;
    this.player = player;

    this.gl.enable(this.gl.CULL_FACE);

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
      player,
      actionsDetector
    });
    
    this.mainText = new MainText({
      gl: this.gl,
      player
    });
    this.mainText.transform.y = 3;

    this.ui = new UI({
      gl: this.gl,
      player
    });

    this.scoreText = new ScoreText({
      gl: this.gl
    });
    this.scoreText.transform.setPosition([5, -5, 0]);
  }

  resize({width, height}) {
    this.camera.aspectRatio = width / height;
    this.actionTexts.resize({width, height});
    this.ui.resize({width, height});
    this.update();
  }

  set score(value) {
    this.scoreText.textContent = value;
  }
 
  update() {
    this.gl.clearColor(0, 0, 0, 1);

    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

    this.cameraController.update();
    
    this.gl.disable(this.gl.DEPTH_TEST);
    this.background.draw();
    this.gl.enable(this.gl.DEPTH_TEST);

    this.actionTexts.draw({
      camera: this.camera
    });

    // this.ui.draw({
    //   camera: this.camera
    // });

    this.mainText.draw({
      camera: this.camera
    });

    this.scoreText.draw({
      camera: this.camera
    });
  }
}
