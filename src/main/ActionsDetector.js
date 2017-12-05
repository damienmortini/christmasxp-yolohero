import Signal from "dlib/utils/Signal.js";
import Keyboard from "dlib/input/Keyboard.js";
import Pointer from "dlib/input/Pointer.js";

export default class ActionsDetector {
  constructor({
    player,
  } = {}) {
    this.webcam = null;
    this._player = player;
    this._pointer = Pointer.get();

    this._actions = new Set(player.actions);

    this._currentActions = new Set();

    this.onAction = new Signal();
    this.onActionComplete = new Signal();

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
    this.onAction.dispatch({type: "keyboard"});
    for (let action of this._currentActions) {
      // let key = action.type;
      // if(key === "space") {
      //   key = " ";
      // }
      // if(key === e.key) {
      if(action.type === "keyboard") {
        action.success = true;
        this._currentActions.delete(action);
        this._actions.delete(action);
        this.onActionComplete.dispatch({action});
      }
    }
  }

  update() {
    for (let action of this._actions) {
      if(action.type && this._player.bpm && Math.abs(action.time - this._player.currentTime) < 60 * .5 / this._player.bpm) {
        this._currentActions.add(action);
      }
    }

    let sound = false;
    let motion = false;

    if(this.webcam) {
      sound = this.webcam.volume > .3;
      if(sound) {
        this.onAction.dispatch({type: "sound"});
      }
      
      motion = this.webcam.motionRatio > .5;
      if(motion) {
        this.onAction.dispatch({type: "motion"});
      }
    }
    
    const pointerMove = this._pointer.velocity.x && this._pointer.velocity.y;
    if(pointerMove) {
      this.onAction.dispatch({type: "mouse"});
    }
      
    for (let action of this._currentActions) {
      if(this._player.currentTime - action.time > 60 * .5 / this._player.bpm) {
        this._currentActions.delete(action);
        this._actions.delete(action);
        if(!action.success) {
          this.onActionComplete.dispatch({action});
        }
      }

      if(action.type === "sound" && sound) {
        action.success = true;
        this.onActionComplete.dispatch({action});
        this._currentActions.delete(action);
        this._actions.delete(action);
      }

      if(action.type === "motion" && motion) {
        action.success = true;
        this.onActionComplete.dispatch({action});
        this._currentActions.delete(action);
        this._actions.delete(action);
      }

      if(action.type === "mouse" && pointerMove) {
        action.success = true;
        this.onActionComplete.dispatch({action});
        this._currentActions.delete(action);
        this._actions.delete(action);
      }
    }
  }
}