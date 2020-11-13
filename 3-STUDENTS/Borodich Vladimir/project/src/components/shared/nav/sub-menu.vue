<template>
    <div class="drop-menu__block">
        <SubMenuItem
         v-for="(item , index) in items"
         :key="index"
         :item="item" />
    </div>
</template>

<script>
import SubMenuItem from './sub-menu-item';
export default {
    components: {
        SubMenuItem,
    },
    props: {
        items: Array,
    },
};
</script>

<style></style>
