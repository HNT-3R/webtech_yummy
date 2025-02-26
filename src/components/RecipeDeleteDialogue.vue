<script setup>

  // ##### Togglen des Formulars via Button #####

  import {ref} from "vue";

  let opened = ref(false);

  function toggleForm() {
    opened.value = !opened.value;
    console.log("DelForm opened? " + opened.value);
  }

  // ##### Rezepte entfernen #####

  const recipeName = ref("");
  const emit = defineEmits(["delete-recipe"]);

  //Funktion wird beim drücken des Submit-Buttons ausgeführt
  async function delRecipeButtonFunc() {

    //gebe Event "delete-recipe" zurück, sodass Name im View vewendet werden kann
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
    box-sizing: border-box;
    padding: 15px;
    min-height: 200px;

    display: flex;
    flex-flow: wrap;
    gap: 20px;
    align-items: center;
    justify-content: space-evenly;

    background-image: linear-gradient(var(--back-color-light), var(--bee-red-lightened-color));

    border: 5px solid var(--bee-red-color);
    border-radius: 10px;
  }

  button {
    height: 50%;
    width: 20%;

    background-image: linear-gradient(var(--bee-red-lightened-color), var(--back-color-light));

    border: 5px solid var(--bee-red-color);
    border-radius: 10px;
  }

  #toggle-button {
    width: 200px;
    height: 40px;
  }

  input {
    background-image: linear-gradient(var(--back-color), var(--back-color-light));
    padding: 5px;

    border: 2px solid var(--bee-red-color);
    border-radius: 10px;
  }

  #outer-div {
    display: grid;
    grid-gap: 10px;
  }
</style>