<script>
  export default {
    data() {
      return {
        user: '',
        password: '',
        status: false
      }
    },
    methods: {
      makeUser() {
        if (this.user != '' && this.password != '') {
          let parsed = JSON.parse(localStorage.getItem('allUsers') || '[]')

          //check if user already exists, if so then throw error
          if (!parsed.some((userItem) => userItem.username === this.user)) {
            const userObj = {
              username: this.user,
              password: this.password,
              favorites: [],
              cart: []
            }

            parsed.push(userObj)
            localStorage.setItem('allUsers', JSON.stringify(parsed))
            this.status = true
            //TODO User has Signed up and is redirected to login page
          } else {
            //TODO user already exists pop up
            console.log('user already exists')
          }
        }
      }
    }
  }
</script>

<template>
  <div class="maindiv">
    <div v-if="status" class="status">
      <span>User has been successfully created!</span>
    </div>
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

      <button @click="makeUser()" type="button">Sign up</button>

      <span class="psw"
        >Already have an account?
        <RouterLink to="/login" class="nav-link"> Login in! </RouterLink>
      </span>
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
