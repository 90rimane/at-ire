<script>
  export default {
    data() {
      return {
        products: null,
        search: ''
      }
    },
    computed: {
      searchResult() {
        if (this.search) {
          return this.$store.state.allProducts.filter((i) => {
            return this.search
              .toLowerCase()
              .split(' ')
              .every((v) => i.description.toLowerCase().includes(v))
          })
        } else {
          return this.products
        }
      }
    }
  }
</script>

<style>
  .dropdown li,
  .dropdown a {
    background-color: #efded4;
    width: 100%;
  }

  .dropdown {
    position: absolute;
    padding: 10px;
    z-index: 1;
  }
</style>

<template>
  <input type="text" v-model="search" placeholder="Search products" />
  <div>
    <ul v-if="search" class="dropdown">
      <li v-for="item in searchResult" :key="item.id">
        <a href="this.item.name"> {{ item.description }} </a>
      </li>
    </ul>
  </div>
</template>
