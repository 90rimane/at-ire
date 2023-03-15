<template>
  <h1>FAQ</h1>
  <div class="faq">
    <!-- v-for is used to iterate through the faq array and create a button and answer section for each faq object -->
    <div v-for="(item, f) in faq" :key="f" class="faq-item">
      <button @click="toggle(f)" class="faq-question">
        {{ item.question }}
        <span v-if="item.isOpen" class="arrow-up" />
        <span v-else class="arrow-down" />
      </button>
      <!-- v-if is used to render the answer section based on the isOpen property of the faq object -->
      <div v-if="item.isOpen" class="faq-answer">
        {{ item.answer }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // a function that returns an object containing the faq array of faq objects
    data() {
      return {
        faq: [
          {
            question: 'What are the conditions if I want to return an item?',
            answer:
              'You may open the packaging and try the product to be sure that everything is correct. If you are not satisfied, you can change your mind within 30 days of receiving the item.',
            isOpen: false
          },
          {
            question: 'How do I get a receipt for my purchase?',
            answer:
              'The delivery note that came with the delivery is a receipt for your purchase. The delivery note states the total VAT amount for the order.',
            isOpen: false
          },
          {
            question: 'Can I change or cancel my order?',
            answer:
              'As long as you have not clicked "Submit Payment" in the checkout, you can add and remove items. We will start packing your order as soon as possible once you have completed the purchase and received an order confirmation.',
            isOpen: false
          },
          {
            question: 'Which delivery methods can I choose at @IRE?',
            answer: 'Budbee, Instabox, Airmee, Best, Postnord & DHL',
            isOpen: false
          },
          {
            question: 'Which credit cards do you accept at @IRE?',
            answer: 'VISA, Mastercard & American Express',
            isOpen: false
          }
        ]
      }
    },
    // object contains a toggle function that toggles the value of the isOpen property for the faq object that corresponds to the clicked button
    methods: {
      toggle(f) {
        this.faq[f].isOpen = !this.faq[f].isOpen
      }
    }
  }
</script>

<style scoped>
  h1 {
    margin: 90px auto auto auto;
    text-align: center;
  }
  .faq {
    min-height: 10vh;
    max-width: 600px;
    margin: 40px auto auto auto;
  }

  .faq-item {
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
  }

  .faq-question {
    background: #fff5ef;
    border: none;
    color: #333;
    display: flex;
    font-size: 18px;
    font-weight: bold;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
  }

  .arrow-up {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #333;
    margin-left: 5px;
  }

  .arrow-down {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #333;
    margin-left: 5px;
  }

  .faq-answer {
    background: #fff5ef;
    color: black;
  }
</style>
