<script setup>
import TheIntro from "../Intro/TheIntro.vue";
import "./General.scss";
</script>

<template>
  <!-- костыль так как не смог придумать событие загрузки страницы -->
  <main v-on:mousemove="test">
    <section class="section">
      <div class="container">
        <TheIntro />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //  анимация очень ломаная и дерганая
    test() {
      // console.log("gg");
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
  },
};
</script>
