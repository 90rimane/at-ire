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
    width: 100vw;
  }
</style>

<!-- <style scoped>
  .carousel {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }

  .carousel-inner {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .carousel-item {
    position: absolute;
    opacity: 3;
    transition: opacity 1s ease-in-out;
  }

  img {
    width: 35%;
  }

  .carousel-item.active {
    opacity: 1;
  }
</style>

<script>
  export default {
    created() {
      fetch('api.json')
        .then((response) => response.json())
        .then((result) => {
          this.products = result.data
          console.log('Hallå', result.data)
        })
    },
    data() {
      return {
        products: null
      }
    },
    computed: {
      images() {
        if (this.products) {
          return [
            { src: this.products[0].img, alt: this.products[0].name },
            { src: this.products[1].img, alt: this.products[1].name },
            { src: this.products[2].img, alt: this.products[2].name }
          ]
        } else {
          return []
        }
      }
    }
  }
</script>

<template>
  <div>
    <div>Images length: {{ images.length }}</div>
    <div v-if="images.length === 3">
      <div class="carousel">
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(image, index) in images"
            :key="index"
          >
            <img :src="image.src" :alt="image.alt" />
            <div>Hallllååå{{ image.src }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading images...</div>
    <div>Images length: {{ images.length }}</div>
  </div>
</template> -->
