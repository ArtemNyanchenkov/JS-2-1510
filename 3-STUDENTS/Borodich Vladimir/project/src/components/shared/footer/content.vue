<template>
  <!-- section footer-content -->
        <div class="footer-content center">
            <div class="footer-content__about">
                <a href="#" class="logo">
                    <img src="@/assets/images/logo.png" alt="logo" class="logo__img" />
                    bran<span class="logo__last-letter">d</span>
                </a>
                <p class="footer-content__desc">
                    Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary
                    materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.
                </p>
                <p class="footer-content__desc">
                    Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless
                    technologies. Dynamically optimize.
                </p>
            </div>
            <div class="footer-content__company">
                <h3 class="footer-content__h3">COMPANY</h3>
                <ul class="footer-menu ">
                    <router-link tag="li" v-for="(item,index) in listMenu.company" :key="index" :to="item.href" class="footer-menu__item">
                        <a href="#" class="footer-menu__link">{{item.value}}</a>
                    </router-link>
                </ul>
            </div>
            <div class="footer-content__information">
                <h3 class="footer-content__h3">INFORMATION</h3>
                <ul class="footer-menu ">
                    <router-link tag="li" v-for="(item,index) in listMenu.information" :key="index" :to="item.href" class="footer-menu__item">
                        <a href="#" class="footer-menu__link">{{item.value}}</a>
                    </router-link>
                </ul>
            </div>
            <div class="footer-content__category">
                <h3 class="footer-content__h3">SHOP CATEGORY</h3>
                <ul class="footer-menu ">
                    <router-link tag="li" v-for="(item,index) in listMenu['shop-category']" :key="index" :to="item.href" class="footer-menu__item">
                        <a href="#" class="footer-menu__link">{{item.value}}</a>
                    </router-link>
                </ul>
            </div>
        </div>
</template>

<script>
import { httpGet } from '@/services/http-service';
export default {
    
data() {
        return {
            listMenu: [],
            url: 'https://raw.githubusercontent.com/wowankz/static/master/shop/menu/footer-menu.json'
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
}
</script>

<style>

</style>