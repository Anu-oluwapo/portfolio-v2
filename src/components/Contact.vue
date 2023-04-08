<template>
  <section class="contact-section" id="contact">
    <div class="section">
      <div class="container">
        <div class="socials">
          <ul>
            <li>
              <a target="_blank" href="https://twitter.com/anu_ab_">TWITTER</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                />
              </svg>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/anuoluwapo-a-161299132/"
                >LINKEDIN</a
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                />
              </svg>
            </li>
            <li>
              <a target="_blank" href="https://github.com/Anu-oluwapo"
                >GITHUB</a
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                />
              </svg>
            </li>
            <!-- <li>
              <a target="_blank" href="https://github.com/Anu-oluwapo">Email</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                />
              </svg>
            </li> -->
          </ul>
        </div>

        <div class="footer">
          <div class="email-container">
            <div class="copy-text">
              <p>{{ text }}</p>
            </div>
            <div @click.prevent="copyEmail()" class="email">
              <h2>{{ email[0] }}</h2>
              <h2>{{ email[1] }}</h2>
            </div>
          </div>
          <div class="credits">
            <p>
              SITE DESIGN : <br /><a
                target="_blank"
                href="https://twitter.com/Emishonowayi"
                >EMISHO VICTOR</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <SectionHeader :text="'CONTACT'" />
  </section>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import { ref } from "vue";

const email = ref(["ABOLARIN.", "AANU@GMAIL.COM"]);
const text = ref("CLICK TO COPY EMAIL");

function copyEmail() {
  navigator.clipboard.writeText(
    (email.value[0] + email.value[1]).toLowerCase()
  );
  text.value = "EMAIL COPIED !";
  setTimeout(() => {
    text.value = "CLICK TO COPY EMAIL";
  }, 2000);
}
</script>

<style lang="scss" scoped></style>
