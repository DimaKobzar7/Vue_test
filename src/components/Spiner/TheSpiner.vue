<template>
  <div
    @mouseleave="stopSpin"
    @mouseover="startSpin"
    class="spiner"
    :class="{
      'spiner--start': active,
      'spiner--stop': !active,
    }"
  >
    <svg viewBox="0 0 100 100" width="100" height="100">
      <defs>
        <path
          id="circle"
          d="
            M 50, 50
            m -37, 0
            a 37,37 0 1,1 74,0
            a 37,37 0 1,1 -74,0"
        />
      </defs>
      <text>
        <textPath xlink:href="#circle">showreel showreel showreel</textPath>
      </text>
    </svg>
  </div>
</template>

<script>
import "./Spiner.scss";
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    startSpin() {
      // console.log(this.active);
      this.active = true;
    },
    stopSpin() {
      this.active = false;
    },
  },
  // хотел сделать этот компютед для оптимизации чтобы не вылазило одно событие несколько раз но не срабоатло
  // может потому что рассчеты тут не происходят а сразу замена и компутед тут не актуален?
  // computed: {
  //   startSpin() {
  //     console.log(this.active);
  //     return (this.active = true);
  //   },
  //   stopSpin() {
  //     return (this.active = false);
  //   },
  // },
};
</script>
