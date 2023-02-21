<template>
  <div class="footer">
    <div class="center">
      <div id="name-email">
        <h1 id="at-ire">AT-IRE</h1>
        <p id="center-p">atire@example.com</p>
        <div class="logos">
          <img src="public\Bilder\twitter-logo.png" alt="twitter-logo" />
          <img src="public\Bilder\instagram-logo.png" alt="instagram-logo" />
          <img src="public\Bilder\youtube-logo.png" alt="youtube-logo" />
          <img src="public\Bilder\messenger-logo.png" alt="messenger-logo" />
        </div>
      </div>
    </div>
    <div class="margin-top">
      <div class="box">
        <h1 id="support-text">SUPPORT</h1>
        <button><span id="plus">&#43;</span></button>
      </div>
      <div id="border-box">
        <h1 id="support-text">OM @IRE</h1>
        <button><span id="plus">&#43;</span></button>
      </div>
    </div>

    <div class="register">
      <div class="text-information">
        <h2>JOIN @IRE</h2>
        <p id="offer">
          SIGN UP TO OUR EMAIL LIST AND GET 20% OFF ON YOUR FIRST ORDER
        </p>
      </div>

      <input type="email" id="email-input" />
      <button id="join-button">JOIN</button>
    </div>

    <div class="footer-bar" />
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  * {
    color: #282828;
  }
  .footer {
    width: 100%;
  }

  #at-ire {
    text-align: center;
  }

  #center-p {
    font-size: 12px;
    text-align: center;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #logo-email {
    padding-top: 30px;
    font-size: 30px;
  }

  .logos {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    gap: 25px;
    margin-top: 15px;
  }

  img {
    width: 14px;
    height: 14px;
    background-image: none;
  }

  .margin-top {
    margin-top: 20px;
  }
  .box {
    height: 35px;
    border-top: 1px solid #282828;
    border-bottom: 1px solid #282828;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #border-box {
    height: 35px;
    border-bottom: 1px solid #282828;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 16px;
  }

  button {
    all: unset;
    cursor: pointer;
    padding-right: 20px;
  }

  #support-text {
    font-size: 16px;
    padding-left: 20px;
  }

  .register {
    margin-top: 30px;
    margin-left: 100px;
  }

  #offer {
    margin-top: 10px;
    font-size: 14px;
  }

  #email-input {
    background-color: transparent;
    border: 1px solid black;
    height: 25px;
    width: 160px;
    color: black;
    padding-left: 5px;
  }

  #email-input:focus {
    outline: none;
  }

  #join-button {
    margin-top: 10px;
    margin-left: 5px;
    background-color: #f39256;
    border: none;
    color: #282828;
    font-size: 12px;
    padding: 5px;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    width: 25px;
    height: 20px;
  }

  .footer-bar {
    margin-top: 20px;
    width: 100%;
    height: 30px;
    background-color: #ecc8b2;
  }
</style>
