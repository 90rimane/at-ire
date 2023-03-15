<template>
    <div class="banner">
      <h1>Trending Now</h1>
      <button @click="toggleTrends">
        {{ showTrends ? 'Explore Less' : 'Explore More' }}
      </button>
    </div>

    <div class="trend-container" v-show="showTrends">
    <div class="trend-item"
         v-for="(trend, index) in trends"
         :key="index"
         @mouseover="toggleHover(index, true)"
         @mouseleave="toggleHover(index, false)"
         :class="{ 'hover': trend.hover }">
      <img :src="trend.imageSrc" :alt="trend.altText" />
      <div class="text-overlay">
        <h2>{{ trend.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showTrends: false
      }
    },
    methods: {
      toggleTrends() {
        this.showTrends = !this.showTrends
      }
    }
  }


</script>

<style scoped>
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
    padding: 14px;
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

  .banner {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    background-color: #f5f5f5;
    margin-top: -100px;
  }

  .banner h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .banner button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    width: 200px;
  }

  .banner button:hover {
    background-color: #0069d9;
  }

  @media screen and (min-width: 979px) {
    .trend-item {
      width: 35%;
    }
  }
</style>
