import CatalogItem from './catalogItem.js';
import IndexUnit from './components.js';

export default class Catalog extends IndexUnit {
    constructor(basket, container, url) {
        super ('#catalog', '/catalog.json');
        this.basket = null;     
        this._init();
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
