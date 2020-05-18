<template>
  <div class="container">
    <div class="not-found">
      <h2 class="not-found__icon">;-(</h2>
      <p class="not-found__paragraph">Nenhum produto encontrado para sua busca!</p>
      <button class="not-found__btn" @click="clearSearch">Limpar busca</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../main';

export default {
  name: "mktplace-not-found",
  methods: {
    clearSearch() {
      this.$emit("clearSearch");
      EventBus.$emit("clearSearch");
    }
  }
};
</script>

<style src="../../assets/scss/components/_product-not-found.scss" lang="scss" scoped />