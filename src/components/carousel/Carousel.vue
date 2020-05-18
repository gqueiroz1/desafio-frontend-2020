<template>
  <div class="carousel">
    <div class="carousel__slide fade">
      <img
        srcset="../../../public/img/slide1.png 1920w,
                ../../../public/img/slide1-1144w.png 1144w,
                ../../../public/img/slide1-600w.png 600w"
        sizes="100vw"
        class="carousel__img"
        src="../../../public/img/slide1.png"
        alt="Mktplace - Notebooks"
      />
    </div>
    <div class="carousel__slide fade">
      <img
        srcset="../../../public/img/slide2.png 1920w, 
                ../../../public/img/slide2-1144w.png 1144w,
                ../../../public/img/slide2-600w.png 600w"
        sizes="100vw"
        class="carousel__img"
        src="../../../public/img/slide2.png"
        alt="Mktplace - Smartphones"
      />
    </div>

    <div class="carousel__nav-bubbles">
      <div class="carousel__nav-bubble" @click="goToSlide(1)"></div>
      <div class="carousel__nav-bubble" @click="goToSlide(2)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mktplace-carousel",
  data: () => ({
    index: 1
  }),
  mounted() {
    this.displaySlide(this.index);
  },
  methods: {
    goToSlide(n) {
      this.displaySlide((this.index = n));
    },

    displaySlide(n) {
      let slides = document.getElementsByClassName("carousel__slide");
      let controls = document.getElementsByClassName("carousel__nav-bubble");

      if (n > slides.length) this.index = 1;
      if (n < 1) this.index = slides.length;

      for (let i = 0; i < controls.length; i++) {
        slides[i].style.display = "none";
      }

      for (let i = 0; i < controls.length; i++) {
        controls[i].className = controls[i].className.replace(" active", "");
      }
      slides[this.index - 1].style.display = "block";
      controls[this.index - 1].className += " active";
    }
  }
};
</script>

<style src="../../assets/scss/components/_carousel.scss" lang="scss" scoped />
