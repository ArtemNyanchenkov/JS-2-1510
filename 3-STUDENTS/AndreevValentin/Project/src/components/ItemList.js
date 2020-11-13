export default class ItemList {
	constructor(container, url) {
		this.container = container;
		this.items = {};

		fetch(url).then(response => {
			return response.json();
		}).then(json => {
			json.forEach(jsonItem => {
				this.items[jsonItem.id] = this._makeItemObject(jsonItem);
			});

			this._handleEvents();
			this._render();
		});
	}

	_itemsToHtml() {
		return Object.values(this.items).map(item => item.toHtml()).join("");
	}
}
