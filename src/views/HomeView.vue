<template>
  <div>
    <CarouselSlide v-show="allProducts" :images="allProducts" />
  </div>
</template>

<script>
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
</script>
