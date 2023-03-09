<template>
  <main>
    <div class="top-title-form">
      <h3 @click="toggleForm">
        <span class="material-symbols-outlined" v-show="!showForm">rate_review</span>
        <span class="material-symbols-outlined" v-show="showForm">edit_off</span>
      {{ showForm ? 'Close review panel' : 'Write a review' }}
      </h3>
    </div>
    <div class="review-panel" v-show="showForm">
      <div class="form-reviews">
        <h3>Leave a review</h3>
        <form action="">
          <label for="fname"> Your Name <span class="requered">*</span>:</label>
          <input type="text" v-model="form.userName" placeholder="..." required />
          <label for="description">Review <span class="requered">*</span>:</label>
          <textarea type="text" v-model="form.userReview" placeholder="Share your shopping expriencs." required />
          <button @click="submitReview">Submit</button>
        </form>
      </div>
    </div>

    <div class="user-reviews">
      <div class="old-review" :key="review.id" v-for="review in reviews">
        <table>
            <thead>
              <tr>
                <td>{{ review.athor }}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <th>{{ review.title }}</th>
                  <td>{{ review.datetime }}</td>
              </tr>
            <tr>
                <td>{{ review.description }}</td>
            </tr>
            <tr>
              <button>Helpful</button>
              <span> | <a>Report Abuse</a></span>
            </tr>
            </tbody>
          </table>
        </div>
        <h3>Other says:</h3>
    </div>
  </main>
</template>
<script>
import SiteReviews from '../../assets/sitereview.json';
export default {
  emits:['submit'],
    data() {
      return {
        showForm: false,
        reviews: SiteReviews,
        form:{
          userName:'',
          userReview: '',
          maxStars1: ["1","2","3","4","5"]
        }
      };
    },
    methods:{
      toggleForm(){
        this.showForm = !this.showForm
      },
      submitReview(){
        this.$emit('submit', this.form)

        console.log(this.form.userName)
      },
      rate(){
      console.log("thank u")
      }
    }
  }
</script>
<style scoped lang="scss">
.requered{
  color: red;
  font-size: larger;
}
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
  margin-top: 1em;
  & h3{
    display: flex;
    justify-content: center;
    margin: 0;
    padding: .8em;
    .material-symbols-outlined{
      font-size: 25px;
    }
    &:hover{
      color: var(--orange);
      font-size: 20px;
    }
  }
}
.review-panel{
  margin: auto;
  min-width: 300px;
  max-width: 500px;
  height: 330px;
  border:solid 1px;
  border-radius: 5px;
 .form-reviews{
  padding: 10px;
  & form{
    display: flex;
    flex-direction: column;
    & label{
      color: var(--darker);
      margin-top: 2em;
    }
    & input{
      padding-left: 5px;
      font-size: 16px;
      height: 30px;
      border: none;border-bottom: solid 2px var(--lightB-darker);
    }
    & textarea{
      height: 80px;
      padding: 5px 10px;
      font-size: 16px;
      border: solid 1px var(--lightB-darker);
    }
    & button{
      height: 30px;
      margin-top: 1.5em;
      font-size: 16px;
      font-weight: bold;
      background-color: var(--lightB-darker);
      border: solid 1px var(--darker);
      &:hover{
        background-color: var(--orange);
        color: var(--light);
        border: solid 2px var(--darker);
      }
    }
  }
 }
}
.user-reviews{
  display: flex;
  flex-direction: column-reverse;
  align-items: normal;
  margin: 2em;
  .old-review{
    text-align: left;
    max-width: 700px;
    height: auto;
    border: solid 2px var(--lightB-darker);
    margin-top: 2em;
    padding: 10px;
  }
}
</style>
