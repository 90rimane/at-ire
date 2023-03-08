<template>
  <main>
    <h2 class="page-lable">Shopping Cart</h2>
    <div v-if="$store.state.activeUser != null" class="cart-display">
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
        <router-link to="/checkout"> <button>To checkout</button></router-link>
      </div>
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

<style scoped lang="scss">
  main {
    margin-top: 56px;
    padding: 16px 8px;
    min-height: 100vh;

    .page-lable {
      margin-bottom: 8px;
    }

    .cart-display {
      display: flex;
      flex-direction: column;
      gap: 16px;
      min-height: calc(100vh - 235px);
      max-height: calc(100vh - 235px);
      overflow-y: scroll;
      padding-top: 8px;
    }

    .checkout-info {
      border-top: 2px rgb(139, 139, 139) solid;
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
          background-color: #ecc8b2;
          border-radius: 20px;
          border: none;
          font-size: 16px;
        }
      }
    }
  }
  @media only screen and (min-width: 980px) {
    main {
      margin-left: 28px;
      padding-left: 32px;
      padding-right: 32px;

      .cart-display {
        max-width: 1400px;
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
