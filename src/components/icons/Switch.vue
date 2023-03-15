<template>
  <div @click="active=!active" class="switch-icon">
    <div class="sun"><img src="@/assets/sun.svg"/></div>
    <div class="moon"><img src="@/assets/moon.svg"/></div>
    <div class="ball" :class="[active&&'active']"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let active = ref(true)
</script>


<style lang="scss" scoped>
@import '@/assets/variables.scss';

.switch-icon{
    border: 1.5px solid $neutral;
    border-radius: 100px;
    display: flex;

    div{
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        width: 3rem;
        cursor: pointer;
        
        img{
            justify-content: center;
        }
    }

    .ball{
      background: $white;
      border-radius: 100px;
      align-items: center;
      cursor: default;
      transition: all 0.3s ease;
      position: absolute;
      z-index: -1;
    }
    .active{ 
      transform: translateX(40px);
    }
}

</style>
