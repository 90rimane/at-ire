<template>
  <Quiz v-if="!quizData" @finishQuiz="finishGame" />
  <QuizFinished v-if="quizData" :quizData="quizData" />
</template>

<script>
  import Quiz from '../components/Quiz.vue'
  import QuizFinished from '../components/QuizFinished.vue'

  export default {
    components: {
      Quiz,
      QuizFinished
    },

    data() {
      return {
        quizData: null
      }
    },

    methods: {
      finishGame(quiz) {
        this.quizData = quiz
      }
    }
  }
</script>
