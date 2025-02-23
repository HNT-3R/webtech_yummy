<script setup>

</script>

<template>
  <body>
    <slot></slot>
  </body>
</template>

<style scoped>
  body {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 15px 30px;
    width: 100%;
    height: fit-content;
    border-style: solid;
    border-width: 5px;
    border-color: var(--bee-yellow-color);
    margin: 0px;
    min-height: 50vh;
}
</style>