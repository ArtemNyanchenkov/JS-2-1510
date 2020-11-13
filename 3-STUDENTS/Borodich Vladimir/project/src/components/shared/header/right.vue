<template>
   <div class="header__right">
            <router-link to="/cart" class="header__cart">
                <div class="header__cart-badge">{{this.$store.state.basket.badge}}</div>
                <img src="@/assets/images/cart.png" alt="card" class="header__cart-img">
            </router-link>
            <Basket></Basket>

            <a href="#" class="button">My Account<i class="fas fa-caret-down"></i></a>
            <a href="#" class="icon-user"><i class="fas fa-user-alt"></i></a>
        </div>
</template>

<script>
import Basket from './basket';

export default {
    components:{
        Basket
    },
}
</script>

<style>

</style>