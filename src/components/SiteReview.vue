<template>
  <main>
    <div class="top-title-form">
      <h3 @click="toggleForm">
      {{ showForm ? 'Close review panel' : 'Write a review' }}
      </h3>
    </div>
    <div class="review-panel" v-show="showForm">
      <div class="form-reviews">
        <h3>form is here</h3>
        <form action="">
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    </div>
  </main>

</template>

<script>
export default {
    data() {
      return {
        showForm: false

      };
    },
    methods:{
      toggleForm(){
        this.showForm = !this.showForm
      },
      rate(){
      console.log("thank u")
    }
    }
  }
</script>
<style scoped lang="scss">
.top-title-form{
  background: linear-gradient(
      0deg,
      var(--light) 0%,
      var(--lightB) 60%,
      var(--lightB) 100%
    );
  text-align: -webkit-center;
  border-top:solid 1px var(--darker);
  cursor: pointer;
  margin-top: 12em;
  & h3{
    margin: 0;
    padding: .8em;
    &:hover{
      color: var(--orange);
      font-size: 20px;
    }
  }
}
.review-panel{
  display: flex;
  flex-direction: row;
  margin: 2em 2em;
  align-items: center;
  background-color:aqua ;
  .rate-stars{
    ul{
      list-style-type: none;
      overflow: hidden;
      li{
        float: left;
        display: block;
        padding: 14px 1px;
        text-decoration: none;
        .star-number{
          font-size: 16px;
        }
        .material-symbols-outlined{
          display: block;
          font-size: 30px;
          text-align: center;
          text-decoration: none;
          &:hover{
            font-size: 35px;
            color: rgb(252, 237, 24);
          }
        }
      }
    }
  }
}

</style>
