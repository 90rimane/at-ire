<script>
  export default {
    data() {
      return {
        user: '',
        password: '',
        checked: false,
        error: false,
        loading: false
      }
    },
    methods: {
      login() {
        if (this.user && this.password) {
          let parsed = JSON.parse(localStorage.getItem('allUsers') || '[]')

          //check if user exists and check if passwords match
          const logUser = parsed.find(
            (userItem) => userItem.username === this.user
          )

          //check if user exists and if so, check if the passwords match
          if (logUser?.password === this.password) {
            sessionStorage.setItem('activeUser', JSON.stringify(logUser))

            this.$store.dispatch('getLogged')

            let indexOfUser

            for (let i = 0; i < parsed.length; i++) {
              if (parsed[i].username == this.user) {
                indexOfUser = i
                break
              }
            }

            // const indexOfUser = parsed.findIndex(
            //   (element) => element.username === this.user
            // )

            // If Remember me checkbox is checked then send the user "token"
            // as a reference when retrieving the remembered user on page load
            if (this.checked) {
              localStorage.setItem('rememberUser', indexOfUser)
            }

            //Trigger loading animation in button
            this.loading = true

            // Redirects user to homepage after successful login
            // Giving 1 second delay to make it feel authentic!
            setTimeout(() => {
              this.$router.push('/')
            }, 700)
          } else {
            this.error = true
            setTimeout(() => {
              this.error = false
            }, 2500)
          }
        }
      }
    }
  }
</script>

<template>
  <div class="login-container">
    <img src="/assets/logo-black.png" alt="Vue" data-v-6dec5f19="" />
    <h2>Login to @ire</h2>
    <form @submit.prevent="login()" class="form-container" id="loginform">
      <div v-if="error" class="error">
        <span>Incorrect username or password.</span>
      </div>

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

      <label>
        <input type="checkbox" name="remember" v-model="checked" />
        Remember me
      </label>

      <button type="submit" form="loginform">
        <span v-if="!loading">Login</span>
        <img v-else src="/assets/loading.gif" alt="loading" />
      </button>

      <div class="signup">
        <span>Don't have an account?</span>
        <RouterLink to="/signup" class="nav-link"> Sign up! </RouterLink>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 90px;
    height: 100vh;

    img {
      width: 100px;
    }

    h2 {
      margin-top: 10px;
      font-weight: 400;
      font-size: 28px;
      color: #1e293b;
    }

    .form-container {
      width: 320px;
      padding: 16px;
    }

    .error {
      text-align: center;
      margin: 8px 0;
      border: 1px solid #ccc;
      font-size: 14px;
      border-radius: 4px;
      background-color: #1e293bd7;
      color: white;

      span {
        display: block;
        margin: 8px 0;
      }
    }

    input[type='text'],
    input[type='password'] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
      border-radius: 4px;
    }

    input[type='password'] {
      margin-bottom: 6px;
    }

    button {
      background-color: var(--main-accent);
      color: #1e293b;
      padding: 12px 20px;
      margin: 24px 0 16px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
      font-size: 16px;
      min-height: 43px;
      position: relative;

      img {
        height: 60px;
        width: 60px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
      }
    }

    button:hover {
      opacity: 0.8;
    }

    .signup {
      margin: auto;
      width: fit-content;

      a {
        color: inherit;
      }
    }
  }
</style>
