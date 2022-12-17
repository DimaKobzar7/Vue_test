<script setup>
import TheIntro from "../Intro/TheIntro.vue";
import "./General.scss";
import "./Logo.scss";
</script>

<template>
  <main @mousemove="mouseData" ref="container">
    <section class="section">
      <div class="container">
        <!-- <TheIntro v-bind:test="{ coordinateX: 12 }" /> -->
        <!-- если координаты работают то допустим что контейнер мне не нужен -->
        <TheIntro v-bind:coordinates="{ coordinateX, coordinateY }" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      coordinateX: 0,
      coordinateY: 0,
      clientWidth: 0,
      clientHeight: 0,
      // el: this.$refs.container,
    };
  },
  methods: {
    mouseData(e) {
      const { offsetX: x, offsetY: y, view: cx, view: ch } = e;
      this.coordinateX = x;
      this.coordinateY = y;
      this.clientWidth = cx.innerWidth;
      this.clientHeight = ch.innerHeight;
      // console.log(typeof this.coordinateY);
      // console.log(this.data);
      // console.log(e.view.innerHeight, e.view.innerWidth);
      console.log(this.clientWidth, this.clientHeight);
    },
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

<!-- <script>
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
</script> -->
