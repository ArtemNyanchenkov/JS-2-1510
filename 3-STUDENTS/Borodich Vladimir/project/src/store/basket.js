export default {
    state: {
        basketItems: [],
        storage: window.localStorage,
        badge: 0,
    },
    getters: {},
    mutations: {
        addToCart(state, payload) {
            let item = payload;
            let product = Object.assign({}, { amount: 1 }, item);
            let searchResult = state.basketItems.find((item) => item.id === product.id);
            searchResult ? searchResult.amount++ : (state.basketItems.push(product), (state.badge = state.basketItems.length));
            this.dispatch('setStorage', state.basketItems);
        },

        removeBasketItem(state, payload) {
            let product = state.basketItems.find((item) => item.id === +payload);
            product.amount > 1
                ? product.amount--
                : (state.basketItems.splice(state.basketItems.indexOf(product), 1), (state.badge = state.basketItems.length));
            this.dispatch('setStorage', state.basketItems);
        },
        clearCart(state) {
            state.basketItems = [];
            state.badge = state.basketItems.length;
            this.dispatch('setStorage', []);
        },
    },
    actions: {
        getStorage({ state }) {
            let items = state.storage.getItem('basket');
            items ? (state.basketItems = JSON.parse(items)) : this.setStorage([]);
            state.badge = state.basketItems.length;
        },
        setStorage({ state }, data) {
            state.storage.setItem('basket', JSON.stringify(data));
        },
    },
};
