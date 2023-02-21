<script>
  import HeaderHead from './components/HeaderHead.vue'
  import CitiesList from './components/CitiesList.vue'
  import CarouselSlide from './components/CarouselSlide.vue'
  import Landing from './views/Landing.vue'
  import FooterComponent from './components/FooterComponent.vue'
  import SearchBar from './components/SearchBar.vue'

  export default {
    components: {
      HeaderHead,
      CitiesList,
      CarouselSlide,
      Landing,
      FooterComponent,
      SearchBar
    }
  }
</script>

<template>
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
  <nav>
    <ul>
      <li>
        <RouterLink to="/">#</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">#</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
      <li>
        <RouterLink to="/Home">#</RouterLink>
      </li>
    </ul>
  </nav>
  <HelloWorld msg="Hello World!" />
  <CarouselSlide />
  <SearchBar />
  <HeaderHead />
  <CitiesList />
  <Landing />

  <main>
    <RouterView />
  </main>

  <FooterComponent />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap');

  * {
    font-family: 'Karla', roboto, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fff5ef;
  }
</style>
