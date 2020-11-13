import { Item } from './ITEM.js';

export class List {
    constructor(basket, container, url) {
        this.items = [];
        this.basket = basket; //if(basket) >> Catalog или Basket
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
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
        // let type = this.constructor.name.toLowerCase(); // 'Catalog' || 'Basket' >> 'catalog' || 'basket'
        this.items.forEach((item) => {
            htmlStr += new Item(item, this.type).render();
        });
        this.container.innerHTML = htmlStr;
    }
}