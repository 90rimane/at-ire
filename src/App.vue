<script>
  import HeaderHead from './components/HeaderHead.vue'
  import CitiesList from './components/CitiesList.vue'
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    components: {
      HeaderHead,
      CitiesList,
      HelloWorld
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
        <RouterLink to="/contact">#</RouterLink>
      </li>
    </ul>
  </nav>
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
