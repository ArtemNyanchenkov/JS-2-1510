import CatalogItem from "./CatalogItem.js";
import ItemList from "./ItemList.js";

export default class Catalog extends ItemList {
	constructor(cart, container, itemsPerRow) {
		super(container,
			"https://raw.githubusercontent.com/VoidPhantom/gbimg/master/catalog.json");

		this.cart = cart;
		this.itemsPerRow = itemsPerRow;
	}

	_makeItemObject(jsonItem) {
		return new CatalogItem(jsonItem.id, jsonItem.name, jsonItem.price,
			jsonItem.img, jsonItem.qty);
	}

	_handleEvents() {
		this.container.addEventListener("click", e => {
			if(!e.target.classList.contains("snippet__addToCart")) {
				return;
			}

			const id = +e.target.dataset.itemId;
			this.cart.add(this.items[id]);
		});
	}

	_render() {
		let html = this._itemsToHtml();

		// A hack to get items on the last row to align
		for(let i = 0; i < this.itemsPerRow - 1; ++i) {
			html += '<div class="snippet__filler"></div>';
		}

		this.container.innerHTML = html;
	}
};
