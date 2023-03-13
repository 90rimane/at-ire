<template>
  <main>
    <h2 class="page-lable">Shopping Cart</h2>
    <div v-if="$store.state.activeUser !== null" class="cart-container">
      <div class="display-container">
        <cartItem
          v-for="product in $store.state.activeUser.cart"
          :key="product.id"
          :cartproduct="product"
        />
        <h3 v-if="$store.state.activeUser.cart.length < 1">
          Your cart is empty.
        </h3>
      </div>

      <div class="checkout-info">
        <span class="item-count"
          >item(s): {{ $store.state.activeUser.cart.length }}</span
        >
        <span class="total">Total: {{ total }}Kr</span>
        <div class="button-container">
          <router-link to="/"><button>Continue shopping</button></router-link>
          <router-link to="/checkout">
            <button>To checkout</button></router-link
          >
        </div>
      </div>
    </div>

    <div v-else>
      <h3>
        You are not logged in,
        <RouterLink to="/login" class="nav-link">login in</RouterLink> to view
        your cart.
      </h3>
    </div>
  </main>
</template>

<script>
  import cartItem from '../components/cartItem.vue'
  export default {
    components: {
      cartItem
    },
    computed: {
      total() {
        // Setting state activeuser cart to a variable for readability
        const cartItems = this.$store.state.activeUser.cart

        // return accumulated total with reduce function
        return cartItems.reduce((sum, item) => {
          return sum + Number(item.price)
        }, 0)
      }
    }
  }
</script>

<style scope lang="scss">
  main {
    padding: 80px 16px;
    min-height: 100vh;

    .page-lable {
      margin-bottom: 8px;
    }
    h3 {
      text-align: center;
      color: var(--grey);
      text-align: center;
      margin: 80px 0 300px 0;
    }

    .cart-container {
      .display-container {
        min-height: calc(100vh - 235px);
        max-height: calc(100vh - 235px);
        padding-top: 8px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }

    .checkout-info {
      border-top: 2px var(--grey) solid;
      margin-top: 8px;
      padding: 8px;

      span {
        font-size: 18px;
        font-weight: 500;
      }

      .total {
        float: right;
      }

      .button-container {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;

        button {
          padding: 6px 12px;
          background-color: var(--main-accent);
          border-radius: 20px;
          border: none;
          font-size: 16px;
        }
      }
    }
  }
  @media only screen and (min-width: 980px) {
    main {
      padding-left: 32px;
      padding-right: 32px;

      .cart-container {
        max-width: 1200px;
        margin: auto;
        padding-left: 32px;
        padding-right: 32px;
      }

      .button-container {
        justify-content: flex-end !important;
        gap: 16px;

        button {
          font-size: 18px !important;
        }
      }
    }
  }
</style>
