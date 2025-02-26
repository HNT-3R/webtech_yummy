<script setup>

import { RouterLink, RouterView } from 'vue-router'

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
    width: 100%;
    font-family: Helvetica, sans-serif;
    color: var(--text-dark-color);
    background-image: linear-gradient(var(--back-color-light), var(--back-color-dark));
  }

</style>
