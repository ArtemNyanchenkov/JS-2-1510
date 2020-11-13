const NAMES = ['Mango People T-Shirt', 'Banana People T-Shirt', 'Strawberry People T-Shirt', 'Orange People T-Shirt', 'Pumpkin People T-Shirt', 'Pineapple People T-Shirt', 'Cucumber People T-Shirt', 'Tomato People T-Shirt', 'Pink People T-Shirt'];
const PRICES = [52, 53, 55, 67, 69, 94, 23, 45, 55];

//
export default {
    items: [],
    container: null,
    imgFTPurl: 'https://raw.githubusercontent.com/IlyaVoronOFF/pictureStatic/master/Brand/catalog/',
    init() {
        this.container = document.querySelector('#catalog-product');
        this.items = getItems();
        this.render();
    },
    render() {
        let htmlStr = '';
        this.items.forEach((item, index) => {
            let imgURL = `${this.imgFTPurl}${index + 1}.jpg`;
            htmlStr += `
                  <div class="product-item">
                    <img src="${imgURL}" alt="product-${index + 1}">
                    <div class="hover-bg"><button><i class="fas fa-shopping-cart"></i> Add to cart</button></div>
                    <div class="product-item__desc">
                        <div class="product-item__name"><a href="#">${item.productName}</a></div>
                        <div class="product-item__detail">
                            <div class="product-item__price">$${item.productPrice}.00</div>
                            <div class="product-item__rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        </div>
                    </div>
                </div>
                        `;
        });
        this.container.innerHTML = htmlStr;
    }
}

//catalog.init();
//

function createNewItem(name, price) {
    return {
        productName: name,
        productPrice: price
    }
}

function getItems() {
    return NAMES.map((name, index) => createNewItem(NAMES[index], PRICES[index]));
}