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
    padding: 15px 30px;
    margin: 0px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 100%;
    min-height: 65vh;
    height: fit-content;

    border-style: solid;
    border-width: 5px;
    border-color: var(--bee-yellow-color);
}
</style>