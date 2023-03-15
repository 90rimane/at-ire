<script>
  import CartIcon from './CartIcon.vue'

  export default {
    components: {
      CartIcon
    },
    methods: {
      // Open/close menu
      actMenu() {
        if (this.$refs.menuLinks.style.display === 'block') {
          this.$refs.menuLinks.style.display = 'none'
          this.$refs.menuIcon.style.display = 'block'
          this.$refs.menuIconClose.style.display = 'none'
        } else {
          this.$refs.menuLinks.style.display = 'block'
          this.$refs.menuIconClose.style.display = 'block'
          this.$refs.menuIcon.style.display = 'none'
        }
      }
    }
  }
</script>
<template>
  <div class="mobile-container">
    <button @click="actMenu()">
      <span class="material-symbols-outlined" id="menuIcon" ref="menuIcon"
        >menu</span
      >
      <span
        class="material-symbols-outlined"
        id="menuIconClose"
        ref="menuIconClose"
        >close</span
      >
    </button>
    <div class="topnav" @click="actMenu()">
      <div id="menuLinks" ref="menuLinks">
        <router-link to="/">
          <span class="material-symbols-outlined">home</span>
          <span class="link-text">Home</span>
        </router-link>
        <router-link to="/search/All">
          <span class="material-symbols-outlined">view_cozy</span>
          <span class="link-text">Our Products</span>
        </router-link>
        <router-link id="cart" to="/cart">
          <CartIcon
            class="button-cart"
            icon-size="1.5rem"
            counter-location="19px"
          />
          <span id="cart-link-text" class="link-text"> Shopping Cart </span>
        </router-link>
        <router-link to="/favorite">
          <span class="material-symbols-outlined">favorite</span>
          <span class="link-text">My Favorites</span>
        </router-link>
        <router-link to="/mypage">
          <span class="material-symbols-outlined">person</span>
          <span class="link-text">Account</span>
        </router-link>
        <router-link to="/contact">
          <span class="material-symbols-outlined">email</span>
          <span class="link-text">Contact</span>
        </router-link>
        <router-link to="/about">
          <span class="material-symbols-outlined">info</span>
          <span class="link-text">About Us</span>
        </router-link>
        <router-link to="/help">
          <span class="material-symbols-outlined">forum</span>
          <span class="link-text">Chatroom</span>
        </router-link>
        <!-- Routerlink to FAQ and span class added by Andrea -->
        <router-link to="/FAQ">
          <span class="material-symbols-outlined">quiz</span>
          <span class="link-text">FAQ</span>
        </router-link>
        <div v-if="$store.state.activeUser == null">
          <router-link to="/login">
            <span class="material-symbols-outlined" style="color: forestgreen"
              >login</span
            >
            <span class="link-text">Login</span>
          </router-link>
        </div>
        <div v-else>
          <a @click="$store.dispatch('logout')">
            <span class="material-symbols-outlined" style="color: brown"
              >logout</span
            >
            <span class="link-text">Logout</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .mobile-container {
    width: 100vw;
    button {
      background-color: var(--main-accent);
      margin: 2px;
      height: 3.9em;
      width: 3.9em;
      border: none;
      #menuIcon {
        font-size: 2.2em;
      }
      #menuIconClose {
        display: none;
        font-size: 2.2em;
      }
    }
    button:hover {
      background-color: var(--main-strong-accent);
    }
  }

  /* added by Anna --> */
  .button-cart {
    padding-top: 5px;
  }

  #cart {
    display: flex;
    flex-direction: row;
    height: calc(15px + 1em);
  }

  #cart-link-text {
    padding-top: 5px;
    margin-left: 1rem;
    // padding-left: -5px;
  }
  /* <-- added by Anna */

  .link-text {
    margin-left: 1em;
    font-size: 1.1em;
    vertical-align: super;
  }
  .topnav {
    overflow: hidden;
    background-color: var(--lightB-darker);
    position: relative;
    z-index: 3;
    .material-symbols-outlined {
      font-size: 1.5em;
      padding: 0;
    }
  }
  .topnav #menuLinks {
    display: none;
  }
  .topnav a {
    color: var(--darker);
    padding: 10px 15px;
    text-decoration: none;
    font-size: 17px;
    display: block;
    border-top: solid 1px var(--lightB);
  }

  .topnav a.icon {
    background: var(--orange);
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }

  .topnav a:hover {
    background-color: var(--lightB);
    color: var(--darker);
  }
</style>
