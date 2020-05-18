<template>
  <div class="searchbar">
    <div class="container">
      <div class="searchbar__wrapper col-12">
        <p class="searchbar__paragraph">Encontre seu produto</p>
        <div class="searchbar__input-group">
          <input ref="searchInput" v-model="search" class="searchbar__input mktplace-input" type="text" placeholder="Pesquisar..." @keyup.enter="emitSearch"/>
          <div class="searchbar__icon-wrapper" @click="emitSearch">
            <div class="searchbar__icon"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { EventBus } from '../../main';

export default {
  data: () => ({
    search: null,
  }), 
  mounted(){
    EventBus.$on("clearSearch", this.clearSearch);
  },
  methods: {
    emitSearch(){
      this.$emit("searchProducts", this.search);
    },
    clearSearch(){
      this.search = "";
      this.$refs.searchInput.value = "";
    }
  }
};
</script>

<style src="../../assets/scss/components/_searchbar.scss" lang="scss" scoped />