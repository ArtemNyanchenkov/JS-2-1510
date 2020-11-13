import ITEM from './ITEM.js';

export default class List {
    constructor(basket, container, url) {
        this.items = [];
        this.basket = basket;
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/IlyaVoronOFF/JSON/master/Brand' + url;
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
        return fetch(url).then(d => d.json());
    }
}