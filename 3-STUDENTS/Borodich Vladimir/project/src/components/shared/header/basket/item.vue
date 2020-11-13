<template>
    <div class="drop-cart__product">
        <router-link :to="`/product/${item.id}/${item.name.replaceAll(' ', '_')}`" class="drop-cart__product-link">
            <img :src="baseImgUrl + item.img" alt="product" class="drop-cart__product-img" />
        </router-link>
        <div class="drop-cart__product-info">
            <router-link :to="`/product/${item.id}/${item.name.replaceAll(' ', '_')}`" class="drop-cart__product-name">{{
                item.name
            }}</router-link>
            <Stars cl="drop-cart__product-stars" :value="item.stars" />
            <div class="drop-cart__product-price">
                <span class="drop-cart__product-count">{{ item.amount }} </span>x {{ item.price }}
                <span class="drop-cart__product-sum"> = ${{ item.price * item.amount }}</span>
            </div>
        </div>
        <a @click.prevent="removeBasketItem(item.id)" href="#" class="drop-cart__product-close"><i class="far fa-times-circle"></i></a>
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
    methods:{
        removeBasketItem(id){
            console.log('remove id : ',id);
            this.$store.commit('removeBasketItem',id);
        }
    }
};
</script>

<style></style>
