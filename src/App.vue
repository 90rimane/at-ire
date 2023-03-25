<template>
  <SideBar />
  <HeaderHead />
  <RouterView />
  <ContactButton />
  <FooterComponent v-if="isMobile" />
  <FooterDesktop v-else />
</template>

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

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap%27');

  * {
    margin: 0;
    padding: 0;
    font-family: 'Karla', Fira sans, sans-serif, roboto;
  }
  body {
    background: var(--light);
  }
</style>
