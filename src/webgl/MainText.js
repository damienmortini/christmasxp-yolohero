import TweenLite from "gsap";
import GLText from "dlib/gl/GLText.js";
import GLTexture from "dlib/gl/GLTexture.js";
import Matrix4 from "dlib/math/Matrix4.js";
import Vector4 from "dlib/math/Vector4.js";

export default class MainText extends GLText {
  constructor({
    gl,
    player
  }) {
    super({
      gl,
      textScale: .25,
      textAlign: "center",
      textContent: "",
      fillStyle: "white",
      font: "240px Shrikhand-Regular",
      paddingPercentageWidth: .2,
      paddingPercentageHeight: .3
    });

    this._scale = 1;
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
  }

  changeAction(action) {
    let data = action[2];
    if(!data) {
      return;
    }
    if(typeof data === "string") {
      data = [data]
    }
    if(data[0]) {
      this.textContent = data[0];
      TweenLite.killAll(this);
      TweenLite.fromTo(this, .2, {
        _opacity: 0,
        _scale: 0
      }, {
        _opacity: 1,
        _scale: data[1] || 1,
        ease: Back.easeOut
      })
      TweenLite.to(this, .2, {
        _opacity: 0,
        _scale: 0,
        delay: 3
      })
    }
  }

  draw({camera} = {}) {
    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    this.transform.identity();
    this.transform.y = 3;
    this.transform.scale(this._scale);
    this.program.use();
    this.program.uniforms.set("opacity", this._opacity);
    super.draw({camera});
    this.gl.disable(this.gl.BLEND);
  }
}