import "@webcomponents/custom-elements";

import Environment from "dlib/utils/Environment.js";
import Loader from "dlib/utils/Loader.js";

Loader.load("src/fallback/template.html").then((templateHTML) => {
  let template = document.createElement("template");
  template.innerHTML = templateHTML;
  window.customElements.define("christmasxp-yolohero-fallback", class extends HTMLElement {
    connectedCallback() {
      let templateClone = document.importNode(template.content, true);
      this.appendChild(templateClone);

      this.classList.add(Environment.mobile ? "mobile" : "features");
    }
  });
});
