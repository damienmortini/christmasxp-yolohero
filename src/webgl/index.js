import "@webcomponents/custom-elements";

import LoopElement from "dlib/customelements/LoopElement.js";
import Loader from "dlib/utils/Loader.js";

import Camera from "./Camera.js";
import View from "./View.js";

let template = document.createElement("template");
Loader.load("src/webgl/template.html").then((value) => {
  template.innerHTML = value;
});

Loader.onLoad.then(() => {
  window.customElements.define("christmasxp-yolohero-webgl", class extends LoopElement {
    connectedCallback() {
      super.connectedCallback();

      let templateClone = document.importNode(template.content, true);
      this.appendChild(templateClone);

      this.canvas = this.querySelector("canvas");

      this.gl = this.canvas.getContext(WebGL2RenderingContext ? "webgl2" : "webgl", {
        depth: true,
        alpha: false,
        antialias: true
      });

      this.camera = new Camera({gl: this.gl});
      this.view = new View({gl: this.gl});

      window.addEventListener("resize", this._resizeBinded = this.resize.bind(this));

      this.resize();
    }

    disconnectedCallback() {
      window.removeEventListener("resize", this._resizeBinded);
    }

    resize() {
      let width = this.canvas.offsetWidth;
      let height = this.canvas.offsetHeight;

      this.canvas.width = width * window.devicePixelRatio;
      this.canvas.height = height * window.devicePixelRatio;

      this.view.resize(width, height);
    }

    update() {
      this.camera.update();
      this.view.update();
    }
  });
});
