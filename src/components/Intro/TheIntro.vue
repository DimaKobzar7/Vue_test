<script setup>
import { RouterLink } from "vue-router";
import TheHeader from "../Header/TheHeader.vue";
import RunningText from "../RunningText/TheRunningText.vue";
import TheSpiner from "../Spiner/TheSpiner.vue";
import "./Intro.scss";
</script>

<template>
  <div class="intro">
    <TheHeader />
    <div class="intro__front">
      <RunningText />
      <h1 class="intro__title">
        FULL-CYCLE <br />
        EVENT AGENCY
      </h1>
      <div class="intro__img">
        <img src="../../images/img/EllipseClear.png" alt="Ellipse" />
        <TheSpiner />
      </div>
    </div>
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
  </div>
</template>
