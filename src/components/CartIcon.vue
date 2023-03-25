<template>
  <div id="counter-container">
    <span class="material-symbols-outlined" :style="cssProps">
      shopping_cart_checkout
    </span>
    <div
      id="counter"
      :style="cssProps"
      v-if="this.$store.state.activeUser && this.counterNumber !== 0"
    >
      {{ this.counterNumber }}
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      counterNumber() {
        return this.$store.state.activeUser.cart.length
      },
      // makes the props values to css variable format to be used in the css down here -->
      cssProps() {
        return {
          '--counter-location': this.counterLocation,
          '--icon-size': this.iconSize,
          '--hover-color': this.hoverColor,
          '--icon-color': this.iconColor
        }
      }
    },

    props: {
      counterLocation: {
        type: String,
        default: '0'
      },
      hoverColor: {
        type: String,
        default: null
      },
      iconSize: {
        type: String,
        default: null
      },
      iconColor: {
        type: String,
        default: null
      }
    }
  }
</script>

<style lang="scss" scoped>
  #counter-container {
    position: relative;
    width: 27.2px;
    height: 27.2px;
    #counter {
      position: absolute;
      top: -5px;
      width: 15px;
      background-color: var(--cart-icon-color);
      border-radius: 50%;
      font-size: 0.8rem;
      padding: 1.5px;
      margin-left: var(--counter-location);
      display: flex;
      justify-content: center;
    }
  }

  .material-symbols-outlined {
    position: absolute;
    width: 30px;
    height: 30px;
    font-size: var(--icon-size);
    cursor: pointer;
    color: var(--icon-color);
  }
  .material-symbols-outlined:hover {
    color: var(--hover-color);
  }

  @media (min-width: 980px) {
    .material-symbols-outlined {
      position: absolute;
      width: 30px;
      height: 30px;
      cursor: pointer;
      color: var(--icon-color);
    }
  }
</style>
