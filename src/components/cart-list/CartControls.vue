<template>
  <div class="cart-list__controls">
    <div class="cart-list__clear-cart" @click="deleteCart()">
      <div class="cart-list__clear-cart-trash-icon"></div>
      <p class="cart-list__clear-cart-text">Limpar carrinho</p>
    </div>

    <div class="cart-list__controls-buttons">
      <button class="cart-list__buy-more-btn" @click="$router.replace('/')">Continuar Comprando</button>
      <button class="cart-list__finish-btn" @click="$router.replace('/checkout')">Concluir compra</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "mktplace-cart-controls",
  methods: {
    ...mapActions({
      clearCart: "clearCart"
    }),
    deleteCart() {
      this.clearCart();
    }
  }
};
</script>

<style src="../../assets/scss/components/_cart-controls.scss" lang="scss" scoped />
