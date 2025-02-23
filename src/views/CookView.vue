<script setup>

import Navbar from "@/components/Navbar.vue";
import TopBanner from "@/components/TopBanner.vue";
import RecipeItem from "@/components/RecipeItem.vue";
import Footer from "@/components/Footer.vue";
import PanelChooser from "@/components/PanelChooser.vue";
import SimpleText from "@/components/SimpleText.vue";
import {RouterLink} from "vue-router";
import BodyContainer from "@/components/BodyContainer.vue";
</script>

<template>
  <Navbar />
  <TopBanner />
  <BodyContainer>
    <RecipeItem>
      <template #img-slot>
        <img id="logo" alt="Vue logo" class="logo" src="@/assets/logo.svg"/>
      </template>
      <template #heading>REZEPT_PLACEHOLDER</template>
      Hallöle
    </RecipeItem>
    <RecipeItem>
      <template #img-slot>
        <img id="logo" alt="Vue logo" class="logo" src="@/assets/logo.svg"/>
      </template>
      <template #heading>REZEPT_PLACEHOLDER</template>
      Hallöle
    </RecipeItem>
    <RecipeItem>
      <template #img-slot>
        <img id="logo" alt="Vue logo" class="logo" src="@/assets/logo.svg"/>
      </template>
      <template #heading>REZEPT_PLACEHOLDER</template>
      Hallöle
    </RecipeItem>
  </BodyContainer>
  <Footer/>
</template>

<style scoped>
  body {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 15px 30px;
    width: 100%;
    height: fit-content;
    border-style: solid;
    border-width: 5px;
    border-color: #00a463;
    margin: 0px;
  }
</style>