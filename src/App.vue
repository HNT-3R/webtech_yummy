<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Splashscreen from "@/components/Splashscreen.vue";

</script>

<template>
  <header>
    <RouterView />
  </header>
</template>

<style scoped>

  body {
    margin: 0;
  }

  header {
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
    font-family: Helvetica, sans-serif;
    color: var(--text-dark-color);
  }

</style>
