<script>
  export default {
    props: {
      cartproduct: {
        type: Object,
        default: null
      }
    },
    methods: {
      // TODO: Delete function
      // TODO: increase/decrease product quantity
    }
  }
</script>

<template>
  <div class="item-container">
    <div class="img-container">
      <img :src="cartproduct.img" :alt="cartproduct.name" />
    </div>

    <span class="material-symbols-outlined trash-icon"> delete </span>

    <div class="product-info">
      <h4>{{ cartproduct.name }}</h4>
      <p><span class="color">Color:</span> {{ cartproduct.colors }}</p>
      <p><span class="size">Size: </span> {{ cartproduct.sizes }}</p>
      <p class="desc">{{ cartproduct.description }}</p>
    </div>

    <div class="quantity-menu">
      <span class="quantity-lable">Quantity: </span>
      <span class="material-symbols-outlined left-arrow"> chevron_left </span>
      <span>{{ cartproduct.quantity }}</span>
      <span class="material-symbols-outlined right-arrow"> chevron_right </span>
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
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    border-radius: 16px;
    margin: 8px 12px;
    position: relative;

    .img-container {
      height: 120px;
      aspect-ratio: 1;
      position: relative;

      img {
        width: 100%;
      }

      .fav-btn-container {
        position: absolute;
        bottom: 5%;
        right: 5%;
        width: 30px;
        aspect-ratio: 1;
        svg {
          fill: #ecb2b2;

          &:hover {
            fill: #e87676;
          }
        }
      }
    }

    .trash-icon {
      position: absolute;
      right: 0;
      top: 0;
      padding: 8px;
      color: rgb(142, 142, 142);

      &:hover {
        color: rgb(196, 0, 0);
      }
    }

    .quantity-menu {
      color: black;

      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;
      padding: 8px;

      .quantity-lable {
        color: rgb(57, 57, 57);
      }

      .left-arrow {
        color: black;
      }

      .right-arrow {
        color: black;
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
      padding-right: 16px;
      .product-price {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
</style>
