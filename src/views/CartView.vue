<template>
  <main class="home-pages">
    <router-link to="/product">To Product</router-link>
    <h1>Shopping Cart</h1>
    <p>Checkout here</p>
    <div v-if="$store.state.activeUser != null" class="checkout-display">
      <cartItem
        v-for="product in $store.state.activeUser.cart"
        :key="product.id"
        :cartproduct="product"
      />
      <h3 v-if="$store.state.activeUser.cart.length < 1">
        It looks like you're cart is empty! Check out our
        <RouterLink to="/search/All" class="nav-link">sortiment </RouterLink> to
        find something you like!
      </h3>
    </div>
  </main>
</template>

<script>
  import cartItem from '../components/cartItem.vue'
  export default {
    components: {
      cartItem
    }
  }
</script>

<style scoped lang="scss">
  @media only screen and (min-width: 980px) {
    main {
      margin-left: 68px;
      padding-top: 80px;
      min-height: 100vh;
    }

    h1 {
      margin-left: 40px;
    }

    p {
      margin-left: 40px;
    }
  }
</style>
