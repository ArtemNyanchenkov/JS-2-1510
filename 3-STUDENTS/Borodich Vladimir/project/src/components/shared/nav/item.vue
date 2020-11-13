<template>
    <router-link tag="li" :to="item.href" class=" menu__item" active-class="menu__item_active" exact>
        <a :class="{'menu__link_first' : index ===  0}" class=" menu__link">{{item.value}}</a>
        <div v-if="item.subMenu" class="drop-menu nav__drop-menu">
            <SubMenu 
            v-for="(item , index) in item.subMenu" 
            :key="index" 
            :items ="item"/>
        </div>
    </router-link>
</template>

<script>
import SubMenu from './sub-menu'
export default {
    components:{
        SubMenu
    },
    props:{
        item:Object,
        index:Number
    }
};
</script>

<style></style>
