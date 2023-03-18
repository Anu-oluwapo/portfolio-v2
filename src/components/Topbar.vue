<template>
  <header>
        <div class="header container">
            <div class="logo">
                <p>ANUOLUWAPO.</p>
            </div>

            <div class="controls">
            <div class="nav-links">
                <a href="#work" class="nav-link"> WORK</a>
                <a href="#skills" class="nav-link"> SKILLS</a>
                <a href="#contact" class="nav-link"> CONTACT</a>
            </div>

            <div class="header-buttons">
                <button type="button" class="btn btn_download"><span>DOWNLOAD RESUME</span></button>
            </div>

            <div @click="toggleLight()" class="switch">
                <Switch/>
            </div>
        </div>
        </div>
    </header>
</template>

<script setup>
import Switch from './icons/Switch.vue';
import { onMounted } from 'vue';

function toggleLight(){
    document.querySelector('body').classList.toggle('light')
}
onMounted(()=>{
    
})
</script>

<style>

</style>