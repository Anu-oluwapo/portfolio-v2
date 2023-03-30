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

        <div class="hamburger">
          <Hamburger />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Switch from "./icons/Switch.vue";
import Hamburger from "./icons/Hamburger.vue";
import { onMounted } from "vue";
import { lenis } from "../helpers/animations";

function toggleLight() {
  document.querySelector("body").classList.toggle("light");
}
onMounted(() => {});
</script>

<style></style>
