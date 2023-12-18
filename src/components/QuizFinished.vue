<template>
  <main>
    <div>
      <h1>Fashion Quiz Results</h1>
      <div class="answers">
        You got <b>{{ amountOfRightAnswers }}</b> out of
        {{ quizData.length }} questions right!
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    props: ['quizData'],
    computed: {
      amountOfRightAnswers() {
        return this.quizData.filter((question) => {
          return question.selected === question.correct
        }).length
      }
    }
  }
</script>

<style scoped>
  main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .answers {
    text-align: center;
    padding: 30px 0;
  }
</style>
