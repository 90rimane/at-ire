<script>
  import productItem from '../components/ProductItem.vue'
  export default {
    components: {
      productItem
    },
    computed: {
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
    <h2>My Favorites</h2>
    <div v-if="$store.state.activeUser != null" class="favorite-display">
      <productItem
        v-for="product in getfavorites"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
  @media only screen and (min-width: 980px) {
    main {
      margin-left: 68px;
    }
  }
  main {
    padding-top: 80px;

    h2 {
      margin-left: 40px;
    }

    .favorite-display {
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: center;
      padding: 20px 0 60px 0;
      max-width: 990px;
      margin: auto;
    }

    @media only screen and (min-width: 690px) {
      .favorite-display {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
