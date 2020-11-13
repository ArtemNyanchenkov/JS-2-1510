import Basket from './basket.js'
import Catalog from './catalog.js'

export default () => {
    let bascet = new Basket();
    let catalog = new Catalog(bascet);
}
