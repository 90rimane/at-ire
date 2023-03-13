<script>
  import productItem from '../components/ProductItem.vue'

  export default {
    components: {
      productItem
    }
  }
</script>

<template>
  <main class="home-pages">
    <h2>My Favorites</h2>
    <div v-if="$store.state.activeUser != null" class="favorite-display">
      <productItem
        v-for="product in $store.state.activeUser.favorites"
        :key="product.id"
        :product="product"
      />
      <h3 v-if="$store.state.activeUser.favorites.length < 1">
        It looks like you have no favorites yet, see our
        <RouterLink to="/search/All" class="nav-link">sortiment </RouterLink> to
        find something you like!
      </h3>
    </div>
    <div v-else>
      <h3>
        You are not logged in,
        <RouterLink to="/login" class="nav-link">login in</RouterLink> to view
        your favorites.
      </h3>
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
    min-height: 100vh;

    a {
      color: rgb(44, 44, 44);
    }

    h2 {
      margin-left: 40px;
    }

    h3 {
      text-align: center;
      color: var(--grey);
      margin: 100px;
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
