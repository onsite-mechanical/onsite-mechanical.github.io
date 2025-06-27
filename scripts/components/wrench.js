/**
 * Author: Darryl Cousins <cousinsd@cousinsd.net>
 * Usage: <x-wrench color="#ffcc00" width="48"></x-wrench>
 */
class WrenchComponent extends HTMLElement {
  connectedCallback() {
    if (!this.querySelector('div')) {
      this.append(document.createElement('div'));
    }
    this.update();
  }
  static get observedAttributes() {
    return ['color', 'width'];
  }

  attributeChangedCallback() {
    this.update();
  }
  update() {
    const color = this.getAttribute('color');
    const width = this.getAttribute('width');
    const height = this.getAttribute('width');
    const innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" style="fill:none;stroke:${color}" viewBox="0 0 48 48" id="spanner-title" height="${height}" width="${width}"><desc>Wrench icon</desc><path stroke-linecap="round" stroke-miterlimit="10" d="M38.4811 17.0608c-0.6312 0.6271 -1.4848 0.9791 -2.3745 0.9791 -0.8897 0 -1.7434 -0.352 -2.3746 -0.9791l-2.7886 -2.7886c-0.6277 -0.631 -0.98 -1.4849 -0.98 -2.375 0 -0.8901 0.3523 -1.744 0.98 -2.375l6.3119 -6.315c0.0124 -0.012 0.0218 -0.0269 0.0272 -0.0434 0.0051 -0.0165 0.0063 -0.0341 0.0033 -0.0511 -0.0032 -0.017 -0.0105 -0.0331 -0.0214 -0.0466 -0.0107 -0.0135 -0.0247 -0.0242 -0.0406 -0.031 -4.0742 -1.7464 -9.3565 -0.8564 -12.7107 2.4737 -3.2094 3.1853 -3.392 7.9764 -2.2165 12.1576 0.167 0.5943 0.1665 1.2231 -0.0013 1.8174 -0.1678 0.5941 -0.4964 1.1302 -0.9496 1.5494L3.8608 37.0016c-0.5159 0.4573 -0.9327 1.0154 -1.225 1.6398 -0.2922 0.6245 -0.4536 1.3021 -0.4743 1.9911 -0.0207 0.6893 0.0998 1.3753 0.3541 2.0162 0.2542 0.6408 0.6368 1.2229 1.1243 1.7103 0.4876 0.4876 1.0696 0.8702 1.7105 1.1246 0.6408 0.2541 1.3269 0.3746 2.016 0.3539 0.6892 -0.0207 1.3668 -0.1821 1.9912 -0.4744 0.6245 -0.2922 1.1825 -0.709 1.6398 -1.2248l16.1478 -17.5269c0.4139 -0.4457 0.9412 -0.7702 1.5254 -0.939 0.5843 -0.1689 1.2034 -0.1755 1.7911 -0.0192 4.1498 1.1114 8.8726 0.9025 12.04 -2.2239 3.4099 -3.3585 4.1456 -9.2945 2.4926 -12.6918 -0.0074 -0.0149 -0.0182 -0.0277 -0.0317 -0.0376 -0.0133 -0.0099 -0.0288 -0.0164 -0.0452 -0.0189 -0.0165 -0.0028 -0.0331 -0.0015 -0.049 0.0037 -0.0158 0.005 -0.0303 0.0137 -0.042 0.0255l-6.3453 6.3506Z" stroke-width="2"></path><path d="M7.2195 42.4597c0.9278 0 1.6798 -0.7519 1.6798 -1.6796 0 -0.9279 -0.752 -1.6798 -1.6798 -1.6798 -0.9277 0 -1.6797 0.7519 -1.6797 1.6798 0 0.9277 0.752 1.6796 1.6797 1.6796Z" stroke-width="2"></path></svg>
`
    const div = this.querySelector('div');
    if (div) {
      div.classList.toggle("di"); // display:inline
      div.innerHTML = innerHTML;
    }
  }
}

export const registerWrenchComponent = () => {
      customElements.define('x-wrench', WrenchComponent);
}
