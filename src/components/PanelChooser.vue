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
  display: flex;
  margin: auto;
  gap: 30px;
  flex-direction: row;
  justify-content: space-around;
  border: 5px solid var(--bee-red-color);
  border-radius: 10px;
}

.panel-button {
  align-content: center;
  text-align: center;
  font-size: xx-large;
  width: 15vw;
  height: 15vw;
  background-image: radial-gradient(circle, var(--bee-yellow-color), var(--bee-red-color));
  border: 5px solid var(--bee-red-color);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: inline-block;
}

a:link, a:visited, a:active {
  text-decoration: none;
  color: inherit;
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
  opacity: 0;
  transition: .5s ease;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--bee-red-color);
  padding: 10px;
  border: 5px solid var(--bee-red-color);
  border-radius: 20px;
  color: var(--text-bright-color);
}

.panel-button:hover .panel-image {
  opacity: 0.6;
}

.panel-button:hover .panel-hover-text {
  opacity: 1;
}

</style>