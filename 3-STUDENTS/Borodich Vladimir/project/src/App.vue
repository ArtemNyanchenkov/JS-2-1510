<template>
    <div >
        <Header />
        <Nav />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import Nav from './components/shared/nav/main';
export default {
    components: {
        Header,
        Footer,
        Nav,
    },
};
</script>

<style lang="scss"></style>
