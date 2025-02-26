<script setup>
  import {onMounted, ref} from "vue";

  //maybe ersetzen, KI

  const isLoading = ref(true);

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
      sessionStorage.setItem("isFirstLoad", "false");
    }, 10000);
  });

</script>

<template>
  <div class="splashscreen">
    <div id="splash-icon">
      <img id="logo" alt="Yumblebee logo" class="logo" src="../assets/img/YumBlebeeLogo.png" width="200" height="200" />
    </div>
    <div id="splash-text">
      Loading recipe data...
    </div>
  </div>
</template>

<style scoped>
  .splashscreen {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: linear-gradient(var(--back-color), var(--back-color-dark));
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