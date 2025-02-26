<script setup>

import Navbar from "@/components/Navbar.vue";
import TopBanner from "@/components/TopBanner.vue";
import RecipeItem from "@/components/RecipeItem.vue";
import Footer from "@/components/Footer.vue";
import BodyContainer from "@/components/BodyContainer.vue";
import { ref, onMounted } from "vue";
import {addRecipe, delRecipe, getRecipes} from "@/dataprocessing/databaseSetup.js"
import Splashscreen from "@/components/Splashscreen.vue";
import RecipeAddDialogue from "@/components/RecipeAddDialogue.vue";
import RecipeDeleteDialogue from "@/components/RecipeDeleteDialogue.vue";

//enthält alle Rezepte (kommt via fetchRecipes)
const recipes = ref([]);
const loading = ref(true);

/**
 * Holt alle Rezepte aus der jeweiligen Storage der Datenbank.
 * Für Kochrezepte ist das "cookingRecipes", für Backrezepte ist das "bakingRecipes".
 */
async function fetchRecipes() {
  try {
    recipes.value = await getRecipes("bakingRecipes");
  } catch (error) {
    console.error("Recipes unable to be loaded...");
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  setTimeout(fetchRecipes, 1000);
})

/**
 * Handled das hinzufügen eines neuen Rezepts, interagiert mit der Datenbank.
 * @param newRecipe Neues Rezeptobjekt (wird aus der Kompenente RecipeAddDialog gesendet)
 */
async function addRecipeHandling(newRecipe) {
  try {
    await addRecipe("bakingRecipes", newRecipe);
    await fetchRecipes();
  } catch (error) {
    console.error("Recipes failed to add..." + error);
  }
}

/**
 * Handled das löschen eines Rezepts anhand des Namens, interagiert mit der Datenbank.
 * @param recipeName Name des zu löschenden Rezepts (ist Index, ermittelt daraufhin key zum löschen)
 */
async function deleteRecipeHandling(recipeName) {
  try {
    await delRecipe("bakingRecipes", recipeName);
    await fetchRecipes();
  } catch (error) {
    console.error("Failed to remove recipes..." + error);
  }
}
</script>

<template>
  <div v-if="loading">
    <Splashscreen/>
  </div>
  <div v-else>
    <Navbar />
    <TopBanner />
    <BodyContainer id="recipesContainer">
      <RecipeAddDialogue @add-recipe="addRecipeHandling" />
      <RecipeDeleteDialogue @delete-recipe="deleteRecipeHandling"/>
      <RecipeItem v-for = "recipe in recipes" :key="recipe.id">
        <template #img-slot>
          <img id="logo" alt="Vue logo" class="logo" src="../assets/img/YumBlebeeLogoSmall.png"/>
        </template>
        <template #heading>{{ recipe.recipeName }}</template>
        Ingredients: {{ recipe.ingredients }} <br>
        Instructions: {{ recipe.instructions }} <br>
        Additional notes: {{ recipe.notes }} <br>
      </RecipeItem>
    </BodyContainer>
    <Footer/>
  </div>
</template>

<style scoped>

  #recipesContainer {
    display: grid;
    grid-template-columns: 40vw 40vw;
    justify-content: space-evenly;
    grid-gap: 20px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

</style>