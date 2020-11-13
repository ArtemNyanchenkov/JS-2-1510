import { List } from './LIST.js';

export class Basket extends List {
    constructor(container = '#basket', url = '/basket.json', basket = null) {
        super(basket, container, url);
        this.type = 'basket';
    }


    _handleEvents() {
        this.container.addEventListener('click', e => {
            if (e.target.name == 'remove') {
                this.remove(e.target.dataset.id);
            };
        });
    }
    
    
    add(item) {
        let find = this.items.find(basketItem => basketItem.productId == item.productId);
        if (!find) {
            this.items.push(Object.assign({}, item, { amount: 1 }));
        } else {
            find.amount++;
          }
        this._render();
    }
    
    
    remove(id) {
        let find = this.items.find(basketItem => basketItem.productId == id);
        if (find.amount > 1) {
            find.amount--;
        } else {
            this.items.splice(this.items.indexOf(find), 1);
          }
        this._render();
    }
};