<template>
  <section ref="cart" class="cart-list container">
    <mktplace-cart-table class="cart-desktop"></mktplace-cart-table>
    <!-- CART TABLE MOBILE -->
    <mktplace-cart-table-mobile class="cart-mobile"></mktplace-cart-table-mobile>

    <mktplace-cart-total></mktplace-cart-total>
    <mktplace-cart-controls></mktplace-cart-controls>
  </section>
</template>

<script>
import CartTable from '../components/cart-list/CartTable';
import CartTotal from '../components/cart-list/CartTotal';
import CartControls from '../components/cart-list/CartControls';
import CartTableMobile from '../components/cart-list/CartTableMobile';

export default {
  data: () => ({

  }),
  mounted(){
    /*Devido a falta de conteúdo no form para gerar altura suficiente
      é preciso tratar a altura do componente para que o footer não fique
      solto no meio da tela.*/
    window.addEventListener("resize", this.setFooterToBottom);
    this.setFooterToBottom();
  },
  components: {
    "mktplace-cart-table": CartTable,
    "mktplace-cart-total": CartTotal,
    "mktplace-cart-controls": CartControls,
    "mktplace-cart-table-mobile": CartTableMobile
  },
  methods: {
    setFooterToBottom() {
      let headerHeight = this.$root.$el.getElementsByClassName("header")[0].clientHeight;
      let footerHeight = this.$root.$el.getElementsByClassName("footer")[0].clientHeight;
      let min_height =
        window.innerHeight -
        this.$refs.cart.offsetTop -
        footerHeight +
        "px";

      this.$refs.cart.style.minHeight = min_height;
    }
  }
}
</script>

<style src="../assets/scss/pages/_cart.scss" lang="scss" scoped />