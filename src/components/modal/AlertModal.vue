<template>
  <transition name="fade"> 
  <div v-if="alertType" class="alert-modal__overlay">
    <div class="alert-modal__box col-11 col-sm-4">
      <p class="alert-modal__close-btn" @click="closeModal()">X</p>
      <img class="alert-modal__icon" :src="alertImageURL">
      <p class="alert-modal__text">{{alertText}}</p>
      <button class="alert-modal__btn" @click="closeModal()">
        <div v-if="alertType === 'checkoutSuccess'" class="alert-modal__btn-icon"></div>
        <span class="alert-modal__btn-text">{{alertButtonText}}</span>
      </button>
    </div>
  </div>
  </transition>
</template>

<script>
import { EventBus } from "../../main";

export default {
  name: "mktplace-alert-modal",
  data: () => ({
    publicPath: process.env.BASE_URL,
    alertType: null,
    alertImageURL: null,
    alertText: null,
    alertButtonText: null,
    alertTypeDatas: {
      cepWarning: {
        alertText: "Não encontramos o CEP digitado.",
        alertImageURL: "/icons/alert-icon-warning.png",
        alertButtonText: "OK"
      },
      checkoutSuccess: {
        alertText: "Seu cadastro foi solicitado com sucesso.",
        alertImageURL: "/icons/alert-icon-success.png",
        alertButtonText: "Voltar para Home"
      }
    }
  }),
  mounted() {
    EventBus.$on("setAlert", this.setAlert);
  },
  methods: {
    setAlert(type) {
      this.alertType = type;

      for (let data in this.alertTypeDatas[type]) {
        this[data] = this.alertTypeDatas[type][data];
      }
    },
    closeModal(){
      if(this.alertType === 'cepWarning'){
        this.alertType = null;
        return;
      }else if(this.alertType === 'checkoutSuccess'){
        this.alertType = null;
        this.$router.replace("/");
      }
    }
  }
};
</script>

<style src="../../assets/scss/components/_alert-modal.scss" lang="scss" scoped />