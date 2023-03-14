<template>
  <main>
    <h1>Checkout Form</h1>
    <h2>Step 3: Choose your delivery method:</h2>
    <p v-if="user?.delivery">
      ( ps. last time you chose {{ user.delivery[0] }} {{ user.delivery[1] }})
    </p>

    <!-- Choose a company -->
    <div class="choices">
      <div>
        <input
          type="radio"
          v-model="deliveryChoice"
          value="Budbee"
          id="budbee"
        />
        <label for="budbee">Budbee</label>
      </div>

      <div>
        <input
          type="radio"
          v-model="deliveryChoice"
          value="Instabox"
          id="instabox"
        />
        <label for="instabox">Instabox</label>
      </div>

      <div>
        <input
          type="radio"
          v-model="deliveryChoice"
          value="Airmee"
          id="airmee"
        />
        <label for="airmee">Airmee</label>
      </div>

      <div>
        <input type="radio" v-model="deliveryChoice" value="Best" id="best" />
        <label for="best">Best</label>
      </div>

      <div>
        <input
          type="radio"
          v-model="deliveryChoice"
          value="Postnord"
          id="postnord"
        />
        <label for="postnord">Postnord</label>
      </div>

      <div>
        <input type="radio" v-model="deliveryChoice" value="DHL" id="dhl" />
        <label for="dhl">DHL</label>
      </div>
    </div>

    <!-- More information on the chosen company and if applicable, more choices -->
    <!-- texts from "bangerhead.se/vara-fraktalternativ", translated by Google -->
    <div class="options">
      <div v-if="deliveryChoice === 'DHL'" class="optdescription">
        <h2>DHL</h2>
        <p class="boldtext">Delivery time 1-3 days</p>
        <p>Trackable delivery to your chosen agent.</p>
        <p class="boldtext">59kr</p>
      </div>

      <div v-else-if="deliveryChoice === 'Postnord'" class="optdescription">
        <h2>Postnord</h2>
        <p>Postnord offers two different shipping options:</p>

        <input
          type="radio"
          v-model="postnordChoice"
          value="Letter"
          id="postnordLetter"
        />
        <label for="postnordLetter">Letter</label>

        <input
          type="radio"
          v-model="postnordChoice"
          value="Mypack"
          id="postnordMypack"
        />
        <label for="postnordMypack">MyPack</label>

        <div v-if="postnordChoice === 'Letter'">
          <p class="boldtext">Delivery time 3-8 days</p>
          <p>
            With Postnord Varubrev, a delivery time of 3-8 working days is
            offered and with limited tracking to the mailbox. If the package
            does not fit in the mailbox, the package is delivered outside the
            door without a receipt or in some cases to an agent. Keep in mind
            that some products can be sensitive to extreme cold. If there is a
            risk that your products may be exposed to very cold temperatures
            when delivered to a mailbox or door, we recommend delivery to a post
            office instead.
          </p>
          <p class="boldtext">79kr</p>
        </div>

        <div v-else-if="postnordChoice === 'Mypack'">
          <p class="boldtext">Delivery time 1-3 days</p>
          <p>
            However, if you want a faster shipping option and with tracking
            delivery to a selected agent, we recommend Postnord instead Mypack.
            Delivery time for this option is 1-3 business days.
          </p>
          <p class="boldtext">79kr</p>
        </div>
      </div>

      <div v-else-if="deliveryChoice === 'Best'" class="optdescription">
        <h2>Best</h2>
        <p class="boldtext">Delivery time 1-2 days</p>
        <p>
          With Best, your order is delivered to your door. Through the SMS that
          is sent out just before delivery, you can follow your order that will
          be delivered at 18-22. In this SMS you can also supplement your
          information with possible port code.
        </p>
        <p class="boldtext">69kr</p>
      </div>

      <div v-else-if="deliveryChoice === 'Airmee'" class="optdescription">
        <h2>Airmee</h2>
        <p class="boldtext">Delivery time 1-2 days</p>
        <p>
          The package will be delivered to your home between 17:00 and 22:00. In
          the SMS which sent out in connection with your order, you can provide
          other information such as possible port code and type of delivery
          (Your package will be left out the door unless otherwise specified).
          On the day of delivery you also come be able to follow your order via
          the tracking you received via SMS.
        </p>
        <p class="boldtext">49kr</p>
      </div>

      <div v-else-if="deliveryChoice === 'Instabox'" class="optdescription">
        <h2>Instabox</h2>
        <p class="boldtext">Delivery time 1-2 days</p>
        <p>
          Your order is delivered to the selected instabox cabinet, pick up the
          package using the pin code that follows in the tracking sent out via
          SMS. Your package is in the instabox locker for three days (holidays
          are counted as half days), but you can subsequently choose to extend
          the time for collection from the locker. You can also change your
          delivery location afterwards, click on the link sent via SMS, you can
          correct this a couple of hours before the preliminary delivery of your
          order. Identification with BankID can be requested when picking up a
          shipment.
        </p>
        <p class="boldtext">79kr</p>
      </div>

      <div v-else-if="deliveryChoice === 'Budbee'" class="optdescription">
        <h2>Budbee</h2>
        <p class="boldtext">Delivery time 1-2 days</p>
        <p>Delivery with Budbee is also 100% fossil-free.</p>

        <p>Budbee has two options</p>
        <div>
          <input
            type="radio"
            v-model="budbeeChoice"
            value="Home"
            id="budbeeHome"
          />
          <label for="budbeeHome">Home Delivery</label>
        </div>

        <div>
          <input
            type="radio"
            v-model="budbeeChoice"
            value="BudbeeBox"
            id="budbeeBox"
          />
          <label for="budbeeBox">Budbee Box</label>
        </div>

        <div v-if="budbeeChoice === 'Home'">
          <p>
            With Budbee Home Delivery, the package will be delivered to your
            home between 17:00 and 22:00, this can be specified at an additional
            cost. In the SMS that is sent out in connection with your order, you
            can correct this and provide other information such as any port code
            and type of delivery (Your package will be left outside the door
            unless otherwise stated). On the day of delivery, you will also be
            able to follow your order via the tracking you received via SMS.
          </p>
          <p class="boldtext">79kr</p>
        </div>

        <div v-else-if="budbeeChoice === 'BudbeeBox'">
          <p>
            You can also choose Budbee Box, which means that your order will be
            delivered to a selected Budbee cabinet. Retrieve the package using
            the pin code that follows in the tracking sent out via SMS or via
            Budbee's app. Identification with BankID can be requested when
            picking up a shipment.
          </p>
          <p class="boldtext">79kr</p>
        </div>
      </div>
    </div>

    <!-- An reactive box for confirming the choice -->
    <div class="confirmBox">
      <h2>Please confirm your choice</h2>
      <p class="boldtext">
        {{ deliveryChoice }}
        <span v-if="budbeeChoice">{{ budbeeChoice }}</span>
        <span v-else-if="postnordChoice">{{ postnordChoice }}</span>
      </p>
      <button
        type="button"
        class="boldtext"
        :disabled="!deliveryChoice"
        @click="saveDeliveryMethod(this.deliveryChoice)"
      >
        Confirm and Continue
      </button>
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        deliveryChoice: '',
        budbeeChoice: '',
        postnordChoice: '',
        user: this.$store.state.activeUser
      }
    },
    watch: {
      //empties the second option if choice of company changes
      deliveryChoice() {
        this.budbeeChoice = null
        this.postnordChoice = null
      }
    },
    methods: {
      saveDeliveryMethod() {
        const parsed = JSON.parse(sessionStorage.getItem('activeUser'))
        parsed.delivery = []
        parsed.delivery.push(this.deliveryChoice)

        if (this.budbeeChoice) {
          parsed.delivery.push(this.budbeeChoice)
        }
        sessionStorage.setItem('activeUser', JSON.stringify(parsed))
        this.$store.dispatch('getLogged')
      }
    }
  }
</script>

<style scoped lang="scss">
  button {
    width: 322px;
    max-width: 70%;
    background-color: var(--main-accent);
    margin-bottom: 10px;
    border: none;
    margin-top: 15px;
  }
  .confirmBox {
    max-width: 80%;
    padding: 20px;
    margin: 30px auto auto auto;
    text-align: center;
  }

  .choices > div {
    display: inline;
  }

  .boldtext {
    font-weight: 700;
    font-size: 1.3em;
  }

  h2 {
    margin-top: 25px;
  }

  input[type='radio'] {
    margin: 10px 5px 0 20px;
  }

  label {
    background-color: var(--main-accent);
    padding: 3px;
  }

  main {
    background-color: var(--lightB);
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(59, 59, 59, 0.497);
    border-radius: 16px;
    padding: 60px 16px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    margin: 90px auto auto auto;
    width: 600px;
    max-width: 80%;
  }

  .options {
    min-height: 350px;
    width: 80%;
    margin: auto;
  }

  p {
    margin-top: 15px;
  }

  @media only screen and (max-width: 700px) {
    .choices > div {
      display: block;
    }
  }
</style>
