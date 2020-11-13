/*const products = [
    { id: 1, title: 'Burger', price: 150, image: 'images/hamburger-3184108_640.png' },
    { id: 2, title: 'Cheeseburger', price: 80, image: 'images/cheeseburger-34315.svg' },
    { id: 3, title: 'Chicken burger', price: 100, image: 'images/hamburger-576419.svg'},
    { id: 4, title: 'Hamburger', price: 200, image: 'images/cheeseburger-155659_640.png' },
    { id: 5, title: 'Fish burger', price: 150, image: 'images/burger-31770_640.png'},
    { id: 6, title: 'Big burger', price: 200, image: 'images/burger-312704_640.png' },
    { id: 7, title: 'Coffee', price: 80, image: 'images/coffee-34251_640.png' },
    { id: 8, title: 'Tea', price: 150, image: 'images/tea-153336_640.png' },
    { id: 9, title: 'Lemonade', price: 40, image: 'images/caipi-377960_640.png' },
    { id: 10, title: 'Cola', price: 50, image: 'images/fizzy-4805335_640.png'},
]

const renderGoodsItem = (title = 'Product none', price = 0, image = 'https://placehold.it/200x150') => {
    return `<div class="product">
        <img class="product__image" src="${image}" alt="image">
        <h3>${title}</h3>
        <p class="product__price">${price}</p>
        <button class="product__button">Add to cart</button>
        </div>`;
};

const renderGoodsList = (list) => {
   let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.image));
    document.querySelector('.products').innerHTML = goodsList;
    document.querySelector('.products').insertAdjacentHTML('afterbegin', list.map(item => renderGoodsItem(item.title, item.price, item.image)).join(''));
}

renderGoodsList(products);

    <button class="sortFromSmallestButton">Sort from smallest price</button>
    <button class="sortFromBiggerButton">Sort from bigger price</button>
    document.querySelector('.sortFromSmallestButton').addEventListener('click', function () {
        let counter = 0;
        if (counter === 0) {
            let removeEl = document.getElementsByClassName('product');
            while (removeEl[0]) {
                removeEl[0].parentNode.removeChild(removeEl[0]);
            }
            products.sort(function (a, b) {
                return a.price - b.price
            })
            renderGoodsList(products);
            ++counter
        }
})
document.querySelector('.sortFromBiggerButton').addEventListener('click', function () {
    let counter = 0;
    if (counter === 0) {
        let removeEl = document.getElementsByClassName('product');
        while (removeEl[0]) {
            removeEl[0].parentNode.removeChild(removeEl[0]);
        }
        products.sort(function (a, b) {
            return b.price - a.price
        })
        renderGoodsList(products);
        ++counter
    }
})

*/


class GoodsItem {
    constructor(id, title, price = 0, image = 'https://placehold.it/200x150') {
        this.title = title;
        this.price = price;
        this.image = image;
        this.id = id;

    }

    createEl() {
        return `<div class = "product" id = '${this.id}'>
        <img class="product__image" src="${this.image}" alt="image">
        <h3>${this.title}</h3>
        <p class="product__price">${this.price}</p> 
        <button  class="product__button" id = "button${this.id}">Add to cart</button>
        </div>`;
    }

}

class ItemCart extends GoodsItem {
    constructor(id, title, price = 0, image = 'https://placehold.it/200x150', counter = 1) {
        super(id, title, price, image );
        this.counter = counter
    }
    createCartEl () {
         return `<div class="product__cart product__cart${this.id}" id = '${this.id}'>
        <img class="product__imageCart" src="${this.image}" alt="image">
        <div class="product__Cart__rightBlock">
        <h3>${this.title}</h3>
        <p class="product__price">Price $${this.price}</p> 
        <p >Count ${this.counter}</p>
        </div>
        <button class="product__cart__delButton" id="${this.id}">x</button>
        </div>`;
    }

}

class GoodsList {
    constructor() {
        this.addedToCart = [];
        this.goods = [];
    }

    fetchGoods() {

        this.goods = [
            {id: 1, title: 'Burger', price: 150, image: 'images/hamburger-3184108_640.png', counter: 1},
            {id: 2, title: 'Cheeseburger', price: 80, image: 'images/cheeseburger-34315.svg', counter: 1},
            {id: 3, title: 'Chicken burger', price: 100, image: 'images/hamburger-576419.svg', counter: 1},
            {id: 4, title: 'Hamburger', price: 200, image: 'images/cheeseburger-155659_640.png', counter: 1},
            {id: 5, title: 'Fish burger', price: 150, image: 'images/burger-31770_640.png', counter: 1},
            {id: 6, title: 'Big burger', price: 200, image: 'images/burger-312704_640.png', counter: 1},
            {id: 7, title: 'Coffee', price: 80, image: 'images/coffee-34251_640.png', counter: 1},
            {id: 8, title: 'Tea', price: 150, image: 'images/tea-153336_640.png', counter: 1},
            {id: 9, title: 'Lemonade', price: 40, image: 'images/caipi-377960_640.png', counter: 1},
            {id: 10, title: 'Cola', price: 50, image: 'images/fizzy-4805335_640.png', counter: 1},
        ];


    }

    render() {
        document.querySelector('.products').insertAdjacentHTML
        ('afterbegin', this.goods.map(item => new GoodsItem(item.id, item.title, item.price, item.image, item.counter).createEl()).join(''));
    }

    productCartCounter() {
        //document.querySelector('.headerBlock__blockBasket__counter').textContent = `${this.addedToCart.length}`
        if (this.addedToCart.length === 0) {
            document.getElementById('counter').classList.toggle('headerBlock__blockBasket__counter');
            document.getElementById('counter').textContent = '';
        } else if (this.addedToCart.length > 0) {
            document.getElementById('counter').textContent = `${this.addedToCart.length}`;
        }
    }

    sumPrice() {
        document.querySelector('.headerBlock__blockBasket__bottomBlock__totalPrice').innerHTML = "";
        let sum = 0;
        for (let i = 0; this.addedToCart.length > i; i++) {
            sum += (this.addedToCart[i].price * this.addedToCart[i].counter)
        }
        document.querySelector('.headerBlock__blockBasket__bottomBlock__totalPrice')
            .insertAdjacentHTML('afterbegin', `Total price ${sum}`)
    }

    deleteProductFromCart() {
        document.querySelector('.headerBlock__blockBasket__bottomBlock').addEventListener('click', (event) => {
            let target = event.target;
            if (target.tagName === 'BUTTON') {
                // document.querySelector(`.product__cart${String(target.id)}`).remove();
                document.querySelector(`.product__cart${target.id}`,).remove()
                let deleteIndex = this.addedToCart.findIndex(i => i.id === Number(target.id))
                this.addedToCart.splice(deleteIndex, 1)
                this.sumPrice()
                this.productCartCounter()
            }
        })

    }

    addToCart() {
        const quickAdd = (position) => {
            let i = Number(position);
            document.querySelector('.headerBlock__blockBasket__bottomBlock').insertAdjacentHTML
            ('afterbegin', new ItemCart(this.goods[i].id, this.goods[i].title, this.goods[i].price, this.goods[i].image, this.goods[i].counter).createCartEl());
        }
        const add = (position, targetIDString, Id) => {
            document.querySelector('.products').addEventListener('click', (event) => {
                let target = event.target
                if (target.id === targetIDString && this.addedToCart.some(elem => elem.id === Id) === false) {
                    this.productCartCounter()
                    this.addedToCart.push(this.goods[position])
                    this.productCartCounter()
                    quickAdd(position)
                    this.sumPrice()

                } else if (this.addedToCart.some(elem => elem.id === Id) === true && target.id === targetIDString) {
                    let a = this.addedToCart.findIndex(x => x.id === Id);
                    this.addedToCart[a].counter++
                    document.getElementById(String(Id)).remove()
                    quickAdd(position)
                    this.sumPrice()
                }
            })
        }
        /* add(0, 'button1', 1 );
         add(1, 'button2', 2 );
         add(2, 'button3', 3 );
         add(3, 'button4', 4 );
         add(4, 'button5', 5 );
         add(5, 'button6', 6 );
         add(6, 'button7', 7 );
         add(7, 'button8', 8 );
         add(8, 'button9', 9 );
         add(9, 'button10', 10 );

         */
        this.goods.forEach((el) => {
            let position = el.id
            add(position - 1, `button${position}`, position)
        })
    }
}
let rend = new GoodsList();
rend.fetchGoods()

rend.render()
rend.addToCart()
rend.deleteProductFromCart()

