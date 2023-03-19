<template>
  <section class="hero-section">
    <div class="container">
      <div class="text-content">
        <div class="t1">
          <h2>
            <span
              >FRONT-END<br />
              DEVELOPER</span
            >
          </h2>
          <div class="images">
            <img :alt="images[image]" :src="`/images/${images[image]}`" />
          </div>
        </div>
        <h2>
          PASSIONATE ABOUT<br />
          CRAFTING<span> SUPERB</span><br />
          WEB EXPERIENCES
        </h2>
      </div>
      <div class="scroller">
        <div class="bg">
          <div class="circle">
            <img
              alt="arrow down"
              class="arrowDown"
              src="@/assets/arrowDown.svg"
            />
            <div class="roundText" id="text">
              <p>SCROLL DOWN FOR MORE . SCROLL DOWN FOR MORE .</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const image = ref(0);
const images = ref([
  "classroom.png",
  "zenpad.png",
  "tranzaqt.png",
  "portfolio.png",
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

<style></style>
