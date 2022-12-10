<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "../Header/TheHeader.vue";
// import RunningText from "../RunningText/TheRunningText.Vue";
// import RunningText from "../Running/TheRunningText.Vue";
import RunningText from "../RunningText.vue";
import TheSpiner from "../Spiner/TheSpiner.vue";
import "../../assets/intro.css";
</script>
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
    <RouterView />
  </div>
</template>
