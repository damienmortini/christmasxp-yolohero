import TweenLite from "gsap";
import GLText from "dlib/gl/GLText.js";
import GLTexture from "dlib/gl/GLTexture.js";
import Matrix4 from "dlib/math/Matrix4.js";
import Vector4 from "dlib/math/Vector4.js";
import { COLORS } from "./colors.js";

export default class ScoreText extends GLText {
  constructor({
    gl
  }) {
    super({
      gl,
      textScale: 1 / window.devicePixelRatio,
      textAlign: "center",
      textContent: "0",
      fillStyle: COLORS[5],
      font: `${80 * window.devicePixelRatio}px calgary_script`,
      paddingPercentageWidth: .2,
      paddingPercentageHeight: .2,
      offsetYPercentage: window.chrome ? .2 : 0
    });

    this._scale = 1;

    this.program.add({
      fragmentShaderChunks: [
        ["start", `
          precision highp float;
        `],
        ["end", `
          // fragColor += .5;
        `]
      ]
    })
  }

  // set textContent(value) {
  //   super.textContent = value;
  //   const duration = .2;
  //   TweenLite.to(this, duration, {
  //     _scale: 1.5,
  //     ease: Back.easeOut
  //   });
  //   TweenLite.to(this, duration, {
  //     _scale: 1,
  //     delay: duration
  //   });
  // }

  draw({camera} = {}) {
    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    this.transform.scale(this._scale);
    this.program.use();
    super.draw({camera});
    this.gl.disable(this.gl.BLEND);
    this.transform.scale(1 / this._scale);
  }
}