<script>
import developers from '../../assets/developers.json';
import SiteReview from '../components/SiteReview.vue';

  export default {
    components:{
      SiteReview,
    },
    data(){
      return{
        users: developers
      }
    }
  }
</script>

<template>
  <main>
  <header class="about-section" id="test">
    <h1>About @ire</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In mollitia ex
      soluta numquam assumenda officia velit reprehenderit natus ab. Neque quos
      at ad mollitia commodi qui repudiandae molestias id sint.
      </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolor
      minus magni necessitatibus accusamus nostrum eos in? Omnis, eum
      perspiciatis et quae laudantium ab, voluptatibus harum, laborum
      expedita voluptas quo!
    </p>
  </header>

  <h2 class="main-title">Our Team</h2>

  <div class="row">
    <div class="column" v-for="user in users" :key="user.id">
      <div class="card">
        <img class="dev-img" :src="user.img" alt="developers photo" />
        <div class="container">
          <h2>{{ user.name }}</h2>
          <p id="p-role"> {{ user.role }}</p>
          <p id="description">{{ user.description }}</p>
          <p id="email">{{ user.email }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="siter-eview">
    <SiteReview />
  </div>

  <footer>
    <h3>Sponsors</h3>
      <div class="photos-sponsor">
        <img class="sponsors-img" src="../../assets/sponsors/amazon.png" alt="" />
        <img class="sponsors-img" src="../../assets/sponsors/ebay.png" alt="" />
        <img class="sponsors-img" src="../../assets/sponsors/klarna.png" alt="" />
        <img class="sponsors-img" src="../../assets/sponsors/paypal.png" alt="" />
        <img class="sponsors-img" src="../../assets/sponsors/visa-master.png" alt="" />
      </div>
  </footer>
</main>
</template>

<style lang="scss" scoped>
.about-section {
    margin-top: 0;
    padding: 8em 4em 5em 6em;
    text-align: center;
    background-color: var(--lightB-darker);
    color: var(--darker);

    h1{
      color: var(--orange);
      margin-bottom: 1em;
    }
    p{
      line-height: 2;
      font-size: large;
      letter-spacing: 1px;
      overflow-wrap: break-word;
    }
  }
  .main-title{
    text-align: center;
    color: var(--darker);
    padding: 2em;
  }
  .row{
    margin: auto 0 auto 2em;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    list-style: none;
    .column {
      float: left;
      width: 22%;
      padding: 0 8px;
      margin-bottom: 2em;
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        margin: 8px;
        height: auto;
        .dev-img{
          width: 100%;
          height: auto;
        }
        .container {
          padding: 1em;
          display: flex;
          flex-direction: column;
          align-items: first baseline;
          font-weight: bold;
          p{
            padding: 2px 0;
            margin: 0.5em 0;
          }
          #p-role{
            color: var(--green-dark);
          }
          #email{
            font-weight: bold;
            align-self: center;
            font-size: 1.3em;
          }
          #description{
            width: fit-content;

          }
        }
      }
    }
  }
  footer{
    margin: 20em 0 5em 0;
    border-top: solid 1px var(--lightB-darker);
    border-bottom: solid 1px var(--lightB-darker);

    h3{
      padding: 1em;
      text-align: center;
    }
    .photos-sponsor{
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      height: auto;
      margin: 5em 0;

      img {
        width: 6em ;
        max-height: 6em ;
        align-self: flex-end;
      }
    }
  }
  @media screen and (max-width: 1300px) {
      .about-section {
        margin: 0 0 1em 1em;
      }
      .row{
        margin: auto 0 auto 3em;
      .column {
        width: 31%;
        .card {
          .container {
            #email{
              font-size: 1.2em;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 980px) {
      .about-section {
        padding: 8em 3em 5em 3em;
        margin: auto;
        p{

        text-align: justify;
        }
      }
      .row{
        margin: auto;
      .column {
        width: 31%;
        .card {
          .container {
            #email{
              font-size: 1em;
              font-weight: bold;
              border-top: 1px solid;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
      .row{
      .column {
        width: 47%;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .about-section {
      background-color: var(--lightB);
      margin: auto;
      padding: 8em 1em 3em 1em;
      p{
        text-justify: inter-word;
        text-align: justify;
      }
    }
    .row{
      margin: auto;
      .column {
        width: 80%;
      }
    }
    .photos-sponsor{
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      height: auto;
      margin: 2em 0;
    }
    footer{
    margin: 10em auto;
    .photos-sponsor{
      flex-flow: column wrap;
      // margin: 2em -1em 2em 3em;
      img {
        margin-top: 1em;
        width: 8em ;
        max-height: 8em ;
        align-self:center;
      }
    }
  }
}
 </style>
