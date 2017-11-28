import "@webcomponents/custom-elements";

import Loader from "dlib/utils/Loader.js";

import "../webgl/index.js";
import "../player/index.js";
import "../ui/index.js";

let template = document.createElement("template");
Loader.load("src/main/template.html").then((value) => {
  template.innerHTML = value;
});

Loader.onLoad.then(() => {
  window.customElements.define("christmasxp-yolohero-main", class extends HTMLElement {
    connectedCallback() {
      let templateClone = document.importNode(template.content, true);
      this.appendChild(templateClone);

      const player = document.querySelector("christmasxp-yolohero-player");
      const webgl = document.querySelector("christmasxp-yolohero-webgl");
      const ui = document.querySelector("christmasxp-yolohero-ui");

      webgl.player = player;
    }
  });
});
