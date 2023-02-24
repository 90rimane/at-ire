<template>
  <div>
    <CarouselSlide v-if="allProducts" :images="allProducts" />
  </div>

 <div class="grid-container">
    <div class="grid-item">
      <img
        src="https://i.pinimg.com/564x/90/e5/0f/90e50f08fa452356d5d98fe37dc10431.jpg" alt="img1"/>
      <div class="grid-text">
        <h2 id="Tops">Tops</h2>
      </div>
    </div>

    <div class="grid-item">
      <img
        src="https://i.pinimg.com/564x/90/e5/0f/90e50f08fa452356d5d98fe37dc10431.jpg" alt="img2" />
      <div class="grid-text">
        <h2 id="Bottoms">Bottoms</h2>
      </div>
    </div>

    <div class="grid-item">
      <img
        src="https://i.pinimg.com/564x/93/28/01/9328012b820344ee38d86e2ea4416257.jpg" alt="img3"/>
      <div class="grid-text">
        <h2 id="Acess">Accessories</h2>
      </div>
    </div>

    <div class="grid-item">
      <img
        src="https://i.pinimg.com/564x/43/c2/a5/43c2a55207dd738d37dd3db5edffcc55.jpg" alt="img4"/>
      <div class="grid-text">
        <h2 id="Pants">Pants</h2>
      </div>
    </div>
  </div>









  <h1>Trending Now</h1>


    <div class="container">
  <div class="image-container">
    <img src="https://i.pinimg.com/564x/c6/d0/8f/c6d08fea13f40b56984ea95022dbf54d.jpg" alt="Image 1">
    <div class="text-container">
      <h1 id="atire">@ire</h1>
      <p id="p1">Modern style is a design aesthetic that is characterized by clean lines, minimalism, and a focus on function</p>
    </div>
  </div>
  <div class="image-container">
    <img src="https://i.pinimg.com/736x/83/34/80/833480302fa26f3b0697b1b9bcd91e9a.jpg" alt="Image 2">
    <div class="text-container">
      <p id="p2">Simplicity is the ultimate sophistication to achieve</p>
    </div>
  </div>
  <div class="image-container">
    <img src="https://i.pinimg.com/564x/ee/97/8f/ee978f8a579466a75915e9fd028489e0.jpg" alt="Image 3">
    <div class="text-container">
      <p id="p3">Characterized by its dynamic and versatile nature, constantly evolving to reflect
         the current taste</p>
    </div>
  </div>
</div>


</template>

<script>
  import CarouselSlide from '../components/CarouselSlide.vue'
  export default {
    components: {
      CarouselSlide
    },
    computed: {
      allProducts() {
        return this.$store.state.allProducts
      }
    }
  }
</script>

<style scooped>

  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 60px;
    text-align: center;
  }

  .grid-item {
    position: relative;
    text-align: center;
    width: 100%;
    max-width: 100%;
  }

  .grid-item img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    filter: brightness(80%);
  }
  #Acess {
    left: 15%;
  }

  #Pants {
    right: 20%;
  }

  #Tops {
    right: 30%;
  }

  #Bottom {
    right: 15%;
  }

  .grid-item h2 {
    margin: 10px;
    font-size: 20px;
    color: white;
  }

  .grid-text h2 {
    position: absolute;
    top: 35%;
    left: 25%;
  }

  .inspire {
    max-width: 100%;
    max-height: 100%;
  }

  h1 {
    text-align: center;
  }


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.image-container {
  position: relative;
  margin: 20px;
}

.image-container img {
  display: block;
  width: 100%;
  height: 100%;
}

.image-cointainer{
  position: absolute;

}

.text-container p {
  position: absolute;
  color:white;
  font-weight:bolder;
  padding: 10px;
  font-size:12px;

}

.text-container h1 {
  position: absolute;
  font-weight:bolder;
  padding: 10px;
  font-size:50px;
  transform: rotate(90deg);

}

#p1{
  bottom:5%;
  left:0;
  right:0;
  text-align:center;

}

#p2{
  top:20%;
  left:80%;
  right:0;
  transform: rotate(90deg);
  white-space: nowrap;

}

#p3{
  text-align:center;
  top:0%;
  left:0;
  right:0;
}

#atire{
  top:5%;
  left:0;
  right:75%;
  color:white;
}
</style>
