<template>
  <section class="skills-section" id="skills">
    <SectionHeader :text="'SKILLS'" />
    <div class="skills">
      <div class="skillset--1">
        <h2>
          <span>Javascript</span> . <span>ReactJS</span> .
          <span>Typescript</span> . <span>VueJS</span> .
          <span>Javascript</span> . <span>ReactJS</span> .
          <span>Typescript</span> . <span>VueJS</span>
        </h2>
      </div>
      <div class="skillset--2">
        <h2>
          <span>NuxtJS</span> . <span>VueX</span> . <span>Pinia</span> .
          <span>Git</span> . <span>NuxtJS</span> . <span>VueX</span> .
          <span>Pinia</span> . <span>Git</span> . <span>NuxtJS</span> .
          <span>VueX</span> . <span>Pinia</span> . <span>Git</span>
        </h2>
      </div>
      <div class="skillset--1">
        <h2>
          <span>HTML</span> . <span>CSS</span> . <span>SCSS</span> .
          <span>Bootstrap</span> . <span>HTML</span> . <span>CSS</span> .
          <span>SCSS</span> . <span>Bootstrap</span>
        </h2>
      </div>
      <div class="skillset--2">
        <h2>
          <span>AdobeXD</span> . <span>Figma</span> . <span>Wordpress</span> .
          <span>AdobeXD</span> . <span>Figma</span> . <span>Wordpress</span> .
          <span>AdobeXD</span> . <span>Figma</span> . <span>Wordpress</span> .
        </h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import SectionHeader from "./SectionHeader.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".skills-section .skills",
      start: "top bottom",
      end: "bottom+=200 top",
      scrub: true,
    },
  });

  tl.fromTo(".skillset--1 h2", { x: "20%" }, { x: "-20%" }, 0).fromTo(
    ".skillset--2 h2",
    { x: "-20%" },
    { x: "20%" },
    0
  );
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
</style>
