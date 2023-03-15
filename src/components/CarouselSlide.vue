<template>
  <div id="carousel" v-if="images">
    <ProductItem
      :src="images[currentIndex].img.Black"
      :alt="images[currentIndex].description"
      :product="images[currentIndex]"
    />
    <button
      id="carousel-button-prev"
      class="material-symbols-outlined"
      @click="moveToPreviousImage()"
    >
      chevron_left
    </button>
    <button
      id="carousel-button-next"
      class="material-symbols-outlined"
      @click="moveToNextImage()"
    >
      chevron_right
    </button>
  </div>
</template>

<script>
  import ProductItem from '../components/ProductItem.vue'
  export default {
    components: {
      ProductItem
    },
    props: {
      images: {
        type: Array,
        required: true
      }
    },

    data() {
      return {
        currentIndex: 0,
        timer: null,
        autoplayInterval: 3000
      }
    },

    created() {
      // console.log('this.images alt', this.images[0].description)
      // console.log('this.images One', this.images[0].img.Black)
      this.startAutoplay()
    },

    methods: {
      moveToNextImage() {
        // console.log('this.images alt', this.images[0].description)
        // console.log('this.images One', this.images[0].img.Black)
        this.currentIndex = (this.currentIndex + 1) % this.images.length
      },
      moveToPreviousImage() {
        this.currentIndex =
          (this.currentIndex + this.images.length - 1) % this.images.length
      },

      // selectProduct(index) {
      //   const selectedProduct = this.images[index]
      //   this.$emit('productSelected', selectedProduct.id)
      // },
      startAutoplay() {
        this.timer = setInterval(() => {
          this.moveToNextImage()
        }, this.autoplayInterval)
      },
      stopAutoplay() {
        clearInterval(this.timer)
        this.timer = null
      }
    },

    watch: {
      currentIndex() {
        this.stopAutoplay()
        this.startAutoplay()
      }
    }
  }
</script>

<style scoped>
  #carousel {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: #f5f5f5;
    width: 380px;
  }

  #carousel-button-prev,
  #carousel-button-next {
    margin-top: 110px;
    position: absolute;
    padding: 6px;
    background-color: rgba(0, 0, 0, 0.107);
    border: none;
    border-radius: 100%;
  }

  #carousel-button-prev {
    left: 7%;
  }

  #carousel-button-next {
    right: 7%;
  }
</style>
