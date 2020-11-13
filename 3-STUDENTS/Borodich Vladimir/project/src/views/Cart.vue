<template>
    <main class="main">
        <section class="shopping-cart center">
            <div class="shopping-cart__table">
                <div class="shopping-cart__headings">
                    <div class="shopping-cart__headings-name shopping-cart__headings-name_big">Product Details</div>
                    <div class="shopping-cart__headings-name">Unite Price</div>
                    <div class="shopping-cart__headings-name">Quantity</div>
                    <div class="shopping-cart__headings-name">Shipping</div>
                    <div class="shopping-cart__headings-name">Subtotal</div>
                    <div class="shopping-cart__headings-name">ACTION</div>
                </div>
                <div v-for="(item, index) in products" :key="index" class="shopping-cart__product-wrap">
                    <ProductItem :item="item" />
                </div>
            </div>
            <div class="shopping-cart__button-box">
                <a @click.prevent="clearCart" href="#" class="shopping-cart__button">CLEAR SHOPPING CART</a>
                <a href="#" class="shopping-cart__button">CONTINUE SHOPPING</a>
            </div>

            <div class="shopping-cart__form">
                <form action="#" class="shopping-cart__form-address">
                    <div class="shopping-cart__form-heading">Shipping Address</div>
                    <div class="shopping-cart__form-country">
                        <input name="country" list="countries" placeholder="Bangladesh" />
                        <datalist id="countries">
                            <option value="USA">USA</option>
                            <option value="Russia">Russia</option>
                        </datalist>
                    </div>
                    <input type="text" class="shopping-cart__form-state" placeholder="State" />
                    <input type="number" class="shopping-cart__form-postcode" placeholder="Postcode / Zip" />
                    <a href="#" class="shopping-cart__form-button">Get a quote</a>
                </form>
                <form action="#" class="shopping-cart__form-discount">
                    <div class="shopping-cart__form-heading">Coupon discount</div>
                    <label class="shopping-cart__label-coupon" for="coupon"> Enter your coupon code if you have one </label><br />
                    <input class="shopping-cart__form-coupon" type="text" name="coupon" id="coupon" placeholder="State" />
                    <a href="#" class="shopping-cart__form-button">Apply coupon</a>
                </form>
                <div class="shopping-cart__form-total">
                    <p class="shopping-cart__form-sub">Sub total <span>${{amountTotal}}</span></p>
                    <p class="shopping-cart__form-grand">GRAND TOTAL <span>${{amountTotal}}</span></p>
                    <router-link to="/checkout" class="shopping-cart__button_red">proceed to checkout</router-link>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import ProductItem from '@/components/cart-page/product-item';
export default {
    components: {
        ProductItem,
    },

    methods: {
        clearCart() {
            this.$store.commit('clearCart');
        },
    },

    computed: {
        products() {
            return this.$store.state.basket.basketItems;
        },
        amountTotal() {
            return this.$store.state.basket.basketItems.length > 0
                ? this.$store.state.basket.basketItems.reduce((sum, item) => {
                      return (sum += item.price * item.amount);
                  }, 0)
                : '0';
        },
    },
};
</script>

<style scoped>
@import '../layout/css/shopping-cart.css';
</style>
