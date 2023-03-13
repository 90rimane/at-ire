<template>
  <main class="home-pages">
    <h2>Account</h2>
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
      <h3>
        You are not logged in,
        <RouterLink to="/login" class="nav-link">login in</RouterLink> to view
        your favorites.
      </h3>
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

  h2 {
    margin-left: 40px;
  }

  h3 {
    margin-bottom: 20px;
    text-align: center;
    color: rgb(112, 112, 112);
    margin: 100px;
  }

  li {
    margin-left: 20px;
  }

  main {
    padding-top: 80px;
    margin-left: 100px;
    min-height: 100vh;
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
