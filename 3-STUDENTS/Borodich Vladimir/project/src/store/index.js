import Vue from "vue";
import Vuex from "vuex";
import basket from './basket';
import sortForm from './sort-form';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        basket,
        sortForm,
    },
});
