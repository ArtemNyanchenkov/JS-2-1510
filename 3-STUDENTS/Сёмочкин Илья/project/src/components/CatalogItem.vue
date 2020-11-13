<template>
    <div class="featured-items__item">
        <div class="featured-items__item-top"><img :src="item.productImg" alt="t-shirt">
            <div class="add-hover-div">
                <div>
                    <button name="add" @click="add(item)"><img src="@/assets/img/cart_small.png" alt="cart_small">Add to Cart</button>
                    <a href="#"><i class="fas fa-retweet"></i></a>
                    <a href="#"><i class="far fa-heart"></i></a>
                </div>
            </div>
        </div>
        <div class="featured-items__item-bottom">
            <div>{{ item.productName }}</div>
            <div>${{ item.productPrice }}.00</div>
        </div>
    </div>
</template>

<script>

export default {
    props: [ 'item' ]
}
</script>

<style>

</style>