<script setup>
import {RouterLink} from "vue-router";
import {onMounted, onUnmounted, ref} from "vue";

//Text- und Bildgrößen für das resizing der Navbar beim scrollen
const defaultTextSize = "xx-large";
const scrolledTextSize = "large";
const defaultImgSize = "125px"
const scrolledImgSize = "50px"

const isScrolled = ref(false);

/**
 * verwaltet scrolling auf der Seite
 */

function handleScroll() {
  //wird mehr als 200 Pixel gescrolled, wird isScrolled wahr
  isScrolled.value = document.documentElement.scrollTop > 200;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

//Bilder definieren, die genutzt werden
const unhoveredImg = new URL("@/assets/img/YumBlebeeLogo.png", import.meta.url).href;
const hoveredImg = new URL("@/assets/img/YumBlebeeLogoHover.png", import.meta.url).href;
const currImg = ref(unhoveredImg);

/**
 * ändert das derzeitige Bild auf ein neues
 * @param newImage Neues Bild
 */

function changeImg (newImage) {
  currImg.value = newImage;
}

</script>

<template>
  <nav id="nav" :style="{ fontSize: isScrolled ? scrolledTextSize : defaultTextSize }">

    <div id="leftNavDiv">

      <RouterLink to="/">
        <div class="navbarItem">
          Home
        </div>
      </RouterLink>

      <RouterLink to="/cooking">
        <div class="navbarItem">
          Cooking
        </div>
      </RouterLink>

    </div>

    <div>
      <img @mouseover="changeImg(hoveredImg)" @mouseleave="changeImg(unhoveredImg)"
           id="logo" alt="YB Logo" class="logo" :src="currImg" :style="{ width: isScrolled ? scrolledImgSize : defaultImgSize }" />
    </div>

    <div id="rightNavDiv">

      <RouterLink to="/baking">
        <div class="navbarItem">
          Baking
        </div>
      </RouterLink>

      <RouterLink to="/about">
        <div class="navbarItem">
          About
        </div>
      </RouterLink>

    </div>

  </nav>
</template>

<style scoped>

nav {
  position: sticky;
  top: 0;
  box-sizing: border-box;
  margin: 0px;
  padding: 15px;
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: row;

  background-image: linear-gradient(var(--back-color), var(--bee-yellow-color));

  font-size: x-large;

  transition: all 0.3s ease;
}

.navbarItem {
  margin: 0 10px;
  padding: 5px;

  border: 2px solid var(--bee-red-color);
  border-radius: 10px;

  transition: all 0.3s ease;
}

.navbarItem:hover {
  background-color: var(--bee-red-color);
  transition-duration: 0.5s;
}

#leftNavDiv {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#rightNavDiv {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#logo {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease;
}

#logo:hover {
  cursor: grab;
}

a:link, a:visited, a:active {
  text-decoration: none;
  color: inherit;
}

</style>