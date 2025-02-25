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
    <form @submit.prevent="delRecipeButtonFunc">
      <p>
        Name <br>
        <input v-model="recipeName" placeholder="Recipe name" required />
      </p>
      <button type="submit">Delete Recipe</button>
    </form>
  </div>
</template>

<style scoped>

</style>