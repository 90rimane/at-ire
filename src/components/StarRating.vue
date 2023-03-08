<template>
  <div class="main-rate">
    <div class="rating">
      <p>Rate us</p>
      <div class="rate-stars" v-for="(star, index) in stars" :key="star">
        <ul>
          <li @click="ratedStars(index), toggleRespons()">
            <span class="material-symbols-outlined">star</span><span class="star-number">{{ index+1 }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="ratingRespons" v-show="showRespons">
      <p>
        <span class="material-symbols-outlined">magic_button</span>
        <span id="rated-star-number"> You rated us  {{ ratedStar }} stars</span>
        <span class="material-symbols-outlined">magic_button</span>
      </p>

      <h3 id="thanks">{{ responsMsg }}</h3>

      <div class="magic-stars-bottom">
            <span class="material-symbols-outlined">magic_button</span>
      </div>
    </div>
 </div>
</template>
<script>
export default {
    data() {
      return {
        showRespons: false,
        // showRespons: true,
        responsMsg: "Thank you for Feedback!",
        stars: ["1", "2", "3", "4", "5"],
        ratedStar: null,
      };
    },
    methods:{
      toggleRespons(){
        this.showRespons = true
        setTimeout(() => {
          this.showRespons = false
        }, 4000);
      },
      ratedStars(index){
      this.ratedStar= index+1
      }
    }
  }
</script>
<style lang="scss" scoped>
.main-rate{
  display: flex;
  flex-direction: column-reverse;
  width: 270px;
  height: 200px;
  margin: auto;
}
.rating{
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border: solid 4px var(--lightB-darker);
  width: 200px;
  height: 60px;
  text-align: center;
  align-items: center ;
  justify-content: center;
  cursor: pointer;
  margin: auto;
  .rate-stars{
    ul{
      list-style-type: none;
      overflow: hidden;
      li{
        // float: left;
        display: block;
        padding: 14px 1px;
        text-decoration: none;
        .star-number{
          font-size: 14px;
        }
        .material-symbols-outlined{
          display: block;
          font-size: 30px;
          text-align: center;
          text-decoration: none;
          color: rgb(233, 219, 21);
          &:hover{
            font-size: 35px;
            color: red;
          }
        }
      }
    }
  }
}

.material-symbols-outlined{
    color: yellow;
}
.ratingRespons{
  background-color: rgb(241, 64, 41);
  animation: responsBox .25s;
  width: 250px;
  height: 100px;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  color: white;
  margin: 10px auto;
  z-index: 2;
  p {
    margin-top: 10px;
  }
  h3{
    margin-top: 10px;
  }
}
@keyframes responsBox {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
