import Signal from "dlib/utils/Signal.js";
import Keyboard from "dlib/input/Keyboard.js";

export default class ActionsDetector {
  constructor({
    player,
    webcam
  } = {}) {
    this._player = player;
    this._webcam = webcam;

    this._currentActions = new Set([
      this._player.actions[0],
    ]);
    this._nextAction = this._player.actions[1];

    this.onActionComplete = new Signal();

    this._player.onActionChange.add(this.onActionChange.bind(this));

    Keyboard.addEventListener("keydown", this.onKeyDown.bind(this));
  }

  onKeyDown(e) {
    for (let action of this._currentActions) {
      if(!action || !action.text || !action.text.startsWith("Press")) {
        continue;
      }

      let key = action.text.split(" ")[1].toLowerCase();
      if(key === "space") {
        key = " ";
      }

      if(key === e.key) {
        action.success = true;
        this._currentActions.delete(action);
        this.onActionComplete.dispatch({action});
      }
    }
  }

  onActionChange({action, nextAction}) {
    this._nextAction = nextAction;
  }
  
  update() {
    if(this._nextAction && this._nextAction.time - this._player.currentTime < 60 * .5 / this._player.bpm) {
      this._currentActions.add(this._nextAction);
      this._nextAction = null;
    }

    for (let action of this._currentActions) {
      if(this._player.currentTime - action.time > 60 * .5 / this._player.bpm) {
        this._currentActions.delete(action);
        if(!action.success) {
          this.onActionComplete.dispatch({action});
        }
      }

      if(action.text === "Move" && this._webcam.motionRatio > 1) {
        action.success = true;
        this.onActionComplete.dispatch({action});
      }
    }
  }
}