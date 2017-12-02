import "@webcomponents/custom-elements";

import LoopElement from "dlib/customelements/LoopElement.js";
import Loader from "dlib/utils/Loader.js";
import YouTubeAPI from "dlib/api/YouTubeAPI.js";
import SoundCloudAPI from "dlib/api/SoundCloudAPI.js";
import Keyboard from "dlib/input/Keyboard.js";
import GUI from "dlib/gui/GUI.js";
import Signal from "dlib/utils/Signal.js";
import DATA from "./data-snowman.js";

const MUTE = GUI.add({value: false}, "value", {label: "Mute", reload: true}).value;

let template = document.createElement("template");
Loader.load("src/player/template.html").then((value) => {
  template.innerHTML = value;
});

const START_TIME = [...DATA.slices.values()][0].startTime;

const ACTIONS = [];
for (let slice of DATA.slices.values()) {
  for (let [i, data] of slice.data.entries()) {
    ACTIONS.push({
      time: slice.startTime + i * 60 / slice.bpm - START_TIME,
      text: data[0],
      additionalText: data[1],
      success: false
    });
  }
}

Loader.onLoad.then(() => {
  window.customElements.define("christmasxp-yolohero-player", class extends LoopElement {
    connectedCallback() {
      super.connectedCallback();

      
      let templateClone = document.importNode(template.content, true);
      this.appendChild(templateClone);
      
      this.onActionChange = new Signal();

      this.bpm = 0;
      this.currentTime = 0;
      this.action = {
        time: -1
      };

      this._previousBeatTime = 0;
      this._currentSliceStartTime = 0;
      this._currentSlice = null;

      if(this.querySelector("#soundcloud-player")) {
        SoundCloudAPI.load().then(() => {
          this._player = {
            currentTime: 0
          };
          const widget = SC.Widget(this.querySelector("iframe"));
          widget.bind(SC.Widget.Events.READY, () => {
            widget.setVolume(MUTE ? 0 : 1);
            widget.play();
          });
          widget.bind(SC.Widget.Events.PLAY_PROGRESS, (e) => {
            this._player.currentTime = e.currentPosition * .001;
          });
        });
      }

      if(this.querySelector("#youtube-player")) {
        YouTubeAPI.load().then(() => {
          const youtubePlayer = new YT.Player("youtube-player", {
            height: "390",
            width: "640",
            videoId: "B-NckB3CQ9o",
            // videoId: "I-s4kSMjmhY",
            // videoId: "BFNZxrBFnpg",
            playerVars: {
              autoplay: 1,
              // controls: 0,
              start: Math.floor(START_TIME)
            },
            events: {
              onReady: (e) => {
                if(MUTE) {
                  youtubePlayer.mute();
                }
                youtubePlayer.playVideo();
              },
              onStateChange: (e) => {

              }
            }
          });
          this._player = {
            get currentTime() {
              return youtubePlayer.getCurrentTime ? youtubePlayer.getCurrentTime() : 0;
            }
          }
        });
      }

      // this._previousKeyboardBeatTime = 0;
      // Keyboard.addEventListener("keydown", () => {
      //   console.log(60 / (this._player.currentTime - this._previousKeyboardBeatTime));
      //   this._previousKeyboardBeatTime = this._player.currentTime;
      // });
    }

    get actions() {
      return ACTIONS;
    }

    update() {
      if(!this._player) {
        return;
      }

      const currentTime = this._player.currentTime;

      for (let slice of DATA.slices.values()) {
        if(slice.startTime < this._currentSliceStartTime || currentTime < slice.startTime || slice === this._currentSlice) {
          continue;
        }
        this._currentSliceStartTime = slice.startTime;
        this.bpm = slice.bpm;
        this._previousBeatTime = this._currentSliceStartTime;
      }

      this.currentTime = currentTime - START_TIME;

      for (let i = 0; i < this.actions.length; i++) {
        const action = this.actions[i];
        if(action.time > this.action.time && action.time < this.currentTime && this.action !== action) {
          this.action = action;
          this.onActionChange.dispatch({
            action: this.action,
            nextAction: this.actions[i + 1]
          });
        }
      }
      
      // if(currentTime - this._previousBeatTime > 60 / this.bpm) {
      //   this._previousBeatTime = this._player.currentTime;
      //   console.log("beat");
      // }
    }
  });
});
