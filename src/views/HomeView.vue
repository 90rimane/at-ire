<!-- <template>
<main class="home-pages">
  <h1>Home page</h1>
  <p>First page should be here</p>
</main>
</template> -->
<template>
  <div class="grid-container">
    <div class="grid-item">
      <img src="https://i.pinimg.com/564x/90/e5/0f/90e50f08fa452356d5d98fe37dc10431.jpg" alt="image1" />
      <div class="grid-text">
          <h2>Tops</h2>
          <button class="shop-button">SHOP HERE</button>
      </div>
    </div>

    <div class="grid-item">
      <img src="https://i.pinimg.com/564x/90/e5/0f/90e50f08fa452356d5d98fe37dc10431.jpg" alt="image2" />
      <div class="grid-text">
          <h2>Bottoms</h2>
          <button class="shop-button">SHOP HERE</button>
      </div>

    </div>

    <div class="grid-item">
      <img src="https://i.pinimg.com/564x/93/28/01/9328012b820344ee38d86e2ea4416257.jpg" alt="image3" />
      <div class="grid-text">
          <h2>Accessories</h2>
          <button class="shop-button">SHOP HERE</button>
      </div>

    </div>

    <div class="grid-item">
      <img src="https://i.pinimg.com/564x/43/c2/a5/43c2a55207dd738d37dd3db5edffcc55.jpg" alt="image4" />
      <div class="grid-text">
          <h2>Pants</h2>
      <button class="shop-button">SHOP HERE</button>
    </div>
  </div>

  </div>
  </template>


  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    width: 100%;
    height: auto;
    margin: 3em 7em 3em 10em;
  }

  .grid-item {
    position:relative;

    text-align: center;
  }

  .grid-item img {
    width: 100%;
    height: 30em;
    object-fit: cover;
  }

  .grid-item h2 {
    margin: 10px;
    font-size: 20px;
  }

  .grid-text h2{
      position:absolute;
      top:50%;
      left:25%

  }

  .shop-button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color:white;
    text-transform: uppercase;
    font-weight:bold;
    font-size: 14px;
    border: none;
    cursor: pointer;

  }
  </style>
