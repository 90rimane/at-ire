<template>
  <div id="counter-container">
    <span class="material-symbols-outlined">shopping_cart_checkout</span>
    <div v-if="this.$store.state.activeUser" id="counter">
      {{ this.counterNumber }}
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      counterNumber() {
        return this.$store.state.activeUser.cart.length
      }
    }
  }
</script>

<style scoped>
  #counter-container {
    position: relative;
    height: 39px;
  }

  #counter {
    width: 15px;
    background-color: rgb(161, 253, 167);
    border-radius: 50%;
    font-size: 0.8rem;
    padding: 1.5px;
    position: absolute;
    top: -2px;
    left: 28px;
    display: flex;
    justify-content: center;
  }

  .material-symbols-outlined {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 13px;
    padding-left: 3px;
    font-size: 1.9rem;
    cursor: pointer;
    color: #000000;
    margin-top: -9px;
  }
  .material-symbols-outlined:hover {
    color: #fff5ef;
  }

  @media (min-width: 980px) {
    .material-symbols-outlined {
      position: absolute;
      width: 30px;
      height: 30px;
      cursor: pointer;
      color: #000000;
    }
    .material-symbols-outlined:hover {
      color: #fff5ef;
    }
  }
</style>

<!-- Things to fix: There should be no hover effect on the icon  in the hamburgermenu and the cart-icon should appear in differnet sizes accordingly to the respectipe place it's placed. -->
