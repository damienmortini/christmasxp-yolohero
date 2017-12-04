import Sound from "dlib/audio/Sound.js";
import GUI from "dlib/gui/GUI.js";

GUI.add(Sound, "muted", {label: "Mute Sounds"});

const SUCCESS_SOUNDS = [
  "yeah"
];

const FAIL_SOUNDS = [
  "wilhelm"
];

export default class Sounds {
  constructor({actionsDetector}) {
    for (let soundName of [...SUCCESS_SOUNDS, ...FAIL_SOUNDS]) {
      new Sound({
        src: `src/main/sounds/${soundName}.mp3`
      });
    }

    actionsDetector.onActionComplete.add(this.onActionComplete.bind(this));
  }

  onActionComplete({action}) {
    if(!action.success) {
      const worldsArray = action.success ? SUCCESS_SOUNDS : FAIL_SOUNDS;
      const sound = Sound.get(worldsArray[Math.floor(Math.random() * worldsArray.length)]);
      sound.stop();
      sound.play();
    }
  }
}