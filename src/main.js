// Responsible for booting the application; entry point for our app; this is what Vue.js looks for.

import Vue from 'vue';
import App from './App';

new Vue({
    render: h => h(App)
}).$mount('#app');