<template>
  <div class="item-container">
    <div class="img-container">
      <router-link
        to="/product"
        @click="$store.dispatch('setOneProduct', product)"
        class="button"
      >
        <img :src="product.img.Black" :alt="product.name" />
      </router-link>
      <div class="border">
        <span class="product-price">{{ product.price }} kr</span>
      </div>

      <FavoriteButton :favproduct="product" />
    </div>
    <h3 class="product-title">{{ product.name }}</h3>
    <div class="details-container">
      <p class="product-desc">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
  import FavoriteButton from './FavoriteButton.vue'
  export default {
    components: {
      FavoriteButton
    },
    props: {
      product: {
        type: Object,
        default: null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item-container {
    font-family: 'Roboto', sans-serif;
    width: 300px;
    min-height: 372px;

    a {
      text-decoration: none;
    }
    .img-container {
      height: 300px;
      aspect-ratio: 1;
      position: relative;
      margin: auto;

      img {
        width: 100%;
        border-radius: 8px;
      }

      .border {
        background-color: var(--main-accent);
        position: absolute;
        left: 0;
        bottom: 18px;
        padding: 4px 15px;
        border-radius: 0 4px 4px 0;
        .product-price {
          font-size: 20px;
          color: #1e293b;
          display: block;
          font-family: 'Roboto', sans-serif;
        }
      }
    }

    .product-title {
      margin: 0;
      padding: 6px 8px 3px 8px;
      font-size: 20px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: #1e293b;
    }

    .details-container {
      padding: 0 8px;
      font-family: 'Roboto', sans-serif;
      .product-desc {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.504);
        font-family: inherit;
      }
    }
  }
</style>
