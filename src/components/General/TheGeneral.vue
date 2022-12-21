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
            eventType,
          }"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  mounted() {
    const pos = { x: 0, y: 0 };

    const saveCursorPosition = function (x, y) {
      pos.x = (x / window.innerWidth).toFixed(2);
      pos.y = (y / window.innerHeight).toFixed(2);
      document.documentElement.style.setProperty("--x", pos.x);
      document.documentElement.style.setProperty("--y", pos.y);
      // за этими значениями можно смотреть глдя на тег html
      // console.log(pos.x, pos.y);
      // console.log(document.querySelector(".intro__title"));
    };

    document.addEventListener("mousemove", (e) => {
      saveCursorPosition(e.clientX, e.clientY);
      // let leftFix = document.querySelector(".intro__title");

      // leftFix.style.left = "-80px";
      // leftFix.style.transition = "left 0.1s";
    });

    document.addEventListener("mouseleave", () => {
      document.documentElement.style.setProperty("--x", 0.5);
      document.documentElement.style.setProperty("--y", 0.5);
      // document.documentElement.style.setProperty("--x", 0);
      // document.documentElement.style.setProperty("--y", 0);
      // document.documentElement.style.setProperty("--x", 0);
      // document.documentElement.style.setProperty("--y", 0.5);
      // console.log(e);
      // let leftFix = document.querySelector(".intro__title");

      // leftFix.style.left = "-0px";
      // leftFix.style.transition = "left 0.1s";
    });
  },
};
</script>

<!-- <script>
export default {
  data() {
    return {
      xMove: 0,
      yMove: 0,
      eventType: "",
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
      // if (e.type === "mouseleave") {
      //   this.$refs.text.style.transform = "";
      // }
      this.eventType = e.type;
      // console.log(e.type);
      // console.log(this.eventType);
      const testObserve = new IntersectionObserver((item) => {
        console.log(item);
      });

      // console.log(testObserve);

      testObserve.observe(this.$refs.container);
      // получаю значения высоты и ширины вьюпорта но я их и с виндоу получаю
      console.log(this.$refs.container);
    },
  },
};
</script> -->

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
