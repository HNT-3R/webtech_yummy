<script setup>

import Navbar from "@/components/Navbar.vue";
import TopBanner from "@/components/TopBanner.vue";
import PanelChooser from "@/components/PanelChooser.vue";
import SimpleText from "@/components/SimpleText.vue";
import BodyContainer from "@/components/BodyContainer.vue";
import Footer from "@/components/Footer.vue";
import HorizontalSeperator from "@/components/HorizontalSeperator.vue";

</script>

<template>
  <Navbar />
  <TopBanner />
  <BodyContainer>
    <SimpleText class="home-text">
      <template #heading>Welcome to YumBleBee!</template>
      Our busy bee is hard at work! Accepting recipes from you, checking them and inserting them into his hive! <br>
      Be it baking or cooking, simple or complex recipes, vegan or vegetarian... <br>
      Save all the recipes you want locally on YumBlebee!
    </SimpleText>
    <HorizontalSeperator/>
    <SimpleText class="home-text">
      <template #heading>Choose type of recipe to save:</template>
    </SimpleText>
    <PanelChooser />
    <HorizontalSeperator/>
    <SimpleText class="home-text">
      <template #heading>How do I put my recipe on here?</template>
      Very simple: <br>
      Navigate to the cooking or baking site via the panel above or via the navigation bar. <br>
      On the top of each respective page, you will find the options to add or remove recipes. <br>
      Enter the respective information and submit your data to the database (or rather... hive). <br>
      Keep in mind that there are limitations to the amount of characters to be inserted.
    </SimpleText>
  </BodyContainer>
  <Footer/>
</template>

<style scoped>
  .home-text {
    align-content: center;
    text-align: center;
  }
</style>