<script>
  export default {}
</script>

<template>
  <div class="header">
    <h3>@IRE</h3>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi-bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi-bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi-bi-cart-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      />
    </svg>
  </div>
</template>

<style>
  .header {
    position: absolute;
    width: 360px;
    height: 56px;
    left: 0px;
    top: 0px;
    background: #ecc8b2;
    margin-left: 30px;
  }

  h3 {
    position: absolute;
    width: 62px;
    height: 28px;
    left: 150px;
    top: 14px;
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    background: #ecc8b2;
    color: #000000;
  }

  .bi-bi-list {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 3.33%;
    right: 90%;
    top: 14px;
    bottom: 95.25%;
    background: #ecc8b2;
    color: #000000;
  }

  /* LÄGG IN EN "NAV-LINK" I APP.VUE
  .bi-bi-list :hover:focus:active {
    background-color: antiquewhite;
  } */

  .bi-bi-heart-fill {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 81.11%;
    right: 13.33%;
    top: 14px;
    bottom: 95.75%;
    background: #ecc8b2;
    color: #000000;
  }

  .bi-bi-cart-fill {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 329px;
    top: 14px;
    background: #ecc8b2;
    color: #000000;
  }
</style>
