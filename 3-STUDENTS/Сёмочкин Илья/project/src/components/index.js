
export default () => {
    const app = new Vue({
        el: '#app',
        data: {
            catalog: {
                items: [],
                url: 'https://raw.githubusercontent.com/Eliasz-S/static/main/JSON/catalog.json',

            },
            cart: {
                items: [],
                url: 'https://raw.githubusercontent.com/Eliasz-S/static/main/JSON/cart.json',
                show: false
            }
        },
        methods: {
            get(url) {
                return fetch(url).then(d => d.json()) 
            },
            add(item) {
                let find = this.cart.items.find(cartItem => cartItem.productId == item.productId);
        
                if (!find) { 
                    this.cart.items.push(Object.assign({}, item, { amount: 1 }));
                } else { 
                    find.amount++;
                }
            },
            remove(id) {
                let find = this.cart.items.find(cartItem => cartItem.productId == id);
        
                if (find.amount > 1) {
                    find.amount--;
                } else {
                    this.cart.items.splice(this.cart.items.indexOf(find), 1)
                }
            },
            totalPrice() {
                let sum = 0;
                for(let item of this.cart.items) {
                    sum += item.productPrice * item.amount;
                }
                return sum;
            },
            totalQty() {
                let qty = 0;
                for(let item of this.cart.items) {
                    qty += item.amount;
                }
                return qty;
            }
        },
    
        async mounted() {
            try {
                this.catalog.items = await this.get(this.catalog.url);
                this.cart.items = (await this.get(this.cart.url)).content;
            }
            catch(err) {
                console.log(err);
            }
        }
    })
} 