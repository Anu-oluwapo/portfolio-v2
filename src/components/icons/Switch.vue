<template>
  <div @click="active = !active" class="switch-icon">
    <div class="sun"><img alt="sun-icon" src="@/assets/sun.svg" /></div>
    <div class="moon"><img alt="moon-icon" src="@/assets/moon.svg" /></div>
    <div class="ball" :class="[active && 'active']"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let active = ref(true);
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.switch-icon {
  border: 0.15rem solid $neutral;
  border-radius: 10rem;
  display: flex;

  div {
    margin: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 3rem;
    cursor: pointer;

    img {
      justify-content: center;
    }
  }

  .ball {
    background: $white;
    border-radius: 10rem;
    align-items: center;
    cursor: default;
    transition: all 0.3s ease;
    position: absolute;
    z-index: -1;
  }
  .active {
    transform: translateX(4rem);
  }
}
</style>
