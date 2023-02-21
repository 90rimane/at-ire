<script>
  import CitiesList from './components/CitiesList.vue'
  import CounterButton from './components/CounterButton.vue'
  import HelloWorld from './components/HelloWorld.vue'
  import CarouselSlide from './components/CarouselSlide.vue'

  export default {
    components: {
      CitiesList,
      CounterButton,
      HelloWorld,
      CarouselSlide
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
  <CarouselSlide />
  <CitiesList />
  <CounterButton />
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
