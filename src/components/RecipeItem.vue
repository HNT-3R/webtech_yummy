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
    box-sizing: border-box;
    padding: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    border: 5px solid var(--bee-red-color);
    border-radius: 10px;
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
    overflow: hidden;
    min-height: 100px;
    min-width: 100px;

    border: 5px solid var(--bee-red-color);
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>