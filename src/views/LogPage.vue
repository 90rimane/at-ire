<script>
  import LoginForm from '../components/LoginForm.vue'
  import SignupForm from '../components/SignupForm.vue'

  export default {
    components: {
      LoginForm,
      SignupForm
    },
    data() {
      return {
        page: true,
        transferName: null
      }
    },
    methods: {
      swapPage(user) {
        this.page = !this.page

        if (user) {
          console.log(user)
          this.transferName = user
        }
      }
    }
  }
</script>

<template>
  <LoginForm @page-change="swapPage" :name="transferName" v-if="page" />
  <SignupForm @page-change="swapPage" v-else />
</template>
