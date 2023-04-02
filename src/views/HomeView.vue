<template>
  <main>
    <Preloader />
    <Topbar />
    <Hero />
    <About />
    <Work />
    <Skills />
    <Contact />
    <Spotify />
  </main>
</template>

<script setup>
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Hero from "../components/Hero.vue";
import Preloader from "../components/Preloader.vue";
import Skills from "../components/Skills.vue";
import Spotify from "../components/Spotify.vue";
import Topbar from "../components/Topbar.vue";
import Work from "../components/Work.vue";
</script>
