<script>
  import productItem from '../components/ProductItem.vue'
  export default {
    components: {
      productItem
    },
    created() {
      //Update this.tags when loading in and when changing the address manually
      this.$watch(
        () => this.$route.params,
        () => {
          if (this.$route.params.filter != 'All') {
            this.tags = this.$route.params.filter.split('+')
          }
        },
        { immediate: true }
      )
    },
    computed: {
      searchable() {
        if (this.$store.state.allProducts) {
          return this.$store.state.allProducts.map((product) => ({
            ...product,
            allTags: `${product.description} ${product.category} ${product.subcategory}`
          }))
        }
        return []
      },
      tagPass() {
        if (this.tags.length >= 1) {
          return this.searchable.filter((product) => {
            return product.allTags
              .split(' ')
              .some((word) => this.tags.includes(word))
          })
        }
        return this.searchable
      },
      renderProducts() {
        if (this.searchInput) {
          return this.tagPass.filter((product) => {
            return product.allTags
              .toLowerCase()
              .includes(this.searchInput.toLowerCase())
          })
        }
        return this.tagPass
      }
    },
    data() {
      return {
        searchInput: '',
        tags: []
      }
    },
    methods: {
      tagfilter(tag) {
        //Add and remove tags
        if (!this.tags.includes(tag)) {
          this.tags.push(tag)
        } else {
          this.tags = this.tags.filter((t) => t !== tag)
        }

        //push tags to address
        if (this.tags.length >= 1) {
          this.$router.push('/search/' + this.tags.join('+'))
        } else {
          this.$router.push('/search/All')
        }

        console.log(this.tags)
      }
    }
  }
</script>

<template>
  <div class="main-page">
    <div class="search-header">
      <span class="material-symbols-outlined filter-icon"> filter_alt </span>
      <div class="current-filter">
        <span>Our Sortiment</span>
      </div>
    </div>
    <div class="filter-container">
      <div class="filter">
        <h2>Filter with tags!</h2>
        <div class="categories">
          <h3>Categories</h3>
          <button
            :class="[tags.includes('Tops') ? 'plus' : 'minus']"
            @click="tagfilter('Tops')"
            type="button"
          >
            Tops
          </button>
          <button
            :class="[tags.includes('Bottoms') ? 'plus' : 'minus']"
            @click="tagfilter('Bottoms')"
            type="button"
          >
            Bottoms
          </button>
          <button
            :class="[tags.includes('Accessories') ? 'plus' : 'minus']"
            @click="tagfilter('Accessories')"
            type="button"
          >
            Accessories
          </button>
        </div>
        <div class="sub-category">
          <h3>Sub Categories</h3>
          <button
            :class="[tags.includes('Hoodies') ? 'plus' : 'minus']"
            @click="tagfilter('Hoodies')"
            type="button"
          >
            Hoodies
          </button>
          <button
            :class="[tags.includes('Sweatshirts') ? 'plus' : 'minus']"
            @click="tagfilter('Sweatshirts')"
            type="button"
          >
            Sweatshirts
          </button>
          <button
            :class="[tags.includes('T-Shirts') ? 'plus' : 'minus']"
            @click="tagfilter('T-Shirts')"
            type="button"
          >
            T-Shirts
          </button>
          <button
            :class="[tags.includes('Tank-Tops') ? 'plus' : 'minus']"
            @click="tagfilter('Tank-Tops')"
            type="button"
          >
            Tank-Tops
          </button>
          <button
            :class="[tags.includes('Pants') ? 'plus' : 'minus']"
            @click="tagfilter('Pants')"
            type="button"
          >
            Pants
          </button>
          <button
            :class="[tags.includes('Shorts') ? 'plus' : 'minus']"
            @click="tagfilter('Shorts')"
            type="button"
          >
            Shorts
          </button>
          <button
            :class="[tags.includes('Hats') ? 'plus' : 'minus']"
            @click="tagfilter('Hats')"
            type="button"
          >
            Hats
          </button>
          <button
            :class="[tags.includes('Bags') ? 'plus' : 'minus']"
            @click="tagfilter('Bags')"
            type="button"
          >
            Bags
          </button>
        </div>

        <div class="search-bar">
          <input
            class="search-bar-desktop"
            type="text"
            v-model="searchInput"
            placeholder="Search products..."
          />
        </div>
      </div>
    </div>
    <div v-if="this.$store.state.allProducts" class="product-display">
      <productItem
        v-for="product in renderProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <p v-else style="text-align: center">Loading products...</p>
  </div>
</template>

<style scoped lang="scss">
  .main-page {
    min-height: 100vh;
    width: 100%;
    margin-top: 56px;
    font-family: 'roboto';
    .search-header {
      width: 100%;
      background-color: #ecc8b2;
      padding: 18px 9px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      color: rgb(90, 90, 90);

      .filter-icon {
        padding: 8px;
        border-radius: 50%;
        background-color: white;
        margin: 0 20px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
      }

      .current-filter {
        background-color: white;
        padding: 8px 27px;
        border-radius: 50px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;

        span {
          font-size: 22px;
          display: block;
          padding: 0 5px;
          border-bottom-width: 2px;
          border-bottom-style: solid;
        }
      }
    }

    .filter-container {
      .filter {
        box-sizing: border-box;
        width: 100%;
        border-radius: 16px;
        background-color: white;
        padding: 20px;

        .categories {
          margin-bottom: 8px;

          h3 {
            padding-bottom: 8px;
          }
        }

        .sub-category {
          margin-bottom: 8px;

          h3 {
            padding-bottom: 8px;
          }
        }
      }
    }

    button {
      padding: 6px 12px;
      background-color: #ecc8b2;
      border-radius: 20px;
      border: none;
      margin: 4px;
    }

    .plus {
      background-color: #f39256;
    }

    .plus::after {
      content: '-';
    }

    .minus::after {
      content: '+';
    }

    .product-display {
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: center;
      padding-top: 16px;
    }
  }
</style>
