<template>
  <article id="article" v-if="oneProduct">
    <header>
      <!-- spans to be made to breadcrumb-navigation  -->
      <span>{{ this.oneProduct.category }} </span>
      <span>{{ this.oneProduct.subcategory }}</span>
      <h1>{{ this.oneProduct.description }}</h1>
      <img
        id="product-img"
        :src="oneProduct.img.Black"
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
      <button id="cart-button" @click="onAddToCart" :disabled="!bothSelected">
        Add to cart
        <span id="cart-icon" class="material-symbols-outlined">
          shopping_cart_checkout</span
        >
      </button>
    </section>
  </article>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid'

  export default {
    computed: {
      oneProduct() {
        return this.$store.state.oneProduct
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
        activeUser: null
      }
    },
    methods: {
      onAddToCart() {
        // to make an object with the specified color and size -->
        // Changed by Jovan: Instead of spreading out the whole array I've resorted
        // to only adding the parts needed for the cart to display, additionlly
        // added a unique product id with uuid
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
      }
    }
  }
</script>

<style scoped lang="scss">
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
    background-color: #f39256;
  }

  // temporary classes when selected -->
  .selected-size {
    background-color: #f39256;
  }

  .selected-color {
    border-color: #f39256;
    border-width: 4px;
  }

  #article {
    margin-top: 30px;
    margin-left: calc(2rem + 45px);
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
  }

  #cart-button:hover,
  .color-img:hover,
  .size-for:hover {
    cursor: pointer;
    box-shadow: 2px 3px 15px #f39256;
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
    padding-top: 40px;
    padding-bottom: 75px;
  }

  #product-img {
    width: 70vw;
    margin-left: 10px;
    margin-bottom: 2%;
  }

  #sizes-container {
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 10%;
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
