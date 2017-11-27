import "@webcomponents/custom-elements";

import LoopElement from "dlib/customelements/LoopElement.js";
import Loader from "dlib/utils/Loader.js";
import YouTubeAPI from "dlib/api/YouTubeAPI.js";
import Keyboard from "dlib/input/Keyboard.js";

let template = document.createElement("template");
Loader.load("src/player/template.html").then((value) => {
  template.innerHTML = value;
});

const START_TIME = 30;

const SLICES = new Map([
  [30, {
    bpm: 128
  }],
  [45.4, {
    bpm: 128
  }]
]);

Loader.onLoad.then(() => {
  window.customElements.define("christmasxp-yolohero-player", class extends LoopElement {
    connectedCallback() {
      super.connectedCallback();
      
      let templateClone = document.importNode(template.content, true);
      this.appendChild(templateClone);

      this.bpm = 0;
      this.time = 0;

      this._previousBeatTime = 0;
      this._currentSliceStartTime = 0;
      this._currentSlice = null;

      YouTubeAPI.ready.then(() => {
        this.youtubePlayer = new YT.Player("youtube-player", {
          height: "390",
          width: "640",
          videoId: "B-NckB3CQ9o",
          playerVars: {
            autoplay: 1,
            // controls: 0,
            start: START_TIME
          },
          events: {
            onReady: (e) => {
              e.target.playVideo();
            },
            onStateChange: (e) => {

            }
          }
        });
      });

      // this._previousKeyboardBeatTime = 0;
      // Keyboard.addEventListener("keydown", () => {
      //   console.log(60 / (this.youtubePlayer.getCurrentTime() - this._previousKeyboardBeatTime));
      //   this._previousKeyboardBeatTime = this.youtubePlayer.getCurrentTime();
      //   console.log(this.youtubePlayer.getCurrentTime());
      // });
    }

    update() {
      if(!this.youtubePlayer || !this.youtubePlayer.getCurrentTime) {
        return;
      }

      const currentTime = this.youtubePlayer.getCurrentTime();

      for (let [key, slice] of SLICES) {
        if(key < this._currentSliceStartTime || currentTime < key || slice === this._currentSlice) {
          continue;
        }
        this._currentSliceStartTime = key;
        this.bpm = slice.bpm;
        this._previousBeatTime = this._currentSliceStartTime;
      }

      this.time = currentTime - this._currentSliceStartTime;
      
      // if(currentTime - this._previousBeatTime > 60 / this.bpm) {
      //   this._previousBeatTime = this.youtubePlayer.getCurrentTime();
      //   console.log("beat");
      // }
    }
  });
});
