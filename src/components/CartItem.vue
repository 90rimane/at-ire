<script>
  export default {
    props: {
      product: {
        type: Object,
        default: null
      }
    }
  }
</script>

<template>
  <div class="item-container">
    <div class="img-container">
      <img :src="product.img" :alt="product.name" />

      <div class="fav-btn-container" v-if="$store.state.activeUser != null">
        <svg
          @click="this.$store.dispatch('setFav', product)"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 96 960 960"
        >
          <path
            v-if="
              !$store.state.activeUser.favorites.some((i) => i.id == product.id)
            "
            d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z"
          />

          <path
            v-else
            d="m480 935-41-37q-106-97-175-167.5t-110-126Q113 549 96.5 504T80 413q0-90 60.5-150.5T290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.5T880 413q0 46-16.5 91T806 604.5q-41 55.5-110 126T521 898l-41 37Z"
          />
        </svg>
      </div>
    </div>

    <span class="material-symbols-outlined trash-icon"> delete </span>

    <div class="product-info">
      <h4>{{ product.name }}</h4>
      <p><span class="color">Color:</span> {{ product.colors }}</p>
      <p><span class="size">Size: </span> {{ product.sizes }}</p>
      <p class="desc">{{ product.description }}</p>
    </div>

    <div class="quantity-menu">
      <span class="quantity-lable">Quantity: </span>
      <span class="material-symbols-outlined left-arrow"> chevron_left </span>
      <span>{{ product.quantity }}</span>
      <span class="material-symbols-outlined right-arrow"> chevron_right </span>
    </div>

    <div class="price-container">
      <p class="product-price">{{ product.price }}kr</p>
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
