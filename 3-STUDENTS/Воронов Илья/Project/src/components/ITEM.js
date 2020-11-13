let itemTypes = {
    basket: basketItemRender,
    catalog: catalogItemRender
}

export default class ITEM {
    constructor(item, type) {
        this.item = item;
        this.type = type;
    }
    render() {
        return itemTypes[this.type](this.item)
    }
}

function catalogItemRender(item) {
    return `
                  <div class="product-item">
                    <img src="${item.productImg}" alt="${item.productId}">
                    <div class="hover-bg"><button 
                    name="add" 
                    data-name="${item.productName}"
                    data-price="${item.productPrice}"
                    data-img="${item.productImg}"
                    data-id="${item.productId}"
                    ><i class="fas fa-shopping-cart"></i> Add to cart</button></div>
                    <div class="product-item__desc">
                        <div class="product-item__name" name="bascket-click"><a href="#">${item.productName}</a></div>
                        <div class="product-item__detail">
                            <div class="product-item__price">$${item.productPrice}.00</div>
                            <div class="product-item__rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        </div>
                    </div>
                </div>
                        `;
}

function basketItemRender(item) {
    return `
                                    <div class="basket-item">
                                        <img src="${item.productImg}" alt="${item.productId}">
                                        <div class="basket-item-details">
                                            <a href="#">${item.productName}</a>
                                            <p>
                                                <form action="#">
                                                    <input type="text" id="basket-quantity" value="${item.amount}"> <span> X $${item.productPrice}.00 - $<output name="result-item">${item.amount * item.productPrice}</output></span>
                                            </p>
                                        </div>
                                        <button 
                                        name="remove"
                                        data-id="${item.productId}"
                                        class="fas fa-times-circle"
                                        ></button>
                                    </div>
           `;
}