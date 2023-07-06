<template>
  <section class="work-section" id="work">
    <SectionHeader :text="'WORK'" />
    <div class="">
      <div class="projects">
        <div
          @click="openTab('https://og-clothier.netlify.app/')"
          class="project"
        >
          <div class="container">
            <div class="dot"></div>
            <h3>OG-Clothiers</h3>
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
            <a
              name="project-ogClothiers"
              target="_blank"
              href="https://vr-classroom.netlify.app"
              ><img alt="Project OG Clothiers" src="/images/OG-Clothiers.png" />
            </a>
          </div>
        </div>

        <div @click="openTab('https://zenpad.netlify.app')" class="project">
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
            <a
              name="project-zenpad"
              target="_blank"
              href="https://zenpad.netlify.app"
            >
              <img alt="Project Zenpad" src="/images/zenpad.png" />
            </a>
            <div class="cursor"><p>View Site</p></div>
          </div>
        </div>

        <div @click="openTab('https://anuoluwapo.xyz')" class="project">
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
              <!-- <span style="--i: 5">LENIS</span> -->
            </div>
          </div>
          <div style="background-color: #131313" class="image">
            <a
              name="project-portfolio"
              target="_blank"
              href="https://anuoluwapo.xyz"
              ><img alt="Project Portfolio" src="/images/portfolio.png"
            /></a>
          </div>
        </div>
        <div
          @click="openTab('https://vr-classroom.netlify.app')"
          class="project"
        >
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
            <a
              name="project-vrClassroom"
              target="_blank"
              href="https://vr-classroom.netlify.app"
              ><img alt="Project VR Classroom" src="/images/classroom.png" />
            </a>
          </div>
        </div>

        <div
          @click="openTab('https://sabalihealth.netlify.app')"
          v-show="more"
          class="project more"
        >
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
          <div style="background-color: white" class="image">
            <a
              name="project-sabali"
              target="_blank"
              href="https://sabalihealth.netlify.app"
            >
              <img alt="Project Sabali Health" src="/images/sabali.png" />
            </a>
          </div>
        </div>
        <div
          @click="openTab('https://tranzaqt.netlify.app')"
          v-show="more"
          class="project more"
        >
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
            <a
              name="project-tranzaqt"
              target="_blank"
              href="https://tranzaqt.netlify.app"
              ><img alt="Project Tranzaqt" src="/images/tranzaqt.png" />
            </a>
          </div>
        </div>

        <div @click="toggleLoadMore()" class="load-more">
          <p>SEE MORE</p>
          <div class="plus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { start } from "repl";
gsap.registerPlugin(ScrollTrigger);

let more = ref(false);

const mediaQuery = window.matchMedia("(max-width: 800px)");
function handleTabletChange(e) {
  e.matches ? (more.value = false) : (more.value = true);
}

// Register event listener
mediaQuery.addEventListener("change", handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

function openTab(link) {
  window.open(`${link}`, "_blank");
}

function toggleLoadMore() {
  more.value = !more.value;
  more.value
    ? (document.querySelector(".load-more p").innerHTML = "SEE LESS")
    : (document.querySelector(".load-more p").innerHTML = "SEE MORE");

  gsap.to(".projects", {
    height: "auto",
    duration: 2,
  });
}

onMounted(() => {
  gsap.set(".projects .project", {
    y: "50%",
    zIndex: 1,
    opacity: 0,
  });
  // const workTl = gsap.timeline({});

  gsap.to(".projects .project", {
    y: "0%",
    stagger: {
      amount: 1,
    },
    opacity: 1,
    scrollTrigger: {
      trigger: ".projects .project",
      start: "top bottom-=100",
      end: "bottom top+=300",
      scrub: true,
    },
  });
});
</script>

<style lang="scss" scoped></style>
