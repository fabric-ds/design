import { html, LitElement } from "lit-element";

export class GuidelineElement extends LitElement {
  render() {
    return html`
      <div class="guideline flex flex-row">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('guideline-element', GuidelineElement);