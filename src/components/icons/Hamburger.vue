<template>
  <div :class="[active && 'active']" class="hamburger-icon">
    <div class="line-1"></div>
    <div class="line-2"></div>
    <div class="line-3"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  active: Boolean,
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.hamburger-icon {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: none;

  @media (max-width: $small) {
    display: block;
  }

  div {
    margin: 0.7rem;
    display: flex;
    background: $white;
    height: 0.2rem;
    width: 3rem;
    border-radius: 2rem;
    transition: all 0.5s ease-in-out;
  }

  &.active {
    div:nth-child(1) {
      transform: rotate(-45deg) translateY(600%);
    }
    div:nth-child(2) {
      transform: translateX(50%);
      opacity: 0;
    }
    div:nth-child(3) {
      transform: rotate(45deg) translateY(-600%);
    }
  }
}
</style>
