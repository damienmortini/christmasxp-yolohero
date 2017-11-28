import TweenLite from "gsap";
import Loader from "dlib/utils/Loader.js";
import GLText from "dlib/gl/GLText.js";
import GLTexture from "dlib/gl/GLTexture.js";
import Matrix4 from "dlib/math/Matrix4.js";
import Vector4 from "dlib/math/Vector4.js";
import Plane from "./Plane.js";

const IMAGE_URLS = [
  "src/ui/side.png"
]
const IMAGES = new Map();
Loader.load(IMAGE_URLS).then((images) => {
  for (let [i, image] of images.entries()) {
    IMAGES.set(IMAGE_URLS[i], image);
  }
});

console.log(IMAGES);

export default class UI {
  constructor({
    gl,
    player
  }) {
    this.gl = gl;
    this.player = player;

    this.plane = new Plane({
      gl: this.gl
    });

    this._textures = new Map();
    for (let [url, image] of IMAGES) {
      console.log(image.width, image.height);
      this._textures.set(url, new GLTexture({
        gl: this.gl,
        data: image,
        // data: new Uint8Array([255, 0, 255, 255]),
        // width: 1,
        // height: 1,
        magFilter: this.gl.LINEAR,
        minFilter: this.gl.LINEAR,
        wrapS: this.gl.CLAMP_TO_EDGE,
        wrapT: this.gl.CLAMP_TO_EDGE,
      }));
    }

    this._uiElements = new Map([
      ["tickLeft", {
        texture: this._textures.get("src/ui/side.png"),
        transform: new Matrix4()
      }],
      // ["tickRight", {
      //   texture: this._textures.get("src/ui/side.png"),
      //   transform: new Matrix4()
      // }]
    ]);
  }

  resize({width, height}) {
    // this._uiElements.get("tickLeft").transform.x = -width * .005;
    // this._uiElements.get("tickRight").transform.x = width * .005;
  }

  draw({camera} = {}) {
    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

    this.plane.program.use();
    this.plane.program.attributes.set(this.plane.mesh.attributes);
    this.plane.program.uniforms.set("projectionView", camera.projectionView);
    
    for (let uiElement of this._uiElements.values()) {
      uiElement.texture.bind();
      // this.plane.program.uniforms.set("opacity", text.opacity);
      this.plane.program.uniforms.set("transform", uiElement.transform);
      this.plane.program.uniforms.set("size", [uiElement.texture.data.width, uiElement.texture.data.height]);
      this.plane.mesh.draw({
        mode: this.gl.TRIANGLE_STRIP,
        count: 4
      });
    }
    
    this.gl.disable(this.gl.BLEND);
  }
}