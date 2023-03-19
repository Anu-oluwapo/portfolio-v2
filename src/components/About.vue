<template>
  <section class="about-section">
    <SectionHeader :text="'ABOUT'" />
    <div class="container">
      <div class="image">
        <div class="image-border"></div>
        <img alt="Man Looking Up" src="/images/person.png" />
      </div>

      <div class="text">
        <p>
          My name is Anuoluwapo Abolarin and i am a detail-oriented
          <b>front end developer</b>. I create captivating designs and curate
          interactive web experiences for amazing people using technologies such
          as HTML, CSS and Javascript / Typescript coupled with frameworks such
          as Bootstrap CSS, VueJS, NuxtJS, Vite, VueX, Pinia, etc. I'm also
          familiar with WordPress, Adobe xd and Figma as well which I use to
          create some of my designs. When i'm not working, i love to play games,
          edit videos, play some basketball and occasionally watch movies.
        </p>

        <a href="#" @click="lenis.scrollTo('#contact')"
          ><button type="button" class="btn"><span>GET IN TOUCH</span></button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import { lenis } from "../helpers/animations";
</script>

<style lang="scss" scoped></style>
