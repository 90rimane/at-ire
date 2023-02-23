<template>
    <div class="grid-container">
      <div class="grid-item">
        <img
          src="https://i.pinimg.com/564x/90/e5/0f/90e50f08fa452356d5d98fe37dc10431.jpg"
          alt="img1"
        />
        <div class="grid-text">
          <h2 id="Tops">Tops</h2>
        </div>
      </div>

      <div class="grid-item">
        <img
          src="https://i.pinimg.com/564x/90/e5/0f/90e50f08fa452356d5d98fe37dc10431.jpg"
          alt="img2"
        />
        <div class="grid-text">
          <h2 id="Bottoms">Bottoms</h2>
        </div>
      </div>

      <div class="grid-item">
        <img
          src="https://i.pinimg.com/564x/93/28/01/9328012b820344ee38d86e2ea4416257.jpg"
          alt="img3"
        />
        <div class="grid-text">
          <h2 id="Acess">Accessories</h2>
        </div>
      </div>

      <div class="grid-item">
      <img
        src="https://i.pinimg.com/564x/43/c2/a5/43c2a55207dd738d37dd3db5edffcc55.jpg"
        alt="img4"
      />
      <div class="grid-text">
        <h2 id="Pants">Pants</h2>
      </div>
    </div>
  </div>

  <h1>Trending Now</h1>

 <!-- <div class="Insipiration">

    <div class="inspire">
    <img src="https://i.pinimg.com/564x/c6/d0/8f/c6d08fea13f40b56984ea95022dbf54d.jpg"/>
    </div>

<div class="inspire">
<img src="https://i.pinimg.com/564x/ee/97/8f/ee978f8a579466a75915e9fd028489e0.jpg"/>
</div>

<div class="inspire">
<img src="https://i.pinimg.com/564x/2e/41/8c/2e418c7de4c63dce70dd800c4223c019.jpg"/>
</div>
  </div>-->
</template>

<script>
export default{

}

</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 60px;
    text-align:center;

  }


  .grid-item {
    position: relative;
    text-align: center;
    width:100%;
    max-width:100%;

  }


  .grid-item img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    filter:brightness(80%);
  }
#Acess{
    left:15%;
}

#Pants{
    right:20%;
}

#Tops{
    right:30%;
}

#Bottom{
    right:15%;
}


  .grid-item h2 {
    margin: 10px;
    font-size: 20px;
    color:white;
  }

  .grid-text h2 {
    position: absolute;
    top:35%;
    left: 25%;
  }

.inspire{
    max-width:100%;
    max-height:100%;
}

h1{
    text-align:center;
}

</style>