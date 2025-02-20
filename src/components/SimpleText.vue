<script setup>

</script>

<template>
  <div class="simple-text">
    <h2>
      <slot name="heading"></slot>
    </h2>
    <slot></slot>
  </div>
</template>

<style scoped>
  .simple-text {
    text-align: left;
    padding: 15px;
  }
</style>