<script setup>
import "../Error404/Error404.scss";
import { RouterLink, RouterView } from "vue-router";
console.log("error");
</script>

<template>
  <div class="error-message">
    <RouterLink to="/">Go back</RouterLink>
  </div>
</template>
