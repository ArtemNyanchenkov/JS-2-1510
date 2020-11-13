<template>
    <div  class="shopping-cart__product">
        <div class="shopping-cart__product-details">
            <router-link :to="`/product/${item.id}/${item.name.replaceAll(' ','_')}`" class="shopping-cart__product-img">
                <img :src="baseImgUrl + item.img" alt="product" />
            </router-link>

            <div class="shopping-cart__product-info">
                <router-link :to="`/product/${item.id}/${item.name.replaceAll(' ','_')}`" class="shopping-cart__product-name">
                    <h3>{{item.name}}</h3>
                </router-link>
                <p class="shopping-cart__product-property">Color: <span>Red</span></p>
                <p class="shopping-cart__product-property">Size: <span>Xll</span></p>
            </div>
        </div>
        <div class="shopping-cart__product-price">${{item.price}}</div>
        <div class="shopping-cart__product-quantity">
            <input type="number" placeholder="2" min="1" v-model="item.amount" />
        </div>
        <div class="shopping-cart__product-shipping">FREE</div>
        <div class="shopping-cart__product-subtotal">${{ item.price * item.amount }}</div>
        <div class="shopping-cart__product-action">
            <a @click.prevent="removeBasketItem(item.id)" href="#" class="shopping-cart__product-close"><i class="fas fa-times-circle"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        item:Object
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
