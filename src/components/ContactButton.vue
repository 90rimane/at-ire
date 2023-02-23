<template>
  <div id="contact-icon" class="material-symbols-outlined">contact_support</div>
  <div id="background-icon" />
</template>

<style scooped>
  #contact-icon,
  #background-icon {
    margin-left: 100px;
    font-size: 50px;
    margin-top: 87vh;
    margin-left: 90vw;
    position: fixed;
    z-index: 1;
  }

  #background-icon {
    background-color: #ecc8b2;
    z-index: initial;
    height: 30px;
    width: 30px;
    margin-top: 88vh;
    margin-left: 91vw;
    border-radius: 50%;
    /* box-shadow with a little help from a nice tool: https://shadows.brumm.af/ */
    box-shadow: 0px 0.2px 1.9px #ecc8b2, 0px 0.5px 4.5px #ecc8b2,
      0px 0.8px 8.5px #ecc8b2, 0px 1.4px 15.2px #ecc8b2,
      0px 2.4px 28.4px #ecc8b2, 0px 5px 68px#ecc8b2;
  }
</style>
