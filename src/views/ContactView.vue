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
  <div class="margin-top">
    <div class="center-text">
      <h1>CONTACT</h1>
      <p>
        We do not have a physical store. Instead we offer generous term for
        returning clothes if there is something you are not happy with
      </p>
    </div>

    <form action="support" class="support">
      <div class="position">
        <input class="input-name" placeholder="Your Name" type="text" />
        <input class="input-name" placeholder="Your Email" type="text" />
      </div>
      <div class="under">
        <input class="input-number" placeholder="Your Number" type="text" />
      </div>

      <div class="under">
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message" />
      </div>

      <button>SEND</button>
    </form>
    </div>
</template>

<style lang="scss" scoped>
  .margin-top {
    padding-top: 70px;
  }
  .center-text {
    text-align: center;

    h1 {
      margin-top: 20px;
      font-size: 20px;
      letter-spacing: normal;
      font-weight: 700;
    }

    p {
      font-size: 13px;
    }
  }
  .support {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .position {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    gap: 15px;
  }
  .under {
    margin-top: 15px;
  }
  .input-name {
    width: 300px;
    height: 15px;
    padding: 10px;
  }

  .input-number {
    width: 300px;
    height: 15px;
    padding: 10px;
  }

  .input-message {
    width: 300px;
    height: 100px;
    padding: 10px;
  }

  textarea {
    width: 300px;
    padding: 10px;
  }

  button {
    width: 322px;
    height: 40px;
    background-color: #f39256;
    margin-bottom: 10px;
    border:none;
  }
</style>
