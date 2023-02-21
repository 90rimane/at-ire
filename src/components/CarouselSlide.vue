<style scoped>
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
    /* width: 100%;
    height: 100%; */
    opacity: 3;
    transition: opacity 1s ease-in-out;
  }

  img {
    width: 35%;
  }

  /* .carousel-item.active {
    opacity: 1;
  } */

  /* .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    color: #fff;
    font-size: 2rem;
    text-shadow: 0px 0;
  } */
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
</template>
