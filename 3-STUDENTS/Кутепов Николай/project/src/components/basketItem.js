
export default class BasketItem {
    
    constructor(item) {
        this.item = item;
    }

    render() {
        return `<div class="basket__item">
        <img src="${this.item.productImg}" alt="item1">
        <div class="basket__item-about">
            <h3>${this.item.productName}</h3>
            <div class="hot-offer__stars-basket">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div${this.item.stars ? this.item.stars : ""}></div>
            </div>
            <div class="amount-price">
                <span id="amount-item">${this.item.amount}</span>&nbsp;
                x &nbsp;$
                <span id="price-item">${this.item.productPrice}.00</span>
            </div>
        </div>
        <a href="#" name="remove" data-id=${this.item.productId}><i class="fas fa-times-circle"></i></a>
        </div>`;
    }
}