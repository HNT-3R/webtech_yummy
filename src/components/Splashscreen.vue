<script setup>

</script>

<template>
  <div id="splashscreen">
    <div id="splash-icon">
      <img id="logo" alt="Yumblebee logo" class="logo" src="../assets/img/YumBlebeeLogo.png" width="200" height="200" />
    </div>
    <div id="splash-text">
      Loading recipe data...
    </div>
  </div>
</template>

<style scoped>
  #splashscreen {
    box-sizing: border-box;
    height: 100vh;
    background-image: linear-gradient(var(--back-color), var(--back-color-dark));

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-style: solid;
    border-width: 10px;
    border-color: var(--bee-yellow-color);
  }

  #splash-text {
    font-size: x-large;
  }

  #logo {
    animation-name: spin-animation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes spin-animation {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
</style>