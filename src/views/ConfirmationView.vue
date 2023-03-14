<template>
  <main>
    <div v-if="!confirmation" class="container">
      <h2>Order information:</h2>
      <div class="box-container">
        <div class="box">
          <h3>Shipping address</h3>
          <div>
            <p>
              address:
              <span class="highlight">{{ details.shippingAddress }}</span>
            </p>
            <p>
              City:
              <span class="highlight">{{ details.city }} </span>
              ZipCode: <span class="highlight">{{ details.zipCode }} </span>
            </p>
            <p>
              Country:
              <span class="highlight">{{ details.country }} </span>
            </p>
          </div>
        </div>
        <div class="box">
          <h3>Contact information</h3>
          <div>
            <p>
              Name:
              <span class="highlight"
                >{{ details.firstName }} {{ details.lastName }}</span
              >
            </p>
            <p>
              Email:
              <span class="highlight">{{ details.email }} </span>
            </p>
            <p>
              Phone Number:
              <span class="highlight">{{ details.phoneNumber }} </span>
            </p>
          </div>
        </div>
      </div>

      <div class="items">
        <h3>Your order</h3>
        <div v-for="item in items" :key="item.id" class="item">
          <span> {{ item.name }} {{ item.colors }} {{ item.sizes }} </span>
          <span class="price">{{ item.price }}kr</span>
        </div>
      </div>
      <div class="final-price">
        <p>
          Total: <span class="price">{{ total }}kr</span>
        </p>
        <p class="muted">(additional shipping fees might be included)</p>
        <p>
          Shipping method: {{ this.$store.state.activeUser.delivery.join(' ') }}
        </p>
      </div>
      <div class="button-container">
        <button @click="$router.push('/cart')">Cancel</button>
        <button @click="saveOrder">Finalize purchase</button>
      </div>
    </div>
    <div class="popup" v-else>
      <div v-if="!successful" class="notif">
        <h2>Finalizing order....</h2>
        <img src="/assets/loading.gif" alt="loading" />
      </div>
      <div v-else class="notif">
        <h2>Order complete!</h2>
        <img src="/assets/checkmark.png" alt="loading" />
      </div>
    </div>
  </main>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid'
  export default {
    computed: {
      details() {
        return this.$store.state.activeUser.details
      },
      items() {
        return this.$store.state.activeUser.cart
      },
      total() {
        const cartItems = this.$store.state.activeUser.cart

        return cartItems.reduce((sum, item) => {
          return sum + Number(item.price)
        }, 0)
      }
    },
    data() {
      return {
        confirmation: false,
        successful: false
      }
    },
    methods: {
      saveOrder() {
        // get user from session storage
        const parsed = JSON.parse(sessionStorage.getItem('activeUser'))

        // Push in the new order
        parsed.orders.push({
          id: uuidv4(),
          details: {
            shippingMethod: this.$store.state.activeUser.delivery.join(' '),
            shippingAddress: this.details.shippingAddress,
            zipCode: this.details.zipCode,
            city: this.details.city,
            country: this.details.country
          },
          products: [...this.items]
        })

        // Empty out cart because products are being purchase
        parsed.cart = []

        // update sessions storage and vuex
        sessionStorage.setItem('activeUser', JSON.stringify(parsed))
        this.$store.dispatch('getLogged')

        // Run fake loading animations and redirect
        this.finalize()
      },
      finalize() {
        // Switch to finalize animation
        this.confirmation = true

        // display successful after 2 seconds
        setTimeout(() => {
          this.successful = true

          // send the user to my page after 1.2 seconds
          setTimeout(() => {
            this.$router.push('/mypage')
          }, 1200)
        }, 2000)
      }
    }
  }
</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }
  main {
    margin-top: 90px;
    min-height: 100vh;
    .container {
      background-color: var(--lightB);
      border: 1px solid #ccc;
      box-shadow: 0 0 10px rgba(119, 119, 119, 0.497);
      border-radius: 16px;
      padding: 24px 16px;
      margin: auto;
      width: 632px;
      max-width: 80%;

      h2 {
        margin-bottom: 16px;
      }

      .box-container {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .box {
          padding: 8px 16px;
          color: var(--grey-light);
          background-color: var(--seethrough-light);
          border: 2px solid #ccc;
          border-radius: 8px;
          min-height: 90px;
          flex-grow: 1;

          h3 {
            margin-bottom: 4px;
          }

          p {
            .highlight {
              color: rgb(110, 110, 110);
            }
          }
        }
      }

      .items {
        padding: 16px 0;
        h3 {
          font-size: 18px;
          color: var(--gray);
          margin-bottom: 4px;
        }
        .item {
          padding: 2px 16px;
          font-size: 16px;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
      }
      .price {
        font-weight: 500;
      }
      .final-price {
        border-top: 2px solid #ccc;
        width: 100%;
        padding: 4px 16px;
        margin: 4px 0;
        p {
          display: flex;
          justify-content: space-between;
        }

        .muted {
          color: gray;
          padding: 5px 0;
        }
      }

      .button-container {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        button {
          padding: 6px 12px;
          background-color: var(--main-accent);
          border-radius: 20px;
          border: none;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }

    .popup {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100dvh;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
          width: 100px;
        }
      }
    }
  }
</style>
