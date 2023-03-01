<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossorigin="anonymous"
  />
  <div class="header-mobile">
    <form>
      <input
        class="search-bar-mobile"
        type="text"
        v-model="search"
        placeholder="Search products..."
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi-bi-search-mobile"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </svg>
    </form>
    <div>
      <ul v-if="search" class="dropdown">
        <li v-for="item in searchResult" :key="item.id">
          <a href="this.item.name">{{ item.description }}</a>
        </li>
      </ul>
    </div>
    <router-link to="/" class="button">
      <h3>@IRE</h3>
    </router-link>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi-bi-filter-left-mobile"
      viewBox="0 0 16 16"
    >
      <path
        d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
      />
    </svg>
    <router-link to="/favorite" class="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi-bi-heart-mobile"
        viewBox="0 0 16 16"
      >
        <path
          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
        />
      </svg>
    </router-link>
    <router-link to="/checkout" class="button">
      <span class="material-symbols-outlined">shopping_cart_checkout</span>
    </router-link>
  </div>
  <div class="header-desktop">
    <router-link to="/" class="button">
      <h2>@IRE</h2>
    </router-link>
    <input
      class="search-bar-desktop"
      type="text"
      v-model="search"
      placeholder="Search products..."
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi-bi-search-desktop"
      viewBox="0 0 16 16"
    >
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
      />
    </svg>
    <div>
      <ul v-if="search" class="dropdown">
        <li v-for="item in searchResult" :key="item.id">
          <a href="this.item.name">{{ item.description }}</a>
        </li>
      </ul>
    </div>
    <router-link to="/mypage" class="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi-bi-person-desktop"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
        />
      </svg>
    </router-link>
    <router-link to="/favorite" class="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi-bi-heart-desktop"
        viewBox="0 0 16 16"
      >
        <path
          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
        />
      </svg>
    </router-link>
    <router-link to="/checkout" class="button">
      <span class="material-symbols-outlined">shopping_cart_checkout</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: null,
        search: ''
        // showSearchBar: true
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
    },
    // add by Anna -->
    methods: {
      selectItem(item) {
        this.$store.dispatch('setOneProduct', item)
        this.search = ''
      }
      // <-- add by Anna
      // onToggle() {
      // this.showSearchBar = !this.showSearchBar
      // }
    }

    // openSearch() {
    //  this.mySearchBar.style.display = 'block'
    // },

    // closeSearch() {
    //   this.mySearchBar.style.display = 'none'
    // }
  }
</script>

<style scoped>
  .header-mobile {
    position: fixed;
    width: 100%;
    height: 56px;
    left: 0px;
    top: 0px;
    background: #ecc8b2;
    /* margin-left: 64px; */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .dropdown li,
  .dropdown a {
    background-color: #efded4;
    width: 100%;
    color: black;
    margin-bottom: 1px;
    border-radius: 5px;
    padding-left: 1px;
    list-style-type: none;
  }

  .dropdown {
    position: fixed;
    padding: 10px;
    margin-top: 47px;
    width: fit-content;
    cursor: pointer;
    margin-left: 64px;
    left: 245px;
    height: fit-content;
  }

  .bi-bi-search-mobile {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 43.8%;
    top: 13px;
    cursor: pointer;
    color: #000000;
  }

  .search-bar-mobile {
    position: fixed;
    width: 62px;
    height: 40px;
    left: 49%;
    top: 8px;
    background: #ecc8b2;
    border-radius: 13px;
    border: 1px;
    padding-left: 8px;
    font-size: 17px;
    transition: 0.9s;
    outline: none;
    display: inline-block;
  }

  .search-bar-mobile:hover {
    width: 170px;
    cursor: pointer;
    background: #fff5ef;
  }

  /* .v-enter-active {
      animation: animate-para 1s;
    }

    .v-leave-active {
      animation: animate-para 1s reverse;
    }

    @keyframes animate-para {
      0% {
        opacity: 0;
        transform: translateX(0px);
      }

      25% {
        opacity: 0.25;
        transform: translateX(30px);
      }
    } */

  h3 {
    position: absolute;
    width: 62px;
    height: 28px;
    left: 12.33%;
    top: 14px;
    font-family: 'Karla', roboto, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    background: #ecc8b2;
    color: #000000;
    cursor: pointer;
  }

  h3:hover {
    color: #fff5ef;
  }

  .bi-bi-filter-left-mobile {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 3.33%;
    right: 90%;
    top: 14px;
    bottom: 95.25%;
    color: #000000;
    cursor: pointer;
  }

  .bi-bi-filter-left-mobile:hover {
    color: #fff5ef;
  }

  /* LÄGG IN EN 'NAV-LINK' I APP.VUE .bi-bi-list :hover:focus:active {
    background-color: antiquewhite;
  } */

  .bi-bi-heart-mobile {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 81.11%;
    right: 13.33%;
    top: 14px;
    bottom: 95.75%;
    color: #000000;
    cursor: pointer;
  }

  .bi-bi-heart-mobile:hover {
    color: #fff5ef;
  }

  .material-symbols-outlined {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 90.11%;
    top: 14px;
    color: #000000;
    cursor: pointer;
  }

  .material-symbols-outlined:hover {
    color: #fff5ef;
  }
  /* @media (max-width: 980px) {
    .header-mobile {
      display: flex;
    }
  } */

  @media (min-width: 980px) {
    .header-desktop {
      box-sizing: border-box;
      position: absolute;
      width: 100%;
      height: 56px;
      left: 0px;
      top: 0px;
      background: #ecc8b2;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    h2 {
      position: absolute;
      width: 62px;
      height: 28px;
      left: 683px;
      top: 15px;
      font-family: 'Karla';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      cursor: pointer;
      color: #000000;
    }

    h2:hover {
      color: #fff5ef;
    }

    /* LÄGG IN EN "NAV-LINK" I APP.VUE
    .bi-bi-list :hover:focus:active {
      background-color: antiquewhite;
    } */

    .bi-bi-search-desktop {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 900px;
      top: 15px;
      cursor: pointer;
      color: #000000;
    }

    .search-bar-desktop {
      position: absolute;
      width: 66px;
      height: 35px;
      left: 930px;
      top: 13px;
      background: #ecc8b2;
      border-radius: 13px;
      padding-left: 8px;
      border: 1px;
      font-size: 17px;
      transition: 0.9s;
      outline: none;
    }

    .search-bar-desktop:hover {
      width: 170px;
      cursor: pointer;
      border: solid 1px;
      background-color: #fff5ef;
    }

    .dropdown li,
    .dropdown a {
      background-color: #efded4;
      width: 100%;
      color: black;
      margin-bottom: 1px;
      border-radius: 5px;
      padding-left: 1px;
      list-style-type: none;
    }

    .dropdown {
      position: absolute;
      padding: 10px;
      margin-top: 47px;
      width: fit-content;
      cursor: pointer;
      margin-left: 60px;
      left: 870px;
      height: fit-content;
    }

    .bi-bi-person-desktop {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 1108px;
      top: 13px;
      cursor: pointer;
      color: #000000;
    }

    .bi-bi-person-desktop:hover {
      color: #fff5ef;
    }
    .bi-bi-heart-desktop {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 1202px;
      top: 13px;
      cursor: pointer;
      color: #000000;
    }

    .bi-bi-heart-desktop:hover {
      color: #fff5ef;
    }

    .material-symbols-outlined {
      position: absolute;
      width: 30px;
      height: 30px;
      top: 13px;
      left: 1296px;
      cursor: pointer;
      color: #000000;
    }
    .material-symbols-outlined:hover {
      color: #fff5ef;
    }
  }

  @media (max-width: 979px) {
    .header-desktop {
      display: none;
    }
  }

  @media (min-width: 980px) {
    .header-mobile {
      display: none;
    }
  }
</style>
