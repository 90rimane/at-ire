<script>
  import productItem from '../components/ProductItem.vue'
  export default {
    components: {
      productItem
    },
    computed: {
      testproducts() {
        // slice method to only display 4 items at once
        if (this.$store.state.allProducts) {
          return this.$store.state.allProducts.slice(0, 1)
        }
        return null
      },
      getfavorites() {
        // slice method to only display 4 items at once
        if (this.$store.state.activeUser) {
          return this.$store.state.activeUser.favorites
        }
        return null
      }
    }
  }
</script>

<template>
  <main class="home-pages">
    <h1>Favorite</h1>
    <p>Make list of favorites here</p>
    <h2>products</h2>
    <div v-if="testproducts != null" class="all-items">
      <productItem
        v-for="product in testproducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <h2>Favorites</h2>
    <div v-if="testproducts != null" class="all-items">
      <productItem
        v-for="product in getfavorites"
        :key="product.id"
        :product="product"
      />
    </div>
    <router-link to="/search" class="button">
      <div style="width: 50px; height: 50px; background-color: red" />
    </router-link>
  </main>
</template>
