import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@exmg/exmg-paper-datatable';
import { Client } from '@bundesfeeds/aowatch-client/client.js';
/**
 * @customElement
 * @polymer
 */
class UnionWatchApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'union-watch-app'
      }
    };
  }
}

window.customElements.define('union-watch-app', UnionWatchApp);
