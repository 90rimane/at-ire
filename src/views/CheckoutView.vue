<template>
  <!-- a form for personal information and address with a step-by-step process -->
  <div class="checkout-form">
    <h1>Checkout Form</h1>
    <div v-if="step === 1">
      <h2>Step 1: Personal Information & Address</h2>
      <!-- When the form is submitted, the "nextStep" method is called, which advances the user to the next step in the checkout process -->
      <form @submit.prevent="nextStep">
        <label>
          First Name:
          <input
            type="text"
            v-model="firstName"
            name="firstName"
            autocomplete="first-name"
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            v-model="lastName"
            name="lastName"
            autocomplete="last-name"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            v-model="email"
            name="email"
            autocomplete="email"
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            v-model="phoneNumber"
            name="phoneNumber"
            autocomplete="phone-number"
            required
          />
        </label>
        <label>
          Shipping Address:
          <input
            type="text"
            v-model="shippingAddress"
            name="shippingAddress"
            autocomplete="shipping-address"
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            v-model="city"
            name="city"
            autocomplete="city"
            required
          />
        </label>
        <label>
          Zip Code:
          <input
            type="text"
            v-model="zipCode"
            name="zipCode"
            autocomplete="zip-code"
            required
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            v-model="country"
            name="country"
            autocomplete="country"
            required
          />
        </label>
        <button @click="saveInfo" type="submit">Next</button>
      </form>
    </div>
    <div v-if="step === 2">
      <h2>Step 2: Payment Details</h2>
      <form @submit.prevent="submitPayment">
        <label>
          Card Number:
          <input
            type="text"
            v-model="CardNumber"
            name="CardNumber"
            autocomplete="card-number"
            required
          />
        </label>
        <label> Expiration Date: </label>
        <div class="expiration">
          <select v-model="expirationMonth" required>
            <option value="" disabled>Month</option>
            <option v-for="month in months" :key="month" :value="month">
              {{ month }}
            </option>
          </select>
          <select v-model="expirationYear" required>
            <option value="" disabled>Year</option>
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>
        <label>
          CVC:
          <input
            type="text"
            v-model="cvc"
            name="cvc"
            autocomplete="cvc"
            required
          />
        </label>
        <div class="card-type">
          <img
            src="/public/Bilder/visa.png"
            alt="Visa"
            v-if="cardType === 'Visa'"
          />
          <img
            src="/public/Bilder/mastercard.png"
            alt="Mastercard"
            v-if="cardType === 'Mastercard'"
          />
          <img
            src="/public/Bilder/amex.png"
            alt="American Express"
            v-if="cardType === 'American Express'"
          />
        </div>
        <label>
          Name On Card:
          <input
            type="text"
            v-model="nameOnCard"
            name="nameOnCard"
            autocomplete="name-on-card"
            required
          />
        </label>
        <button @click="submitPayment" type="submit">
          Submit Payment & Go To Delivery
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CheckOutView',
    data() {
      return {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        shippingAddress: '',
        city: '',
        zipCode: '',
        country: '',
        CardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        months: [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12'
        ],
        years: ['2023', '2024', '2025', '2026', '2027', '2028'],
        cvc: '',
        cardType: '',
        nameOnCard: ''
      }
    },
    methods: {
      nextStep() {
        this.step++
      },
      // Checks if the "CardNumber" property is not empty and redirects the user to the delivery page.
      submitPayment() {
        if (this.CardNumber) {
          this.$router.push('/delivery')
        }
      },
      // Saves the user's personal information and address to the session storage.
      saveInfo() {
        const user = JSON.parse(sessionStorage.getItem('activeUser'))

        user.details = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phoneNumber: this.phoneNumber,
          shippingAddress: this.shippingAddress,
          city: this.city,
          zipCode: this.zipCode,
          country: this.country
        }
        // saves the updated user object back to session storage using JSON.stringify, and dispatches an action called getLogged to update the user's logged-in state
        sessionStorage.setItem('activeUser', JSON.stringify(user))
        this.$store.dispatch('getLogged')
      }
    },
    // Watch for changes in the CardNumber data property and triggers a function every time the property changes
    watch: {
      CardNumber() {
        console.log('card number changed:', this.CardNumber)

        if (this.CardNumber.startsWith('1')) {
          console.log('card type is Visa')
          this.cardType = 'Visa'
        } else if (this.CardNumber.startsWith('2')) {
          console.log('card type is Mastercard')
          this.cardType = 'Mastercard'
        } else if (this.CardNumber.startsWith('3')) {
          console.log('card type is American Express')
          this.cardType = 'American Express'
        } else {
          console.log('unknown card type')
          this.cardType = ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .checkout-form {
    background-color: #fff5ef;
    max-width: 600px;
    padding: 60px 16px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(59, 59, 59, 0.497);
    min-height: 100vh;
    border-radius: 16px;
  }

  h1 {
    margin-top: 3px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  label {
    margin-bottom: 10px;
    font-weight: bold;
  }

  input[type='text'] {
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  button[type='submit'] {
    background-color: var(--main-accent);
    color: black;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }

  button[type='submit']:hover {
    color: white;
  }

  .card-type {
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .card-type img {
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }

  @media only screen and (min-width: 630px) {
    .checkout-form {
      padding: 30px 16px;
      margin: 90px auto auto auto;
      min-height: auto;
    }
  }
</style>
