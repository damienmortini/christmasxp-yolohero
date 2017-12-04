import "@webcomponents/custom-elements";

import Loader from "dlib/utils/Loader.js";
import GUI from "dlib/gui/GUI.js";
import LoopElement from "dlib/customelements/LoopElement.js";
import Pointer from "dlib/input/Pointer.js";

const SKIP_INTRO = GUI.add({value: false}, "value", {label: "Skip Intro", reload: true}).value;

Loader.load("src/intro/template.html").then((templateHTML) => {
  let template = document.createElement("template");
  template.innerHTML = templateHTML;
  window.customElements.define("christmasxp-yolohero-intro", class extends LoopElement {
    connectedCallback() {
      let templateClone = document.importNode(template.content, true);
      this.appendChild(templateClone);
      
      this.loading = true;

      this._delay = 0;

      this.querySelector("button").addEventListener("click", this.close.bind(this));

      this._pointer = Pointer.get(this);

      this._logo = document.querySelector(".logo");

      if(SKIP_INTRO) {
        requestAnimationFrame(() => {
          this.close();
        });
      }

      // this.play();
    }

    close() {
      this.classList.add("hide");
      this.dispatchEvent(new Event("close"));
      this.pause();
    }

    set loading(value) {
      const button = this.querySelector("button");
      button.disabled = value;
      button.textContent = value ? "loading..." : "play!";
    }

    update() {
      this._delay += .01;
      if((this._pointer.velocity.x || this._pointer.velocity.y) && this._delay > .01) {
        this._delay = 0;
        this._logo.style.backgroundImage = `url(src/intro/logo/${Math.floor(Math.random() * 3) + 1}.svg)`;
      }
    }
  });
});
