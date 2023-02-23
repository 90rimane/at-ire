<script>
  export default {
    data() {
      return {
        user: '',
        password: '',
        checked: false
      }
    },
    methods: {
      login() {
        if (this.user != '' && this.password != '') {
          let parsed = JSON.parse(localStorage.getItem('allUsers') || '[]')

          //check if user exists and check if passwords match
          const logUser = parsed.some(
            (userItem) => userItem.username === this.user
          )
          const logPass = parsed.some(
            (userItem) => userItem.password === this.password
          )

          if (logUser && logPass) {
            let indexOfUser

            for (let i = 0; i < parsed.length; i++) {
              if (parsed[i].username == this.user) {
                indexOfUser = i
                break
              }
            }

            sessionStorage.setItem(
              'activeUser',
              JSON.stringify(parsed[indexOfUser])
            )

            this.$store.dispatch('getLogged')

            // If Remember me checkbox is checked then send the user "id"
            // as a reference when retrieving the remembered user on page load
            if (this.checked) {
              localStorage.setItem('rememberUser', indexOfUser)
            }

            //Redirects user to homepage after successfully login
            this.$router.push('/')
          } else {
            //TODO user Incorrect username or password pop up
            console.log('Incorrect username or password.')
          }
        }
      }
    }
  }
</script>

<template>
  <div class="container vh-100 bg-white pt-3 pb-3">
    <!-- END THIS IS JUST TESTING-->
    <div v-if="$store.state.activeUser != null" class="test">
      <h1>{{ $store.state.activeUser }}</h1>
    </div>
    <!-- START THIS IS JUST TESTING-->
    <div class="maindiv">
      <div class="container">
        <label for="username">Username</label>
        <input
          v-model="user"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />

        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />

        <button @click="login()" type="button">Login</button>
        <label>
          <input type="checkbox" name="remember" v-model="checked" />
          Remember me
        </label>
        <span class="psw"
          >Dont have an account?
          <RouterLink to="/signup" class="nav-link"> Sign up! </RouterLink>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .maindiv {
    border: 3px solid #f1f1f1;
    width: 500px;
  }

  /* Full-width inputs */
  input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  /* Set a style buttons */
  button {
    background-color: #deca93;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  /* Add a hover effect for buttons */
  button:hover {
    opacity: 0.8;
  }

  /* Add padding to containers */
  .container {
    padding: 16px;
  }

  /* The "Forgot password" text */
  span.psw {
    float: right;
    padding-bottom: 16px;
  }
</style>
