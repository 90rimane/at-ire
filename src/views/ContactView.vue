<script>
  export default {
    methods: {
      tracking() {
        alert(
          `We will have a quick look and contact you by e-mail regarding your package`
        )
      }
    }
  }
</script>

<template>
  <main>
    <div class="center-text">
      <h1>CONTACT</h1>
      <p>
        We do not have a physical store. Instead we offer generous term for
        returning clothes if there is something you are not happy with
      </p>
    </div>

    <form class="position" action="support">
      <input class="input-name" value="Your Name" type="text" />
      <input class="input-name" value="Your Name" type="text" />
    </form>
  </main>
</template>

<style lang="scss" scoped>
  .main {
    width: 100%;
  }
  .center-text {
    text-align: center;

    h1 {
      font-size: 20px;
    }

    p {
      font-size: 13px;
    }
  }

  .position {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 15px;
  }
  .input-name {
    width: 200px;
    height: 35px;
    padding: 10px;
  }
</style>
