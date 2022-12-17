<script setup>
import TheIntro from "../Intro/TheIntro.vue";
import "./General.scss";
import "./Logo.scss";
</script>

<template>
  <main>
    <section class="section">
      <div class="container">
        <TheIntro />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  // пробуй стоп пропагейшн чобы событие на ссылках и на спинере не ломало анимацию текста
  // и смотри модификаторы событий как capture и подобные а лучше сразу self попробуй чтобы только на мейне оно работало
  mounted() {
    const container = document.querySelector("main");
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
