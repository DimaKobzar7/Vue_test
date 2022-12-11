<script setup>
import "../Error404/Error404.scss";
import { RouterLink } from "vue-router";

import barba from "@barba/core";
import { gsap } from "gsap";
console.log("error");
</script>

<template>
  <main data-barba="wrapper">
    <section data-barba="container" data-barba-namespace="home">
      <div class="error-message">
        <RouterLink to="/">Go back</RouterLink>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  mounted() {
    barba.init({
      transitions: [
        {
          name: "opacity-transition",
          leave(data) {
            console.log(data);
            return gsap.to(data.current.container, {
              opacity: 0,
            });
          },
          enter(data) {
            return gsap.from(data.next.container, {
              opacity: 0,
            });
          },
        },
      ],
    });
  },
};
</script>
