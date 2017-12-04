import "@webcomponents/custom-elements";

import Loader from "dlib/utils/Loader.js";
import Sound from "dlib/audio/Sound.js";
import LoopElement from "dlib/customelements/LoopElement.js";

import "../webgl/index.js";
import "../player/index.js";
import "../ui/index.js";

import ActionsDetector from "./ActionsDetector.js";
import Sounds from "./Sounds.js";
import TweenLite from "gsap/TweenLite";

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

      this.player = document.querySelector("christmasxp-yolohero-player");
      this.webgl = document.querySelector("christmasxp-yolohero-webgl");
      const ui = document.querySelector("christmasxp-yolohero-ui");

      this._actionsDetector = new ActionsDetector({
        player: this.player,
        webcam: this.webgl.webcam
      });
      
      this.webgl.init({
        player: this.player,
        actionsDetector: this._actionsDetector
      });

      new Sounds({
        actionsDetector: this._actionsDetector
      });

      this._actionsDetector.onActionComplete.add(this.onActionComplete.bind(this));
    }

    onActionComplete({action}) {
      if(!action.success) {
        TweenLite.killTweensOf(this.player);
        TweenLite.to(this.player, .2, {
          volume: .3
        });
        TweenLite.to(this.player, 1, {
          volume: 1,
          delay: 1
        });
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
