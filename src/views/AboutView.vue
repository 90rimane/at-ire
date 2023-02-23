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
  </div>
      <h2 style="text-align:center">Our Team</h2>

    <div class="row" v-for="user in users" :key="user.id">
      <div class="column">
        <div class="card">
          <img src="/w3images/team1.jpg" alt="developers photo" style="width:100%" />
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

</template>

  <style scoped>
body{
    margin-left: 2em;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

.row{
  margin-left: 10em;
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
