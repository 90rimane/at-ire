<script>
  export default {
    data() {
      return {
        user: '',
        password: '',
        confirmPassword: '',
        status: false,
        error: false,
        error2: false
      }
    },
    methods: {
      makeUser() {
        if (this.user != '' && this.password != '') {
          let parsed = JSON.parse(localStorage.getItem('allUsers') || '[]')

          // confirm if passwords match
          if (this.password === this.confirmPassword) {
            //check if user already exists
            if (!parsed.some((userItem) => userItem.username === this.user)) {
              //Create the user object and push it into "database" array
              parsed.push({
                username: this.user,
                password: this.password,
                favorites: [],
                cart: [],
                delivery: []
              })

              //Update local storage
              localStorage.setItem('allUsers', JSON.stringify(parsed))

              // Trigger notification for successful login
              this.status = true

              // Redirects user to login page after creating an account
              setTimeout(() => {
                this.$router.push('/login')
              }, 1200)
            } else {
              this.error = true
              setTimeout(() => {
                this.error = false
              }, 2500)
            }
          } else {
            this.error2 = true
            setTimeout(() => {
              this.error2 = false
            }, 2500)
          }
        }
      }
    }
  }
</script>

<template>
  <div class="signup-container">
    <img src="/assets/logo-black.png" alt="Vue" data-v-6dec5f19="" />
    <h2>Register</h2>

    <div v-if="status" class="popup success">
      <span>User has been successfully created!</span>
      <span>Redirecting...</span>
      <img src="/assets/loading.gif" alt="loading" />
    </div>

    <form
      v-else
      @submit.prevent="makeUser()"
      id="signupform"
      class="form-container"
    >
      <div v-if="error" class="popup error">
        <span>User already exists</span>
      </div>

      <div v-if="error2" class="popup error">
        <span>Passwords not matching</span>
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

      <label for="password">Confirm Password</label>
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        name="password"
        required
      />

      <button type="submit" form="signupform">Sign up</button>

      <span class="psw"
        >Already have an account?
        <RouterLink to="/login" class="nav-link"> login! </RouterLink>
      </span>
    </form>
  </div>
</template>

<style scoped lang="scss">
  .signup-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
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
    .popup {
      text-align: center;
      margin: 8px 0;
      border: 1px solid #ccc;

      span {
        display: block;
        margin: 8px 0;
      }
    }

    .success {
      width: 320px;
      margin-top: 70px;
      font-size: 18px;
      padding: 8px 0;
      border-radius: 8px;
    }

    .error {
      font-size: 14px;
      border-radius: 4px;
      background-color: #1e293bd7;
      color: white;
    }

    .form-container {
      width: 320px;
      padding: 16px;
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
    }

    button:hover {
      opacity: 0.8;
    }

    .psw {
      margin: auto;
      width: fit-content;
      display: block;

      a {
        color: inherit;
      }
    }
  }
</style>
