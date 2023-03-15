<script>
  export default {
    props: {
      cartproduct: {
        type: Object,
        default: null
      }
    },
    methods: {
      deleteItem(targetId) {
        const parsed = JSON.parse(sessionStorage.getItem('activeUser'))

        // find the index of target product to delete
        const indexOfId = parsed.cart.findIndex((item) => item.id == targetId)

        // slice away where the index is
        parsed.cart.splice(indexOfId, 1)

        // update the "backend" aka vuex and session storage
        sessionStorage.setItem('activeUser', JSON.stringify(parsed))
        this.$store.dispatch('getLogged')
      }
    }
  }
</script>

<template>
  <div class="item-container">
    <div class="img-container">
      <img :src="cartproduct.img" :alt="cartproduct.name" />
    </div>

    <span
      @click="deleteItem(cartproduct.id)"
      class="material-symbols-outlined trash-icon"
    >
      delete
    </span>

    <div class="product-info">
      <h4>{{ cartproduct.name }}</h4>
      <p><span class="color">Color:</span> {{ cartproduct.colors }}</p>
      <p><span class="size">Size: </span> {{ cartproduct.sizes }}</p>
      <p class="desc">{{ cartproduct.description }}</p>
    </div>

    <div class="price-container">
      <p class="product-price">{{ cartproduct.price }}kr</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .item-container {
    font-family: 'Roboto', sans-serif;
    display: flex;
    min-width: 315px;
    min-height: 100px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    overflow: hidden;
    border-radius: 16px;
    position: relative;

    .img-container {
      height: 100px;
      aspect-ratio: 1;
      position: relative;

      img {
        width: 100%;
      }
    }

    .trash-icon {
      position: absolute;
      right: 0;
      top: 0;
      padding: 8px;
      color: rgb(95, 95, 95);
      cursor: pointer;

      &:hover {
        color: rgb(196, 0, 0);
      }
    }

    .product-info {
      padding: 8px;
      color: rgb(56, 56, 56);

      .color {
        display: inline-block;
        color: black;
        font-weight: 500;
        padding: 2px 0 2px 0;
      }

      .size {
        color: black;
        display: inline-block;
        font-weight: 500;
      }

      .desc {
        display: none;
      }
    }

    .price-container {
      background-color: var(--main-accent);
    }

    @media only screen and (min-width: 500px) {
      .img-container {
        height: 100px;
      }
      .product-info {
        p {
          display: inline-block;
        }

        .size {
          padding-left: 8px;
        }

        .desc {
          display: block;
        }
      }
    }

    .price-container {
      display: flex;
      align-items: center;
      margin-left: auto;
      padding: 0 16px 0 8px;
      .product-price {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
</style>
