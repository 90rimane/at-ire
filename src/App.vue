<script>
    import HeaderHead from './components/HeaderHead.vue'
    import CitiesList from './components/CitiesList.vue'
  <<<<<<< HEAD
    import CounterButton from './components/CounterButton.vue'
    import HelloWorld from './components/HelloWorld.vue'
    import CarouselSlide from './components/CarouselSlide.vue'
  =======
    import Landing from './views/Landing.vue'
    import FooterComponent from './components/FooterComponent.vue'
    import SearchBar from './components/SearchBar.vue'
  >>>>>>> c08bae0ff40358a8161137231271a5dd8f2eddef

    export default {
      components: {
        HeaderHead,
        CitiesList,
  <<<<<<< HEAD
        CounterButton,
        HelloWorld,
        CarouselSlide
  =======
        Landing,
        FooterComponent,
        SearchBar
  >>>>>>> c08bae0ff40358a8161137231271a5dd8f2eddef
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
  * {
    margin: 0;
    padding: 0;
    background-color: #fff5ef;
  }
</style>
