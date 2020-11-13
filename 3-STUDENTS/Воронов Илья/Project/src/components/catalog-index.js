import LIST from './LIST.js';
import ITEM from './ITEM.js';

export default class Catalog extends LIST {
    constructor(basket, container = '#catalog-index', url = '/catalog.json') {
        super(basket, container, url);
        this.type = 'catalog';
    }

    _handleEvents() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'add' || evt.target.parentNode.name == 'add') {
                this.basket.add({
                    productId: evt.target.dataset.id,
                    productImg: evt.target.dataset.img,
                    productName: evt.target.dataset.name,
                    productPrice: +evt.target.dataset.price,
                });
            }
        })
    }
    _render() {
        let htmlStr = '';
        this.items.forEach((item) => {
            htmlStr += new ITEM(item, this.type).render();
        });
        this.container.innerHTML = htmlStr;
    }
}