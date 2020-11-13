import CatalogItem from './catalogitem.js';
import Parent from './parent_class.js'

export default class Catalog extends Parent{
    constructor(basket, container = '#catalog', url = 'catalog.json', my_item) {
        super(container, url, my_item);
        this.basket = basket;
        this.my_item = CatalogItem;
    }
    _init() {
        this._get(this.url)
        .then(items => {
            this.items = items;
        })
        .then(() => {
            this._render();
            this._handleEvents();
        })
    }
    _handleEvents() {
        this.container.addEventListener('click', e => {
            if (e.target.name == 'add') {
                this.basket.add({
                    productId: e.target.dataset.id,
                    productImg: e.target.dataset.img,
                    productName: e.target.dataset.name,
                    productPrice: +e.target.dataset.price,
                })
            }
        })
    }
}


