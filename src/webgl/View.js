import Matrix4 from "dlib/math/Matrix4.js";
import Pointer from "dlib/input/Pointer.js";
import GLProgram from "dlib/gl/GLProgram.js";
import GLMesh from "dlib/gl/GLMesh.js";
import GLText from "dlib/gl/GLText.js";
import Camera from "dlib/3d/Camera.js";
import TrackballController from "dlib/3d/controllers/TrackballController.js";
import Background from "./Background.js";
import Loader from "dlib/utils/Loader.js";
import ActionTexts from "./ActionTexts.js";
import MainText from "./MainText.js";
import Ground from "./Ground.js";
import UI from "./ui/UI.js";
import ScoreText from "./ScoreText.js";
import GLTexture from "dlib/gl/GLTexture.js";
import Vector2 from "dlib/math/Vector2.js";
import Quaternion from "dlib/math/Quaternion.js";
import Vector3 from "dlib/math/Vector3.js";

Loader.load("src/Shrikhand-Regular.ttf");

const QUATERNION = new Quaternion();
const VECTOR3 = new Vector3();

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

    this._pointer = Pointer.get();
    this._cameraRotation = new Vector2();
    
    this._cameraTiltMaxAngle = .2;
    this._cameraTiltEasing = .02;

    this.gl.enable(this.gl.CULL_FACE);

    this.camera = new Camera();

    const noiseTexture = new GLTexture({
      gl: this.gl,
      minFilter: this.gl.LINEAR,
    });
    Loader.load("src/webgl/noise.png").then((image) => {
      noiseTexture.data = image;
      noiseTexture.generateMipmap();
    });

    this.cameraController = new TrackballController({
      matrix: this.camera.transform,
      distance: 10,
      // enabled: false
    });

    this.background = new Background({
      gl: this.gl,
      webcam: this.webcam
    });
    this.background.transform.scale([window.innerWidth * .079, window.innerHeight * .037, 30]);
    this.background.transform.rotateX(.1);
    this.background.transform.y = -3.1;
    this.background.transform.z = 3.1;

    this.actionTexts = new ActionTexts({
      gl: this.gl,
      player,
      actionsDetector
    });
    this.actionTexts.transform.rotateX(.1);
    this.actionTexts.transform.y = -2.8;
    this.actionTexts.transform.z = 2.8;
    
    this.mainText = new MainText({
      gl: this.gl,
      player
    });
    this.mainText.transform.y = 3;

    this.ui = new UI({
      gl: this.gl,
      player
    });

    this.ground = new Ground({
      gl: this.gl,
      webcam: this.webcam,
      noiseTexture,
      player
    });
    this.ground.transform.rotateX(.1);
    this.ground.transform.y = -3;
    this.ground.transform.z = 3;

    this.scoreText = new ScoreText({
      gl: this.gl
    });
    this.scoreText.transform.setPosition([5, 0, 0]);
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

    if(this.cameraController.enabled) {
      this.cameraController.update();
    } else {
      this._cameraRotation.x += (this._pointer.normalizedCenteredFlippedY.x * this._cameraTiltMaxAngle - this._cameraRotation.x) * this._cameraTiltEasing;
      this._cameraRotation.y += (-this._pointer.normalizedCenteredFlippedY.y * this._cameraTiltMaxAngle - this._cameraRotation.y) * this._cameraTiltEasing;
      QUATERNION.identity();
      QUATERNION.rotateY(this._cameraRotation.x);
      QUATERNION.rotateX(this._cameraRotation.y);
      this.camera.transform.fromQuaternion(QUATERNION);
      VECTOR3.set(0, 0, 1);
      VECTOR3.applyMatrix4(this.camera.transform);
      this.camera.transform.setPosition(VECTOR3.scale(10));
    }
    
    this.gl.enable(this.gl.DEPTH_TEST);

    this.background.draw({
      camera: this.camera
    });

    this.actionTexts.draw({
      camera: this.camera
    });

    // this.ui.draw({
    //   camera: this.camera
    // });

    this.mainText.draw({
      camera: this.camera
    });

    this.ground.draw({
      camera: this.camera
    });

    this.scoreText.draw({
      camera: this.camera
    });
  }
}
