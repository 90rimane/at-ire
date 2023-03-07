<template>
  <RouterLink id="contact-icon" class="material-symbols-outlined" to="/contact">
    email
  </RouterLink>
</template>

<style scoped>
  #contact-icon {
    position: fixed;
    top: 92vh;
    right: 5vw;
    /* top: 700px;
    right: 75px; */
    /* bottom: auto; */
    z-index: 1;
    /* margin-left: 100px; */
    /* margin-top: 90vh;
    margin-left: 83vw; */
    height: 42px;
    width: 47px;
    font-size: 50px;
    color: rgb(37, 37, 37);
    text-decoration: none;
    background-color: rgb(236 200 178 / 0.8);
    border-radius: 50%;
    /* box-shadow with a little help from a nice tool: https://shadows.brumm.af/ */
    box-shadow: 0px 0.2px 1.9px rgb(255 245 239 / 0.8),
      0px 0.8px 8.5px rgb(236 200 178 / 0.7),
      0px 1.4px 15.2px rgb(236 200 178 / 0.7),
      0px 2.4px 28.4px rgb(236 200 178 / 0.5);
  }

  #contact-icon:hover {
    background-color: #f39256;
    height: 55px;
    width: 57px;
    font-size: 60px;
    box-shadow: 0px 0.2px 1.9px #f39256, 0px 0.5px 4.5px #f39256,
      0px 0.8px 8.5px #f39256, 0px 1.4px 15.2px #f39256,
      0px 2.4px 28.4px #f39256, 0px 5px 68px #f39256;
  }

  /* media queries mainly for flipped mobile */
  @media (min-width: 650px) and (max-width: 979px) {
    #contact-icon {
      top: 80vh;
      right: 5vw;
    }
  }

  /* media queries for deskop */
  @media (min-width: 980px) {
    #contact-icon {
      top: 90vh;
      right: 5vw;
    }

    #contact-icon:hover::before {
      background-color: #f39256;
      border: 1px black solid;
      border-radius: 10px;
      bottom: 40px;
      box-shadow: 5px 5px 25px;
      content: 'Go to Contact Page';
      font-size: 16px;
      padding: 15px;
      position: absolute;
      right: 70px;
    }
  }

  /* media queries for smaller squarer phones  */
  @media (max-width: 380px) and (max-height: 670px) {
    #contact-icon {
      top: 89vh;
      right: 7vw;
    }
  }

  /* media queries for tablet */
  @media (min-width: 809px) and (max-height: 1089px) {
    #contact-icon {
      top: 92vh;
      right: 7vw;
    }
  }

  /* media queries for  big widescreen tablet */
  @media (min-width: 799px) and (max-height: 1300px) {
    #contact-icon {
      top: 90vh;
      right: 4vw;
    }
  }
</style>
