<script setup>
import TheIntro from "../Intro/TheIntro.vue";
import "./General.scss";
import "./Logo.scss";
// import barba from "@barba/core";
// import { gsap } from "gsap";
// barba.init({
//   // ...
// });
</script>

<template>
  <!-- костыль так как не смог придумать событие загрузки страницы -->
  <!-- <main v-on:mousemove="test"> -->
  <main data-barba="wrapper">
    <section data-barba="container" data-barba-namespace="home" class="section">
      <div class="container">
        <TheIntro />
        <!-- <router-view v-slot="{ TheIntro }">
          <transition name="fade" mode="out-in">
            <component :is="TheIntro" />
          </transition>
        </router-view> -->
      </div>
    </section>
  </main>
</template>

<!-- <style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> -->

<script>
export default {
  // анимация стала плавнее!!!
  mounted() {
    // поставил именно сюда чтобы все успело отрендерится
    // barba.init({
    //   transitions: [
    //     {
    //       name: "default-transition",
    //       leave() {
    //         // create your stunning leave animation here
    //       },
    //       enter() {
    //         // create your amazing enter animation here
    //       },
    //     },
    //   ],
    // });
    // barba.init({
    //   transitions: [
    //     {
    //       name: "opacity-transition",
    //       async leave(data) {
    //         console.log(data);
    //         // return gsap.to(data.current.container, {
    //         //   opacity: 0,
    //         // });
    //       },
    //       enter(data) {
    //         return gsap.from(data.next.container, {
    //           opacity: 0,
    //         });
    //       },
    //     },
    //   ],
    // });
    const container = document.querySelector("main");
    // console.log(container);
    const animateit = function (e) {
      const title = document.querySelector(".intro__title");

      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = this;

      let move = 25;
      let xMove = (x / width) * (move * 2) - move;
      let yMove = (y / height) * (move * 2) - move;

      title.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === "mouseleave") {
        title.style.transform = "";
      }
    };

    container.addEventListener("mousemove", animateit);
    container.addEventListener("mouseleave", animateit);
  },
};
</script>
