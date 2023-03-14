// eslint-disable-next-line vue/multi-word-component-names
<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img :src="logoURL" alt="Vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-symbols-outlined"
          >keyboard_double_arrow_right</span
        >
      </button>
    </div>
    <div class="menu-toggle-wrap-mobile">
      <button class="menu-toggle-mobile" @click="ToggleMenu">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>

    <h3 id="topmenu">Menu</h3>
    <div class="menu">
      <router-link to="/" class="button">
        <span class="material-symbols-outlined">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link to="/search/All" class="button">
        <span class="material-symbols-outlined"> view_cozy </span>
        <span class="text">Our Products</span>
      </router-link>
      <!-- color for the icon change via props when hover the cart menu bar, in that way the icon practically sync color with the menu bar text-->
      <router-link
        to="/cart"
        class="button"
        @click="ToggleCartIconColor('active')"
        @focusout="ToggleCartIconColor('inaktive')"
        @mouseover="ToggleCartIconColor(true)"
        @mouseout="ToggleCartIconColor(false)"
      >
        <CartIcon
          class="button-cart material-symbols-outlined"
          icon-size="2.3rem"
          :icon-color="hovCol"
          counter-location="30px"
        />
        <span class="text">Shopping Cart</span>
      </router-link>
      <router-link to="/favorite" class="button">
        <span class="material-symbols-outlined">favorite</span>
        <span class="text">My Favorites</span>
      </router-link>
      <router-link to="/mypage" class="button">
        <span class="material-symbols-outlined">person</span>
        <span class="text">Account</span>
      </router-link>
      <router-link to="/contact" class="button">
        <span class="material-symbols-outlined">email</span>
        <span class="text">Contact</span>
      </router-link>
      <router-link to="/about" class="button">
        <span class="material-symbols-outlined">info</span>
        <span class="text">About Us</span>
      </router-link>
      <router-link to="/help" class="button">
        <span class="material-symbols-outlined">forum</span>
        <span class="text">Chatroom</span>
      </router-link>
      <!-- Routerlink to FAQ and span class added by Andrea -->
      <router-link to="/FAQ" class="button">
        <span class="material-symbols-outlined"> quiz </span>
        <span class="text">FAQ</span>
      </router-link>
    </div>

    <div v-if="$store.state.activeUser == null" class="menu bottom-menu">
      <router-link to="/login" class="button">
        <span class="material-symbols-outlined" style="color: forestgreen"
          >login</span
        >
        <span class="text">Login</span>
      </router-link>
    </div>
    <div v-else class="menu bottom-menu">
      <a @click="$store.dispatch('logout')" class="button">
        <span class="material-symbols-outlined" style="color: brown"
          >logout</span
        >
        <span class="text">Logout</span>
      </a>
    </div>

    <!--
      Changed by Jovan
    -->
  </aside>

  <button class="desktop-sidebar-btn" @click="ToggleMenu">
    <span class="material-symbols-outlined"> menu </span>
  </button>
</template>

<script setup>
  import { ref } from 'vue'
  import logoURL from '../../assets/logo-black.png'
  import CartIcon from './CartIcon.vue'

  const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')
  const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem('is_expanded', is_expanded.value)
  }

  let hovCol = ref('')
  const ToggleCartIconColor = (bool) => {
    // first checks if router-link is active, if so the icons color is simply set to --dark without hover color change
    if (bool === 'active' && (bool === true || bool === false)) {
      hovCol.value = 'var(--dark)'
    } else if (bool === 'inactive' && (bool === true || bool === false)) {
      // if it's not active these conditions runs and the hover colors will show
      // timeout is set to match the render-time of the styling of the Shopping Cart text
      if (bool === true) {
        setTimeout(() => {
          hovCol.value = 'var(--grey)'
        }, 40)
      } else if (bool === 'active') {
        setTimeout(() => {
          hovCol.value = 'var(--dark)'
        }, 40)
      } else {
        setTimeout(() => {
          hovCol.value = 'var(--dark)'
        }, 40)
      }
    }
  }
</script>

<style lang="scss" scoped>
  /* added by Jovan START */
  .desktop-sidebar-btn {
    cursor: pointer;
    background-color: transparent;
    width: 43px;
    aspect-ratio: 1;
    border: none;
    position: fixed;
    top: 0;
    left: 0;
    margin: 8px 16px;
    z-index: 101;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;

    &:hover {
      background-color: rgba(255, 255, 255, 0.381);
    }

    span {
      font-size: 36px;
      display: block;
    }
  }

  @media (min-width: 980px) {
    .desktop-sidebar-btn {
      display: block;
    }
  }
  /* added by Jovan END */

  aside {
    display: flex;
    flex-direction: column;
    background-color: var(--lightB);
    color: var(--light);
    width: 0; // changed by Jovan
    overflow: hidden;
    min-height: 100vh;
    padding: 0; // changed by Jovan
    transition: 0.2s ease-in-out;
    box-shadow: 1px 0 5px var(--grey-light);
    position: fixed;
    z-index: 99999; // added by Jovan
    top: 0;
    .logo {
      margin-bottom: 1rem;
      img {
        width: 3rem;
      }
    }
    button {
      cursor: pointer;
      appearance: none;
      border: none;
      outline: none;
      background: none;
    }
    button a:hover {
      color: aqua;
    }
    .menu-toggle-wrap-mobile {
      display: none;
    }
    .menu-toggle-wrap {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;
      position: relative;
      top: 0;
      transition: 0.2s ease-in-out;
      .menu-toggle {
        transition: 0.2s ease-in-out;
        .material-symbols-outlined {
          font-size: 2rem;
          color: var(--dark);
          transform: translateX(0.5rem);
          // transition: 0.2s ease-out;
        }

        &:hover {
          .material-symbols-outlined {
            color: var(--lightB-darker);
            transform: translateX(0.5rem);
          }
        }
      }
    }
    h3,
    .button .text {
      opacity: 0;
      transition: opacity 0.1s ease-in-out;
    }
    #topmenu {
      color: var(--grey);
    }
    h3 {
      color: var(--dark-alt);
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }
    .menu {
      display: flex;
      flex-direction: column;
      margin: 0 -1rem;
      .button {
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: 0.2s ease-in-out;
        padding: 0.5rem 0.9rem;
        .material-symbols-outlined {
          font-size: 2.5rem;
          color: var(--darker);
          transition: 0.2s ease-in-out;
        }
        .text {
          display: none;
          font-size: 1rem;
          color: var(--darker);
          transition: 0.1s ease-in-out;
          text-shadow: none;
        }
        &:hover {
          background-color: var(--lightB-darker);
          .material-symbols-outlined,
          .text {
            color: var(--grey);
          }
        }
        &.router-link-exact-active {
          background-color: var(--grey-light);
          border-right: 5px solid var(--orange);
          box-shadow: 1px 1px 2px var(--lightB-darker);
          .material-symbols-outlined {
            color: var(--dark);
          }
        }
      }
    }
    /*
      Changed by Jovan
    */
    .bottom-menu {
      margin-top: auto;
      margin-bottom: 1.5em;
    }
    /*
      Changed by Jovan
    */
    &.is-expanded {
      width: var(--sidebar-width);
      padding: 1rem; // added by Jovan
      .menu-toggle-wrap {
        top: -3rem;
        .menu-toggle {
          transform: rotate(-180deg);
        }
      }
      h3,
      .button .text {
        opacity: 1;
        display: contents;
      }
      .button {
        .material-symbols-outlined {
          margin-right: 1rem;
        }
      }
    }
  }
  /* added by Anna --> */
  .button-cart {
    height: 40px;
    padding: 2px 5px 2px 0;
  }
  /* <-- added by Anna */

  @media (max-width: 979px) {
    aside {
      display: none;
    }
  }
</style>
