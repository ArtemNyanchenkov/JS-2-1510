let itemTypes = {
    basket: basketItemRenderer,
    catalog: catalogItemRenderer,
}

export default class Item {
    constructor(item, type) {
        this.item = item;
        this.type = type;
    }
    render() {
        return itemTypes[this.type](this.item)
    }
}

function basketItemRenderer(item) {
    return `
            <div class="drop-cart__product">
                <a href="product.html" class="drop-cart__product-link">
                    <img src="${item.productImg}"
                        alt="product" class="drop-cart__product-img">
                </a>
                <div class="drop-cart__product-info">
                    <a href="product.html" class="drop-cart__product-name">${item.productName}</a>
                    <div class="drop-cart__product-stars">
                        <i class="${item.stars > "0" ? "fas" : "far"} ${item.stars === "0.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        <i class="${item.stars > "1" ? "fas" : "far"} ${item.stars === "1.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        <i class="${item.stars > "2" ? "fas" : "far"} ${item.stars === "2.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        <i class="${item.stars > "3" ? "fas" : "far"} ${item.stars === "3.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        <i class="${item.stars > "4" ? "fas" : "far"} ${item.stars === "4.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                    </div>
                    <div class="drop-cart__product-price">
                        <span class="drop-cart__product-count">${item.amount} </span> x ${item.productPrice}
                        <span class="drop-cart__product-sum"> = $${item.productPrice * item.amount}</span>
                    </div>
                </div>
                <a href="#" data-id="${item.productId}" name="remove" class="drop-cart__product-close far fa-times-circle"></a>
            </div>
            `
}

function catalogItemRenderer(item) {
    return `
            <div class="hot-offer">
                <div class="hot-offer__shadow">
                    <img src="${item.productImg}" alt="t-shirt">
                    <div class="hot-offer__hover">
                        <div class="hot-offer__square">
                            <button 
                                name="add"
                                data-id="${item.productId}"
                                data-name="${item.productName}"
                                data-img="${item.productImg}"
                                data-price="${item.productPrice}"
                            ><img src="../src/assets/img/kart_white.png" alt="order">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <a href="single.html">${item.productName}</a>
                <h3>
                    $${item.productPrice}
                    <!--stars-->
                </h3>
            </div>
            `
}