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
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-style: solid;
    border-width: 5px;
    border-color: #38ac79;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .recipe-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .recipe-image {
    height: 10vh;
    width: 10vh;
  }

  image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

</style>