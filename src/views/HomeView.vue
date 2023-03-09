<template>
  <div>
    <CarouselSlide v-if="allProducts" :images="allProducts" />
  </div>
  <div class="banner">
  <h1>ELEVATE YOUR WARDROBE WITH OUR PREMIUM CLOTHING LINE </h1>
  <span>SHOP NOW AND STAY AHEAD OF THE FASHION CURVE</span>
</div>

   <div class="home-container">
    <div class="box">
      <img
        src="https://i.pinimg.com/564x/a8/c1/55/a8c1552fc6e272a18faba1dc01fbf0f9.jpg"
      />
      <router-link to="/search/Tops" class="text">TOPS</router-link>
    </div>

    <div class="box">
      <img
        src="https://i.pinimg.com/564x/f2/e8/13/f2e8134dac23fcb325f4772840a2a1d4.jpg"
      />
      <router-link to="/search/Bottoms" class="text">BOTTOMS</router-link>
    </div>

    <div class="box">
      <img
        src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />
      <router-link to="/search/Accessories" class="text"
        >ACCESSORIES</router-link
      >
    </div>

    <div class="box">
      <img
        src="https://i.pinimg.com/564x/43/c2/a5/43c2a55207dd738d37dd3db5edffcc55.jpg"
      />
      <router-link to="/search/Pants" class="text">PANTS</router-link>
    </div>
  </div>


  <TrendingSection />
</template>

<script>
  import CarouselSlide from '../components/CarouselSlide.vue'
  import TrendingSection from '../components/TrendingSection.vue'
  export default {
    components: {
      CarouselSlide,
      TrendingSection
    },
    computed: {
      allProducts() {
        return this.$store.state.allProducts
      }
    }
  }
</script>

<style scoped>
  .home-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top:20px;
    padding-bottom: 100px;
  }

  .box {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
  }

  .box img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
    text-shadow: 2px 2px 4px #000000;
    text-decoration: none;
    border: solid 2px white;
    padding: 4%;
  }

  .banner {
  background-color:#ecc8b2;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  word-wrap:break-word;
  margin-top:20px;
}

.banner h1 {
  font-size: 33px;
  margin: 0;
}

span{
  font-size:20px;
  font-weight:bold;
}


  @media screen and (min-width: 978px) {
    .home-container {
      flex-wrap: nowrap;
    }

      .box {
        width: 48%;
        margin-left: 10px;
      }
    }

    .box {
      width: 48%;
      margin-left: 10px;
    }




</style>
