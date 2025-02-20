<script setup>

</script>

<template>
  <div id="panel">
    <div class="panel-button">
      <router-link to="/cooking">Cooking</router-link>
    </div>
    <div class="panel-button">
      <router-link to="/baking">Baking</router-link>
    </div>
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
  border-style: solid;
  border-width: 5px;
  border-color: #00a463;
  border-radius: 10px;
}

.panel-button {
  align-content: center;
  text-align: center;
  font-size: xx-large;
  color: #a6eccd;
  width: 15vw;
  height: 15vw;
  background-image: radial-gradient(circle, #00a463, #20a48a);
  border-style: solid;
  border-width: 5px;
  border-color: #00a463;
  border-radius: 10px;
}

a:link, a:visited, a:active {
  text-decoration: none;
  color: inherit;
}

</style>