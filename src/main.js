import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";

import "./assets/main.css";
// import "./assets/container.scss";
// import "./assets/_main.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");

// const langIco = document.querySelector(".header__language");
// console.log(langIco);
// const langIco = document.querySelector(".header__language");
// const rulang = document.querySelector(".header__switch-link--RU");
// const uaLang = document.querySelector(".header__switch-link--UA");
// const spiner = document.querySelector(".spiner");
// const spinerSvg = document.querySelector(".spiner svg");

// langIco.addEventListener("mouseover", () => {
//   rulang.style.setProperty("opacity", "1");
//   rulang.style.setProperty("transition", "left 1s, opacity 2s");

//   uaLang.style.setProperty("opacity", "1");
//   uaLang.style.setProperty("transition", "left 1s, opacity 2s");
// });

// langIco.addEventListener("mouseout", () => {
//   uaLang.style.setProperty("opacity", "0");
//   rulang.style.setProperty("opacity", "0");
//   rulang.style.setProperty("transition", "left 1s, opacity 2s");
//   uaLang.style.setProperty("transition", "left 2s, opacity 2.5s");
// });

// spiner.addEventListener("mouseover", () => {
//   spinerSvg.style.setProperty("animation", "spin 5s infinite linear");
// });

// spiner.addEventListener("mouseout", () => {
//   spinerSvg.style.setProperty("animation", "spin 5s infinite linear paused");
// });

// const container = document.querySelector("main");

// const animateit = function (e) {
//   const title = document.querySelector(".intro__title");

//   const { offsetX: x, offsetY: y } = e;
//   const { offsetWidth: width, offsetHeight: height } = this;

//   let move = 25;
//   let xMove = (x / width) * (move * 2) - move;
//   let yMove = (y / height) * (move * 2) - move;

//   title.style.transform = `translate(${xMove}px, ${yMove}px)`;

//   if (e.type === "mouseleave") {
//     title.style.transform = "";
//   }
// };

// container.addEventListener("mousemove", animateit);
// container.addEventListener("mouseleave", animateit);
