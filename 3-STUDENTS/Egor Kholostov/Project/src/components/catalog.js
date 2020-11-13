// import CatalogItem from './catalogItem.js';
import LIST from './LIST';

export default class Catalog extends LIST{
    constructor (basket, container = '#catalog', url = '/catalog.json') {
        super (basket,container,url);
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

