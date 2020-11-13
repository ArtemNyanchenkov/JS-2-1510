<template>
    <main class="main">
        <!-- slider section -->
        <Slider />

        <!-- section category -->
        <Category />

        <!-- section products -->
        <Products />

        <!-- section Feature -->
        <Feature/>
    </main>
</template>

<script>
import Products from '@/components/home-page/products';
import Slider from '@/components/home-page/slider';
import Category from '@/components/home-page/category';
import Feature from '@/components/home-page/feature';
export default {
    components: {
        Products,
        Slider,
        Category,
        Feature
    },
};
</script>
<style scoped>
    @import '../layout/css/home.css';
</style>