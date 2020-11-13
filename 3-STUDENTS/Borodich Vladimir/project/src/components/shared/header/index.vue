<template>
    <!-- header section -->
    <header class="header center">
        <header-left></header-left>
        <header-right></header-right>
    </header>
</template>

<script>
import headerRight from './right';
import headerLeft from './left';
export default {
    components: {
        headerRight,
        headerLeft,
    },
};
</script>

<style></style>
