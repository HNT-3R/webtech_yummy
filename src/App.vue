<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Splashscreen from "@/components/Splashscreen.vue";



</script>

<template>
  <body>
    <RouterView />
  </body>
</template>

<style scoped>

  body {
    margin: 0;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
    font-family: Helvetica, sans-serif;
    color: var(--text-dark-color);
    background-image: linear-gradient(var(--back-color-light), var(--back-color-dark));
  }

</style>
