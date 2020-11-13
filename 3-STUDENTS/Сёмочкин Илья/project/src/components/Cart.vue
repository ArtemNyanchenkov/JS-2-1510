<template>
    <div class="header__cart" id='header-cart'>
        <img 
            src="@/assets/img/cart.png" 
            alt="cart" 
            id="toggle-cart"
            @click="show = !show"
            >
        <div class="qty" id="qty">
            {{ totalQty() }}
        </div>
        <div class="cart-dropdown" v-show="show">
            <div 
                id="checked-items" 
                v-for="item of items" 
                :key="item.productId"
            >
                <div class="cart-dropdown__checked-items">
                    <img :src="item.productImg" alt="pic">
                    <div>
                        <h3>{{ item.productName }}</h3>
                        <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                        <p>{{ item.amount }} x ${{ item.productPrice }}</p>
                    </div>
                    <button @click="remove(item.productId)" name="remove" class="fas fa-times-circle"></button>
                </div>
            </div>
            <div id="sum">
                <div id="total" class="cart-dropdown__sum">
                    <div>total</div>
                    <div>${{ totalPrice() }}</div>
                </div>
            </div>
            <div class="cart-dropdown__buttons">
                <a href="checkout.html">checkout</a>
                <a href="shopping-cart.html">go to cart</a>
            </div>
        </div>
    </div>
</template>

<script>

import { get } from '@/core/requests'
// import Item from './CatalogItem'

export default {
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/Eliasz-S/static/main/JSON/cart.json',
            show: false
        }
    },
    methods: {
        add(item) {
            let find = this.items.find(cartItem => cartItem.productId == item.productId);
    
            if (!find) { 
                this.items.push(Object.assign({}, item, { amount: 1 }));
            } else { 
                find.amount++;
            }
        },
        remove(id) {
            let find = this.items.find(cartItem => cartItem.productId == id);
    
            if (find.amount > 1) {
                find.amount--;
            } else {
                this.items.splice(this.items.indexOf(find), 1)
            }
        },
        totalPrice() {
            let sum = 0;
            for(let item of this.items) {
                sum += item.productPrice * item.amount;
            }
            return sum;
        },
        totalQty() {
            let qty = 0;
            for(let item of this.items) {
                qty += item.amount;
            }
            return qty;
        }
    },

    async mounted() {
        try {
            this.items = (await get(this.url)).content;
        }
        catch(err) {
            console.log(err);
        }
    }
}
</script>

<style>

</style>