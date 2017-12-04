import "@webcomponents/custom-elements";

import LoopElement from "dlib/customelements/LoopElement.js";
import Loader from "dlib/utils/Loader.js";

import WebCam from "./WebCam.js";
import View from "./View.js";

window.customElements.define("christmasxp-yolohero-webgl", class extends LoopElement {
  connectedCallback() {
    super.connectedCallback();

    this.canvas = document.createElement("canvas");
    this.appendChild(this.canvas);

    this.player = null;
    this.actionsDetector = null;

    this.canvas = this.querySelector("canvas");

    this.gl = this.canvas.getContext(WebGL2RenderingContext ? "webgl2" : "webgl", {
      depth: true,
      alpha: false,
      antialias: true
    });

    this.webcam = new WebCam({gl: this.gl});

    window.addEventListener("resize", this._resizeBinded = this.resize.bind(this));
  }

  load() {
    this.view = new View({
      gl: this.gl,
      webcam: this.webcam,
      player: this.player,
      actionsDetector: this.actionsDetector
    });
    this.resize();
    return Loader.onLoad;
  }

  set score(value) {
    this.view.score = value;
  }

  disconnectedCallback() {
    window.removeEventListener("resize", this._resizeBinded);
  }

  resize() {
    let width = this.canvas.offsetWidth;
    let height = this.canvas.offsetHeight;
    
    this.canvas.width = width * window.devicePixelRatio;
    this.canvas.height = height * window.devicePixelRatio;

    this.view.resize({width, height});
  }

  update() {
    if(!this.view) {
      return;
    }

    this.webcam.update();
    this.view.update();
  }
});
