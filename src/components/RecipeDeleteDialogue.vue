<script setup>

import {ref} from "vue";

const recipeName = ref("");

const emit = defineEmits(["delete-recipe"]);

async function delRecipeButtonFunc() {

  emit("delete-recipe", recipeName.value);

  //setze den Rezeptnamen zurück für das nächste Rezept
  recipeName.value = "";
}
</script>

<template>
  <div class="recipe-del-dialogue">
    <form id="del-form" @submit.prevent="delRecipeButtonFunc">
      <h2>Delete Recipe</h2>
      <p>
        Name <br>
        <input v-model="recipeName" placeholder="Recipe name" required />
      </p>
      <button type="submit">Delete Recipe</button>
    </form>
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

input {
  background-image: linear-gradient(var(--back-color), var(--back-color-light));
  border: 2px solid var(--bee-red-color);
  border-radius: 10px;
  padding: 5px;
}
</style>