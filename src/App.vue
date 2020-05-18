<template>
  <div id="app">
    <mktplace-header></mktplace-header>
    <transition name="slide-fade" mode="out-in" key="product">
      <router-view />
    </transition>
    <mktplace-footer></mktplace-footer>

    <!-- MODAL DOS ALERTAS (CARREGADOS DINAMICAMENTE) -->
    <mktplace-alert-modal></mktplace-alert-modal>
  </div>
</template>

<style src="./assets/scss/main.scss" lang="scss" />