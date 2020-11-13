
import CatalogItem from './catalogItem.js';
import Goods from './goods.js';

export default class Catalog extends Goods {
     constructor(basket, container = '#catalog', url = '/catalog.json')  {
         super(basket, container, url) ;
         this.type = 'catalog';
     }
    
    _handleEvents() {
        this.container.addEventListener('click', (e) => {
            if (e.target.name == 'add-to-cart') {
                this.basket.add({
                    productId: e.target.dataset.id,
                    productImg: e.target.dataset.image,
                    productName: e.target.dataset.name,
                    productPrice: +e.target.dataset.price,
                    stars: e.target.dataset.stars,
                });
            }
        })
    }

    _render() {
        let str = "";
        this.items.forEach( (element) => {
             str += new CatalogItem(element).render();
        })
        this.container.innerHTML = str;
        }
}