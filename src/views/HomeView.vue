<script setup>

import Navbar from "@/components/Navbar.vue";
import TopBanner from "@/components/TopBanner.vue";
import PanelChooser from "@/components/PanelChooser.vue";
import SimpleText from "@/components/SimpleText.vue";
import SupportIcon from "@/components/icons/IconSupport.vue";
import {RouterLink} from "vue-router";
import BodyContainer from "@/components/BodyContainer.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Navbar />
  <TopBanner />
  <BodyContainer>
    <PanelChooser />
    <SimpleText>
      <template #heading>Unterstüze dieses Projekt!</template>
      Alle 36500 Tage stirbt ein Barack Obama. <br>
      Wenn Sie dies verhindern möchten, spenden Sie an unsere Organisation "Obamas without borders" und helfen Sie dabei eine bessere Welt zu erschaffen.
      <RouterLink to="/load">Load</RouterLink>
    </SimpleText>
  </BodyContainer>
  <Footer/>
</template>

<style scoped>

</style>