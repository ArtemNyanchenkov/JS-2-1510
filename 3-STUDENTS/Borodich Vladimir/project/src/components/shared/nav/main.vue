<template>
    <!-- nav section -->
    <nav class="nav center">
        <label class="nav-open" for="nav-drop"><i class="fas fa-bars"></i></label>
        <input type="checkbox" name="drop" id="nav-drop" />
        <ul class="menu ">
            <li class="nav-close">
                <label class="" for="nav-drop"><i class="far fa-times-circle"></i></label>
            </li>
            <Item :index="index" v-for="(item, index) in listMenu" :key="index" :item="item" />
        </ul>
    </nav>
</template>

<script>
import Item from './item';
import { httpGet } from '@/services/http-service';
export default {
    components: {
        Item,
    },

    data() {
        return {
            listMenu: [],
            url: 'https://raw.githubusercontent.com/wowankz/static/master/shop/menu/main-menu.json'
        };
    },

    methods: {
       async getItems(){
          let item = await httpGet(this.url);
         this.listMenu = item ? item : [];
        }
    },

    created(){
        this.getItems();
    }
};
</script>

<style></style>
