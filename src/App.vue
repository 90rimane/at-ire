<script>
  import HeaderHead from './components/HeaderHead.vue'
  import CitiesList from './components/CitiesList.vue'
  import CarouselSlide from './components/CarouselSlide.vue'
  import Landing from './views/Landing.vue'
  import FooterComponent from './components/FooterComponent.vue'
  import SearchBar from './components/SearchBar.vue'

  import SideBar from './components/Sidebar.vue'

  export default {
    components: {
      HeaderHead,
      CitiesList,
      CarouselSlide,
      Landing,
      FooterComponent,
      SearchBar,
      SideBar
    },
    created() {
      this.$store.dispatch('getProducts')
    }
  }
</script>

<template>
  <!--Sidebar-->
  <div class="app">
    <SideBar />

    <RouterView />
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

  <HelloWorld msg="Hello World!" />
  <CarouselSlide />
  <SearchBar />
  <HeaderHead />
  <CitiesList />
  <Landing />

  <FooterComponent />
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
    --light: #ffffff;
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
    main {
      flex: 1 1 0;
      padding: 2rem;
      @media (max-width: 1024px) {
        padding-left: 6rem;
      }
    }
  }
</style>
