<template>
  <section class="work-section" id="work">
    <SectionHeader :text="'WORK'" />
    <div class="">
      <div class="projects">
        <div class="project">
          <div class="container">
            <div class="dot"></div>
            <h3>Zenpad DeFi</h3>
          </div>
          <div class="container">
            <div class="skills">
              <span style="--i: 0">HTML</span>
              <span style="--i: 1">CSS</span>
              <span style="--i: 2">JAVASCRIPT</span>
            </div>
          </div>
          <div style="background-color: #111119" class="image">
            <a target="_blank" href="https://zenpad.netlify.app">
              <img src="/images/zenpad.png" />
            </a>
            <div class="cursor"><p>View Site</p></div>
          </div>
        </div>
        <div class="project">
          <div class="container">
            <div class="dot"></div>
            <h3>VR Classroom</h3>
          </div>
          <div class="container">
            <div class="skills">
              <span style="--i: 0">HTML</span>
              <span style="--i: 1">CSS</span>
              <span style="--i: 2">JAVASCRIPT</span>
              <span style="--i: 3">GSAP</span>
            </div>
          </div>
          <div class="image">
            <a target="_blank" href="https://vr-classroom.netlify.app"
              ><img src="/images/classroom.png" />
            </a>
          </div>
        </div>
        <div class="project">
          <div class="container">
            <div class="dot"></div>
            <h3>Portfolio ('23)</h3>
          </div>
          <div class="container">
            <div class="skills">
              <span style="--i: 0">HTML</span>
              <span style="--i: 1">SCSS</span>
              <span style="--i: 3">VUE JS</span>
              <span style="--i: 4">GSAP</span>
              <span style="--i: 5">LENIS</span>
            </div>
          </div>
          <div style="background-color: #0d0d0d" class="image">
            <a target="_blank" href="https://anuoluwapo.netlify.app"
              ><img src="/images/portfolio.png"
            /></a>
          </div>
        </div>
        <div class="project">
          <div class="container">
            <div class="dot"></div>
            <h3>Sabali Health</h3>
          </div>
          <div class="container">
            <div class="skills">
              <span style="--i: 0">HTML</span>
              <span style="--i: 1">CSS</span>
              <span style="--i: 2">JAVASCRIPT</span>
            </div>
          </div>
          <div style="background-color: #0d0d0d" class="image">
            <a target="_blank" href="https://sabali-health.netlify.app">
              <img src="/images/person.png" />
            </a>
          </div>
        </div>
        <div class="project">
          <div class="container">
            <div class="dot"></div>
            <h3>Tranzaqt</h3>
          </div>
          <div class="container">
            <div class="skills">
              <span style="--i: 0">HTML</span>
              <span style="--i: 1">CSS</span>
              <span style="--i: 2">JAVASCRIPT</span>
            </div>
          </div>
          <div class="image">
            <a target="_blank" href="https://tranzaqt.netlify.app"
              ><img src="/images/tranzaqt.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
</script>

<style lang="scss" scoped></style>
