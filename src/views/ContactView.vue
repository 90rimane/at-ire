<script>
  export default {
    methods: {
      tracking() {
        alert(
          `We will have a quick look and contact you by e-mail regarding your package`
        )
      },
      returning() {}
    }
  }
</script>

<template>
  <h1>Get in touch and we can talk over a cup of coffee</h1>
  <h2>Store</h2>
  <p>
    We do not have a physical store. Instead we offer gemerous term for
    returning clothes if you are not happy
  </p>
  <h2>Call us</h2>
  <p>+46 76 006 75 05</p>
  <h2>E-mail us</h2>
  <p>queries@atire.com</p>
  <div class="tracking">
    <h2>I want to know where my package is</h2>
    <p>Enter your ordernumber from your receipt</p>
    <label for="trackingnumber">ordernumber</label>
    <input type="text" id="trackingnumber" />
    <button type="button" @click="tracking">Check my package</button>
  </div>
  <div class="return">
    <h2>I want to return an item</h2>
    <p>
      All you need is your ordernumber and the e-mailadress that you used when
      creating your order
    </p>
    <button type="button">Return my item</button>
  </div>
</template>
