import Navbar from '@/components/Navbar'

<template>
  <main>
    <Navbar />
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </main>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>