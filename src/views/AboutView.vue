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
  <div class="about-section">
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
    <h2 style="text-align:center">Our Team</h2>
  </div>
  <div class="row" v-for="user in users" :key="user.id">
    <div class="column">
    <div class="card">
      <img src="/w3images/team1.jpg" alt="#" style="width:100%" />
      <div class="container">
        <h2>{{ user.name }}</h2>
        <p class="title"> {{ user.role }}</p>
        <p>{{ user.description }}</p>
        <p>{{ user.email }}</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  </div>


  <p style="margin: auto;" v-for="user in users" :key="user.id">users: {{ user.name }}</p>
</template>
<!--
<template>

<div class="about-section">
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
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="/w3images/team1.jpg" alt="Jane" style="width:100%" />
      <div class="container">
        <h2>Jaakko</h2>
        <p class="title">UX and Frontend Developer</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
        <p>jaakko@mail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team2.jpg" alt="Mike" style="width:100%" />
      <div class="container">
        <h2>Andrea</h2>
        <p class="title">UX and Frontend Developer</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
        <p>andrea@mail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="John" style="width:100%" />
      <div class="container">
        <h2>Ali</h2>
        <p class="title">UX and Frontend Developer</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <p>ali@mail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="John" style="width:100%" />
      <div class="container">
        <h2>Ali</h2>
        <p class="title">UX and Frontend Developer</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <p>ali@mail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="John" style="width:100%" />
      <div class="container">
        <h2>Ali</h2>
        <p class="title">UX and Frontend Developer</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <p>ali@mail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/w3images/team3.jpg" alt="John" style="width:100%" />
      <div class="container">
        <h2>Ali</h2>
        <p class="title">UX and Frontend Developer</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <p>ali@mail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

</div>


  </template>
  -->

  <style scoped>
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  .column {
    float: left;
    width: 33.3%;
    margin-bottom: 16px;
    padding: 0 8px;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 8px;
  }

  .about-section {
    padding: 50px;
    text-align: center;
    background-color: #474e5d;
    color: white;
  }

  .container {
    padding: 0 16px;
  }

  .container::after, .row::after {
    content: "";
    clear: both;
    display: table;
  }

  .title {
    color: grey;
  }

  .button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
  }

  .button:hover {
    background-color: #555;
  }

  @media screen and (max-width: 650px) {
    .column {
      width: 100%;
      display: block;
    }
  }
  </style>
