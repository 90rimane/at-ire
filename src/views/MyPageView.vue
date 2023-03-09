<template>
  <main class="home-pages">
    <div v-if="user">
      <h1>Welcome to your page, {{ nameStartCapital }}</h1>
      <h2>Order history</h2>
      <div v-for="order in history" :key="order.id" class="card">
        <h3>{{ order.date }}: {{ order.totalitems }} items in order</h3>
        <ul v-if="order.totalitems">
          <li v-for="item in order.items" :key="item">
            {{ item }}
          </li>
          <button type="button">Order again</button>
        </ul>
      </div>

      <h2>Contact information</h2>
      <div class="card">
        <p>Phone number:</p>
        <p>E-mail:</p>
        <p>Payment details:</p>
      </div>
    </div>

    <div v-else>
      <h1>If you log in, you will find your information here</h1>
    </div>
  </main>
</template>

<style scoped>
  button {
    margin-left: 20px;
  }
  .card {
    box-shadow: 3px 3px 20px black;
    margin: 40px 0;
    max-width: 60%;
    padding: 10px;
  }
  h3 {
    margin-bottom: 20px;
  }

  li {
    margin-left: 20px;
  }

  main {
    margin-top: 100px;
    margin-left: 100px;
  }
</style>

<script>
  export default {
    data() {
      return { user: this.$store.state.activeUser, history: null }
    },
    computed: {
      nameStartCapital() {
        return this.user.username
          .charAt(0)
          .toUpperCase()
          .concat(this.user.username.slice(1))
      }
    },
    created() {
      fetch('history.json')
        .then((response) => response.json())
        .then((result) => {
          this.history = result.data
        })
    }
  }
</script>
