<template>
  <section class="preloader-section">
    <SectionHeader :text="'Loading'" />
    <!-- <SectionHeader :orientation="'vertical'" :text="'Loading'" /> -->
    <div class="container">
      <div class="loader-container">
        <div class="text">
          <p>Cooking Beans</p>
        </div>
        <div class="loader">
          <div id="loading-bar"></div>
        </div>
        <span id="counter">20%</span>
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
  "Generating Nodes",
  "Touching Up Images",
  "Sipping Coffee",
  "Finalzing Processes",
]);

function timer() {
  image.value < 3 ? image.value++ : (image.value = 0);
  setTimeout(() => timer(), 1300);
}

onMounted(() => {
  const loadingTl = gsap.timeline();
  loadingTl
    .to("#loading-bar", {
      width: "20%",
      duration: 5,
    })
    .to("#loading-bar", {
      width: "60%",
      duration: 3,
      delay: 0.8,
    })
    .to("#loading-bar", {
      width: "90%",
      duration: 2,
      delay: 0.5,
    })
    .to("#loading-bar", {
      width: "100%",
      duration: 1,
      delay: 0.2,
    });

  const counterTl = gsap.timeline();

  let Cont = { val: 0 };

  counterTl
    .to(Cont, {
      val: 20,
      duration: 5,
      roundProps: "val",
      onUpdate: function () {
        document.getElementById("counter").innerHTML = Cont.val + "%";
      },
    })
    .to(Cont, {
      val: 60,
      duration: 3,
      delay: 0.8,
      roundProps: "val",
      onUpdate: function () {
        document.getElementById("counter").innerHTML = Cont.val + "%";
      },
    })
    .to(Cont, {
      val: 90,
      duration: 2,
      delay: 0.5,
      roundProps: "val",
      onUpdate: function () {
        document.getElementById("counter").innerHTML = Cont.val + "%";
      },
    })
    .to(Cont, {
      val: 100,
      duration: 1,
      delay: 0.2,
      roundProps: "val",
      onUpdate: function () {
        document.getElementById("counter").innerHTML = Cont.val + "%";
      },
    });

  gsap.to(".preloader-section", {
    y: "-100%",
    delay: 12.5,
  });
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
