import { html, LitElement } from "lit-element";

export class ExampleImage extends LitElement {
  static get properties() {
    return {
      picture: { type: String },
      good: { type: Boolean },
      bad: { type: Boolean },
    };
  }

  // createRenderRoot() {
  //   return this;
  // }

  render() {
    let content;
    if (this.good) {
      content = html`<div class="border-green-500 border-l-4 bg-gray-300">
        <img src="${this.picture}" alt="" />
      </div>`;
    } else if (this.bad) {
      content = html`<div class="border-red-500 border-l-4 bg-gray-300">
        <img src="${this.picture}" alt="" />
      </div>`;
    }
    return html`<div>${content}</div> `;
  }
}

customElements.define("example-image", ExampleImage);
