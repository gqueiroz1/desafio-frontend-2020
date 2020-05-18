<template>
  <div class="cart-list__total">
    <div class="cart-list__total-cash">
      <p class="cart-list__total-text">Total à vista</p>
      <p class="cart-list__total-value">{{cartTotal() | convertCurrency}}</p>
    </div>
    <div class="cart-list__total-card">
      <p class="cart-list__total-text">Total parcelado</p>
      <p class="cart-list__total-value-card">
        em até
        <span class="cart-list__price">10x {{cartTotal() / 10 | convertCurrency}}</span>
        <br />
        (Total {{cartTotal() | convertCurrency}})
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import filters from "../../filters/filters";

export default {
  name: "mktplace-cart-total",
  methods: {
    ...mapGetters({
      cartTotal: "getCartTotal"
    })
  },
  mixins: [filters]
};
</script>

<style src="../../assets/scss/components/_cart-total.scss" lang="scss" scoped />

