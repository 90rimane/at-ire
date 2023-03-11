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

        <form name="reviewForm" @submit.prevent="submitReview()">
          <label for="fname"> Your Name <span class="required">*</span></label>
          <input type="text" v-model="form.userName" placeholder="..." required />

          <label for="ftitle"> Title <span class="required">*</span></label>
          <input type="text" v-model="form.title" placeholder="..." required />

          <label for="freview">Review <span class="required">*</span></label>
          <textarea type="text" v-model="form.userReview" placeholder="Share your shopping expriencs." required />

          <button type="submit" @click="showReview(), toggleForm()">Submit</button>
        </form>
      </div>
    </div>

    <div class="user-reviews">
      <div class="old-review" :key="review.id" v-for="review in reviews">
        <table>
            <thead>
              <tr>
                <td>
                  <span class="material-symbols-outlined">person</span>
                  {{ review.athor }}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr class="title-datetime-in-arow">
                <th>{{ review.title }}</th>
                <td id="date-time">{{ review.datetime }}</td>
              </tr>
            <tr>
                <td>{{ review.description }}</td>
            </tr>
            <tr class="like-dislike-comment">
              <button>
                <span class="material-symbols-outlined">thumb_up</span>
              </button>
              <span>{{ review.like }}</span>
              <span> | </span>
              <button>
                <span class="material-symbols-outlined">thumb_down</span>
              </button>
              <span>{{ review.dislike }}</span>
            </tr>
            </tbody>
          </table>
        </div>

        <div class="new-review old-review" v-show="myComment">
        <table>
            <thead>
              <tr>
                <td>
                  <span class="material-symbols-outlined">person</span>
                  {{ this.form.userName }}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th id="new-title-input">{{ this.form.title }}</th>
                <td id="date-time">review.datetime</td>
              </tr>
            <tr>
                <td>{{ this.form.userReview }}</td>
            </tr>
            <tr class="like-dislike-comment">
              <button @click="countLikes()">
                <span class="material-symbols-outlined">thumb_up</span>
              </button>
              <span> {{ this.form.likes }}</span>
              <span>|</span>
              <button @click="countDisLikes()">
                <span class="material-symbols-outlined">thumb_down</span>
              </button>
              <span>{{ this.form.disLikes }}</span>
            </tr>
            </tbody>
          </table>
      </div>
      <h3>Reviews:</h3>
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
        myComment: false,
        reviews: SiteReviews,
        maxStars1: ["1","2","3","4","5"],
        form:{
          userName: '',
          userReview: '',
          title: '',
          stars: '',
          likes: 0,
          disLikes: 0
        }
      };
    },
    computed:{},

    methods:{
      toggleForm(){
        this.showForm = !this.showForm
        if(this.showForm){
          this.myComment = false;
        }
      },
      async submitReview(){
        this.$emit('submit', this.form)
        localStorage.setItem('newUserName', this.form.userName)
        localStorage.setItem('newReview', this.form.userReview)
        localStorage.setItem('newTitle', this.form.title)
        this.form.userName = localStorage.getItem('newUserName')
        this.form.userReview = localStorage.getItem('newReview')
        this.form.title = localStorage.getItem('newTitle')

        // this.resetFormField();
      },
      showReview(){
        if(!this.myComment){
            this.myComment = !this.myComment;
        }
      },
      countLikes(){
        this.form.likes = this.form.likes+1
      },
      countDisLikes(){
        this.form.disLikes = this.form.disLikes+1
      }
    }
  }
</script>
<style scoped lang="scss">
.required{
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
  height: auto;
  border:solid 1px;
  border-radius: 5px;
  animation: formBox .6s;  //@keyframes

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
  .old-review {
    text-align: left;
    max-width: 700px;
    height: auto;
    border: solid 2px var(--lightB-darker);
    margin-top: 2em;
    padding: 10px;
  }
  .new-review{
    animation: formBox 1s;
    table{
      th{
        padding: 10px 0;
        font-size: 18px;
      }
    }
  }
}
.like-dislike-comment{
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      margin-left: 5px;
      align-items: center;
    }
    span{
      margin-left: 5px;
    }
    button{
      background-color: var(--light);
      border: none;
      span{
        color: var(--orange);
        cursor:pointer;
      }
      & :hover{
        color: var(--lightB-darker);
      }
    }
table{
  th{
    font-size: 18px;
  }
  td{
    text-align: justify;
    span{
      vertical-align: bottom;
    }
  }
  #new-title-input{
    width: 100%;
  }
  #date-time{
    text-align: right;
  }
}
@keyframes formBox {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
</style>
