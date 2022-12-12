<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
// import TestTryVue from "./components/TestTry.vue";
// import TheGeneral from "./components/General/TheGeneral.vue";
// const langIco = document.querySelector(".header__language");
// console.log(langIco);
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <!-- <RouterView /> -->
  <!-- <TheGeneral /> -->
</template>

<style>
.route-enter-from {
  /* opacity: 0; */
  /* opacity: 1; */
  /* transform: translateX(1000px); */
  transform: translateX(100%);
  transition: transform 0.3s ease-in;
  /* transition: all 0.3s ease-in; */
  /* transition: transform 1s ease-in, rotate 2s; */
  /* background-color: red; */
  /* background-color: red; */
  /* color: red; */
}

.route-enter-to {
  /* opacity: 0; */
  /* opacity: 1; */
  /* transform: translateX(1000px); */
  transform: translateX(100%);
  transition: transform 0.3s ease-in;
  /* transition: all 0.3s ease-in; */
  /* transition: transform 1s ease-in, rotate 2s; */
  /* background-color: red; */
  /* background-color: red; */
  /* color: red; */
}

.route-enter-active {
  /* opacity: 0; */
  /* opacity: 1; */
  transform: translateX(100%);
  transition: transform 0.3s ease-in;
  /* transition: all 0.3s ease-in; */
  /* transition: transform 1s ease-in, rotate 2s; */
  /* background-color: red; */
  /* background-color: red; */
  /* color: red; */
}

.route-leave-from {
  /* opacity: 1; */
  /* opacity: 0; */
  /* transform: translateX(1000px); */
  transform: translateX(-100%);
  transition: transform 0.3s ease-in;
  /* transition: all 0.3s ease-in; */
  /* transition: transform 1s ease-in, rotate 2s; */
  /* background-color: red; */
  /* transition: all 2s ease-in; */
  /* background-color: red; */
  /* color: red; */
}

.route-leave-to {
  /* opacity: 0; */
  /* opacity: 1; */
  /* transform: translateX(-100px); */
  transform: translateX(-100%);
  transition: transform 0.3s ease-in;
  /* transition: all 0.3s ease-in; */
  /* transition: transform 1s ease-in, rotate 2s; */
  /* background-color: red; */
  /* background-color: red; */
  /* color: red; */
}

.route-leave-active {
  /* opacity: 0; */
  /* opacity: 1; */
  transform: translateX(-100%);
  transition: transform 0.3s ease-in;
  /* transition: transform 1s ease-in, rotate 2s; */
  /* transition: all 0.3s ease-in; */
  /* background-color: red; */
  /* color: red; */
}
</style>
