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
      if(this._player.bpm && Math.abs(action.time - this._player.currentTime) < 60 * .5 / this._player.bpm) {
        this._currentActions.add(action);
      }
    }
    
    const sound = this._webcam.volume > .2;
    if(sound) {
      this.onAction.dispatch({type: "sound"});
    }
    
    const motion = this._webcam.motionRatio > 1;
    if(motion) {
      this.onAction.dispatch({type: "motion"});
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