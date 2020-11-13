export default {
    state: {
        sort: 'name',
        amount: '09',
    },
    mutations: {
        sortChange(state, payload) {
            state.sort = payload;
        },
        amountChange(state, payload) {
            state.amount = payload;
        },
    },
};
