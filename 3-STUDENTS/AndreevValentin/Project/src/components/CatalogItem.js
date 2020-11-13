import {padNum} from "./common.js";
import Item from "./Item.js";

export default class CatalogItem extends Item {
	toHtml() {
		return `<article class="snippet">
			<img src="${this.img}"
				alt="${this.name}" class="snippet__img">
			<div class="snippet__hover">
				<button class="snippet__addToCart"
					data-item-id="${this.id}">Add to cart</button>
			</div>
			<div class="snippet__caption">
				<h3 class="snippet__name">${this.name}</h3>
				<p class="snippet__price">\$${Math.floor(this.price / 100)}`
				+ `.${padNum(this.price % 100)}</p>
			</div>
		</article>`;
	}
}
