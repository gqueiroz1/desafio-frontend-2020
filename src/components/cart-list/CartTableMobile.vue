<template>
  <div class="cart-list-mobile">
    <div v-for="(item, index) in cartList()" :key="index" class="cart-list-mobile__body">
      <div
        class="cart-list-mobile__product-image"
        :style="'background-image: url(' + item.imageUrl + ');'"
      ></div>
      <div class="cart-list-mobile__product-description">
        <span class="cart-list-mobile__product-category">{{item.category}}</span>
        <p class="cart-list-mobile__product-name">{{item.name}}</p>
        <div class="cart-list-mobile__quantity-wrapper">
          <span class="cart-list-mobile__minus" @click="item.quantity > 1 ? item.quantity-- : ''">-</span>
          <span class="cart-list-mobile__quantity-value">{{item.quantity | formatItemQuantity}}</span>
          <span class="cart-list-mobile__plus" @click="item.quantity++">+</span>
        </div>
        <div class="cart-list-mobile__price-wrapper">
          <span class="cart-list-mobile__price-total">{{item.price * item.quantity | convertCurrency}}</span> à vista
          <br />
          ou 10x {{(item.price * item.quantity) / 10 | convertCurrency}}
        </div>
      </div>
      <div class="cart-list-mobile__remove">
        <div class="cart-list-mobile__trash-icon" @click="deleteFromCart(item.id)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import filters from "../../filters/filters";

export default {
  methods: {
    ...mapGetters({
      cartList: "getCartList"
    }),
    ...mapActions({
      removeFromCart: "removeFromCart"
    }),
    deleteFromCart(id) {
      this.removeFromCart(id);
    }
  },
  mixins: [filters]
};
</script>

<style src="../../assets/scss/components/_cart-table-mobile.scss" lang="scss" scoped />