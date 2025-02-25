<script setup>

import Navbar from "@/components/Navbar.vue";
import TopBanner from "@/components/TopBanner.vue";
import RecipeItem from "@/components/RecipeItem.vue";
import Footer from "@/components/Footer.vue";
import BodyContainer from "@/components/BodyContainer.vue";
import { ref, onMounted } from "vue";
import {addRecipe, delRecipe, getRecipes} from "@/databaseSetup.js"
import Splashscreen from "@/components/Splashscreen.vue";


const recipes = ref([]);
const loading = ref(true);

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

</script>

<template>
  <div v-if="loading">
    <Splashscreen/>
  </div>
  <div v-else>
    <Navbar />
    <TopBanner />
    <BodyContainer id="recipesContainer">
      <RecipeItem v-for = "recipe in recipes" :key="recipe.id">
        <template #img-slot>
          <img id="logo" alt="Vue logo" class="logo" src="../assets/img/YumBlebeeLogoSmall.png"/>
        </template>
        <template #heading>{{ recipe.recipeName }}</template>
        Ingredients: {{ recipe.ingredients }} <br>
        Instructions: {{ recipe.instructions }} <br>
        Additional notes: {{ recipe.extraNotices }} <br>
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