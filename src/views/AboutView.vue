<script>
import developers from '../../assets/developers.json';

  export default {
    data(){
      return{
        users: developers
      }
    }
  }
</script>

<template>
  <main>
  <header class="about-section">
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
    padding: 5em 4em 5em 6em;
    margin: 5em;
    text-align: center;
    background-color: var(--green-dark);
    color: var(--light);
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
    margin: auto 5em;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    list-style: none;
    .column {
      float: left;
      width: 25%;
      margin-bottom: 16px;
      padding: 0 8px;
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
          .button {
            border: none;
            outline: 0;
            display: inline-block;
            padding: 5px;
            color: var(--light);
            background-color: var(--green-dark);
            text-align: center;
            cursor: pointer;
            width: 100%;
            height: 3em;
            margin-top: 0.5em;
          }
          .button:hover {
            background-color: var(--grey);
            flex-flow: row wrap;
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
  @media screen and (max-width: 650px) {
    .about-section {
      padding: 1em;
      margin: auto;
    }
    .row{
      flex-flow: column wrap;
    }
    .column {
      width: 100%;
      display: block;
    }
  }
  </style>
