<template>
  <main class="home-pages">
    <!-- Pagename if not logged in -->
    <h2 v-if="!user">Account</h2>

    <!-- Fake order history when logged in -->
    <div v-if="user">
      <h1>Welcome to your page, {{ nameStartCapital }}</h1>
      <h2>Order history</h2>
      <div v-for="order in history" :key="order.id" class="card">
        <p>{{ order.date }}: {{ order.totalitems }} items in order</p>
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

      <h2>Where is my order?</h2>
      <div class="card">
        <label for="ordernumber">Enter your ordernumber</label>
        <input type="text" id="ordernumber" placeholder="12" />
        <button @click="checkorder()">Check</button>
      </div>

      <div v-if="postnord" id="ordercheck">
        <img src="/public/bilder/postnord.jpg" alt="" />
        <button @click="checkorder()" id="postnordbtn">Stäng</button>
      </div>
    </div>

    <!-- Message is not logged in -->
    <div v-else>
      <h3>
        You are not logged in,
        <RouterLink to="/login" class="nav-link">login in</RouterLink> to view
        your favorites.
      </h3>
    </div>
  </main>
</template>

<style scoped lang="scss">
  button {
    margin-left: 20px;
    width: 322px;
    max-width: 70%;
    height: 40px;
    background-color: var(--main-strong-accent);
    margin-bottom: 10px;
    border: none;
    margin-top: 15px;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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

  #ordernumber {
    width: 100%;
  }

  #ordercheck {
    background-color: white;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #ordercheck img {
    max-width: 100%;
  }

  #postnordbtn {
    background-color: #025d91;
    color: #eee;
    border-radius: 50px;
    height: 50px;
    font-size: 18px;
  }
</style>

<script>
  export default {
    data() {
      return {
        user: this.$store.state.activeUser,
        history: null,
        postnord: false
      }
    },
    computed: {
      nameStartCapital() {
        return this.user.username
          .charAt(0)
          .toUpperCase()
          .concat(this.user.username.slice(1).toLowerCase())
      }
    },
    created() {
      fetch('history.json')
        .then((response) => response.json())
        .then((result) => {
          this.history = result.data
        })
    },
    methods: {
      checkorder() {
        this.postnord = !this.postnord
      }
    }
  }
</script>
