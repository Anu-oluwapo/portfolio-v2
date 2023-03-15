<template>
  <div class="switch-icon">
    <div @click="active='sun'" :class="[active==='sun'&&'active']" class="sun"><img src="@/assets/sun.svg"/></div>
    <div @click="active='moon'" :class="[active==='moon'&&'active']" class="moon"><img src="@/assets/moon.svg"/></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let active = ref('moon')
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
    .active{
        background: $white;
        border-radius: 100px;
        align-items: center;
        cursor: default;
        
    }
}

</style>
