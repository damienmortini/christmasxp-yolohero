import "@webcomponents/custom-elements";

import Loader from "dlib/utils/Loader.js";

import "gsap/TweenLite";

Loader.load("src/outro/template.html").then((templateHTML) => {
  let template = document.createElement("template");
  template.innerHTML = templateHTML;
  window.customElements.define("christmasxp-yolohero-outro", class extends HTMLElement {
    connectedCallback() {
      this.visible = false;

      let templateClone = document.importNode(template.content, true);
      this.appendChild(templateClone);
    }

    set score(value) {
      this._score = value;
    }

    set visible(value) {
      this.classList.toggle("hide", !value);
      if(value && this._score !== undefined) {
        this.querySelector(".content").innerHTML += `
        <iframe id="soundcloud-player" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/129924353&amp;color=%23ffcf24&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
        `;
        const score = this.querySelector(".score");
        this.querySelector("textarea").value = `I’ve done a score of ${this._score} at Yolo Hero! 🚀 🎹 ✨ 🤘 ☃️
Can you do better???
Merry Christmas from Christmas Experiments!!!
${window.location}

by @damienmortini & @lonni_laura
for @christmasxp`;
        const progress = {value: 0};
        TweenLite.to(progress, 4, {
          value: this._score,
          ease: Linear.easeInOut,
          onUpdate: () => {
            score.textContent = `${Math.floor(progress.value)}`;
          }
        })
      }
    }
  });
});
