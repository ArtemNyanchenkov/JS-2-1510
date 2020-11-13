<template>
    <section class="breadcrumb center">
        <h1 class="breadcrumb__h1">{{ currentRoute.params['id'] }}</h1>
        <div class="breadcrumb__nav">
            <router-link to="/" class="breadcrumb__nav-link">Home </router-link>
            <router-link v-for="(item, index) in pathArr" :key="index" :to="createPath(item)" class="breadcrumb__nav-link">{{
                item
            }}</router-link>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            currentRoute: this.$route,
            pathArr: [],
        };
    },
    methods: {
        createPath(item) {
            let reg = new RegExp(`^.*${item}`);
            return reg.exec(this.currentRoute.path)[0];
        },
        splitePath(path) {
            return path.split('/').filter((v) => v !== '');
        },
    },
    created(){
        this.pathArr = this.splitePath(this.$route.path);
    },
    watch: {
        $route(toPath) {
            this.currentRoute = toPath;
            this.pathArr = this.splitePath(toPath.path);
        },
    },
};
</script>

<style></style>
