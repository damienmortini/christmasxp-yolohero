import "@webcomponents/custom-elements";

import Loader from "dlib/utils/Loader.js";

Loader.load("src/intro/template.html").then((templateHTML) => {
  let template = document.createElement("template");
  template.innerHTML = templateHTML;
  window.customElements.define("christmasxp-yolohero-intro", class extends HTMLElement {
    connectedCallback() {
      let templateClone = document.importNode(template.content, true);
      this.appendChild(templateClone);
      
      this.loading = true;

      this.querySelector("button").addEventListener("click", () => {
        this.classList.add("hide");
        this.dispatchEvent(new Event("close"));
      });
    }

    set loading(value) {
      const button = this.querySelector("button");
      button.disabled = value;
      button.textContent = value ? "loading..." : "play!";
    } 
  });
});
