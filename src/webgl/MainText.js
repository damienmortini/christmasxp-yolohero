import "gsap/TweenLite.js";
import GLText from "dlib/gl/GLText.js";
import GLTexture from "dlib/gl/GLTexture.js";
import NoiseShader from "dlib/shaders/NoiseShader.js";
import Matrix4 from "dlib/math/Matrix4.js";
import Vector4 from "dlib/math/Vector4.js";

const SUCCESS_WORDS = [
  "Amazing!",
  "You're a star",
  "Perfect",
  "So good",
  "Yeah!!!",
  "Ace!",
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
  "Oups!",
  "Failed!",
  "Nope!",
];

export default class MainText extends GLText {
  constructor({
    gl,
    player,
    actionsDetector,
    noiseTexture
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
      offsetYPercentage: window.chrome ? .2 : 0
    });

    this._scale = 1;
    this._tweenedScale = 1;
    this._opacity = 1;
    this._noiseTexture = noiseTexture;

    this.program.add({
      uniforms: [
        ["noiseTexture", 1]
      ],
      fragmentShaderChunks: [
        ["start", `
          precision highp float;

          uniform float opacity;
          uniform sampler2D noiseTexture;
          uniform vec4 scaleOffset;

          ${NoiseShader.random()}
        `],
        ["end", `
          fragColor.a = smoothstep(.01, 1., fragColor.a);
          vec4 noise = texture(noiseTexture, random(scaleOffset.x + scaleOffset.y) + vUv * scaleOffset.xy);
          // fragColor.a *= (-noise.r + opacity * 2.) * 10. ;
          // fragColor.rgb = (noise.rgb - opacity) * 20.;
          fragColor.a *= opacity;
          // fragColor.rgb = vec3(1., 0., 0.);
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
    const scale = Math.min(1, 1000 / this._canvas.width) * (this._scale || 1);
    TweenLite.killTweensOf(this);
    TweenLite.fromTo(this, .2, {
      _tweenedScale: 0
    }, {
      _tweenedScale: scale,
      ease: Back.easeOut
    })
    TweenLite.fromTo(this, .2, {
      _opacity: 0,
    }, {
      _opacity: 1
    })
    TweenLite.to(this, .2, {
      _opacity: 0,
      _tweenedScale: 0,
      delay: 2
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
    this._noiseTexture.bind({
      unit: 1
    });
    this.program.use();
    this.program.uniforms.set("opacity", this._opacity);
    super.draw({camera});
    this.gl.disable(this.gl.BLEND);
    this.transform.scale(1 / scale);
  }
}