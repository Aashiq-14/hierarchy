import Vue from 'vue'
import App from './App.vue';
import './style.scss';


import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios); 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
