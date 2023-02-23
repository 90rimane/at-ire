<template>
<<<<<<< HEAD
=======
  <div>
    <CarouselSlide v-show="allProducts" :images="allProducts" />
  </div>

  <div class="grid-container">
    <div class="grid-item">
      <img
        src="https://i.pinimg.com/564x/90/e5/0f/90e50f08fa452356d5d98fe37dc10431.jpg"
        alt="img1"
      />
      <div class="grid-text">
        <h2>Tops</h2>
        <button class="shop-button">SHOP HERE</button>
      </div>
    </div>
>>>>>>> 41b61360862249e24c2560085a899c049479aad5

</template>

<script>
<<<<<<< HEAD
export default{

}
=======
  import CarouselSlide from '../components/CarouselSlide.vue'

  export default {
    components: {
      CarouselSlide
    },
    computed: {
      allProducts() {
        return this.$store.state.allProducts
      }
    }
  }
>>>>>>> 41b61360862249e24c2560085a899c049479aad5
</script>
