<template>
  <div>
    <img
      :src="images[currentIndex].img.Black"
      :alt="images[currentIndex].description"
    />
    <button @click="moveToPreviousImage()">Previous</button>
    <button @click="moveToNextImage()">Next</button>
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
        autoplayInterval: 1000
      }
    },
    mounted() {
      console.log('this.images alt', this.images[0].description)
      console.log('this.images One', this.images[0].img.Black)
      this.startAutoplay()
    },
    methods: {
      startAutoplay() {
        this.timer = setInterval(() => {
          this.moveToNextImage()
        }, this.autoplayInterval)
      },
      // kolla upp och jämför med hur jag har formulerat setInterval i Farstun
      stopAutoplay() {
        clearInterval(this.timer)
        this.timer = null
      },
      moveToNextImage() {
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

<style scooped>
  img {
    width: 50vw;
  }
</style>
