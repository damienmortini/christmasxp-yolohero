import GLText from "dlib/gl/GLText.js";
import GLTexture from "dlib/gl/GLTexture.js";
import Matrix4 from "dlib/math/Matrix4.js";
import Vector4 from "dlib/math/Vector4.js";
import { hexToRGB } from "dlib/math/Color.js";

let DEFAULT_TEXT;

export default class ActionTexts {
  constructor({
    gl,
    player,
    actionsDetector
  }) {
    this.gl = gl;
    this.player = player;
    this.actionsDetector = actionsDetector;

    if(!DEFAULT_TEXT) {
      DEFAULT_TEXT = new GLText({
        gl: this.gl,
        textScale: .5,
        textAlign: "center",
        textContent: "Move",
        fillStyle: "white",
        // font: "100px Shrikhand-Regular",
        paddingX: .2,
        paddingY: .2
      });
      DEFAULT_TEXT.program.add({
        fragmentShaderChunks: [
          ["start", `
            precision highp float;

            uniform float opacity;
            uniform vec3 color;
          `],
          ["end", `
            fragColor.rgb *= color;
            fragColor.a *= opacity;
          `]
        ]
      })
    }

    this._texts = new Map();

    const textContents = new Set();
    
    for (let action of this.player.actions) {
      if(!action.text) {
        continue;
      }
      this._texts.set(action, {
        textContent: action.text,
        transform: new Matrix4(),
        opacity: 0,
        color: [1, 0, 1]
      });
      textContents.add(action.text);
    }

    this._texturesData = new Map();

    for (let actionText of textContents) {
      const texture = new GLTexture({
        gl: this.gl,
        minFilter: this.gl.LINEAR,
        wrapS: this.gl.CLAMP_TO_EDGE,
        wrapT: this.gl.CLAMP_TO_EDGE,
      });
      DEFAULT_TEXT.textContent = actionText;
      texture.data = DEFAULT_TEXT._canvas;
      this._texturesData.set(actionText, {
        texture,
        scaleOffset: new Vector4(DEFAULT_TEXT._scaleOffset)
      });
    }

    this._textContentSortedTexts = new Map();
    for (let text of this._texts.values()) {
      let array = this._textContentSortedTexts.get(text.textContent);
      if(!array) {
        array = [];
        this._textContentSortedTexts.set(text.textContent, array);
      }
      array.push(text);
    }

    this.actionsDetector.onActionComplete.add(this.onActionComplete.bind(this));
  }

  onActionComplete({action}) {
    const text = this._texts.get(action);
    if(!text) {
      return;
    }
    text.color = hexToRGB(action.success ? "#00ff00" : "#ff0000");
  }

  resize({width, height}) {
    this._width = width;
  }

  draw({camera} = {}) {
    for (let action of this.player.actions) {
      const text = this._texts.get(action);
      if(!text) {
        continue;
      }
      text.transform.identity();
      text.transform.y = (this.player.currentTime - action.time) * 5;
      text.transform.scale(1 + Math.max(0, 1. - Math.abs(text.transform.y) * 3));
      text.opacity = Math.max(0, 1. - Math.abs(text.transform.y) * .1);
    }

    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    DEFAULT_TEXT.program.use();
    DEFAULT_TEXT.program.attributes.set(DEFAULT_TEXT.mesh.attributes);
    DEFAULT_TEXT.program.uniforms.set("projectionView", camera.projectionView);
    
    for (let [textContent, textsArray] of this._textContentSortedTexts) {
      const textureData = this._texturesData.get(textContent);
      textureData.texture.bind();
      DEFAULT_TEXT.program.uniforms.set("scaleOffset", textureData.scaleOffset);

      for (let text of textsArray) {
        if(!text.opacity) {
          continue;
        }
        DEFAULT_TEXT.program.uniforms.set("color", text.color);
        DEFAULT_TEXT.program.uniforms.set("opacity", text.opacity);
        DEFAULT_TEXT.program.uniforms.set("transform", text.transform);
        DEFAULT_TEXT.mesh.draw({
          mode: this.gl.TRIANGLE_STRIP,
          count: 4
        });
      }
    }
    this.gl.disable(this.gl.BLEND);
  }
}