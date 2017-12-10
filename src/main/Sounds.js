import Sound from "dlib/audio/Sound.js";
import GUI from "dlib/gui/GUI.js";
import Environment from "dlib/utils/Environment.js";

GUI.add(Sound, "muted", {label: "Mute Sounds"});

const SUCCESS_SOUNDS = [
  "173858__jivatma07__j1bonus-mono",
  "213149__radiy__8bit-style-bonus-effect",
  "253172__suntemple__retro-bonus-pickup-sfx",
  "253177__suntemple__retro-accomplished-sfx",
  "274177__littlerobotsoundfactory__jingle-win-synth-03",
  "325805__wagna__collect",
  "333489__robinhood76__06276-cash-bonus",
  "341984__unadamlar__winning",
  "345297__scrampunk__itemize",
  "345299__scrampunk__okay",
];

const FAIL_SOUNDS = [
  // "76376__deleted-user-877451__game-over",
  "159408__noirenex__life-lost-game-over",
  // "220174__gameaudio__spacey-loose",
  "333785__projectsu012__8-bit-failure-sound",
  "350982__cabled-mess__lose-c-06",
  // "362204__taranp__horn-fail-wahwah-3",
  // "382310__myfox14__game-over-arcade",
  "404743__owlstorm__retro-video-game-sfx-fail",
  "wilhelm"
];

export default class Sounds {
  constructor({actionsDetector}) {
    const amplification = Environment.mobile ? .1 : 1;

    for (let soundName of FAIL_SOUNDS) {
      new Sound({
        src: `src/main/sounds/fail/${soundName}.mp3`,
        amplification
      });
    }

    for (let soundName of SUCCESS_SOUNDS) {
      new Sound({
        src: `src/main/sounds/success/${soundName}.mp3`,
        volume: .3,
        amplification
      });
    }

    actionsDetector.onActionComplete.add(this.onActionComplete.bind(this));
  }

  onActionComplete({action}) {
    // if(!action.success) {
      const worldsArray = action.success ? SUCCESS_SOUNDS : FAIL_SOUNDS;
      const sound = Sound.get(worldsArray[Math.floor(Math.random() * worldsArray.length)]);
      sound.stop();
      sound.play();
    // }
  }
}