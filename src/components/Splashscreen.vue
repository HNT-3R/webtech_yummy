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
      <img id="logo" alt="Vue logo" class="logo" src="../assets/img/logo.svg" width="125" height="125" />
    </div>
    <div id="splash-text">
      JOOO
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
    background-image: linear-gradient(#003229, #00df92);
    border-style: solid;
    border-width: 10px;
    border-color: #38ac79;
  }

  @keyframes fadeout {
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
</style>