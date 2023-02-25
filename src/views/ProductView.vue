<template>
  <article id="article" v-if="oneProduct">
    <header>
      <!-- spans to be made to breadcrumb-navigation  -->
      <span>{{ this.oneProduct.category }} --> </span>
      <span>{{ this.oneProduct.subcategory }}</span>
      <h1>{{ this.oneProduct.description }}</h1>
      <img :src="oneProduct.img.Black" :alt="this.oneProduct.description" />
    </header>
    <!-- <section>
      <h2>Colors</h2>
      <ul>
        <li v-for="color in oneProduct.colors" :key="color">
          {{ color }}
        </li>
      </ul>
    </section> -->
    <section>
      <h2 id="price">Price: {{ this.oneProduct.price }}:-</h2>
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

<style lang="scss">
  h1 {
    color: var(--dark);
    padding: 3vh;
  }

  #article {
    margin-left: calc(2rem + 45px);
  }

  #price {
    color: var(--dark-alt);
    padding: 3vh 0 0 40vw;
  }
</style>
