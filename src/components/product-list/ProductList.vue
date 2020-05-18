<template>
  <div class="product-list">
    <mktplace-searchbar @searchProducts="searchProducts"></mktplace-searchbar>
    <transition name="slide-fade" mode="out-in" key="product">
      <mktplace-not-found v-if="notFound" @clearSearch="clearSearch"></mktplace-not-found>

      <section v-if="computedProducts && !notFound" class="container product-list__items">
        <div class="row">
          <div
            v-for="(product, index) in computedProducts"
            :key="index"
            class="col-12 col-sm-6 col-lg-4"
          >
            <article class="product-list__item">
              <img class="product-list__img" :src="product.imageUrl" :alt="product.name" />
              <div class="product-list__item-body">
                <span class="product-list__item-category">{{product.category}}</span>
                <h2 class="product-list__item-name">{{product.name}}</h2>
                <p
                  class="product-list__item-description"
                >{{product.description | limitDescriptionCharacters}}</p>
                <p class="product-list__item-price">{{product.price | convertCurrency}}</p>
              </div>
              <button v-if="!alreadyInCart(product.id, index)" class="product-list__item-btn" @click="addProdToCart(product)">Adicionar ao carrinho</button>
              <button v-else class="product-list__item-btn on-cart" @click="removeProdFromCart(product.id)">Remover do carrinho</button>
            </article>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import NotFound from "./ProductNotFound";
import ProductsAPI from "../../services/products/products";
import { mapActions, mapGetters } from "vuex";
import filters from "../../filters/filters";

export default {
  data: () => ({
    search: null,
    notFound: false
  }),
  computed: {
    computedProducts: function() {
      let products = [];

      if (!this.search){
        this.notFound = false;
        return this.products();
      }

      for (let item in this.products()) {
        if (this.products()[item].name.toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
          products.push(this.products()[item]);
        }
      }

      if (products.length === 0) this.notFound = true;

      return products;
    },
  },
  components: {
    "mktplace-searchbar": SearchBar,
    "mktplace-not-found": NotFound
  },
  mounted() {
    ProductsAPI.product("produtos.json").then(result => {
      try{
        this.saveProdFromAPI(result.data);
      }catch(e){ 
        console.log(e);
      }
    });
  },
  mixins: [filters],
  methods: {
    ...mapGetters({
      products: "getProducts",
      cart: "getCartList"
    }),
    ...mapActions({
      addProduct: "addProduct",
      addToCart: "addToCart",
      removeFromCart: "removeFromCart"
    }),
    saveProdFromAPI(products) {
      if (products && products != {}) {
        this.addProduct(products);
      }
    },
    searchProducts(value) {
      this.search = value;
    },
    clearSearch() {
      this.search = null;
    },
    addProdToCart(product){
      this.addToCart(product);
    },
    removeProdFromCart(id){
      this.removeFromCart(id);
    },
    alreadyInCart(id, productIndex) {
      for(let item in this.cart()){
        if(this.computedProducts[productIndex].id === this.cart()[item].id){
          return true;
        }
      }
      return false;
    }
  }
};
</script>

<style src="../../assets/scss/components/_product-list.scss" lang="scss" scoped />