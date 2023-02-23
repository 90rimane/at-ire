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

<template>
  <div class="header-mobile">
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
    <input
      class="search-bar"
      type="text"
      v-model="search"
      placeholder="Search products..."
    />
    <div>
      <ul v-if="search" class="dropdown">
        <li v-for="item in searchResult" :key="item.id">
          <a href="this.item.name"> {{ item.description }} </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- <h3>@IRE</h3>
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
    <span class="material-symbols-outlined">shopping_cart_checkout</span>
  </div> -->
  <div class="header-desktop">
    <h2>@IRE</h2>
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
    <span class="material-symbols-outlined">shopping_cart_checkout</span>
  </div>
</template>

<style scoped>
  @media (max-width: 999px) {
    .header-mobile {
      position: fixed;
      width: 100%;
      height: 56px;
      left: 0px;
      top: 0px;
      background: #ecc8b2;
      /* margin-left: 64px; */
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transition: ease-in-out 1s;
    }

    .bi-bi-search-mobile {
      position: fixed;
      width: 30px;
      height: 30px;
      left: 130px;
      top: 13px;
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
    }

    .search-bar {
      position: fixed;
      width: 167px;
      height: 29px;
      left: 170px;
      top: 14px;
      background: #fff5ef;
      border-radius: 13px;
      padding-left: 10px;
      border: 1px;
    }
  }

  /* h3 {
      position: absolute;
      width: 62px;
      height: 28px;
      left: 150px;
      top: 14px;
      font-family: 'Karla', roboto, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      background: #ecc8b2;
      color: #000000;
    }

     .bi-bi-filter-left-mobile {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 3.33%;
      right: 90%;
      top: 14px;
      bottom: 95.25%;
      background: #ecc8b2;
      color: #000000;
      cursor: pointer;
    }

     LÄGG IN EN "NAV-LINK" I APP.VUE
  .bi-bi-list :hover:focus:active {
    background-color: antiquewhite;
  }

    .bi-bi-heart-mobile {
      position: absolute;
      width: 20px;
      height: 20px;
      left: 81.11%;
      right: 13.33%;
      top: 14px;
      bottom: 95.75%;
      background: #ecc8b2;
      color: #000000;
      cursor: pointer;
    }

    .material-symbols-outlined {
      position: absolute;
      width: 20px;
      height: 20px;
      left: 329px;
      top: 14px;
      background: #ecc8b2;
      color: #000000;
      cursor: pointer;
    }
    */

  @media (min-width: 1000px) {
    .header-desktop {
      box-sizing: border-box;
      position: absolute;
      width: 1440px;
      height: 56px;
      left: 0px;
      top: 0px;
      background: #ecc8b2;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transition: ease-in-out 1s;
      cursor: pointer;
    }

    .header-desktop :hover {
      color: #fff5ef;
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

      color: #000000;
    }

    /* LÄGG IN EN "NAV-LINK" I APP.VUE
  .bi-bi-list :hover:focus:active {
    background-color: antiquewhite;
  } */

    .bi-bi-search-desktop {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 1014px;
      top: 13px;
      cursor: pointer;
    }

    .bi-bi-person-desktop {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 1108px;
      top: 13px;
      cursor: pointer;
    }
    .bi-bi-heart-desktop {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 1202px;
      top: 13px;
      cursor: pointer;
    }

    .material-symbols-outlined {
      position: absolute;
      width: 30px;
      height: 30px;
      top: 13px;
      left: 1296px;
      cursor: pointer;
    }
  }
</style>
