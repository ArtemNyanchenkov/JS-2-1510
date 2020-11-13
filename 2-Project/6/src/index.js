import Vue from 'vue';

import bootstrap from 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/style.css';

import App from 'App.vue';

new Vue({
    render: h => h(App)
}).$mount('#app')