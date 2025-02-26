<script setup>

import {ref} from "vue";

let opened = ref(false);

function toggleForm() {
  console.log(opened);
  opened.value = !opened.value;
}

const recipeName = ref("");
const emit = defineEmits(["delete-recipe"]);

async function delRecipeButtonFunc() {

  emit("delete-recipe", recipeName.value);

  //setze den Rezeptnamen zurück für das nächste Rezept
  recipeName.value = "";
}
</script>

<template>
  <div id="outer-div">
    <button type="button" @click="toggleForm()" id="toggle-button">Open Recipe Delete Menu</button>
    <div class="recipe-del-dialogue" v-if="opened">
      <form id="del-form" @submit.prevent="delRecipeButtonFunc">
        <h2>Delete Recipe</h2>
        <p>
          Name <br>
          <input v-model="recipeName" placeholder="Recipe name" required />
        </p>
        <button type="submit">Delete Recipe</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
#del-form {
  border: 5px solid var(--bee-red-color);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-flow: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-evenly;
  min-height: 200px;
  background-image: linear-gradient(var(--back-color-light), var(--bee-red-lightened-color));
}

button {
  border: 5px solid var(--bee-red-color);
  border-radius: 10px;
  background-image: linear-gradient(var(--bee-red-lightened-color), var(--back-color-light));
  height: 50%;
  width: 20%;
}

#toggle-button {
  width: 200px;
  height: 40px;
}

input {
  background-image: linear-gradient(var(--back-color), var(--back-color-light));
  border: 2px solid var(--bee-red-color);
  border-radius: 10px;
  padding: 5px;
}

#outer-div {
  display: grid;
  grid-gap: 10px;
}

</style>