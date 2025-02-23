<script setup>
import {RouterLink} from "vue-router";
import {onMounted, onUnmounted, ref} from "vue";

const defaultTextSize = "xx-large";
const scrolledTextSize = "large";
const defaultImgSize = "125px"
const scrolledImgSize = "50px"

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = document.documentElement.scrollTop > 200;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const unhoveredImg = new URL("@/assets/img/YumBlebeeLogo.png", import.meta.url).href;
const hoveredImg = new URL("@/assets/img/YumBlebeeLogoHover.png", import.meta.url).href;
const currImg = ref(unhoveredImg);

const changeImg = (newImage) => {
  currImg.value = newImage;
};

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
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-image: linear-gradient(var(--back-color), var(--bee-yellow-color));
  width: 100%;
  margin: 0px;
  padding: 15px;
  font-size: x-large;
  transition: all 0.3s ease;
}

a:link, a:visited, a:active {
  text-decoration: none;
  color: inherit;
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

.logo {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease;
}

.logo:hover {
  cursor: grab;
}

.navbarItem {
  margin: 0 10px;
  border-style: solid;
  border-width: 2px;
  border-color: var(--bee-red-color);
  border-radius: 10px;
  padding: 5px;
  transition: all 0.3s ease;
}

.navbarItem:hover {
  background-color: var(--bee-red-color);

  transition-duration: 0.5s;
}

</style>