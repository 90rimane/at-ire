<template>
  <div>
    <CarouselSlide v-if="allProducts" :images="allProducts" />
  </div>

  <div class="home-container">
    <div class="box">
      <img
        src="https://i.pinimg.com/564x/a8/c1/55/a8c1552fc6e272a18faba1dc01fbf0f9.jpg"
      />
      <div class="text">TOPS</div>
    </div>

    <div class="box">
      <img
        src="https://i.pinimg.com/564x/f2/e8/13/f2e8134dac23fcb325f4772840a2a1d4.jpg"
      />
      <div class="text">BOTTOMS</div>
    </div>

    <div class="box">
      <img
        src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />
      <div class="text">ACCESSORIES</div>
    </div>

    <div class="box">
      <img
        src="https://i.pinimg.com/564x/43/c2/a5/43c2a55207dd738d37dd3db5edffcc55.jpg"
      />
      <div class="text">PANTS</div>
    </div>
  </div>

  <h1 id="Trending">Trending Now</h1>

  <div class="trend-container">
    <div class="trend-item">
      <img
        src="https://i.pinimg.com/564x/c6/d0/8f/c6d08fea13f40b56984ea95022dbf54d.jpg"
        alt="Image 1"
      />
      <div class="text-overlay">
        <h2>@ire</h2>
        <p>
          Modern style is a design aesthetic that is characterized by clean
          lines, minimalism, and a focus on function
        </p>
      </div>
    </div>
    <div class="trend-item">
      <img
        src="https://i.pinimg.com/564x/ae/85/3a/ae853ab6f2f57f45786e5bd5b86f11df.jpg"
        alt="Image 2"
      />
      <div class="text-overlay">
        <h2>Simplicity</h2>
        <p>Simplicity is the ultimate sophistication to achieve</p>
      </div>
    </div>
    <div class="trend-item">
      <img
        src="https://i.pinimg.com/564x/ee/97/8f/ee978f8a579466a75915e9fd028489e0.jpg"
        alt="Image 3"
      />
      <div class="text-overlay">
        <h2>Dynamic Nature</h2>
        <p>
          Characterized by its dynamic and versatile nature, constantly evolving
          to reflect the current taste
        </p>
      </div>
    </div>
    <div class="trend-item">
      <img
        src="https://i.pinimg.com/564x/ee/97/8f/ee978f8a579466a75915e9fd028489e0.jpg"
        alt="Image 4"
      />
      <div class="text-overlay">
        <h2>Minimalism</h2>
        <p>Less is more in design philosophy</p>
      </div>
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

<style scooped>
  .home-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 80px;
  }

  .box {
    position: relative;
    width: 100%;
    height: 0;
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
    font-size: 2.5rem;
    font-weight: bolder;
    text-align: center;
    text-shadow: 2px 2px 4px #000000;
  }

  #Trending {
    text-align: center;
    font-size: 40px;
  }

  .trend-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .trend-item {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
  }

  .trend-item img {
    width: 100%;
    height: auto;
  }

  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    max-width: 90%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
  }

  .text-overlay h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .text-overlay p {
    font-size: 1rem;
    margin-bottom: 0;
    line-height: 1.2;
  }
</style>
