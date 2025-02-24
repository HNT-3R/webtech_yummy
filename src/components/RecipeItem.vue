<script setup>

</script>

<template>
  <div class="recipe-item">
    <div class="recipe-image">
      <slot name="img-slot"></slot>
    </div>
    <div class="recipe-info">
      <h2>
        <slot name="heading"></slot>
      </h2>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

  .recipe-item {
    width: 40vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 5px solid var(--bee-red-color);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;
    gap: 20px;
  }

  .recipe-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .recipe-image {
    box-sizing: border-box;
    height: 15vh;
    border: 5px solid var(--bee-red-color);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>