<script setup>

window.onscroll = function() {scrollFunction()};

/*
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.fontSize = "30px";
  } else {
    document.getElementById("nav").style.fontSize = "90px";
  }
}
 */

import {RouterLink} from "vue-router";

</script>

<template>
  <nav id="nav">

    <div id="leftNavDiv">
      <div class="navbarItem"> <RouterLink to="/">Home</RouterLink> </div>
      <div class="navbarItem"> <RouterLink to="/cooking">Cooking</RouterLink> </div>
    </div>

    <div> <img id="logo" alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> </div>

    <div id="rightNavDiv">
      <div class="navbarItem"> <RouterLink to="/baking">Baking</RouterLink> </div>
      <div class="navbarItem"> <RouterLink to="/about">About</RouterLink> </div>
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
  background-image: linear-gradient(#003229, #00a463);
  width: 100%;
  margin: 0px;
  padding: 15px;
  color: #a6eccd;
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
}

.navbarItem {
  margin: 0 10px;
  font-size: x-large;

}

</style>