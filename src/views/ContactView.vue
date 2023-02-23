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

<style scoped>
  .tracking,
  .return,
  .inquiries {
    display: flex;
    flex-direction: column;
  }

  .box {
    background-color: white;
    padding: 10px;
    margin-top: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
</style>

<template>
  <main>
    <h1>Get in touch and we can talk over a cup of coffee</h1>
    <div class="box">
      <h2>Store</h2>
      <p>
        We do not have a physical store. Instead we offer generous term for
        returning clothes if there is something you are not happy with
      </p>
    </div>
    <div class="box">
      <h2>Call us</h2>
      <a href="tel:+46760067505">+46 76 006 75 05</a>
    </div>
    <div class="box">
      <h2>E-mail us</h2>
      <a href="mailto:queiries@atire.com">queiries@atire.com</a>
    </div>
    <div class="tracking box">
      <h2>I want to know where my package is</h2>
      <label for="trackingnumber">Order number:</label>
      <input type="text" id="trackingnumber" />
      <button type="button" @click="tracking">Check my package</button>
    </div>
    <div class="return box">
      <h2>I want to return an item</h2>
      <p>
        Make sure you have your order number and the e-mailadress that you used
        when creating your order and click here to register
      </p>
      <button type="button">Return my item</button>
    </div>
    <div class="inquiries box">
      <h2>Other inquiries</h2>
      <label for="inquiryname">Your Name</label>
      <input type="text" id="inquiryname" />
      <label for="inquirymail">Email Address</label>
      <input type="text" id="inquirymail" />
      <label for="inquirytel">Phone Number</label>
      <input type="tel" id="inquirytel" />
      <label for="inquiryorder">Order Number (if you have one)</label>
      <input type="text" id="inquiryorder" />
      <label for="inquirymessage">How Can We Help?</label>
      <textarea name="help" id="help" cols="60" rows="20" />
      <button type="button">Send</button>
    </div>
  </main>
</template>
