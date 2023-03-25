<template>
  <article id="article" v-if="this.$store.state.allProducts">
    <header>
      <!-- spans to be made to breadcrumb-navigation  -->
      <span>{{ this.oneProduct.category }} </span>
      <span>{{ this.oneProduct.subcategory }}</span>
      <h1>
        {{ this.oneProduct.description
        }}<FavoriteButton class="fav-btn" :favproduct="oneProduct" />
      </h1>

      <!-- Added by Jovan: using OR operator to default between values -->
      <img
        id="product-img"
        :src="this.selectedColorImg || oneProduct.img.Black"
        :alt="this.oneProduct.description"
      />
    </header>
    <section>
      <h2 class="heading">Colors</h2>
      <p>Select color:</p>
      <div id="color-container">
        <div
          id="color-options"
          v-for="(color, key) in oneProduct.img"
          :key="key"
        >
          <img
            class="color-img"
            :src="color"
            :alt="key"
            @click=";(selectedColorImg = color), (selectedColor = key)"
            :class="{ 'selected-color': color === selectedColorImg }"
          />
          {{ key }}
        </div>
      </div>
    </section>
    <section>
      <h2 class="heading">Sizes</h2>
      <p>Select size:</p>
      <div id="sizes-container">
        <div
          class="size-for"
          v-for="size in oneProduct.sizes"
          :key="size"
          @click="selectedSize = size"
          :class="{ 'selected-size': size === selectedSize }"
        >
          {{ size }}
        </div>
      </div>
    </section>
    <section id="price-cart">
      <h2 id="price">Price: {{ this.oneProduct.price }}:-</h2>
      <button
        v-if="this.$store.state.activeUser"
        id="cart-button"
        @click="onAddToCart"
        :disabled="!bothSelected"
      >
        Add to cart
        <span id="cart-icon" class="material-symbols-outlined">
          shopping_cart_checkout
        </span>

        <div v-if="notification" class="notification">
          <span>Product added to cart.</span>
        </div>
      </button>
      <div v-else class="not-logged">
        <button class="not-logged-btn">
          Login to <br />
          add to cart
        </button>
      </div>
    </section>
  </article>
  <ProductReview />
</template>

<script>
  import ProductReview from '../components/ProductReview.vue'
  import { v4 as uuidv4 } from 'uuid'
  import FavoriteButton from '../components/FavoriteButton.vue'

  export default {
    components: {
      ProductReview,
      FavoriteButton
    },
    computed: {
      oneProduct() {
        return this.$store.state.allProducts.find(
          (product) => product.id === this.$route.params.id
        )
      },
      bothSelected() {
        return this.selectedColor && this.selectedSize
      }
    },
    data() {
      return {
        selectedColor: null,
        selectedColorImg: null,
        selectedSize: null,
        cartProduct: null,
        activeUser: null,
        notification: false
      }
    },
    methods: {
      onAddToCart() {
        // to make an object with the specified color and size -->
        // Changed by Jovan: Instead of spreading out the whole object I've resorted
        // to only adding the parts needed, this way I can add an unique id key
        this.cartProduct = {
          id: uuidv4(),
          name: this.oneProduct.name,
          description: this.oneProduct.description,
          price: this.oneProduct.price,
          colors: this.selectedColor,
          img: this.selectedColorImg,
          sizes: this.selectedSize
        }

        this.activeUser = JSON.parse(sessionStorage.getItem('activeUser'))
        this.activeUser.cart.push(this.cartProduct)
        sessionStorage.setItem('activeUser', JSON.stringify(this.activeUser))
        this.$store.dispatch('getLogged')
        // console.log(
        //   'this.$store.state.activeUser.cart.length',
        //   this.$store.state.activeUser.cart.length
        // )

        // Added by Jovan: Set notification to true, which sends the div visible
        this.notification = true
        setTimeout(() => {
          this.notification = false
        }, 1700) // This number is the waiting time in milliseconds
      }
    }
  }
</script>

<style scoped lang="scss">
  header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  h1 {
    color: var(--dark);
    padding: 3vh;
  }

  p {
    font-size: 0.7rem;
    // padding-top: 4px;
    padding-left: 5px;
    margin: 0;
  }

  .fav-btn {
    display: inline;
    margin-left: 12px;
  }

  .heading {
    font-size: 1rem;
    font-weight: 100;
    padding-top: 3%;
  }

  .color-img {
    width: 65px;
    height: 68px;
    margin-right: 5px;
    margin-left: 5px;
    border: solid;
    border-color: #bdbdbd;
    border-width: 1px;
  }

  .size-for {
    border: solid;
    border-width: 1px;
    width: fit-content;
    padding: 2px 6px;
  }

  .size-for:active {
    background-color: var(--main-strong-accent);
  }

  // temporary classes when selected -->
  .selected-size {
    background-color: var(--main-strong-accent);
  }

  .selected-color {
    border-color: var(--main-strong-accent);
    border-width: 4px;
  }

  #article {
    margin-top: 80px;
  }

  #cart-button {
    margin-top: 18px;
    width: 100px;
    height: max-content;
    font-size: 0.7rem;
    border-radius: 1rem;
    background-color: #fff9f5;
    box-shadow: 2px 3px 10px #b9ada6;
    // text-decoration: none;
    border: none;
    position: relative;
  }

  #cart-button:hover,
  .color-img:hover,
  .size-for:hover {
    cursor: pointer;
    box-shadow: 2px 3px 15px var(--main-strong-accent);
  }

  #cart-button:disabled:hover {
    box-shadow: 2px 3px 7px #b9ada6;
  }

  #cart-icon {
    display: flex;
    flex-direction: column;
  }

  #color-container,
  #sizes-container {
    display: flex;
    padding: 4.5% 0 3% 0;
  }

  #color-options {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
    font-size: 0.8rem;
  }

  #price {
    color: var(--dark-alt);
    padding-right: 5%;
    padding-top: 1%;
    font-size: 1.3rem;
  }
  #price,
  #cart-button {
    margin: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #price-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 75px;
  }

  #product-img {
    width: 70vw;
    max-width: 500px;
    margin-bottom: 2%;
  }

  #sizes-container {
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 10%;
  }

  .notification {
    /*Added by Jovan */
    height: 60px;
    width: 230px;
    background-color: #fff9f5;
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    transform: translate(-50%, 0);
    margin-top: -80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    box-shadow: 2px 3px 10px #b9ada6;

    span {
      font-size: 18px;
      font-weight: 500;
    }
  }

  .not-logged-btn {
    font-size: 14px;
    border-radius: 1rem;
    background-color: #fff9f5;
    box-shadow: 12px 3px 10px #b9ada6;
    border: none;
    padding: 9px 14px;
  }

  @media (min-width: 500px) {
    #article {
      padding-left: 5%;
    }
    #price-cart {
      justify-content: flex-end;
      margin-right: 20%;
    }

    .color-img {
      width: 60%;
      height: 80%;
    }

    #sizes-container {
      padding-right: 40%;
    }
  }
</style>
