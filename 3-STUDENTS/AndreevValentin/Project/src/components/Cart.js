import {padNum} from "./common.js";
import CartItem from "./CartItem.js";
import ItemList from "./ItemList.js";

export default class Cart extends ItemList {
	constructor() {
		super(document.getElementById("cartPopupItems"),
			"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/cart.json");

		this.totalBox = document.getElementById("cartPopupTotal");
	}

	_makeItemObject(jsonItem) {
		return new CartItem(jsonItem.id, jsonItem.name, jsonItem.price,
			jsonItem.img, jsonItem.qty);
	}

	_handleEvents() {
		document.getElementById("cartPopupButton").addEventListener("click", () => {
			document.getElementById("cartPopup").classList.toggle("hidden");
		});
		this.container.addEventListener("click", e => {
			if(!e.target.classList.contains("cartPopup__itemRemove")) {
				return;
			}

			this.remove(+e.target.dataset.itemId);
		});
	}

	_render() {
		this.container.innerHTML = this._itemsToHtml();

		const total =
			Object.values(this.items).reduce((a, b) => a + b.price * b.qty, 0);
		this.totalBox.innerHTML =
			`\$${Math.floor(total / 100)}.${padNum(total % 100)}`;
	}

	add(newItem) {
		if(newItem.id in this.items) {
			++this.items[newItem.id].qty;
		} else {
			this.items[newItem.id] = new CartItem(newItem);
		}
		this._render();
	}

	remove(id) {
		if(this.items[id].qty == 1) {
			delete this.items[id];
		} else {
			--this.items[id].qty;
		}
		this._render();
	}
}
