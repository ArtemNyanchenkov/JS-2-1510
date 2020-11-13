<template>
  <div class="header__left">
            <router-link to="/" class="logo">
                <img src="@/assets/images/logo.png" alt="logo" class="logo__img">
                bran<span class="logo__last-letter">d</span>
            </router-link>
            <form class="header__form">
                <div class="header__form-browse">
                    <input type="checkbox" name="browse" id="browse" hidden>
                    <label class="header__form-summary" for="browse">Browse</label>
                    <div class="drop-menu">
                        <div class="drop-menu__overflow">
                            <div class="drop-menu__block">
                                <h3 class="drop-menu__heading">women</h3>
                                <a href="#" class="drop-menu__link">Dresses</a>
                                <a href="#" class="drop-menu__link">Tops</a>
                                <a href="#" class="drop-menu__link">Sweaters/Knits</a>
                                <a href="#" class="drop-menu__link">Jackets/Coats</a>
                                <a href="#" class="drop-menu__link">Blazers</a>
                                <a href="#" class="drop-menu__link">Denim</a>
                                <a href="#" class="drop-menu__link">Leggings/Pants</a>
                                <a href="#" class="drop-menu__link">Skirts/Shorts</a>
                                <a href="#" class="drop-menu__link">Accessories</a>
                            </div>
                            <div class="drop-menu__block">
                                <h3 class="drop-menu__heading">Men</h3>
                                <a href="#" class="drop-menu__link">Tees/Tank tops</a>
                                <a href="#" class="drop-menu__link">Shirts/Polos</a>
                                <a href="#" class="drop-menu__link">Sweaters</a>
                                <a href="#" class="drop-menu__link">Sweatshirts/Hoodies</a>
                                <a href="#" class="drop-menu__link">Blazers</a>
                                <a href="#" class="drop-menu__link">Jackets/vests</a>
                                <a href="#" class="drop-menu__link">Accessories</a>
                            </div>
                            <div class="drop-menu__block">
                                <h3 class="drop-menu__heading">Men</h3>
                                <a href="#" class="drop-menu__link">Tees/Tank tops</a>
                                <a href="#" class="drop-menu__link">Shirts/Polos</a>
                                <a href="#" class="drop-menu__link">Sweaters</a>
                                <a href="#" class="drop-menu__link">Sweatshirts/Hoodies</a>
                                <a href="#" class="drop-menu__link">Blazers</a>
                                <a href="#" class="drop-menu__link">Jackets/vests</a>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="text" class="header__form-input" placeholder="Search for Item...">
                <button class="header__form-button"><i class="fas fa-search"></i></button>
            </form>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>