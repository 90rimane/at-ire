<script>
  export default {
    created() {
      fetch('api.json')
        .then((response) => response.json())
        .then((result) => {
          this.products = result.data
        })
    },
    data() {
      return {
        products: null
      }
    }
  }
</script>

<template>
  <h1>List of @ire's products</h1>
  <ol>
    <li :key="product.id" v-for="product in products">
      Category: {{ product.category }} | Subcategory:
      {{ product.subcategory }} | Name:
      {{ product.name }}
    </li>
  </ol>
</template>
