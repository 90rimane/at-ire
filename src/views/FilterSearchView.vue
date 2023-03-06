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
      headline() {
        if (this.$route.params.filter === 'All') {
          return 'Our Sortiment'
        } else if (this.$route.params.filter.split('+').length == 1) {
          return this.$route.params.filter
        } else {
          return 'Custom filter'
        }
      },
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
        tags: [],
        isActive: false
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
      },
      toggleVisable() {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<template>
  <div class="main-page">
    <div class="search-header">
      <span
        @click="toggleVisable()"
        class="material-symbols-outlined filter-icon"
      >
        filter_alt
      </span>
      <div class="current-filter">
        <span>{{ headline }}</span>
      </div>
    </div>
    <div class="filter-container" :class="{ open: isActive }">
      <div class="filter">
        <h2>Filter with tags</h2>
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

        <div class="search-container">
          <h3>Search</h3>
          <input
            class="search-bar"
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
      <p v-if="renderProducts.length == 0" style="text-align: center">
        No products found
      </p>
    </div>
    <p v-else style="text-align: center">Loading products...</p>
  </div>
</template>

<style scoped lang="scss">
  @media only screen and (min-width: 980px) {
    .main-page {
      margin-left: 68px;
    }
  }
  .main-page {
    min-height: 100vh;
    margin-top: 56px;
    font-family: 'roboto';

    .search-header {
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
        user-select: none;
      }

      .current-filter {
        background-color: white;
        padding: 8px 27px;
        border-radius: 50px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        span {
          font-size: 22px;
          display: block;
          padding: 0 5px;
          border-bottom-width: 2px;
          border-bottom-style: solid;
        }
      }
    }
    .open {
      height: 360px !important;
    }

    @media only screen and (min-width: 438px) {
      .open {
        height: 325px !important;
      }
    }

    @media only screen and (min-width: 738px) {
      .open {
        height: 290px !important;
      }
    }

    .filter-container {
      overflow: hidden;
      height: 0;
      box-shadow: inset 0px 11px 8px -10px #ccc, inset 0px -11px 8px -10px #ccc;
      transition: all 0.5s ease-out;

      .filter {
        box-sizing: border-box;
        width: 100%;
        padding: 20px;

        h2 {
          padding-bottom: 8px;
        }

        h3 {
          padding-bottom: 8px;
        }

        .categories {
          margin-bottom: 8px;
        }

        .sub-category {
          margin-bottom: 8px;
        }

        .search-container {
          .search-bar {
            box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
            padding: 8px 24px;
            border-radius: 40px;
            border: none;
            width: 200px;
            outline: none;
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
      gap: 24px;
      align-items: center;
      padding: 40px 0 60px 0;
      max-width: 990px;
      margin: auto;
    }

    @media only screen and (min-width: 690px) {
      .product-display {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
