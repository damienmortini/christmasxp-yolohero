import "@webcomponents/custom-elements";

import LoopElement from "dlib/customelements/LoopElement.js";
import Loader from "dlib/utils/Loader.js";

let template = document.createElement("template");
Loader.load("src/player/template.html").then((value) => {
  template.innerHTML = value;
});

Loader.onLoad.then(() => {
  window.customElements.define("christmasxp-yolohero-player", class extends LoopElement {
    connectedCallback() {
      super.connectedCallback();
      
      let templateClone = document.importNode(template.content, true);
      this.appendChild(templateClone);
    }

    update() {
    }
  });
});
