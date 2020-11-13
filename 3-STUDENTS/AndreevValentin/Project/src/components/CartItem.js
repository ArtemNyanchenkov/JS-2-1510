import {padNum} from "./common.js";
import Item from "./Item.js";

export default class CartItem extends Item {
	constructor() {
		// We can construct a CartItem either from an Item or from raw values
		if(arguments[0] instanceof Item) {
			const [item, qty = 1] = arguments;
			super(item.id, item.name, item.price, item.img);
			this.qty = qty;
		} else {
			const [id, name, price, img, qty = 1] = arguments;
			super(id, name, price, img);
			this.qty = qty;
		}
	}

	toHtml() {
		return `<li class="cartPopup__item">
			<img src="${this.img}" alt="${this.name}"
				class="cartPopup__itemImg">
			<div class="cartPopup__itemDetails">
				<p class="cartPopup__itemName">${this.name}</p>
				<p class="cartPopup__itemPrice">${this.qty}&nbsp;&times;&nbsp;`
				+ `\$${Math.floor(this.price / 100)}.${padNum(this.price % 100)}</p>
			</div>
			<button href="#" class="cartPopup__itemRemove fas fa-times-circle"
				data-item-id="${this.id}"></button>
		</li>`;
	}
}
