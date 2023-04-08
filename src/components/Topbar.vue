<template>
  <header>
    <div class="header container">
      <div class="logo">
        <p>ANUOLUWAPO.</p>
      </div>

      <div class="controls">
        <div class="nav-links">
          <a href="#" @click="lenis.scrollTo('#work')" class="nav-link">
            WORK</a
          >
          <a href="#" @click="lenis.scrollTo('#skills')" class="nav-link">
            SKILLS</a
          >
          <a href="#" @click="lenis.scrollTo('#contact')" class="nav-link">
            CONTACT</a
          >
        </div>

        <div class="header-buttons">
          <a target="_blank" href="/AnuoluwapoAbolarin.pdf">
            <button type="button" class="btn btn_download">
              <span>DOWNLOAD RESUME</span>
            </button>
          </a>
        </div>

        <div @click="toggleLight()" class="switch">
          <Switch />
        </div>

        <div @click="toggleNav()" class="hamburger">
          <Hamburger :active="mobileNavActive" />
        </div>
      </div>
    </div>
  </header>
  <MobileNav @toggleActive="toggleNav()" :active="mobileNavActive" />
</template>

<script setup>
import Switch from "./icons/Switch.vue";
import Hamburger from "./icons/Hamburger.vue";
import MobileNav from "./MobileNav.vue";
import { onMounted, ref } from "vue";
import { lenis } from "../helpers/animations";

const mobileNavActive = ref(false);

function toggleLight() {
  document.querySelector("body").classList.toggle("light");
}

function toggleNav() {
  mobileNavActive.value = !mobileNavActive.value;
  document.querySelector("header").classList.toggle("fixed");
}
onMounted(() => {});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

header.fixed {
  position: fixed;
  z-index: 10;
  width: 100%;
  background: $black;
  transition: all 0.5s ease;
}
.switch {
  @media (max-width: $small) {
    display: none;
  }
}
</style>
