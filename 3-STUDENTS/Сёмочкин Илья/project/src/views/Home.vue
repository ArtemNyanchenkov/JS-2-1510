<template>
    <div>
        <header class="header container">
            <div class="header__left">
                <a href="index.html" class="header__logo"><img src="@/assets/img/logo.png" alt="logo"> Bran<span>d</span></a>
                <form action="#" class="header__search" method="get">
                    <input type="checkbox" id="browse-checkbox">
                    <label for="browse-checkbox" class="browse">Browse <i class="fas fa-caret-down"></i></label>
                    <label for="browse-checkbox" class="browse-active">Browse <i class="fas fa-caret-up"></i></label>
                    <div class="drop-down">
                        <div>Women</div>
                        <a href="#">Dresses</a>
                        <a href="#">Tops</a>
                        <a href="#">Sweaters/Knits</a>
                        <a href="#">Jackets/Coats</a>
                        <a href="#">Blazers</a>
                        <a href="#">Denim</a>
                        <a href="#">Leggings/Pants</a>
                        <a href="#">Skirts/Shorts</a>
                        <a href="#">Accessories</a>
                        <div>Men</div>
                        <a href="#">Tees/Tank tops</a>
                        <a href="#">Shirts/Polos</a>
                        <a href="#">Sweaters</a>
                        <a href="#">Sweatshirts/Hoodies</a>
                        <a href="#">Blazers</a>
                        <a href="#">Jackets/vests</a>
                    </div>
                    <input name="search" type="text" placeholder="Search for Item...">
                    <button><i class="fas fa-search"></i></button>
                </form>
            </div>
            <div class="header__right">
                <Cart />
                <a class="header__account-bar" href="#">My Account <i class="fas fa-caret-down"></i></a>
            </div>
        </header>
        <div class="header__line"></div>
        <nav class="topNav">
            <a href="index.html">Home</a>
            <a href="product.html">Man</a>
            <a href="single-page.html">Women</a>
            <a href="#">Kids</a>
            <a href="#">Accoseriese</a>
            <a href="#">Featured</a>
            <a href="#">Hot Deals</a>
        </nav>
        <div class="brand-top__background">
            <div class="brand-top container">
                <div class="brand-top__header">
                    <div class="brand-top__header-part1">The Brand</div>
                    <div class="brand-top__header-part2">of luxerious <span>fashion</span></div>
                </div>
            </div>
        </div>
        <div class="news-and-offers container">
            <div class="news-and-offers__list1">
                <div class="news-and-offers__list1-content">
                    <div class="news-and-offers__declaration-top">hot deal</div>
                    <div class="news-and-offers__declaration-bottom">for men</div>
                </div>
            </div>
            <div class="news-and-offers__list2">
                <div class="news-and-offers__list2-content">
                    <div class="news-and-offers__declaration-top">luxirous &amp; trendy</div>
                    <div class="news-and-offers__declaration-bottom">accesories</div>
                </div>
            </div>
            <div class="news-and-offers__list3">
                <div class="news-and-offers__list3-content">
                    <div class="news-and-offers__declaration-top">30% offer</div>
                    <div class="news-and-offers__declaration-bottom">women</div>
                </div>
            </div>
            <div class="news-and-offers__list4">
                <div class="news-and-offers__list4-content">
                    <div class="news-and-offers__declaration-top">new arrivals</div>
                    <div class="news-and-offers__declaration-bottom">for kids</div>
                </div>
            </div>
        </div>
        <div class="featured-items container">
            <div class="featured-items__header">
                <div class="featured-items__header-top">Featured Items</div>
                <div class="featured-items__header-bottom">Shop for items based on what we featured in this week</div>
            </div>
            <Catalog />
        </div>
        <div class="special-offer container">
            <div class="special-offer__info">
                <div class="special-offer__info-declaration">
                    <div>30% <span>offer</span></div>
                    <div>for women</div>
                </div>
            </div>
            <div class="special-offer__general-info">
                <div class="special-offer__general-info__div">
                    <img src="@/assets/img/truck.svg" alt="truck">
                    <div class="special-offer__general-info__div-text">
                        <h3>Free Delivery</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                            models.</p>
                    </div>
                </div>
                <div class="special-offer__general-info__div">
                    <img src="@/assets/img/percentage.svg" alt="percentage">
                    <div class="special-offer__general-info__div-text">
                        <h3>Sales & discounts</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                            models.</p>
                    </div>
                </div>
                <div class="special-offer__general-info__div">
                    <img src="@/assets/img/crown.svg" alt="crown">
                    <div class="special-offer__general-info__div-text">
                        <h3>Quality assurance</h3>
                        <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive
                            models.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="subscribe-parent">
            <div class="subscribe container">
                <div class="subscribe-left">
                    <div class="subscribe-left__content">
                        <div class="subscribe-left__content-photo"><img src="@/assets/img/subscribe-woman-photo.jpg"
                                                                        alt="subscribe-woman-photo"></div>
                        <div class="subscribe-left__text">
                            <p class="subscribe-left__text-main">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                                a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                            <div class="subscribe-left__text-main-author1">Bin Burhan</div>
                            <div class="subscribe-left__text-main-author2">Dhaka, Bd</div>
                        </div>
                        <div class="pagination-rectangle">
                            <a href="#"></a><a href="#"></a><a href="#"></a>
                        </div>
                    </div>
                </div>
                <div class="subscribe-right">
                    <div class="subscribe-right__header">
                        <div class="subscribe-right__header-top">Subscribe</div>
                        <div class="subscribe-right__header-bottom">for our newsletter and promotion</div>
                    </div>
                    <form action="#" class="subscribe-right__form" method="get">
                        <input name="search" type="text" placeholder="Enter Your Email">
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="various-info container">
            <div class="brand__about">
                <h2 class="header__logo"><img src="@/assets/img/logo.png" alt="logo"> Bran<span>d</span></h2>
                <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate
                    multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes
                    and cross-unit partnerships. </p><br>
                <p>Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior
                    initiatives for wireless technologies. Dynamically optimize.</p>
            </div>
            <div class="brand__various-links">
                <div class="brand__various-links__list">
                    <h2>company</h2>
                    <a href="index.html">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">How It Works</a>
                    <a href="#">Contact</a>
                </div>
                <div class="brand__various-links__list">
                    <h2>information</h2>
                    <a href="#">Terms &amp; Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">How to Buy</a>
                    <a href="#">How to Sell</a>
                    <a href="#">Promotion</a>
                </div>
                <div class="brand__various-links__list">
                    <h2>shop category</h2>
                    <a href="product.html">Men</a>
                    <a href="single-page.html">Women</a>
                    <a href="#">Child</a>
                    <a href="#">Apparel</a>
                    <a href="#">Browse All</a>
                </div>
            </div>
        </div>
        <div class="footer-main">
            <div class="footer container">
                <div class="copyright">&copy; 2020 Brand All Rights Reserved.</div>
                <div class="socials"><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a
                        href="#"><i class="fab fa-linkedin-in"></i></a><a href="#"><i class="fab fa-pinterest-p"></i></a><a
                        href="#"><i class="fab fa-google-plus-g"></i></a></div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

import Cart from '@/components/Cart.vue'
import Catalog from '@/components/Catalog.vue'


export default {
    name: 'Home',
    components: { Cart, Catalog }
    // data() {
    //     return {
    //         cart: {
    //             items: [],
    //             url: 'https://raw.githubusercontent.com/Eliasz-S/static/main/JSON/cart.json',
    //             show: false
    //         }
    //     }
    // },
    // methods: {
    //     get(url) {
    //         return fetch(url).then(d => d.json()) 
    //     },
    //     add(item) {
    //         let find = this.cart.items.find(cartItem => cartItem.productId == item.productId);
    
    //         if (!find) { 
    //             this.cart.items.push(Object.assign({}, item, { amount: 1 }));
    //         } else { 
    //             find.amount++;
    //         }
    //     },
    //     remove(id) {
    //         let find = this.cart.items.find(cartItem => cartItem.productId == id);
    
    //         if (find.amount > 1) {
    //             find.amount--;
    //         } else {
    //             this.cart.items.splice(this.cart.items.indexOf(find), 1)
    //         }
    //     },
    //     totalPrice() {
    //         let sum = 0;
    //         for(let item of this.cart.items) {
    //             sum += item.productPrice * item.amount;
    //         }
    //         return sum;
    //     },
    //     totalQty() {
    //         let qty = 0;
    //         for(let item of this.cart.items) {
    //             qty += item.amount;
    //         }
    //         return qty;
    //     }
    // },

    // async mounted() {
    //     try {
    //         this.cart.items = (await this.get(this.cart.url)).content;
    //     }
    //     catch(err) {
    //         console.log(err);
    //     }
    // }
}
</script>
