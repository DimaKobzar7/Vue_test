<script setup>
// import { numberLiteralTypeAnnotation } from "@babel/types";
import { RouterLink } from "vue-router";
import TheHeader from "../Header/TheHeader.vue";
import RunningText from "../RunningText/TheRunningText.vue";
import TheSpiner from "../Spiner/TheSpiner.vue";
import "./Intro.scss";
</script>

<template>
  <div class="intro" @mousemove="testt">
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
    <RouterLink to="/who" class="intro__vertical-link"
      >Who? {{ coordinates }}</RouterLink
    >
  </div>
</template>

<script>
export default {
  // props: ["test"],
  props: {
    coordinates: Object,
  },
  data() {},
  methods: {
    testt() {
      // const { offsetWidth: width, offsetHeight: height } = this;
      // console.log(width, height, this);
    },
  },
  mounted() {
    const { offsetWidth: width, offsetHeight: height } = this;
    console.log(width, height, this);
  },
  // mounted() {
  //   const container = document.querySelector("main");
  //   const animateit = function (e) {
  //     const title = document.querySelector(".intro__title");

  //     const { offsetX: x, offsetY: y } = e;
  //     const { offsetWidth: width, offsetHeight: height } = this;

  //     let move = 25;
  //     let xMove = (x / width) * (move * 2) - move;
  //     let yMove = (y / height) * (move * 2) - move;

  //     title.style.transform = `translate(${xMove}px, ${yMove}px)`;

  //     if (e.type === "mouseleave") {
  //       title.style.transform = "";
  //     }
  //   };

  //   container.addEventListener("mousemove", animateit);
  //   container.addEventListener("mouseleave", animateit);
  // },
};
</script>
