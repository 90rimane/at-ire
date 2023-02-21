<script>
  import HeaderHead from './components/HeaderHead.vue'
  import CitiesList from './components/CitiesList.vue'
  import HelloWorld from './components/HelloWorld.vue'
  import SearchBar from './components/SearchBar.vue'

  export default {
    components: {
      HeaderHead,
      CitiesList,
      HelloWorld,
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
  <HelloWorld msg="Hello World!" />
  <HeaderHead />
  <CitiesList />
  <main>
    <RouterView />
  </main>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    background-color: #fff5ef;
  }
</style>
