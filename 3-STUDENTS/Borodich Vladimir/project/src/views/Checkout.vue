<template>
  <main class="main">

        <section class="checkout center">
            <div class="checkout__shipping-block">
                <input type="radio" name="drop-checkout" id="address" checked>
                <label for="address">
                    <span class="checkout__heading">01. Shipping Address</span>
                </label>
                <div class="checkout__form">
                    <form action="#" class="checkout__form-continue" method="POST">
                        <h4 class="checkout__form-h4">Check as a guest or register</h4>
                        <p class="checkout__form-text">Register with us for future convenience</p>
                        <div class="checkout__form-radio">
                            <input type="radio" id="guest" name="checkout" value="">
                            <label class="checkout__form-label" for="guest">checkout as guest</label>
                        </div>
                        <div class="checkout__form-radio">
                            <input type="radio" id="register" name="checkout" value="" checked>
                            <label class="checkout__form-label" for="register">register</label>
                        </div>

                        <h4 class="checkout__form-h4">register and save time!</h4>
                        <p class="checkout__form-text">Register with us for future convenience</p>
                        <p class="checkout__form-text"><i class="fas fa-angle-double-right"></i>Fast and easy
                            checkout
                        </p>
                        <p class="checkout__form-text"><i class="fas fa-angle-double-right"></i>Easy access to your
                            order history and status</p>
                        <a href="#" class="checkout__form-button checkout__form-button_left">Continue</a>
                    </form>
                    <form action="#" method="POST" class="checkout__form-login">
                        <h4 class="checkout__form-h4">Already registered?</h4>
                        <p class="checkout__form-text">Please log in below</p>
                        <label class="checkout__form-label" for="email">EMAIL ADDRESS<span> *</span></label>
                        <input type="email" name="email" id="email" placeholder="example@domen.com" required>
                        <label class="checkout__form-label" for="password">PASSWORD<span> *</span></label>
                        <input type="password" name="password" id="password" placeholder="Password" required>
                        <p class="checkout__form-text checkout__form-text_red"> <span>* </span> Required Fields</p>
                        <div class="checkout__button-box">
                            <a href="#" class="checkout__form-button">Log in</a>
                            <a href="#" class="checkout__form-forgot">Forgot Password ?</a>
                        </div>
                    </form>
                </div>

            </div>
            <div class="checkout__shipping-block">
                <input type="radio" name="drop-checkout" id="billing">
                <label for="billing">
                    <span class="checkout__heading">02. BILLING INFORMATION</span>
                </label>

                <div class="checkout__form">
                    <form action="#" class="checkout__form-continue" method="POST">
                        <h4 class="checkout__form-h4">Check as a guest or register</h4>
                        <p class="checkout__form-text">Register with us for future convenience</p>
                        <div class="checkout__form-radio">
                            <input type="radio" id="guest2" name="checkout" value="">
                            <label class="checkout__form-label" for="guest2">checkout as guest</label>
                        </div>
                        <div class="checkout__form-radio">
                            <input type="radio" id="register2" name="checkout" value="" checked>
                            <label class="checkout__form-label" for="register2">register</label>
                        </div>

                        <h4 class="checkout__form-h4">register and save time!</h4>
                        <p class="checkout__form-text">Register with us for future convenience</p>
                        <p class="checkout__form-text"><i class="fas fa-angle-double-right"></i>Fast and easy
                            checkout
                        </p>
                        <p class="checkout__form-text"><i class="fas fa-angle-double-right"></i>Easy access to your
                            order history and status</p>
                        <a href="#" class="checkout__form-button checkout__form-button_left">Continue</a>
                    </form>
                    <form action="#" method="POST" class="checkout__form-login">
                        <h4 class="checkout__form-h4">Already registered?</h4>
                        <p class="checkout__form-text">Please log in below</p>
                        <label class="checkout__form-label" for="email">EMAIL ADDRESS<span> *</span></label>
                        <input type="email" name="email" placeholder="example@domen.com" required>
                        <label class="checkout__form-label" for="password">PASSWORD<span> *</span></label>
                        <input type="password" name="password" placeholder="Password" required>
                        <p class="checkout__form-text checkout__form-text_red"> <span>* </span> Required Fields</p>
                        <div class="checkout__button-box">
                            <a href="#" class="checkout__form-button">Log in</a>
                            <a href="#" class="checkout__form-forgot">Forgot Password ?</a>
                        </div>
                    </form>
                </div>
            </div>
            <div class="checkout__shipping-block">
                <input type="radio" name="drop-checkout" id="shipping">
                <label for="shipping">
                    <span class="checkout__heading">03. SHIPPING INFORMATION</span>
                </label>
                <div class="checkout__form">
                    <form action="#" class="checkout__form-continue" method="POST">
                        <h4 class="checkout__form-h4">Check as a guest or register</h4>
                        <p class="checkout__form-text">Register with us for future convenience</p>
                        <div class="checkout__form-radio">
                            <input type="radio" id="guest3" name="checkout" value="">
                            <label class="checkout__form-label" for="guest3">checkout as guest</label>
                        </div>
                        <div class="checkout__form-radio">
                            <input type="radio" id="register3" name="checkout" value="" checked>
                            <label class="checkout__form-label" for="register3">register</label>
                        </div>

                        <h4 class="checkout__form-h4">register and save time!</h4>
                        <p class="checkout__form-text">Register with us for future convenience</p>
                        <p class="checkout__form-text"><i class="fas fa-angle-double-right"></i>Fast and easy
                            checkout
                        </p>
                        <p class="checkout__form-text"><i class="fas fa-angle-double-right"></i>Easy access to your
                            order history and status</p>
                        <a href="#" class="checkout__form-button checkout__form-button_left">Continue</a>
                    </form>
                    <form action="#" method="POST" class="checkout__form-login">
                        <h4 class="checkout__form-h4">Already registered?</h4>
                        <p class="checkout__form-text">Please log in below</p>
                        <label class="checkout__form-label" for="email">EMAIL ADDRESS<span> *</span></label>
                        <input type="email" name="email" placeholder="example@domen.com" required>
                        <label class="checkout__form-label" for="password">PASSWORD<span> *</span></label>
                        <input type="password" name="password" placeholder="Password" required>
                        <p class="checkout__form-text checkout__form-text_red"> <span>* </span> Required Fields</p>
                        <div class="checkout__button-box">
                            <a href="#" class="checkout__form-button">Log in</a>
                            <a href="#" class="checkout__form-forgot">Forgot Password ?</a>
                        </div>
                    </form>
                </div>
            </div>
            <div class="checkout__shipping-block">
                <input type="radio" name="drop-checkout" id="method">
                <label for="method">
                    <span class="checkout__heading">04. SHIPPING METHOD</span>
                </label>
                <div class="checkout__form">
                    <form action="#" class="checkout__form-continue" method="POST">
                        <h4 class="checkout__form-h4">Check as a guest or register</h4>
                        <p class="checkout__form-text">Register with us for future convenience</p>
                        <div class="checkout__form-radio">
                            <input type="radio" id="guest4" name="checkout" value="">
                            <label class="checkout__form-label" for="guest4">checkout as guest</label>
                        </div>
                        <div class="checkout__form-radio">
                            <input type="radio" id="register4" name="checkout" value="" checked>
                            <label class="checkout__form-label" for="register4">register</label>
                        </div>

                        <h4 class="checkout__form-h4">register and save time!</h4>
                        <p class="checkout__form-text">Register with us for future convenience</p>
                        <p class="checkout__form-text"><i class="fas fa-angle-double-right"></i>Fast and easy
                            checkout
                        </p>
                        <p class="checkout__form-text"><i class="fas fa-angle-double-right"></i>Easy access to your
                            order history and status</p>
                        <a href="#" class="checkout__form-button checkout__form-button_left">Continue</a>
                    </form>
                    <form action="#" method="POST" class="checkout__form-login">
                        <h4 class="checkout__form-h4">Already registered?</h4>
                        <p class="checkout__form-text">Please log in below</p>
                        <label class="checkout__form-label" for="email">EMAIL ADDRESS<span> *</span></label>
                        <input type="email" name="email" placeholder="example@domen.com" required>
                        <label class="checkout__form-label" for="password">PASSWORD<span> *</span></label>
                        <input type="password" name="password" placeholder="Password" required>
                        <p class="checkout__form-text checkout__form-text_red"> <span>* </span> Required Fields</p>
                        <div class="checkout__button-box">
                            <a href="#" class="checkout__form-button">Log in</a>
                            <a href="#" class="checkout__form-forgot">Forgot Password ?</a>
                        </div>
                    </form>
                </div>
            </div>
            <div class="checkout__shipping-block">
                <input type="radio" name="drop-checkout" id="payment">
                <label for="payment">
                    <span class="checkout__heading">05. PAYMENT METHOD</span>
                </label>
                <div class="checkout__form">
                    <form action="#" class="checkout__form-continue" method="POST">
                        <h4 class="checkout__form-h4">Check as a guest or register</h4>
                        <p class="checkout__form-text">Register with us for future convenience</p>
                        <div class="checkout__form-radio">
                            <input type="radio" id="guest5" name="checkout" value="">
                            <label class="checkout__form-label" for="guest5">checkout as guest</label>
                        </div>
                        <div class="checkout__form-radio">
                            <input type="radio" id="register5" name="checkout" value="" checked>
                            <label class="checkout__form-label" for="register5">register</label>
                        </div>

                        <h4 class="checkout__form-h4">register and save time!</h4>
                        <p class="checkout__form-text">Register with us for future convenience</p>
                        <p class="checkout__form-text"><i class="fas fa-angle-double-right"></i>Fast and easy
                            checkout
                        </p>
                        <p class="checkout__form-text"><i class="fas fa-angle-double-right"></i>Easy access to your
                            order history and status</p>
                        <a href="#" class="checkout__form-button checkout__form-button_left">Continue</a>
                    </form>
                    <form action="#" method="POST" class="checkout__form-login">
                        <h4 class="checkout__form-h4">Already registered?</h4>
                        <p class="checkout__form-text">Please log in below</p>
                        <label class="checkout__form-label" for="email">EMAIL ADDRESS<span> *</span></label>
                        <input type="email" name="email" placeholder="example@domen.com" required>
                        <label class="checkout__form-label" for="password">PASSWORD<span> *</span></label>
                        <input type="password" name="password" placeholder="Password" required>
                        <p class="checkout__form-text checkout__form-text_red"> <span>* </span> Required Fields</p>
                        <div class="checkout__button-box">
                            <a href="#" class="checkout__form-button">Log in</a>
                            <a href="#" class="checkout__form-forgot">Forgot Password ?</a>
                        </div>
                    </form>
                </div>
            </div>
            <div class="checkout__shipping-block">
                <input type="radio" name="drop-checkout" id="order">
                <label for="order">
                    <span class="checkout__heading">06. ORDER REVIEW</span>
                </label>
                <div class="checkout__form">
                    <form action="#" class="checkout__form-continue" method="POST">
                        <h4 class="checkout__form-h4">Check as a guest or register</h4>
                        <p class="checkout__form-text">Register with us for future convenience</p>
                        <div class="checkout__form-radio">
                            <input type="radio" id="guest6" name="checkout" value="">
                            <label class="checkout__form-label" for="guest6">checkout as guest</label>
                        </div>
                        <div class="checkout__form-radio">
                            <input type="radio" id="register6" name="checkout" value="" checked>
                            <label class="checkout__form-label" for="register6">register</label>
                        </div>

                        <h4 class="checkout__form-h4">register and save time!</h4>
                        <p class="checkout__form-text">Register with us for future convenience</p>
                        <p class="checkout__form-text"><i class="fas fa-angle-double-right"></i>Fast and easy
                            checkout
                        </p>
                        <p class="checkout__form-text"><i class="fas fa-angle-double-right"></i>Easy access to your
                            order history and status</p>
                        <a href="#" class="checkout__form-button checkout__form-button_left">Continue</a>
                    </form>
                    <form action="#" method="POST" class="checkout__form-login">
                        <h4 class="checkout__form-h4">Already registered?</h4>
                        <p class="checkout__form-text">Please log in below</p>
                        <label class="checkout__form-label" for="email">EMAIL ADDRESS<span> *</span></label>
                        <input type="email" name="email" placeholder="example@domen.com" required>
                        <label class="checkout__form-label" for="password">PASSWORD<span> *</span></label>
                        <input type="password" name="password" placeholder="Password" required>
                        <p class="checkout__form-text checkout__form-text_red"> <span>* </span> Required Fields</p>
                        <div class="checkout__button-box">
                            <a href="#" class="checkout__form-button">Log in</a>
                            <a href="#" class="checkout__form-forgot">Forgot Password ?</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
@import '../layout/css/checkout.css';
</style>