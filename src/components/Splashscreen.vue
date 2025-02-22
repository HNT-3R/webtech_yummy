<script setup>
  import Splashscreen from "@/components/Splashscreen.vue";

  const loadTimeout = setTimeout(changePage, 2000);

  function changePage() {
    let currURL = window.location.href;
    let splitURL = currURL.split("/");

    window.open("http://localhost:5173/")
  }

</script>

<template>
  <div class="splashscreen">
    <div id="splash-icon">
      <img id="logo" alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    </div>
    <div id="splash-text">

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
</style>