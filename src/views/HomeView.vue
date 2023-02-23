<template>
  <div>
    <CarouselSlide v-if="allProducts" :images="allProducts" />
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

    <div class="grid-item">
      <img
        src="https://i.pinimg.com/564x/90/e5/0f/90e50f08fa452356d5d98fe37dc10431.jpg"
        alt="img2"
      />
      <div class="grid-text">
        <h2>Bottoms</h2>
        <button class="shop-button">SHOP HERE</button>
      </div>
    </div>

    <div class="grid-item">
      <img
        src="https://i.pinimg.com/564x/93/28/01/9328012b820344ee38d86e2ea4416257.jpg"
        alt="img3"
      />
      <div class="grid-text">
        <h2>Accessories</h2>
        <button class="shop-button">SHOP HERE</button>
      </div>
    </div>

    <div class="grid-item">
      <img
        src="https://i.pinimg.com/564x/43/c2/a5/43c2a55207dd738d37dd3db5edffcc55.jpg"
        alt="img4"
      />
      <div class="grid-text">
        <h2>Pants</h2>
        <button class="shop-button">SHOP HERE</button>
      </div>
    </div>
  </div>

  <div class="trending-h1">
    <h1>Trending Now</h1>
  </div>

  <div class="container">
    <img
      src="https://i.pinimg.com/564x/ee/97/8f/ee978f8a579466a75915e9fd028489e0.jpg"
      alt="img1"
    />
    <div class="paragraph">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
    </div>
    <img
      src="https://i.pinimg.com/564x/64/0e/b3/640eb39ab7fe974ea12462db8631f4b4.jpg"
      alt="img2"
    />
    <div class="paragraph">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
    </div>
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

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 60px;
  }
  .grid-item {
    position: relative;
    text-align: center;
  }
  .grid-item img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  .grid-item h2 {
    margin: 10px;
    font-size: 20px;
  }
  .grid-text h2 {
    position: absolute;
    top: 50%;
    left: 25%;
  }
  .shop-button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    border: none;
    cursor: pointer;
  }
  .container {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
  }
  .container img {
    width: auto;
  }
  .trending-h1 {
    text-align: center;
  }
</style>
