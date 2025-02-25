<script setup>

import {ref} from "vue";

const newRecipeName = ref("");
const newRecipeIngredients = ref("");
const newRecipeInstructions = ref("");
const newRecipeNotes = ref("");

const emit = defineEmits(["add-recipe"]);

async function addRecipeButtonFunc() {
  const newRecipe = { recipeName: newRecipeName.value, ingredients: newRecipeIngredients.value, instructions: newRecipeInstructions.value, notes: newRecipeNotes.value };
  //setze die neuen Rezeptdaten zurück für das nächste Rezept

  emit("add-recipe", newRecipe);

  newRecipeName.value = "";
  newRecipeIngredients.value = "";
  newRecipeInstructions.value = "";
  newRecipeNotes.value = "";
}
</script>

<template>
  <div class="recipe-add-dialogue">
    <form @submit.prevent="addRecipeButtonFunc">
      <p>
        Name <br>
        <input v-model="newRecipeName" placeholder="Recipe name" required />
      </p>
      <p>
        Ingredients <br>
        <input v-model="newRecipeIngredients" placeholder="Ingredients" required />
      </p>
      <p>
        Instructions <br>
        <input v-model="newRecipeInstructions" placeholder="Instructions" required />
      </p>
      <p>
        Notes <br>
        <input v-model="newRecipeNotes" placeholder="Notes" />
      </p>
      <button type="submit">Add Recipe</button>
    </form>
  </div>
</template>

<style scoped>

</style>