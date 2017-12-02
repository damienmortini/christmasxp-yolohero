import Signal from "dlib/utils/Signal.js";
import Keyboard from "dlib/input/Keyboard.js";

const ACTION_TIME_ALLOWANCE = .1;

export default class ActionsDetector {
  constructor({player} = {}) {
    this._player = player;
    this._currentActions = new Set([
      this._player.actions[0],
    ]);
    this._nextAction = this._player.actions[1];

    this.onActionSuccess = new Signal();
    this.onActionFail = new Signal();

    this._player.onActionChange.add(this.onActionChange.bind(this));

    Keyboard.addEventListener("keydown", this.onKeyDown.bind(this));
  }

  onKeyDown(e) {
    for (let action of this._currentActions) {
      if(!action) {
        continue;
      }
      const actionString = action.text.toLowerCase();
      if(!actionString || !actionString.startsWith("press")) {
        continue;
      }

      let key = actionString.split(" ")[1];
      if(key === "space") {
        key = " ";
      }

      if(key === e.key) {
        this._currentActions.delete(action);
        this.onActionSuccess.dispatch({action});
      }
    }
  }

  onActionChange({action, nextAction}) {
    this._nextAction = nextAction;
  }
  
  update() {
    if(this._nextAction && this._nextAction.time - this._player.currentTime < ACTION_TIME_ALLOWANCE) {
      this._currentActions.add(this._nextAction);
      this._nextAction = null;
    }

    for (let action of this._currentActions) {
      if(this._player.currentTime - action.time > ACTION_TIME_ALLOWANCE) {
        this._currentActions.delete(action);
        this.onActionFail.dispatch({action});
      }
    }
  }
}