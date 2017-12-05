import "@webcomponents/custom-elements";

import Loader from "dlib/utils/Loader.js";
import Sound from "dlib/audio/Sound.js";
import LoopElement from "dlib/customelements/LoopElement.js";

import "../intro/index.js";
import "../outro/index.js";
import "../webgl/index.js";
import "../player/index.js";

import ActionsDetector from "./ActionsDetector.js";
import Sounds from "./Sounds.js";
import "gsap/TweenLite";
import GUI from "dlib/gui/GUI.js";

GUI.visible = /\bgui\b/.test(window.location.search);

Loader.load(["src/main/template.html", "src/calgary_script.woff2"]).then(([templateHTML]) => {
  let template = document.createElement("template");
  template.innerHTML = templateHTML;
  window.customElements.define("christmasxp-yolohero-main", class extends LoopElement {
    connectedCallback() {
      super.connectedCallback();

      let templateClone = document.importNode(template.content, true);
      this.appendChild(templateClone);

      this.score = 0;

      this.intro = document.querySelector("christmasxp-yolohero-intro");
      this.outro = document.querySelector("christmasxp-yolohero-outro");

      this.player = document.querySelector("christmasxp-yolohero-player");
      
      this._actionsDetector = new ActionsDetector({
        player: this.player
      });
      this._actionsDetector.onActionComplete.add(this.onActionComplete.bind(this));
      
      this.webgl = document.querySelector("christmasxp-yolohero-webgl");
      this.webgl.player = this.player;
      this.webgl.actionsDetector = this._actionsDetector;

      new Sounds({
        actionsDetector: this._actionsDetector
      });

      Promise.all([this.player.load(), this.webgl.load()])
      .then(() => {
        this._actionsDetector.webcam = this.webgl.webcam;
        this.intro.loading = false;
        this.player.addEventListener("ended", this.onPlayerEnded.bind(this))
      });

      this.intro.addEventListener("close", () => {
        this.player.load().then(() => {
          this.player.play();
          TweenLite.fromTo(this.player, 2, {
            volume: 0
          }, {
            volume: 1
          });
        });
      });
    }

    onPlayerEnded() {
      this.outro.score = this.score;
      this.outro.visible = true;
    }

    onActionComplete({action}) {
      if(!action.success) {
        TweenLite.killTweensOf(this.player);
        TweenLite.to(this.player, .2, {
          volume: .3
        });
        TweenLite.to(this.player, 1, {
          volume: 1,
          delay: .5
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
