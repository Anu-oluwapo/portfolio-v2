<template>
  <div :class="[!playingSong && 'offline']" class="spotify-container">
    <p v-if="!playingSong">Anu Is Offline</p>
    <div @click="openTab(playingSong.songUrl)" class="playing-text" v-else>
      <span>Anu Is Listening To...</span>
      <p>{{ playingSong.title }}</p>
      <span>{{ playingSong.artist }}</span>
    </div>

    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          :fill="!playingSong ? '#ffffff33' : '#1CCC5B'"
          d="M0 0h24v24H0z"
        />
        <path
          fill-rule="nonzero"
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.55 2 12 2zm3.75 14.65c-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85-.2.3-.55.4-.85.2zm1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95 3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1s-.7.5-1.05.25zM6.3 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75z"
        />
      </g>
    </svg>
  </div>
</template>

<script setup>
import "../helpers/spotify";
import getNowPlayingItem from "../helpers/spotify";
import { onMounted, ref } from "vue";

const playingSong = ref(false);
function getPlayingSong() {
  getNowPlayingItem().then((result) => {
    playingSong.value = result;
  });
}

function openTab(link) {
  window.open(`${link}`, "_blank");
}

onMounted(() => {
  getPlayingSong();
  setInterval(getPlayingSong, 30000);
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.spotify-container {
  padding: 0.5rem 1rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 20rem;
  position: fixed;
  top: 90%;
  left: -15rem;
  background: black;
  transition: all 0.5s ease;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0.2;
  z-index: 3;

  &.offline {
    left: -8.5rem;
    width: 12.5rem;
    padding: 0.5rem;
  }
  &:hover {
    left: 0;
    opacity: 0.8;
  }
  p {
    color: $neutral2;
    font-size: 1.3rem;
  }

  .playing-text {
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    span {
      color: #1ccc5b;
      display: block;
      font-weight: 600;

      &:nth-child(3) {
        color: $neutral2;
      }
    }
    p {
      color: $white;
      font-size: 1.3rem;
    }
  }
}
</style>
