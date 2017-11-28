import "@webcomponents/custom-elements";

import Loader from "dlib/utils/Loader.js";

let template = document.createElement("template");
Loader.load("src/ui/template.html").then((value) => {
  template.innerHTML = value;
});

Loader.onLoad.then(() => {
  window.customElements.define("christmasxp-yolohero-ui", class extends HTMLElement {
    connectedCallback() {
      let templateClone = document.importNode(template.content, true);
      this.appendChild(templateClone);

      this.player = null;
    }
  });
});
