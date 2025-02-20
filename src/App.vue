<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
  }

</style>
