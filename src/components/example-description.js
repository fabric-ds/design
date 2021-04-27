import { html, LitElement } from "lit-element";

export class ExampleDescription extends LitElement {
//   static get properties() {
//     return {
//       picture: { type: String },
//       good: { type: Boolean },
//       bad: { type: Boolean },
//     };
//   }

//   createRenderRoot() {
//     return this;
//   }

  render() {
    return html`<div slot="example-description"><slot></slot></div>`;
  }
}

customElements.define("example-description", ExampleDescription);
