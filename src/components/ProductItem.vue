<script>
  export default {
    props: {
      product: {
        type: Object,
        default: null
      }
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
      <img :src="product.img.Black" :alt="product.name" />
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
    <div class="border">
      <h3 class="product-title">{{ product.name }}</h3>
    </div>
    <div class="details-container">
      <p class="product-desc">{{ product.description }}</p>
      <span class="product-price">Price: {{ product.price }} kr</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .item-container {
    width: 300px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff5ef;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    .img-container {
      height: 300px;
      aspect-ratio: 1;
      position: relative;
      margin: auto;

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

    .border {
      background-color: #ecc8b2;
      padding: 6px 16px;
      .product-title {
        font-size: 20px;
      }
    }

    .details-container {
      padding: 6px 16px;

      .product-desc {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.504);
      }
      .product-price {
        font-size: 20px;
        display: block;
        width: 100%;
        text-align: right;
      }
    }
  }
</style>
