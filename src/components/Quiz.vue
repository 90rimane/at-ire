<template>
  <main>
    <h1>Fashion Quiz</h1>
    <div class="question-container" v-for="question in questions">
      <h2 class="question-text">{{ question.text }}</h2>
      <div class="answers">
        <button
          class="single-answer"
          v-for="(choice, index) in question.choices"
          :key="index"
          @click="updateQuestion(question, choice)"
          :style="{
            border:
              choice === question.selected ? '5px solid rgb(255, 166, 0)' : ''
          }"
        >
          {{ choice }}
        </button>
      </div>
    </div>
    <button
      @click="$emit('finishQuiz', this.questions)"
      :disabled="!checkRemaining"
      class="submit-btn"
    >
      Submit
    </button>
  </main>
</template>

<script>
  export default {
    emits: ['finishQuiz'],

    computed: {
      checkRemaining() {
        return this.questions.every((question) => question.selected != '')
      }
    },

    data() {
      return {
        questions: [
          {
            text: 'What is considered a summer color?',
            choices: ['Orange', 'Blue', 'Purple'],
            correct: 'Orange',
            selected: ''
          },
          {
            text: 'What do teenagers usually wear?',
            choices: ['Casual', 'Formal', 'Sporty'],
            correct: 'Casual',
            selected: ''
          },
          {
            text: 'Which pattern is commonly associated with formal wear?',
            choices: ['Stripes', 'Polka Dots', 'Tie-Dye'],
            correct: 'Stripes',
            selected: ''
          },
          {
            text: 'What type of footwear is suitable for hiking?',
            choices: ['Sneakers', 'High Heels', 'Flip Flops'],
            correct: 'Sneakers',
            selected: ''
          },
          {
            text: 'What fabric is often used for activewear?',
            choices: ['Cotton', 'Spandex', 'Wool'],
            correct: 'Spandex',
            selected: ''
          },
          {
            text: 'Which accessory is a classic addition to a formal outfit?',
            choices: ['Baseball Cap', 'Necktie', 'Sunglasses'],
            correct: 'Necktie',
            selected: ''
          },
          {
            text: 'What is the main purpose of a trench coat?',
            choices: ['Warmth in Winter', 'Rain Protection', 'Sunscreen'],
            correct: 'Rain Protection',
            selected: ''
          },
          {
            text: 'Which of the following is a type of hat?',
            choices: ['Ballet Shoes', 'Fedora', 'Backpack'],
            correct: 'Fedora',
            selected: ''
          },
          {
            text: 'In fashion, what does "OOTD" stand for?',
            choices: [
              'Out of the Dark',
              'Outfit of the Day',
              'Overcome Obstacles Through Design'
            ],
            correct: 'Outfit of the Day'
          },
          {
            text: 'Which color is often associated with elegance and formality?',
            choices: ['Yellow', 'Black', 'Green'],
            correct: 'Black',
            selected: ''
          }
        ]
      }
    },

    methods: {
      updateQuestion(targetQuestion, choice) {
        this.questions = this.questions.map((question) => {
          if (question.text == targetQuestion.text) {
            question.selected = choice
          }
          return question
        })
      }
    }
  }
</script>

<style scoped>
  .question-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .answers {
    display: flex;
    gap: 24px;
    margin-top: 16px;
  }

  .single-answer {
    background-color: rgb(195, 218, 245);
    font-size: 19px;
    padding: 9px;
    border-radius: 12px;
    border: none;
  }

  main {
    padding: 100px 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 60px;
  }

  .submit-btn {
    background-color: rgb(224, 155, 52);
    font-size: 24px;
    padding: 9px;
    border-radius: 12px;
    border: none;
    color: white;
  }

  .submit-btn:disabled {
    background-color: rgb(116, 82, 32);

    color: rgb(138, 138, 138);
  }
</style>
