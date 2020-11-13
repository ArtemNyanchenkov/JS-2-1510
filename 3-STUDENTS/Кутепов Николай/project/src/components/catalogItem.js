const CART = "../src/assets/img/kart_white.png";
export default class CatalogItem {
    
    constructor(item) {
        this.element = item;
    }

    render() {
        return `<div class="hot-offer">
        <div class="hot-offer__shadow">
            <img src="${this.element.productImg}" alt="t-shirt">
            <div class="hot-offer__hover">
                <div class="hot-offer__square">
                    <button 
                    name="add-to-cart" 
                    data-id="${this.element.productId}" 
                    data-name="${this.element.productName}"
                    data-price="${this.element.productPrice}"
                    data-image="${this.element.productImg}" 
                    data-stars="${this.element.stars}"
                    ><img src="${CART}" alt="order">Add to Cart</button>
                </div>
            </div>
        </div>
        <a href="single.html">${this.element.productName}</a>
        <h3>
            $${this.element.productPrice}.00
            <div class="hot-offer__stars">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div${this.element.stars}></div>
            </div>
        </h3>
        </div>`;
    }
}