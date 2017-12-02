import Signal from "dlib/utils/Signal.js";
import Keyboard from "dlib/input/Keyboard.js";
import Pointer from "dlib/input/Pointer.js";

export default class ActionsDetector {
  constructor({
    player,
    webcam
  } = {}) {
    this._player = player;
    this._webcam = webcam;
    this._pointer = Pointer.get();

    this._currentActions = new Set([
      this._player.actions[0],
    ]);
    this._nextAction = this._player.actions[1];

    this.onActionComplete = new Signal();

    this._player.onActionChange.add(this.onActionChange.bind(this));

    Keyboard.addEventListener("keydown", this.onKeyDown.bind(this));
    this._pointer.onDown.add(this.onPointerDown.bind(this));
  }

  onPointerDown() {
    for (let action of this._currentActions) {
      if(action.type !== "click") {
        continue;
      }

      action.success = true;
      this._currentActions.delete(action);
      this.onActionComplete.dispatch({action});
    }
  }

  onKeyDown(e) {
    for (let action of this._currentActions) {
      let key = action.type;
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

      if(action.type === "motion" && this._webcam.motionRatio > 1) {
        action.success = true;
        this.onActionComplete.dispatch({action});
      }

      if(action.type === "mouse" && this._pointer.velocity.x && this._pointer.velocity.y) {
        action.success = true;
        this.onActionComplete.dispatch({action});
      }
    }
  }
}