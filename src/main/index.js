import "@webcomponents/custom-elements";

import Loader from "dlib/utils/Loader.js";

import "../webgl/index.js";
import "../player/index.js";
import "../ui/index.js";

import ActionsDetector from "./ActionsDetector.js";
import LoopElement from "dlib/customelements/LoopElement.js";

let template = document.createElement("template");
Loader.load("src/main/template.html").then((value) => {
  template.innerHTML = value;
});

Loader.onLoad.then(() => {
  window.customElements.define("christmasxp-yolohero-main", class extends LoopElement {
    connectedCallback() {
      super.connectedCallback();

      let templateClone = document.importNode(template.content, true);
      this.appendChild(templateClone);

      this.score = 0;

      const player = document.querySelector("christmasxp-yolohero-player");
      this.webgl = document.querySelector("christmasxp-yolohero-webgl");
      const ui = document.querySelector("christmasxp-yolohero-ui");

      this._actionsDetector = new ActionsDetector({
        player,
        webcam: this.webgl.webcam
      });
      
      this.webgl.init({
        player,
        actionsDetector: this._actionsDetector
      });

      this._actionsDetector.onActionComplete.add(this.onActionComplete.bind(this));
    }

    onActionComplete({action}) {
      if(!action.success) {
        return;
      }

      // switch (action.type) {
      //   case "motion":
      //     this.score += 1;
      //     break;
      //   case "mouse":
      //     this.score += 1;
      //     break;
      //   case "sound":
      //     this.score += 50;
      //     break;
      //   default:
      //     this.score += 10;  
      // }

      this.score += 10;

      this.webgl.score = this.score;
    }

    update() {
      this._actionsDetector.update();
    }
  });
});
