<template>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style>
.route-enter-from {
  transform: translateX(100%);
  transition: transform 0.3s ease-in;
}

.route-enter-to {
  transform: translateX(100%);
  transition: transform 0.3s ease-in;
}

.route-enter-active {
  transform: translateX(100%);
  transition: transform 0.3s ease-in;
}

.route-leave-from {
  transform: translateX(-100%);
  transition: transform 0.3s ease-in;
}

.route-leave-to {
  transform: translateX(-100%);
  transition: transform 0.3s ease-in;
}

.route-leave-active {
  transform: translateX(-100%);
  transition: transform 0.3s ease-in;
}
</style>
