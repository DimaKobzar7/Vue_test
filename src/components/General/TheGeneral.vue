<script setup>
import TheIntro from "../Intro/TheIntro.vue";
import "./General.scss";
import "./Logo.scss";
</script>

<template>
  <!-- надо тут все делать тут а конечные значения отправлять в интро и ставить стили с этими значениями на текст -->
  <main @mousemove="mouseData" @mouseleave="mouseData" ref="container">
    <section class="section">
      <div class="container">
        <!-- <TheIntro v-bind:test="{ coordinateX: 12 }" /> -->
        <!-- если координаты работают то допустим что контейнер мне не нужен -->
        <TheIntro
          v-bind:coordinates="{
            xMove,
            yMove,
          }"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      xMove: 0,
      yMove: 0,
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
      // console.log(this.clientWidth, this.clientHeight);
      let move = 25;
      this.xMove = (this.coordinateX / this.clientWidth) * (move * 2) - move;
      this.yMove = (this.coordinateY / this.clientHeight) * (move * 2) - move;
      // console.log(this.yMove);

      // перекинуть это как пропс в дочерний компонент
      if (e.type === "mouseleave") {
        this.$refs.text.style.transform = "";
      }
    },
  },
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
