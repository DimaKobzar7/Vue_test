<script setup>
import { RouterLink } from "vue-router";
import TheHeader from "../Header/TheHeader.vue";
// import RunningText from "../RunningText/TheRunningText.Vue";
// import RunningText from "../Running/TheRunningText.Vue";
import RunningText from "../RunningText.vue";
import TheSpiner from "../Spiner/TheSpiner.vue";
// import "../../assets/intro.css";
import "./Intro.scss";
// import TheError404 from "../Error404/TheError404.vue";
console.log("main");
// const langIco = document.querySelector(".header__language");

// console.log(langIco);
</script>

<!-- <script>
const routes = {
  "/": TheError404,
  "/about": TheError404,
  "/who": TheError404,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"];
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script> -->
<!-- <RouterLink to="/">Home</RouterLink>
<RouterLink to="/about">About</RouterLink> -->
<template>
  <div class="intro">
    <TheHeader />
    <div class="intro__front">
      <h1 class="intro__title">
        FULL-CYCLE <br />
        EVENT AGENCY
      </h1>
      <div class="intro__img">
        <img src="../../images/img/EllipseClear.png" alt="Ellipse" />
        <TheSpiner />
      </div>
    </div>
    <RunningText />
    <RouterLink
      to="/where"
      class="intro__horizontal-link intro__horizontal-link--left"
    >
      Where?
    </RouterLink>
    <RouterLink
      to="/what"
      class="intro__horizontal-link intro__horizontal-link--right"
    >
      What?
    </RouterLink>
    <RouterLink to="/who" class="intro__vertical-link">Who?</RouterLink>
    <!-- <a href="#/">Home</a> | <a href="#/about">About</a> |
    <a href="#/non-existent-path">Broken Link</a>
    <component :is="currentView" /> -->
    <!-- <RouterView /> -->
  </div>
</template>

<!-- <script>
const langIco = document.querySelector(".header__language");

console.log(langIco);
</script> -->
