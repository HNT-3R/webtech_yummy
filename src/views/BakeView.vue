<script setup>

import Navbar from "@/components/Navbar.vue";
import TopBanner from "@/components/TopBanner.vue";
import BodyContainer from "@/components/BodyContainer.vue";
import Footer from "@/components/Footer.vue";
import RecipeItem from "@/components/RecipeItem.vue";
</script>

<template>
  <Navbar />
  <TopBanner />
  <BodyContainer id="body">
    <RecipeItem>
      <template #img-slot>
        <img id="logo" alt="Vue logo" class="logo" src="../assets/img/YumBlebeeLogoSmall.png"/>
      </template>
      <template #heading>REZEPT_PLACEHOLDER</template>
      Hallöle SIGMA SIGMA GYATT BANG BANG BA LANG HOBLEHE SKENYUEM <br/>
      Hallöle SIGMA SIGMA GYATT BANG BANG BA LANG HOBLEHE SKENYUEM <br/>
      Hallöle SIGMA SIGMA GYATT BANG BANG BA LANG HOBLEHE SKENYUEM <br/>
      Hallöle SIGMA SIGMA GYATT BANG BANG BA LANG HOBLEHE SKENYUEM <br/>
    </RecipeItem>
    <RecipeItem>
      <template #img-slot>
        <img id="logo" alt="Vue logo" class="logo" src="../assets/img/YumBlebeeLogoSmall.png"/>
      </template>
      <template #heading>REZEPT_PLACEHOLDER</template>
      Hallöle
    </RecipeItem>
    <RecipeItem>
      <template #img-slot>
        <img id="logo" alt="Vue logo" class="logo" src="../assets/img/YumBlebeeLogoSmall.png"/>
      </template>
      <template #heading>REZEPT_PLACEHOLDER</template>
      Hallöle
    </RecipeItem>
  </BodyContainer>
  <Footer />
</template>

<style scoped>
  #body {
    display: grid;
    grid-template-columns: 40vw 40vw;
    justify-content: space-evenly;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

</style>