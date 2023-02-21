<script>
  import HeaderHead from './components/HeaderHead.vue'
  import CitiesList from './components/CitiesList.vue'
  import FooterComponent from './components/FooterComponent.vue'
  import SearchBar from './components/SearchBar.vue'

  export default {
    components: {
      HeaderHead,
      CitiesList,
      FooterComponent,
      SearchBar
    }
  }
</script>

<template>
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
    </ul>
  </nav>
  <SearchBar />
  <HeaderHead />
  <CitiesList />

  <main>
    <RouterView />
  </main>

  <FooterComponent />
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    background-color: #fff5ef;
  }
</style>
