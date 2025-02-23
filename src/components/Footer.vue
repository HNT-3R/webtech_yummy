<script setup>

</script>

<template>
  <div class="footer-content">
    <div id="copyright">
      © 2024 Jakob Unterschütz
    </div>
    <div id="reserved">
      All rights reserved.
    </div>
  </div>
</template>

<style scoped>

.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(var(--bee-yellow-color), var(--bee-yellow-darkened-color));
  color: var(--text-bright-color);
  gap: 60px;
}

</style>