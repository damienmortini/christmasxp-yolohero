import TweenLite from "gsap/TweenLite";
import GLText from "dlib/gl/GLText.js";
import GLTexture from "dlib/gl/GLTexture.js";
import Matrix4 from "dlib/math/Matrix4.js";
import Vector4 from "dlib/math/Vector4.js";

const SUCCESS_WORDS = [
  "Amazing!",
  "You're a star",
  "Perfect",
  "So good",
  "YEAH!",
  "Ace!",
  "It's Chriiiiiistmas!!!",
  "Fantastic!!!",
  "Impressive!",
  "Well done",
];

const FAIL_WORDS = [
  "Ouch!",
  "Too bad",
  "Almost",
  "Aie!",
  "Be brave!",
  "Not today",
  "Big badaboom boom boom...",
];

export default class MainText extends GLText {
  constructor({
    gl,
    player,
    actionsDetector
  }) {
    super({
      gl,
      textAlign: "center",
      textContent: "",
      // fillStyle: "white",
      textScale: 1 / window.devicePixelRatio,
      font: `${50 * window.devicePixelRatio}px Shrikhand-Regular`,
      paddingPercentageWidth: .2,
      paddingPercentageHeight: .2,
      offsetYPercentage: .2
    });

    this._scale = 1;
    this._tweenedScale = 1;
    this._opacity = 1;

    this.program.add({
      fragmentShaderChunks: [
        ["start", `
          precision highp float;

          uniform float opacity;
        `],
        ["end", `
          fragColor.a *= opacity;
        `]
      ]
    })

    this.player = player;

    this.player.onActionChange.add(this.changeAction.bind(this));
    actionsDetector.onActionComplete.add(this.onActionComplete.bind(this));
  }

  onActionComplete({action}) {
    const worldsArray = action.success ? SUCCESS_WORDS : FAIL_WORDS;
    this.textContent = worldsArray[Math.floor(Math.random() * worldsArray.length)];
  }

  changeAction({action}) {
    let data = action.text;
    if(!data) {
      return;
    }
    if(typeof data === "string") {
      data = [data]
    }
    if(data[0]) {
      this._scale = data[1] || 1;
      this.textContent = data[0];
      this._scale = 1;
    }
  }

  set textContent(value) {
    super.textContent = value;
    TweenLite.killTweensOf(this);
    TweenLite.fromTo(this, .2, {
      _opacity: 0,
      _tweenedScale: 0
    }, {
      _opacity: 1,
      _tweenedScale: Math.min(1, 1000 / this._canvas.width) * this._scale,
      ease: Back.easeOut
    })
    TweenLite.to(this, .2, {
      _opacity: 0,
      _tweenedScale: 0,
      delay: 3
    })
  }

  get textContent() {
    return super.textContent;
  }

  draw({camera} = {}) {
    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    const scale = this._tweenedScale || .0001;
    this.transform.scale(scale);
    this.program.use();
    this.program.uniforms.set("opacity", this._opacity);
    super.draw({camera});
    this.gl.disable(this.gl.BLEND);
    this.transform.scale(1 / scale);
  }
}