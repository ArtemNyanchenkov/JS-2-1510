<template>
    <div class="card">
        <div class="card__hover">
            <a @click.prevent="addToCart" href="#" class="card__button-add">
                <img src="@/assets/images/cart-white.png" alt="cart" class="card__cart-img" />
                Add to Cart
            </a>
        </div>
        <a href="#" class="card__link">
            <img :src="baseImgUrl + item.img" alt="item.name" class="card__img" />
        </a>
        <div class="card__content">
            <router-link :to="`/product/${item.id}/${item.name.replaceAll(' ','_')}`" >
                <h3 class="card__h3">{{ item.name }}</h3>
            </router-link>
            <div class="card__price">
                ${{ item.price }}
                <Stars cl="card__stars" :value="item.stars" />
            </div>
        </div>
    </div>
</template>

<script>
import Stars from '@/components/shared/stars';
export default {
    components: {
        Stars,
    },
    props: {
        item: Object,
    },
    data() {
        return {
            baseImgUrl: 'https://raw.githubusercontent.com/wowankz/static/master/shop/img/',
        };
    },

    methods: {
        addToCart() {
            this.$store.commit('addToCart',this.item);
        },
    },
};
</script>

<style></style>
