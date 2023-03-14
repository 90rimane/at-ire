<template>
  <div class="header-mobile">
    <form>
      <input
        class="search-bar-mobile"
        type="text"
        v-model="search"
        placeholder="Search products..."
        @keydown.down="nextSearchItem()"
        @keydown.up="prevSearchItem()"
        @keydown.enter="goToProduct()"
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
      <div>
        <!-- focusout event listener is used to clear the search results when the user clicks outside of the dropdown -->
        <ul v-if="search" class="dropdown" @focusout="clearSearch()">
          <!-- v-for is used to loop through each item in the searchResult array and render a li element for each one -->
          <li
            v-for="(item, index) in searchResult"
            :key="item.id"
            @click="selectItem(item)"
          >
            <router-link
              to="/product"
              :style="[index === activeNumber ? activeItem : '']"
            >
              {{ item.description }}
            </router-link>
          </li>
        </ul>
      </div>
    </form>
    <router-link to="/" class="button">
      <h3>@IRE</h3>
    </router-link>

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
    <router-link to="/cart">
      <CartIcon
        class="button-cart"
        counter-location="23px"
        hover-color="var(--lightB)"
        icon-size="1.9rem"
        icon-color="#000000"
      />
    </router-link>
    <div id="hamburgermenu">
      <!--#region HamburgerMenu component located here by Ali-->
      <HamburgerMenu />
      <!-- #endregion -->
    </div>
  </div>

  <div class="header-desktop">
    <router-link to="/" class="button">
      <h2>@IRE</h2>
    </router-link>
    <form>
      <input
        class="search-bar-desktop"
        type="text"
        v-model="search"
        placeholder="Search products..."
        @keydown.down="nextSearchItem()"
        @keydown.up="prevSearchItem()"
        @keydown.enter="goToProduct()"
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
        <!-- list of search items if a search is entered, if tabbed out the search
        is cleared -->
        <ul v-if="search" class="dropdown" @focusout="clearSearch()">
          <li
            v-for="(item, index) in searchResult"
            :key="item.id"
            @click="selectItem(item)"
          >
            <!-- activeNumber has class activeItem for css -->
            <router-link
              to="/product"
              :style="[index === activeNumber ? activeItem : '']"
            >
              {{ item.description }}
            </router-link>
          </li>
        </ul>
      </div>
    </form>
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
    <router-link to="/cart" id="cart-routerlink-dt">
      <CartIcon
        class="button-cart"
        counter-location="23px"
        hover-color="var(--lightB)"
        icon-size="1.9rem"
        icon-color="#000000"
      />
    </router-link>
  </div>
</template>

<script>
  //#region Hamburger component imporeted by Ali
  import HamburgerMenu from './HamburgerMenu.vue'
  import CartIcon from './CartIcon.vue'

  export default {
    components: {
      HamburgerMenu,
      CartIcon
    },
    //#endregion
    data() {
      return {
        products: null,
        search: '',
        activeItem: {
          textDecoration: 'underline',
          color: '#568885',
          textTransform: 'uppercase'
        },
        activeNumber: 0
      }
    },
    computed: {
      //the search-function
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
      },
      //moves the activeItem when arrow-down is pressed
      nextSearchItem() {
        this.activeNumber++
      },
      //moves the activeItem when arrow-up is pressed
      prevSearchItem() {
        this.activeNumber--
      },
      //goes to the page of activeItem when enter is pressed
      goToProduct() {
        this.$router.push('/product')
        this.selectItem(this.searchResult[this.activeNumber])
        this.search = ''
      },
      clearSearch() {
        this.search = ''
        this.activeNumber = 0
      }
    }
  }
</script>

<style scoped lang="scss">
  .header-mobile {
    position: fixed;
    width: 100%;
    height: 56px;
    left: 0px;
    top: 0px;
    background: var(--main-accent);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;
  }

  .dropdown li,
  .dropdown a {
    background-color: hsl(22, 46%, 88%);
    width: 100%;
    color: black;
    margin-bottom: 2px;
    border-radius: 5px;
    padding-left: 1px;
    list-style-type: none;
    text-decoration: none;
  }

  .dropdown li:hover,
  .dropdown a:hover {
    color: white;
  }

  .dropdown {
    position: fixed;
    padding: 10px;
    margin-top: 57px;
    width: fit-content;
    cursor: pointer;
    margin-left: 64px;
    left: 32%;
    height: fit-content;
    background-color: hsla(0, 0%, 23%, 0.3);
  }

  /* add by Anna --> */

  form {
    position: relative;
  }

  form:hover .search-bar-mobile {
    width: 38%;
    cursor: pointer;
    background: var(--lightB);
    z-index: 20;
  }

  .search-bar-mobile:focus {
    background: var(--lightB);
    width: 38%;
  }

  .button-cart {
    position: absolute;
    left: 86%;
    margin-top: 14px;
  }

  #hamburgermenu {
    margin-top: -48.5px;
  }

  /* <-- add by Anna + some changes related to this around here*/

  .bi-bi-search-mobile {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 50%;
    top: 13px;
    cursor: pointer;
    color: #000000;
  }

  .search-bar-mobile {
    position: absolute;
    width: 1px;
    height: 35px;
    left: 58%;
    top: 13px;
    background: var(--main-accent);
    border-radius: 13px;
    padding-left: 8px;
    border: 1px;
    font-size: 17px;
    transition: 0.9s;
    outline: none;
    z-index: 20;
  }

  h3 {
    position: absolute;
    width: 62px;
    height: 28px;
    left: 15.33%;
    top: 14px;
    font-family: 'Karla', roboto, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    cursor: pointer;
  }

  h3:hover {
    color: var(--lightB);
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
    color: var(--lightB);
  }

  /* LÄGG IN EN 'NAV-LINK' I APP.VUE .bi-bi-list :hover:focus:active {
      background-color: antiquewhite;
    } */

  .bi-bi-heart-mobile {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 68.5%;
    right: 13.33%;
    top: 14px;
    bottom: 95.75%;
    color: #000000;
    cursor: pointer;
  }

  .bi-bi-heart-mobile:hover {
    color: var(--lightB);
  }

  .material-symbols-outlined {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 78%;
    top: 14px;
    color: #000000;
    cursor: pointer;
  }
  .material-symbols-outlined:hover {
    color: var(--lightB);
  }

  @media (max-width: 979px) {
    .header-desktop {
      display: none;
    }
  }

  @media (min-width: 500px) {
    .bi-bi-search-mobile {
      left: 52%;
    }
  }

  @media (min-width: 680px) {
    .bi-bi-search-mobile {
      left: 53%;
    }
  }
  @media (min-width: 880px) {
    .bi-bi-search-mobile {
      left: 54%;
    }
  }

  @media (min-width: 980px) {
    .header-mobile {
      display: none;
    }
    .header-desktop {
      box-sizing: border-box;
      position: fixed;
      width: 100%;
      height: 56px;
      left: 0px;
      top: 0px;
      background: #ecc8b2;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      z-index: 1;
    }

    h2 {
      position: absolute;
      width: 62px;
      height: 28px;
      left: 50%;
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
      color: var(--lightB);
    }

    .bi-bi-search-desktop {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 64%;
      top: 15px;
      cursor: pointer;
      color: #000000;
    }

    .search-bar-desktop {
      position: absolute;
      width: 1px;
      height: 35px;
      left: 67%;
      top: 13px;
      background: #ecc8b2;
      border-radius: 13px;
      padding-left: 8px;
      border: 1px;
      font-size: 17px;
      transition: 0.9s;
      outline: none;
      z-index: 20;
    }

    /* added by Anna --> */
    form:hover .search-bar-desktop {
      width: 174px;
      cursor: pointer;
      background: var(--lightB);
      z-index: 20;
    }

    /* <-- added by Anna */

    .search-bar-desktop:focus {
      background: var(--lightB);
      width: 174px;
    }

    .dropdown li,
    .dropdown a {
      background-color: hsl(22, 46%, 88%);
      width: 100%;
      color: black;
      margin-bottom: 2px;
      border-radius: 5px;
      padding-left: 1px;
      list-style-type: none;
    }

    .dropdown {
      position: absolute;
      padding: 10px;
      margin-top: 57px;
      width: fit-content;
      cursor: pointer;
      margin-left: 60px;
      left: 62%;
      height: fit-content;
    }

    .bi-bi-person-desktop {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 80%;
      top: 13px;
      cursor: pointer;
      color: #000000;
    }

    .bi-bi-person-desktop:hover {
      color: var(--lightB);
    }
    .bi-bi-heart-desktop {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 87%;
      top: 13px;
      cursor: pointer;
      color: #000000;
    }

    .bi-bi-heart-desktop:hover {
      color: var(--lightB);
    }

    #cart-routerlink-dt {
      display: flex;
      justify-content: end;
      width: 100vw;
      height: 0px;
    }

    .material-symbols-outlined .button-cart {
      position: absolute;
      width: 30px;
      height: 30px;
      top: 13px;
      left: 93.5%;
      cursor: pointer;
      color: #000000;
    }

    .button-cart {
      margin-top: 13.5px;
      left: 0%;
      margin-right: 3%;
    }
    .material-symbols-outlined:hover {
      color: var(--lightB);
    }
  }

  @media (min-width: 1450px) {
    .button-cart {
      margin-right: 4%;
    }
  }
</style>
