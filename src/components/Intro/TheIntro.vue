<script setup>
// import { numberLiteralTypeAnnotation } from "@babel/types";
import { RouterLink } from "vue-router";
import TheHeader from "../Header/TheHeader.vue";
import RunningText from "../RunningText/TheRunningText.vue";
import TheSpiner from "../Spiner/TheSpiner.vue";
import "./Intro.scss";
</script>

<template>
  <div class="intro" @mousemove="test">
    <TheHeader />
    <div class="intro__front">
      <RunningText />
      <h1 class="intro__title" ref="text">
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

<script>
export default {
  props: {
    coordinates: Object,
  },
  watch: {
    // надо чтобы переменная и метод имели одинаковое название
    coordinates() {
      // console.log("coords changed", value);
      this.$refs.text.style.transform = `translate(${this.coordinates.xMove}px, ${this.coordinates.yMove}px)`;
      // console.log(this.coordinates);
      // console.log(this.coordinates.eventType);
      if (this.coordinates.eventType === "mouseleave") {
        this.$refs.text.style.transform = "";
      }
    },
  },

  // methods: {
  //   test() {
  //     // let move = 25;
  //     // let xMove =
  //     //   (this.coordinates.coordinateX / this.coordinates.clientWidth) *
  //     //     (move * 2) -
  //     //   move;
  //     // let yMove =
  //     //   (this.coordinates.coordinateY / this.coordinates.clientHeight) *
  //     //     (move * 2) -
  //     //   move;

  //     // console.log(this.$refs.text);
  //     // console.log(this.coordinates);
  //     this.$refs.text.style.transform = `translate(${this.coordinates.xMove}px, ${this.coordinates.yMove}px)`;
  //     // console.log(this.coordinates);
  //     console.log(this.coordinates.eventType);
  //     if (this.coordinates.eventType === "mouseleave") {
  //       this.$refs.text.style.transform = "";
  //     }
  //   },
  // },
};
</script>
