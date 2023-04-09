<template>
  <section class="preloader-section">
    <SectionHeader :text="'Loading'" />
    <!-- <SectionHeader :orientation="'vertical'" :text="'Loading'" /> -->
    <div class="container">
      <div class="loader-container">
        <div class="text">
          <p>Cooking...</p>
        </div>
        <div class="loader">
          <div id="loading-bar"></div>
        </div>
        <span id="counter">0%</span>
      </div>
    </div>
  </section>
  <section></section>
  <section></section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SectionHeader from "../components/SectionHeader.vue";
import { loadComplete } from "../helpers/animations";
import gsap from "gsap";
import imagesLoaded from "imagesloaded";

const texts = ref([
  "Generating Nodes",
  "Touching Up Images",
  "Sipping Coffee",
  "Finalzing Processes",
]);

onMounted(() => {
  let imageLoad = imagesLoaded(document.querySelectorAll("img"));
  let count = document.querySelector("#counter"),
    progressBar = document.querySelector("#loading-bar"),
    images = document.querySelectorAll("img").length,
    loadedCount = 0,
    loadingProgress = 0;

  var loadingTl = gsap.timeline();

  imageLoad.on("progress", (instance, image) => {
    loadProgress();
  });

  function loadProgress(imageLoad, image) {
    loadedCount++;
    loadingProgress = loadedCount / images;

    gsap.to(loadingTl, { progress: loadingProgress, duration: 2 });
  }

  var loadingTl = gsap.timeline({
    paused: false,
    onUpdate: countPercent,
    onComplete: loadComplete,
  });

  loadingTl.to(progressBar, { width: "100%", duration: 2, ease: "easeInOut" });

  function countPercent() {
    let newPercent = (loadingTl.progress() * 100).toFixed();
    count.innerHTML = newPercent + "%";
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";
section {
  background: $black;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 4;

  &:nth-child(2) {
    background: $neutral;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 2;
  }
  &:nth-child(3) {
    background: $neutral2;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 1;
  }
}

// .vertical {
//   rotate: 90deg;
//   position: absolute;
//   left: 0;
//   top: 46%;
//   width: 100vh;
// }

.loader-container {
  width: 20%;
  margin: 5rem 0;
  position: absolute;
  bottom: 0;
  span {
    font-size: 2rem;
  }

  @media (max-width: $small) {
    width: 50%;
  }

  .loader {
    height: 1rem;
    width: 100%;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 1rem 0;
    bottom: 0;
    div {
      width: 0%;
      background: white;
      height: 0.6rem;
      border-radius: 10px;
      // transition: all 0.5s ease;
    }
  }

  span {
    color: white;
  }
}
</style>
