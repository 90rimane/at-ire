<script>
  import HeaderHead from './components/HeaderHead.vue'
  import FooterComponent from './components/FooterComponent.vue'
  import FooterDesktop from './components/FooterDesktop.vue'
  import SideBar from './components/Sidebar.vue'
  import ContactButton from './components/ContactButton.vue'

  export default {
    components: {
      HeaderHead,
      FooterComponent,
      SideBar,
      FooterDesktop,
      ContactButton
    },
    created() {
      this.$store.dispatch('getProducts')
    },
    data() {
      return {
        isMobile: false
      }
    },
    mounted() {
      this.checkScreenSize()
      window.addEventListener('resize', this.checkScreenSize)
    },
    methods: {
      checkScreenSize() {
        this.isMobile = window.innerWidth < 980
      }
    }
  }
</script>

<template>
  <!--Sidebar-->

  <div class="app">
    <SideBar style="display: none" />
    <RouterView />
  </div>

  <!-- <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
    rel="stylesheet"
  /> -->

  <SearchBar />
  <HeaderHead />
  <ContactButton />
  <FooterComponent v-if="isMobile" />
  <FooterDesktop v-else />
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap%27');

  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap%27');

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
    flex-direction: column;
  }
</style>
