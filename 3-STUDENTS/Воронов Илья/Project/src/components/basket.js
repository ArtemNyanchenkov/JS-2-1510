import BasketTotal from './basketTotal.js';
import BasketPoints from './basketPoints.js';
import LIST from './LIST.js';
import ITEM from './ITEM.js';

export default class Basket extends LIST {
    constructor(container = '.basket-items', totalBasket = '.basket-total', points = '.num-cart', url = '/basket.json', basket = null) {
        super(basket, container, url);
        this.totalBasket = document.querySelector(totalBasket);
        this.pointsBasket = document.querySelector(points);
        this.type = 'basket';
    }
    _handleEvents() {
        this.container.addEventListener('click', evt => {
            if (evt.target.name == 'remove') {
                this.remove(evt.target.dataset.id);
            }
        })
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
    _render() {
        let htmlTotal = '';
        let htmlPoints = '';
        let htmlStr = '';
        this.items.forEach((item) => {
            htmlStr += new ITEM(item, this.type).render();
        });
        this.container.innerHTML = htmlStr;
        htmlTotal += new BasketTotal(this.items).render();
        this.totalBasket.innerHTML = htmlTotal;
        htmlPoints += new BasketPoints(this.items).render();
        this.pointsBasket.innerHTML = htmlPoints;
    }
}