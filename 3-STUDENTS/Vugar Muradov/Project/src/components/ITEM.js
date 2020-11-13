let itemTypes = {
    basket: basketItemRenderer,
    catalog: catalogItemRenderer,
};

export class Item {
    constructor(item, type) {
        this.item = item;
        this.type = type;
    }

    render() {
        return itemTypes[this.type](this.item);
    }
};

function catalogItemRenderer(item) {
    return `
            <article>
                <a style="cursor: pointer">
                    <img src="${item.productImg}" alt="item">
                    <h6>${item.productName}</h6>
                    <button class="buyButton" name="add" 
                         name="add"
                         data-id="${item.productId}"
                         data-name="${item.productName}"
                         data-img="${item.productImg}"
                         data-price="${item.productPrice}"
                     >Add to Cart</button>
                     <p class="price">$${item.productPrice}</p>
                 </a>
             </article>
            `
};

function basketItemRenderer(item) {
    return `
            <div class="cartProduct">
                <div class="d-flex justify-content-between">
                    <a href="product.html"><img src="${item.productImg}" width="72px" alt="cartPhoto"></a>
                    <div class="tripleCart">
                    <a href="product.html" class="reboxZane">${item.productName}</a>
                        <div class="yellowStars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></div>
                        <div class="inCartQuantity">
                            <span>${item.amount} </span> x ${item.productPrice}
                            <span> = $${item.productPrice * item.amount}</span>
                        </div>
                    </div>
                </div>
                <button class="closeButton" name="remove" style="background-color: white; border: none;"data-id="${item.productId}">X</button>
            </div>
            `
};