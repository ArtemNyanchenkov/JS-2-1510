import ITEM from './ITEM.js';

export default class SHOP {
    constructor(basket, container, url){
        this.items = [];
        this.basket = basket;
        this.container = document.querySelector(container);
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
        this._init();
    }

    _init() {
        this._get(this.url)
            .then(data => {
                this.items = this.basket ? data : data.content;
            })
            .then(() => {
                this._render();
                this._handleEvents();
            })
    }

    _get(url) {
        return fetch(url).then(d => d.json()) //на выходе из этого метода вы получите полноценный объект(массив) с данными
    }

    _handleEvents() {
        this.container.addEventListener('click', e => {
            if (e.target.name == 'add') {
                this.basket.add({
                    productId: e.target.dataset.id,
                    productImg: e.target.dataset.img,
                    productName: e.target.dataset.name,
                    productPrice: +e.target.dataset.price
                })
            }
        })
    }

    _render() {
        let htmlStr = '';
        let type = this.constructor.name.toLowerCase();
        this.items.forEach((item) => {
            htmlStr += new ITEM(item, type).render();
        });
        this.container.innerHTML = htmlStr;
    }

}