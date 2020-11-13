import List from './list';

export default class Catalog extends List {
    constructor(basket, container = '#catalog', url = '/catalog.json') {
        super(container, url)
        this.type = 'catalog';
        this.basket = basket;
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