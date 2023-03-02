<script>
  export default {
    props: {
      product: {
        type: Object,
        default: null
      }
    },
    created() {
      // setTimeout(() => {
      //   console.log(this.$store.state.allProducts)
      // }, 2000)
    },
    methods: {
      setFavInAcc(currentItem) {
        const parsed = JSON.parse(sessionStorage.getItem('activeUser'))
        // findIndex returns -1 if it can't find matching ID
        const indexOfId = parsed.favorites.findIndex(
          (item) => item.id == currentItem.id
        )

        if (indexOfId != -1) {
          parsed.favorites.splice(indexOfId, 1)
        } else {
          parsed.favorites.push(currentItem)
        }

        sessionStorage.setItem('activeUser', JSON.stringify(parsed))
        this.$store.dispatch('getLogged')
      }
    }
  }
</script>

<template>
  <div class="item-container">
    <div class="img-container">
      <router-link
        to="/product"
        @click="$store.dispatch('setOneProduct', product)"
        class="button"
      >
        <img :src="product.img.Black" :alt="product.name" />
      </router-link>
      <div class="border">
        <span class="product-price">{{ product.price }} kr</span>
      </div>

      <div class="fav-btn-container" v-if="$store.state.activeUser != null">
        <svg
          @click="setFavInAcc(product)"
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

    <h3 class="product-title">{{ product.name }}</h3>

    <div class="details-container">
      <p class="product-desc">{{ product.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .item-container {
    font-family: 'Roboto', sans-serif;
    width: 300px;

    a {
      text-decoration: none;
    }
    .img-container {
      height: 300px;
      aspect-ratio: 1;
      position: relative;
      margin: auto;

      img {
        width: 100%;
        border-radius: 8px;
      }

      .border {
        background-color: #ecc8b2;
        position: absolute;
        left: 0;
        bottom: 18px;
        padding: 4px 15px;
        border-radius: 0 4px 4px 0;
        .product-price {
          font-size: 20px;
          color: #1e293b;
          display: block;
          font-family: 'Roboto', sans-serif;
        }
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

    .product-title {
      padding: 6px 8px 3px 8px;
      font-size: 20px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      color: #1e293b;
    }

    .details-container {
      padding: 0 8px;
      font-family: 'Roboto', sans-serif;
      .product-desc {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.504);
        font-family: inherit;
      }
    }
  }
</style>
