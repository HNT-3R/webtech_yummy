<script setup>

</script>

<template>
  <div id="contact-item">
    <h3>
      <slot name="heading"></slot>
    </h3>
    <div id="text-slot">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  #contact-item {
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 15vw;
    height: 15vw;
    border-style: solid;
    border-color: var(--bee-red-color);
    border-radius: 10px;
  }
  
  #text-slot {
    padding: 15px;
  }
</style>