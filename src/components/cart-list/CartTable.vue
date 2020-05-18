<template>
  <table class="cart-list__table">
    <tr class="cart-list__table-row cart-list__table-row--heading">
      <th class="cart-list__table-head">Produtos</th>
      <th class="cart-list__table-head">Quantidade</th>
      <th class="cart-list__table-head">Valor Unitário</th>
      <th class="cart-list__table-head">Total</th>
    </tr>
    <tr class="cart-list__table-row" v-for="(item, index) in cartList()" :key="index">
      <div class="cart-list__table-data--trash-icon" @click="deleteFromCart(item.id)"></div>
      <td class="cart-list__table-data cart-list__table-data--product">
        <span class="cart-list__table-data--product-category">{{item.category}}</span>
        <p class="cart-list__table-data--product-name">{{item.name}}</p>
      </td>
      <td class="cart-list__table-data cart-list__table-data--quantity">
        <div class="cart-list__table-data--quantity-wrapper"> 
          <span class="cart-list__table-data-minus" @click="item.quantity > 1 ? item.quantity-- : ''">-</span>
          <span class="cart-list__table-data-quantity-value">{{item.quantity | formatItemQuantity}}</span>
          <span class="cart-list__table-data-plus" @click="item.quantity++">+</span>
        </div>
      </td>
      <td class="cart-list__table-data cart-list__table-data--price">
        <span class="cart-list__price">{{item.price | convertCurrency}}</span> à vista
        <br />ou 10x {{item.price / 10 | convertCurrency}}
      </td>
      <td class="cart-list__table-data cart-list__table-data--price">
        <span class="cart-list__price-total">{{item.price * item.quantity | convertCurrency}}</span> à vista
        <br />ou 10x {{(item.price * item.quantity) / 10 | convertCurrency}}
      </td>
    </tr>
  </table>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import filters from "../../filters/filters";

export default {
  name: "mktplace-cart-table",
  methods: {
    ...mapGetters({
      cartList: "getCartList",
    }),
    ...mapActions({
      removeFromCart: "removeFromCart"
    }),
    deleteFromCart(id){
      this.removeFromCart(id);
    }
  },
  mixins: [filters]
};
</script>

<style src="../../assets/scss/components/_cart-table.scss" lang="scss" scoped />