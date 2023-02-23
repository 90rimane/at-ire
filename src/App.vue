<script>
  import HeaderHead from './components/HeaderHead.vue'
  import CarouselSlide from './components/CarouselSlide.vue'
  import FooterComponent from './components/FooterComponent.vue'
  import SearchBar from './components/SearchBar.vue'
  import HomeView from './views/HomeView.vue'

  import SideBar from './components/Sidebar.vue'

  export default {
    components: {
      HeaderHead,
      CarouselSlide,
      HomeView,
      FooterComponent,
      SearchBar,
      SideBar
    },
    created() {
      // dispatch vuex to fetch products,
      // use this.$store.state.allProducts to access global variabel
      this.$store.dispatch('getProducts')

      if (localStorage.getItem('rememberUser') != null) {
        const parsed = JSON.parse(localStorage.getItem('allUsers'))
        const indexOfUser = localStorage.getItem('rememberUser')

        // Set the remembered user to activeUser, logging them in on page load
        sessionStorage.setItem(
          'activeUser',
          JSON.stringify(parsed[indexOfUser])
        )

        // This is to update the vuex state
        this.$store.dispatch('getLogged')
      }
    }
  }
</script>

<template>
  <!--Sidebar-->
  <div class="app">
    <SideBar />

    <RouterView class="main" />
    <FooterComponent class="main" />
  </div>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
    rel="stylesheet"
  />

  <CarouselSlide />
  <SearchBar />
  <HeaderHead />
  <HomeView />
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap');

  // Sidebar scss
  :root {
    --grey-light: #a19595;
    --grey: #64748b;
    --dark-alt: #334155;
    --dark: #1e293b;
    --darker: #020202;
    --light: #fcf9f9;
    --lightB: #fff5ef;
    --lightB-darker: #ebd5c9;
    --orange: #f39256;
    --sidebar-width: 300px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Karla', Fira sans, sans-serif, roboto;
  }
  body {
    background: var(--light);
  }
  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }
  .app {
    display: flex;
    flex-direction: column;
    main {
      flex: 1 1 0;
      padding: 2rem;
      @media (max-width: 1024px) {
        padding-left: 6rem;
      }
    }
  }
  .main {
    margin-left: calc(2rem + 32px);
    margin-top: 56px;
  }
</style>
