<template>
  <section class="preloader-section">
    <SectionHeader :text="'Loading'" />
    <SectionHeader :orientation="'vertical'" :text="'Loading'" />
    <div class="container">
      <div class="loader-container">
        <div class="text">
          <p>Cooking Beans</p>
        </div>
        <div class="loader">
          <div class=""></div>
        </div>
        <span>20%</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SectionHeader from "../components/SectionHeader.vue";
import gsap from "gsap";

const image = ref(0);
const texts = ref([
  "Cooking Beans",
  "zenpad.png",
  "tranzaqt.png",
  "Finalzing Processes",
]);

function timer() {
  image.value < 3 ? image.value++ : (image.value = 0);
  setTimeout(() => timer(), 1300);
}

onMounted(() => {
  const roundText = document.querySelector(".roundText p");
  roundText.innerHTML = roundText.innerText
    .split("")
    .map(
      (char, i) => `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
    )
    .join("");

  timer();

  const arrowTl = gsap.timeline({
    yoyo: true,
    repeat: -1,
  });

  arrowTl.fromTo(
    ".arrowDown",
    { y: -10 },
    { y: 10, duration: 1, yoyoEase: true }
  );
});
</script>

<style lang="scss" scoped>
section {
  background: black;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 3;
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
      width: 20%;
      background: white;
      height: 0.6rem;
      border-radius: 10px;
      transition: all 0.5s ease;
    }
  }

  span {
    color: white;
  }
}
</style>
