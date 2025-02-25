<script setup>

</script>

<template>
  <div id="panel">

    <router-link to="/cooking">
      <div class="panel-button">
        <img class="panel-image" src="../assets/img/YumBlebeeCooking.png" alt="baking">
        <div class="panel-hover-text">
          Cooking
        </div>
      </div>
    </router-link>

    <router-link to="/baking">
      <div class="panel-button">
        <img class="panel-image" src="../assets/img/YumBlebeeMuffin.png" alt="baking">
        <div class="panel-hover-text">
          Baking
        </div>
      </div>
    </router-link>

  </div>
</template>

<style scoped>
  #panel {
    padding: 15px;
    margin: auto;

    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-around;

    border: 5px solid var(--bee-red-color);
    border-radius: 10px;
  }

  .panel-button {
    display: inline-block;
    align-content: center;
    overflow: hidden;
    position: relative;

    width: 15vw;
    height: 15vw;

    text-align: center;
    font-size: xx-large;

    background-image: radial-gradient(circle, var(--bee-yellow-color), var(--bee-red-color));

    border: 5px solid var(--bee-red-color);
    border-radius: 10px;
  }

  .panel-button:hover .panel-image {
    opacity: 0.6;
  }

  .panel-button:hover .panel-hover-text {
    opacity: 1;
  }

  .panel-image {
    width: 100%;
    height: 100%;

    display: block;
    object-fit: cover;

    transition: .5s ease;
    backface-visibility: hidden;
  }

  .panel-hover-text {

    top: 50%;
    left: 50%;
    padding: 10px;
    position: absolute;
    text-align: center;

    background-color: var(--bee-red-color);
    color: var(--text-bright-color);

    border: 5px solid var(--bee-red-color);
    border-radius: 20px;

    opacity: 0;
    transition: .5s ease;
    transform: translate(-50%, -50%);
  }

  a:link, a:visited, a:active {
    text-decoration: none;
    color: inherit;
  }

</style>