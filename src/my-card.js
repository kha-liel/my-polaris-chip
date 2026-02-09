import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */


export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Popular U.S. City Landmarks";
    this.alt = "Alternative photo text";
    this.image = "https://picsum.photos/200"
    this.buttonLink = "https://hax.psu.edu";
    this.buttonLabel = "Details";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      
      .card-container {
        width: 400px;
        border: var(--my-card-border-color, black);
        border-radius: 12px;
        background-color: var(--my-card-bg-color, white);
        margin: 20px auto;
        overflow: hidden;
        font-family: 'Segoe UI';
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      }

      .card-container img {
        width: 400px;
        height: 200px;
        object-fit: cover;
        display: block;
        margin: auto;
      }

      .card-content {
        padding: 16px;
      }

      .heading {
        text-align: center;
        margin: 0 0 8px 0;
        color: var(--my-card-title-font-color, black);
      }

      .description {
        text-align: center;
        margin-bottom: 16px;
        color: var(--my-card-paragraph-font-color, black);
        line-height: 1.6;
      }

      .details-btn {
        display: none;
        padding: 12px 24px;
        background-color: var(--my-card-details-button-color, midnightblue);
        color: white;
        text-decoration: none;
        border-radius: 4px;
        text-align: center;
      }


      @media (max-width: 800px) and (min-width: 501px) {
        .details-btn {
          display: block;
        }
      }

      @media (max-width: 500px) {
        .card-container {
          max-width: 300px;
          margin: 10px auto;
        }
        
        .card-container img {
          height: 150px;
        }
        
        .heading {
          font-size: 1.1rem;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="card-container">
        <img alt="${this.alt}" src="${this.image}">
        <div class="card-content">
          <h2 class="heading">${this.title}</h2>
          <p class="description"><slot></slot></p>
          <a href="${this.buttonLink}" class="details-btn" target = _blank>${this.buttonLabel}</a>
        </div>
     </div>
  `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      fancy: { type: Boolean, reflect: true},
      buttonLink: { type: String },
      buttonLabel: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
