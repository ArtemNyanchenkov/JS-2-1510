<template>
    <div>
        <div id="items-catalog" class="featured-items__list">
            
            <Item 
                v-for="item of items" 
                :key="item.productId"
                :item="item"
            />
            
        </div>
        <div class="featured-items__button">
            <a href="#">Browse All Product <i class="fas fa-long-arrow-alt-right"></i></a>
        </div>
    </div>
</template>

<script>

import { get } from '@/core/requests'
import Item from './CatalogItem'

export default {
    components: { Item },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/Eliasz-S/static/main/JSON/catalog.json',
        }
    },
    async mounted() {
        try {
            this.items = await get(this.url);
        }
        catch(err) {
            console.log(err);
        }
    }
}
</script>

<style>

</style>