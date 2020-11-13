<template>
    <router-link :to="item.href"
     :class="[
     {'drop-menu__link': item.tag !== 'div'},
     {'drop-menu__link-heading' : item.tag === 'h3'},
     {'drop-menu__banner': item.tag === 'div'}]">
     {{item.tag === 'a' ? item.value : ''}}
        <h3 v-if="item.tag === 'h3'" class="drop-menu__heading">{{item.value}}</h3>
        <div v-if="item.tag === 'div'" class="drop-menu__banner-text">Super <br />sale!</div>
    </router-link>
</template>

<script>
export default {
    props:{
        item:Object
    }
};
</script>

<style></style>
