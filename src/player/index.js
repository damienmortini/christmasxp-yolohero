import "@webcomponents/custom-elements";

import LoopElement from "dlib/customelements/LoopElement.js";
import Loader from "dlib/utils/Loader.js";
import YouTubeAPI from "dlib/api/YouTubeAPI.js";
import Keyboard from "dlib/input/Keyboard.js";
import { INTRO, RAP } from "./data.js";

let template = document.createElement("template");
Loader.load("src/player/template.html").then((value) => {
  template.innerHTML = value;
});

const START_TIME = 30;

const SLICES = new Map([
  ["intro", {
    startTime: START_TIME,
    bpm: 128,
    data: INTRO,
    timings: []
  }],
  ["rap", {
    startTime: 45.4,
    bpm: 128,
    data: RAP,
    timings: []
  }]
]);

const ACTIONS = [];
for (let slice of SLICES.values()) {
  for (let [i, data] of slice.data.entries()) {
    ACTIONS.push([slice.startTime + i * 60 / slice.bpm - START_TIME, ...data])
  }
}

Loader.onLoad.then(() => {
  window.customElements.define("christmasxp-yolohero-player", class extends LoopElement {
    connectedCallback() {
      super.connectedCallback();
      
      let templateClone = document.importNode(template.content, true);
      this.appendChild(templateClone);

      this.bpm = 0;
      this.currentTime = 0;

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

    get actions() {
      return ACTIONS;
    }

    update() {
      if(!this.youtubePlayer || !this.youtubePlayer.getCurrentTime) {
        return;
      }

      const currentTime = this.youtubePlayer.getCurrentTime();

      for (let slice of SLICES.values()) {
        if(slice.startTime < this._currentSliceStartTime || currentTime < slice.startTime || slice === this._currentSlice) {
          continue;
        }
        this._currentSliceStartTime = slice.startTime;
        this.bpm = slice.bpm;
        this._previousBeatTime = this._currentSliceStartTime;
      }

      this.currentTime = currentTime - START_TIME;
      
      // if(currentTime - this._previousBeatTime > 60 / this.bpm) {
      //   this._previousBeatTime = this.youtubePlayer.getCurrentTime();
      //   console.log("beat");
      // }
    }
  });
});
