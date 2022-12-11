<script setup>
import TheIntro from "../Intro/TheIntro.vue";
import "./General.scss";
import barba from "@barba/core";

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
      </div>
    </section>
  </main>
</template>

<script>
export default {
  // анимация стала плавнее!!!
  mounted() {
    // поставил именно сюда чтобы все успело отрендерится
    barba.init({
      transitions: [{
    name: 'default-transition',
    leave() {
      // create your stunning leave animation here

    },
    enter() {
      // create your amazing enter animation here
    }
  }]
    });
    const container = document.querySelector("main");
    console.log(container);
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
  // data() {
  //   return {};
  // },
  // methods: {
  //   //  анимация очень ломаная и дерганая особенно на маленьком экране и она просто перестает работать иногда
  //   test() {
  //     console.log("gg");
  //     const container = document.querySelector("main");
  //     // console.log(container);
  //     const animateit = function (e) {
  //       const title = document.querySelector(".intro__title");

  //       const { offsetX: x, offsetY: y } = e;
  //       const { offsetWidth: width, offsetHeight: height } = this;

  //       let move = 25;
  //       let xMove = (x / width) * (move * 2) - move;
  //       let yMove = (y / height) * (move * 2) - move;

  //       title.style.transform = `translate(${xMove}px, ${yMove}px)`;

  //       if (e.type === "mouseleave") {
  //         title.style.transform = "";
  //       }
  //     };

  //     container.addEventListener("mousemove", animateit);
  //     container.addEventListener("mouseleave", animateit);
  //   },
  // },
};
</script>
