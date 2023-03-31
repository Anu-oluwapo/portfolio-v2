<template>
  <div
    v-if="orientation == 'vertical'"
    class="section-header vertical"
    :id="'section-' + text"
  >
    <div class="content" :id="'content-' + text">
      <div>
        <h1>
          <span>{{ text }}</span>
        </h1>
        <Arrow class="arrow" color="#242424" />
      </div>
      <div>
        <h1>{{ text }}</h1>
        <Arrow class="arrow" color="white" />
      </div>
      <div>
        <h1>
          <span>{{ text }}</span>
        </h1>
        <Arrow class="arrow" color="#242424" />
      </div>
      <div>
        <h1>{{ text }}</h1>
        <Arrow class="arrow" color="white" />
      </div>
    </div>
  </div>

  <div v-else class="section-header" :id="'section-' + text">
    <div class="content" :id="'content-' + text">
      <div>
        <h1>
          <span>{{ text }}</span>
        </h1>
        <Arrow class="arrow" color="#242424" />
      </div>
      <div>
        <h1>{{ text }}</h1>
        <Arrow class="arrow" color="white" />
      </div>
      <div>
        <h1>
          <span>{{ text }}</span>
        </h1>
        <Arrow class="arrow" color="#242424" />
      </div>
      <div>
        <h1>{{ text }}</h1>
        <Arrow class="arrow" color="white" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Arrow from "../assets/svg/arrow.vue";
import { onMounted } from "vue";

const props = defineProps({
  text: String,
  orientation: String,
});

onMounted(() => {
  const content = document.querySelector("#section-" + props.text);
  const contentClone = document
    .querySelector("#content-" + props.text)
    .cloneNode(true);

  content.append(contentClone);
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
</style>
