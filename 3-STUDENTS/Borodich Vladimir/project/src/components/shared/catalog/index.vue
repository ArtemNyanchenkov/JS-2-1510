<template>
    <div :class="cl">
        <div v-show="catalogItems.length < 1" style="width: 100%;font-size: 5rem;color: #eeeeee;text-align: center;">
            <i class="fas fa-spinner fa-spin"></i>
        </div>
        <Item v-for="item of items" :key="item.id" :item="item" />
    </div>
</template>

<script>
import Item from './item';
import { httpGet } from '@/services/http-service';
export default {
    props: {
        url: String,
        cl: String,
    },
    components: {
        Item,
    },

    data() {
        return {
            catalogItems: [],
            baseUrl: 'https://raw.githubusercontent.com/wowankz/static/master/shop/catalog/',
        };
    },

    methods: {
        async getProducts() {
            let items = await httpGet(this.baseUrl + this.url);
            this.catalogItems = items ? items : [];
        },
        sortItems() {
            const typeSort = this.$store.state.sortForm.sort;
            console.log('sort : ', typeSort);
            return this.catalogItems.sort((a, b) => {
                switch (typeSort) {
                    case 'name':
                        if (a[typeSort] > b[typeSort]) return 1;
                        if (a[typeSort] < b[typeSort]) return -1;
                        return 0;
                    case 'price':
                        if (+a[typeSort] > +b[typeSort]) return 1;
                        if (+a[typeSort] < +b[typeSort]) return -1;
                        return 0;
                    default:
                        return 0;
                }
            });
        },
    },
    computed: {
        items() {
            return this.sortItems();
        },
    },

    created() {
        this.getProducts();
    },
};
</script>

<style></style>
