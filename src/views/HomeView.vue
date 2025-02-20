<script setup>

import Navbar from "@/components/Navbar.vue";
import TopBanner from "@/components/TopBanner.vue";
import PanelChooser from "@/components/PanelChooser.vue";
import SimpleText from "@/components/SimpleText.vue";
import SupportIcon from "@/components/icons/IconSupport.vue";
</script>

<template>
  <Navbar />
  <TopBanner />
  <div id="main-body">
    <PanelChooser />
    <SimpleText>
      <template #heading>Unterstüze dieses Projekt!</template>
      Alle 36500 Tage stirbt ein Barack Obama. <br>
      Wenn Sie dies verhindern möchten, spenden Sie an unsere Organisation "Obamas without borders" und helfen Sie dabei eine bessere Welt zu erschaffen.
    </SimpleText>

  </div>
</template>

<style scoped>
  #main-body {
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
  }
</style>