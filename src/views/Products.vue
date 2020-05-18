<template>
  <div class="products">
    <section class="products__slider">
      <mktplace-carousel></mktplace-carousel>
      <mktplace-product-list></mktplace-product-list>
    </section>
  </div>
</template>

<script>
import Carousel from '../components/carousel/Carousel';
import ProductList from '../components/product-list/ProductList';

export default {
  name: 'mktplace-products',
  components: {
    'mktplace-carousel': Carousel,
    'mktplace-product-list': ProductList
  }
}
</script>

<style src="../assets/scss/pages/_products.scss" lang="scss" scoped />