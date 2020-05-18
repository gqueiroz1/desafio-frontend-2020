<template>
  <header class="header">
    <div class="container">
      <router-link to="/">
        <h1 class="header__logo">Mkt<span class="header__logo--purple">Place</span></h1>
      </router-link>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <router-link to="/" class="header__nav-link">Produtos</router-link>
          </li>
          <li class="header__nav-item">
            <router-link to="/carrinho" class="header__nav-link">
              <div class="header__shopping-cart-icon"></div>
              <div v-show="list().length > 0" class="header__shopping-cart-notification">{{list().length}}</div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data: () => ({

  }),
  created(){

  },
  mounted(){

  },
  methods: {
    ...mapGetters({
      list: "getCartList"
    }),
  }
};
</script>

<style src="../assets/scss/components/_header.scss" lang="scss" scoped />