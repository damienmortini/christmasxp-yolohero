import "@webcomponents/custom-elements";

import LoopElement from "dlib/customelements/LoopElement.js";
import WebGLVideoElement from "dlib/customelements/WebGLVideoElement.js";

window.customElements.define("christmasxp-yolohero-camera", class extends WebGLVideoElement {
  connectedCallback() {
    super.connectedCallback();
    
    this.autoplay = true;

    this.program.add({
      fragmentShaderChunks: [
        ["main", `
          vec2 vUv = vec2(1. - vUv.x, vUv.y);
        `],
        ["end", `
          vec3 video = fragColor.rgb;
          fragColor.rgb = mix(vec3(1., .5, .5), vec3(.5, .5, 1.), smoothstep(.33, .34, video.r));
          fragColor.rgb = mix(fragColor.rgb, vec3(.5, 1., .5), smoothstep(.66, .67, video.r));
        `]
      ]
    });
    
    navigator.mediaDevices.getUserMedia({ audio: false, video: { width: window.innerWidth * .1, height: window.innerHeight * .1, facingMode: "user" } }).then((stream) => {
      this.srcObject = stream;
    }).catch(function(err) {
      /* handle the error */
    });
  }
});
