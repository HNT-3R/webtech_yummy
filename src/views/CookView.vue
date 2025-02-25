<script setup>

import Navbar from "@/components/Navbar.vue";
import TopBanner from "@/components/TopBanner.vue";
import RecipeItem from "@/components/RecipeItem.vue";
import Footer from "@/components/Footer.vue";
import BodyContainer from "@/components/BodyContainer.vue";
import { ref, onMounted } from "vue";
import {addRecipe, delRecipe, getRecipes} from "@/databaseSetup.js"
import Splashscreen from "@/components/Splashscreen.vue";
import RecipeAddDialogue from "@/components/RecipeAddDialogue.vue";
import RecipeDeleteDialogue from "@/components/RecipeDeleteDialogue.vue";

const recipes = ref([]);
const loading = ref(true);

async function fetchRecipes() {
  try {
    recipes.value = await getRecipes("cookingRecipes");
  } catch (error) {
    console.error("Recipes unable to be loaded...");
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  setTimeout(fetchRecipes, 1000);
})

async function addRecipeHandling(newRecipe) {
  try {
    await addRecipe("cookingRecipes", newRecipe);
    await fetchRecipes();
  } catch (error) {
    console.error("Recipes failed to add..." + error);
  }
}

async function deleteRecipeHandling(recipeName) {
  try {
    await delRecipe("cookingRecipes", recipeName);
    await fetchRecipes();
  } catch (error) {
    console.error("Recipes failed to remove recipes..." + error);
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
        <template #heading>{{ recipe.recipeName }} ( {{recipe.id}} )</template>
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