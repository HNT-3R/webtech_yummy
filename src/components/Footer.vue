<script setup>

import {RouterLink} from "vue-router";

</script>

<template>
  <div class="footer-content">
    <div id="copyright">
      © 2025 Jakob Unterschütz
    </div>
    <div id="reserved">
      All rights reserved.
    </div>
    <div id="about">
      <RouterLink to="/about">About</RouterLink>
    </div>
  </div>
</template>

<style scoped>

.footer-content {
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-image: linear-gradient(var(--bee-yellow-color), var(--bee-yellow-darkened-color));
  color: var(--text-bright-color);
  gap: 60px;
}

a:link, a:visited, a:active {
  color: inherit;
}

</style>