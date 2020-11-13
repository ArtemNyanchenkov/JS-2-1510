<template>
    <div class="drop-cart">
        <div v-if="state.basketItems.length < 1" class="drop-cart__empty">Empty</div>
        <product-item v-for="item of state.basketItems" :key="item.id" :item="item"  />
        <div class="drop-cart__total">
            <span class="drop-cart__total-name">TOTAL</span>
            <span id="basket-total" class="drop-cart__total-sum">${{ amountTotal }}</span>
        </div>
        <router-link v-bind:class="{ disabled: state.basketItems.length < 1 }" to="/checkout" class="drop-cart__button">Checkout</router-link>
        <router-link v-bind:class="{ disabled: state.basketItems.length < 1 }" to="/cart" class="drop-cart__button">Go to cart</router-link>
    </div>
</template>

<script>
import productItem from './item';
export default {
    components: {
        productItem,
    },
    data() {
        return {
            state: this.$store.state.basket,
        };
    },
    methods: {
        
    },
    computed: {
        amountTotal() {
            return this.state.basketItems.length > 0
                ? this.state.basketItems.reduce((sum, item) => {
                      return (sum += item.price * item.amount);
                  }, 0)
                : '0';
        },
    },
    created() {
       this.$store.dispatch('getStorage');
    },
};
</script>

<style></style>
