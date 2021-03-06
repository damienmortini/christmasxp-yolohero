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

    const options = {
      depth: true,
      alpha: false,
      antialias: true
    };

    if(!/\bforcewebgl1\b/.test(window.location.search)) {
      this.gl = this.canvas.getContext("webgl2", options);
    }
    if(!this.gl) {
      this.gl = this.canvas.getContext("webgl", options);
    }

    this.webcam = new WebCam({gl: this.gl});

    window.addEventListener("resize", this._resizeBinded = this.resize.bind(this));
  }

  load() {
    if(this._promise) {
      return this._promise;
    }

    this.view = new View({
      gl: this.gl,
      webcam: this.webcam,
      player: this.player,
      actionsDetector: this.actionsDetector
    });
    this.resize();
    Loader.onLoad.then(() => {
      this.update();
    });

    this._promise = Promise.all([Loader.onLoad, this.webcam.ready]);
    return this._promise;
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

    this.view.update();
    this.webcam.update();
  }
});
