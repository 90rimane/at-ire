<template>
  <RouterLink id="contact-icon" class="material-symbols-outlined" to="/contact">
    contact_support
  </RouterLink>
</template>

<style scooped>
  #contact-icon {
    position: fixed;
    z-index: 1;
    margin-left: 100px;
    margin-top: 87vh;
    margin-left: 90vw;
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
</style>
