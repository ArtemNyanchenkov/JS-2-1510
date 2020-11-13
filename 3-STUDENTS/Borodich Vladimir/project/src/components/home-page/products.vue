<template>
    <div class="products center">
        <h2 class="products__h2">Featured Items</h2>
        <p class="products__desc">Shop for items based on what we featured in this week</p>
            <Catalog url="prod.json" cl="products__content"/>
        <router-link  to="/catalog/man" class="button products__button">Browse All Product<i class="fas fa-long-arrow-alt-right"></i></router-link>
    </div>
</template>

<script>
import Catalog from '@/components/shared/catalog';
export default {
    components: {
        Catalog,
    },
};
</script>

<style></style>
