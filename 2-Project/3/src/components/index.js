import { Basket } from './basket.js';
import { Catalog } from './catalog.js';

export default () => {
    console.log(Catalog)
    console.log(Basket)

    let basket = new Basket();
    let catalog = new Catalog(basket);
}