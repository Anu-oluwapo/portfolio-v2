<template>
  <section class="about-section">
    <SectionHeader :text="'ABOUT'" />
    <div class="container">
      <div class="image">
        <p class="disclaimer">
          **A COOL UNSPLASH <br />
          PHOTOGRAPH NOT ME LOL
        </p>
        <div class="image-border"></div>
        <img alt="Man Looking Up" src="/images/person.png" />
        <!-- <img alt="Man Looking Up" src="/images/person2.png" /> -->
      </div>

      <div class="text">
        <p>
          Hi there! I am Anuoluwapo, a passionate and detail-oriented
          <b>Frontend Engineer</b>, dedicated to crafting seamless and engaging
          websites / web applications using the latest technologies. With a keen
          eye for design and user experience, I love creating digital
          experiences that are both aesthetically pleasing and highly
          functional. When I'm not coding, you can usually find me playing
          games, hitting the gym for a workout, shooting hoops on the basketball
          court, or kicking back and enjoying a good movie. I am constantly
          seeking new challenges and opportunities to learn and grow as a
          developer, and am excited to be a part of the dynamic and
          ever-evolving tech industry. Thanks for stopping by, and I look
          forward to connecting with you soon!
        </p>

        <button
          @click.prevent="lenis.scrollTo('#contact')"
          type="button"
          class="btn btn_about"
        >
          <span>GET IN TOUCH</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import { lenis } from "../helpers/animations";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // // const tl = gsap.timeline({});
  // gsap.from(".about-section .image img", {
  //   y: "50%",
  //   opacity: 0,
  //   duration: 0.5,
  //   ease: "Power3.easeOut",
  //   scrollTrigger: {
  //     trigger: ".about-section .container",
  //     start: "top+=500 bottom",
  //     markers: true,
  //   },
  // });
  // gsap.from(".about-section .text", {
  //   y: "50%",
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: ".about-section .container",
  //     start: "top+=500 bottom",
  //     markers: true,
  //   },
  // });
});
</script>

<style lang="scss" scoped></style>
