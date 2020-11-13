<template>
    <div class="aside-menu">
        <input type="checkbox" :name="item.block.toLowerCase()" :id="item.block.toLowerCase()" :checked="indexBlock === 0" hidden />
        <label :for="item.block.toLowerCase()" class="aside-menu__heading">{{ item.block }}</label>
        <div class="aside-menu__drop-menu">
            <nav class="aside-menu__nav">
                <ul class="aside-menu__nav-list">
                    <router-link tag="li" v-for="(link, index) in item.links" :key="index" :to="link.href" class="aside-menu__nav-item">
                        <a class="aside-menu__nav-link">{{ link.name }}</a>
                    </router-link>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
        indexBlock:Number
    },
};
</script>

<style></style>
