<template>
  <div class="checkout-form">
    <h1>Checkout Form</h1>
    <div v-if="step === 1">
      <h2>Step 1: Personal Information & Address</h2>
      <form @submit.prevent="nextStep">
        <label>
          First Name:
          <input type="text" v-model="firstName" required />
        </label>
        <label>
          Last Name:
          <input type="text" v-model="lastName" required />
        </label>
        <label>
          Email:
          <input type="text" v-model="email" required />
        </label>
        <label>
          Phone Number:
          <input type="text" v-model="phoneNumber" required />
        </label>
        <label>
          Shipping Address:
          <input type="text" v-model="shippingAddress" required />
        </label>
        <label>
          City:
          <input type="text" v-model="city" required />
        </label>
        <label>
          Zip Code:
          <input type="text" v-model="zipCode" required />
        </label>
        <label>
          Country:
          <input type="text" v-model="country" required />
        </label>
        <button type="submit">Next</button>
      </form>
    </div>
    <div v-if="step === 2">
      <h2>Step 2: Payment Details</h2>
      <form @submit.prevent="submitPayment">
        <label>
          Card Number:
          <input type="text" v-model="CardNumber" required />
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
          <input type="text" v-model="cvc" required />
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
          <input type="text" v-model="nameOnCard" required />
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
      submitPayment() {
        console.log('hej')
        this.$router.push('/delivery')
      }
    },
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
    margin: 100px auto;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
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
    background-color: #ecc8b2;
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
</style>
