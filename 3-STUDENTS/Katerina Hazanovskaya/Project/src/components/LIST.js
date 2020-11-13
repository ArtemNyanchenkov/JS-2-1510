import ITEM from './ITEM.js'

export default class LIST {
	constructor(basket, container, url) {
		this.items = [];
		this.basket = basket;
		this.container = document.querySelector(container);
		this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
		//this.type = basket ? 'catalog' : 'basket';//
		this._init();
	  }

	  _init() {
			this._get(this.url)
			.then(data => {
				this.items = this.type === 'catalog' ? data : data.content;
			})
			.then(() => {
				this._render();
				this._handleEvents();
			})
 		 }

	  _get(url) {
		return fetch(url).then(d => d.json()) 
		  }
		  		  
		_render() {
			let htmlStr = '';
			//let type = this.constructor.name.toLowerCase();//
			this.items.forEach((item) => {
					htmlStr += new ITEM(item, this.type).render();
			});
			this.container.innerHTML = htmlStr;
		}
}