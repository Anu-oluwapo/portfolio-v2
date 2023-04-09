<template>
  <section class="mobile-nav-section">
    <div class="mobile-nav">
      <div class="controls">
        <div class="nav-links">
          <a
            href="#"
            @click="$emit('toggleActive'), lenis.scrollTo('#work')"
            class="nav-link"
          >
            WORK</a
          >
          <a
            href="#"
            @click="$emit('toggleActive'), lenis.scrollTo('#skills')"
            class="nav-link"
          >
            SKILLS</a
          >
          <a
            href="#"
            @click="$emit('toggleActive'), lenis.scrollTo('#contact')"
            class="nav-link"
          >
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
      </div>

      <div class="footer">
        <p>THEME</p>

        <Switch @click="toggleLight()" class="switch" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Switch from "./icons/Switch.vue";
import { onMounted, watch } from "vue";
import { lenis } from "../helpers/animations";
import gsap from "gsap";

const props = defineProps({
  active: Boolean,
});

function toggleLight() {
  document.querySelector("body").classList.toggle("light");
}

const mobileNavTl = gsap.timeline({ paused: true });

watch(props, () => {
  if (props.active) {
    mobileNavTl.play();
  } else {
    mobileNavTl.reverse();
  }
});
onMounted(() => {
  gsap.set(
    ".mobile-nav-section",
    {
      left: "100%",
    },
    0
  );
  mobileNavTl
    .to(".mobile-nav-section", {
      left: "0%",
    })
    .from(".mobile-nav .controls .nav-links .nav-link", {
      x: "70%",
      opacity: 0,
      stagger: { amount: 0.2 },
    })
    .from(
      ".mobile-nav .footer, .header-buttons",
      {
        y: "70%",
        opacity: 0,
      },
      0.8
    );
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
section {
  transition: all 0.5s ease;
  position: fixed;
  height: 100vh;
  background: $black;
  z-index: 5;
  width: 100%;
  top: 6rem;

  .mobile-nav {
    display: flex;
    flex-direction: column;
    height: 93%;

    .header-buttons {
      padding: 3rem 3rem;
    }
    .controls {
      display: flex;
      //   height: 100%;
      flex-grow: 1;
      flex-direction: column;

      .switch {
        align-self: end;
        width: 8.2rem;
      }
    }
    .nav-links {
      display: flex;
      flex-direction: column;
      .nav-link {
        padding: 5rem 5rem;
        font-size: 2rem;
        border-bottom: 1px solid $neutral2;
      }
    }

    .footer {
      display: flex;
      padding: 3rem 5rem;
      border-top: 1px solid $neutral2;
      align-items: center;
      //   align-self: end;

      p {
        font-size: 2rem;
        flex-grow: 1;
      }
    }
  }
}
</style>
