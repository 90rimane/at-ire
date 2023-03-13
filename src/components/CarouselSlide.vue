<template>
  <div id="carousel" v-if="images">
    <img
      :src="images[currentIndex].img.Black"
      :alt="images[currentIndex].description"
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
  export default {
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
      startAutoplay() {
        this.timer = setInterval(() => {
          this.moveToNextImage()
        }, this.autoplayInterval)
      },
      stopAutoplay() {
        clearInterval(this.timer)
        this.timer = null
      },
      moveToNextImage() {
        // console.log('this.images alt', this.images[0].description)
        // console.log('this.images One', this.images[0].img.Black)
        this.currentIndex = (this.currentIndex + 1) % this.images.length
      },
      moveToPreviousImage() {
        this.currentIndex =
          (this.currentIndex + this.images.length - 1) % this.images.length
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
  img {
    width: 70vw;
    max-width: 400px;
  }

  #carousel {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 3vh 0 3vh 0;
    padding-left: 64px;
    margin-top: 60px;
  }

  #carousel-button-prev,
  #carousel-button-next {
    position: absolute;
    background-color: #fff5ef;
  }

  #carousel-button-prev {
    left: 15%;
  }

  #carousel-button-next {
    right: 15%;
  }
</style>
