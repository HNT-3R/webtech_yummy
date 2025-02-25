<script setup>

import {ref} from "vue";

const newRecipeName = ref("");
const newRecipeIngredients = ref("");
const newRecipeInstructions = ref("");
const newRecipeNotes = ref("");

const emit = defineEmits(["add-recipe"]);

async function addRecipeButtonFunc() {
  const newRecipe = { recipeName: newRecipeName.value, ingredients: newRecipeIngredients.value, instructions: newRecipeInstructions.value, notes: newRecipeNotes.value };

  //validate recipe name
  let recipeNameRegEX = /^[a-zA-Z0-9\s-]{1,128}$/;
  if (!recipeNameRegEX.test(newRecipe.recipeName)) {
    alert("Invalid recipe name input!\n" +
        "Available inputs: Alphanumerics, spaces and dashes.\n" +
        "Character limit at 128 chars.\n" +
        "Current input length is: " + newRecipe.recipeName.length + " characters.");
    return;
  }

  //validate ingredients
  let ingredientsRegEX = /^.{1,1024}$/;
  if (!ingredientsRegEX.test(newRecipe.ingredients)) {
    alert("Invalid ingredients input!\n" +
        "Character limit at 1024 chars.\n" +
        "Current input length is: " + newRecipe.ingredients.length + " characters.");
    return;
  }

  let instructionsRegEX = /^.{1,1024}$/;
  if (!instructionsRegEX.test(newRecipe.instructions)) {
    alert("Invalid instructions input!\n" +
        "Character limit at 1024 chars.\n" +
        "Current input length is: " + newRecipe.instructions.length + " characters.");
    return;
  }

  let notesRegEX = /^.{1,512}$/;
  if (!notesRegEX.test(newRecipe.notes)) {
    alert("Invalid notes input!\n" +
        "Character limit at 512 chars.\n" +
        "Current input length is: " + newRecipe.notes.length + " characters.");
    return;
  }

  emit("add-recipe", newRecipe);

  //setze die neuen Rezeptdaten zurück für das nächste Rezept
  newRecipeName.value = "";
  newRecipeIngredients.value = "";
  newRecipeInstructions.value = "";
  newRecipeNotes.value = "";
}

</script>

<template>
  <div class="recipe-add-dialogue">

    <form id="add-form" @submit.prevent="addRecipeButtonFunc">
      <h2>Add Recipe</h2>
      <div class="form-group">
        <p>
          Name <br>
          <input v-model="newRecipeName" placeholder="Recipe name" required />
        </p>
        <p>
          Ingredients <br>
          <textarea v-model="newRecipeIngredients" placeholder="Ingredients" required />
        </p>
      </div>
      <div class="form-group">
        <p>
          Instructions <br>
          <textarea v-model="newRecipeInstructions" placeholder="Instructions" required />
        </p>
        <p>
          Notes <br>
          <textarea v-model="newRecipeNotes" placeholder="Notes" />
        </p>
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  </div>
</template>

<style scoped>
  #add-form {
    border: 5px solid var(--bee-yellow-color);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    flex-flow: wrap;
    gap: 20px;
    align-items: center;
    justify-content: space-evenly;
    min-height: 200px;
    background-image: linear-gradient(var(--back-color-light), var(--bee-yellow-lightened-color));
  }

  button {
    border: 5px solid var(--bee-red-color);
    border-radius: 10px;
    background-image: linear-gradient(var(--bee-yellow-lightened-color), var(--back-color-light));
    height: 50%;
    width: 15%;
  }

  input, textarea {
    background-image: linear-gradient(var(--back-color), var(--back-color-light));
    border: 2px solid var(--bee-red-color);
    border-radius: 10px;
    padding: 5px;
  }

</style>