<template>
  <article id="article" v-if="oneProduct">
    <header>
      <!-- spans to be made to breadcrumb-navigation  -->
      <span>{{ this.oneProduct.category }} --> </span>
      <span>{{ this.oneProduct.subcategory }}</span>

      <h1>{{ this.oneProduct.description }}</h1>
      <img
        id="product-image"
        :src="oneProduct.img.Black"
        :alt="this.oneProduct.description"
      />
    </header>
    <section>
      <h2 class="heading">Colors</h2>
      <div id="color-container">
        <div
          id="color-options"
          v-for="(color, key) in oneProduct.img"
          :key="key"
        >
          <img class="color-img" :src="color" :alt="key" />
          {{ key }}
        </div>
      </div>
    </section>
    <section>
      <h2 class="heading">Sizes</h2>
      <div id="sizes-container">
        <div class="size-for" v-for="size in oneProduct.sizes" :key="size">
          {{ size }}
        </div>
      </div>
    </section>
    <section id="price-cart">
      <h2 id="price">Price: {{ this.oneProduct.price }}:-</h2>
      <button id="cart-button">
        Add to cart
        <span id="cart-icon" class="material-symbols-outlined"
          >shopping_cart_checkout</span
        >
      </button>
    </section>
  </article>
</template>

<script>
  export default {
    computed: {
      oneProduct() {
        return this.$store.state.oneProduct
      }
    }
  }
</script>

<style scoped lang="scss">
  h1 {
    color: var(--dark);
    padding: 3vh;
  }

  h2 {
    padding-top: 8%;
  }

  .heading {
    font-size: 1rem;
    font-weight: 100;
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
  }

  #cart-button:hover {
    box-shadow: 2px 3px 15px #f39256;
  }

  #cart-icon {
    display: flex;
    flex-direction: column;
  }

  #color-container,
  #sizes-container {
    display: flex;
    padding: 7% 0 3% 0;
  }

  #color-options {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 12px;
    margin-left: 12px;
    font-size: 0.8rem;
  }

  #price {
    color: var(--dark-alt);
    padding-bottom: 15px;
    padding-right: 25px;
    font-size: 1.3rem;
  }

  #price-cart {
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 75px;
  }

  #product-image {
    width: 70vw;
    margin-left: 10px;
  }

  #sizes-container {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media (min-width: 500px) {
    #price-cart {
      justify-content: flex-end;
    }

    .color-img {
      width: 60%;
      height: 80%;
    }
  }
</style>
