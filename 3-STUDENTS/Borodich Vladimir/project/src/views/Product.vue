<template>
    <main class="main">
        <section class="product">
            <div class="product__slide-img">
                <a href="#" class="product__slide-link product__slide-link_left">
                    <i class="fas fa-angle-left"></i>
                </a>
                <img src="https://raw.githubusercontent.com/wowankz/static/master/shop/img/product_img.jpg" alt="product" class="product__img" />
                <a href="#" class="product__slide-link product__slide-link_right">
                    <i class="fas fa-angle-right"></i>
                </a>
            </div>

            <div class="product__info">
                <div class="product__desc ">
                    <div class="category-name">
                        WOMEN COLLECTION
                        <div class="category-name__border-button"></div>
                    </div>
                    <h1 class="product__info-h1">Moschino Cheap And Chic</h1>
                    <div class="product__stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <p class="product__text">
                        Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative
                        architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional
                        portals.
                    </p>
                    <div class="product__property">
                        <div class="property">
                            <span class="property__name">MATERIAL: </span>
                            <span class="property__value">COTTON</span>
                        </div>
                        <div class="property">
                            <span class="property__name">DESIGNER:</span>
                            <span class="property__value"> BINBURHAN</span>
                        </div>
                    </div>

                    <span class="product__price">$561</span>
                    <div class="product__hr"></div>
                    <form method="POST" class="product__choose">
                        <div class="product__choose-datalist" data-color="">
                            <label class="product__choose-name" for="color">CHOOSE COLOR</label><br />
                            <input name="color" id="color" list="colors" placeholder="Red" />
                            <datalist id="colors">
                                <option selected value="RED">RED</option>
                                <option value="RED"/> 
                                <option value="Blue"/> 
                            </datalist>
                        </div>
                        <div class="product__choose-datalist">
                            <label class="product__choose-name" for="size">CHOOSE SIZE</label> <br />
                            <input name="size" list="sizes" id="size" placeholder="XXL" />
                            <datalist id="sizes">
                                <option selected value="XXL"> </option>
                                <option value="XL"> </option>
                            </datalist>
                        </div>
                        <div class="product__choose-datalist">
                            <label class="product__choose-name" for="quantity">QUANTITY</label><br />
                            <input type="number" name="quantity" id="quantity" placeholder="2" />
                        </div>
                    </form>
                    <a href="#" class="product__button">
                        <img src="@/assets/images/cart-red.png" alt="cart" class="product__button-img" />
                        Add to Cart
                    </a>
                </div>
            </div>
        </section>

        <!-- section may like -->
        <CatalogLike/>
    </main>
</template>

<script>
import CatalogLike from '@/components/product-page/catalog-like';
export default {
    components:{
        CatalogLike
    }
};
</script>

<style scoped>
@import '../layout/css/product.css';
</style>
