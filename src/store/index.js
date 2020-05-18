import Vue from 'vue'
import Vuex from 'vuex'
import Cart from './modules/cart/root';
import Products from './modules/products/root';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Cart,
    Products
  }
})
