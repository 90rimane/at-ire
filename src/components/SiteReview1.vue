<template>
  <main>
    <div class="top-title-form">
      <h3 @click="toggleForm">
      {{ showForm ? 'Close review panel' : 'Write a review' }}
      </h3>
    </div>
    <div class="review-panel" v-show="showForm">
      <div class="rate-stars" v-for="(star, index) in stars" :key="star">
        <ul class="li">
          <li @click="rate(index)" class="li"><span class="material-symbols-outlined">star</span><span class="star-number">{{ 5-index }}</span></li>
        </ul>
          <!-- <span v-if="key != Object.keys(stars).length-1"> {{ key +1 }}</span>
          <span v-else>v-else runs</span> -->
        <!-- <span>{{ star }} of {{ stars }}</span> -->
      </div>
      <h3>form is here</h3>
      <form action="">
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  </main>

</template>

<script>
export default {
    data() {
      return {
        showForm: false,
        stars: ["1", "2", "3", "4", "5"],
        rated: null
      };
    },
    methods:{
      toggleForm(){
        this.showForm = !this.showForm
      }
    },
    rate(starNumber){
      if(starNumber){
        this.rated = starNumber ;
        console.log(this.rated);
      }
      else{
        console.log("nothing counted");
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
  margin: 2em 2em;
  text-align: center;
  .rate-stars{
    ul{
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      li{
        float: left;
        font-size: large;
        .star-number{
          font-size: 12px;
          margin-top: 0;
        }
        .material-symbols-outlined{
          display: block;
          text-align: center;
          padding: 0;
          text-decoration: none;
          &:hover{
            font-size: 30px;
            color: rgb(252, 237, 24);
          }
        }
      }
    }
  }
}

</style>
