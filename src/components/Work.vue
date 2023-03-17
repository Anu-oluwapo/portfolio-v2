<template>
    <section class="work-section">
        <SectionHeader :text="'WORK'"/>            
          <div class="container d-flex">
           
          </div>
      </section>
  </template>
  
  <script setup>
  import Arrow from '../assets/svg/arrow.vue'
  import { onMounted } from 'vue';
import SectionHeader from './SectionHeader.vue';

  onMounted(()=>{
  const content = document.querySelector('.section-header')
  const contentClone = document.querySelector('.content').cloneNode(true)

  content.append(contentClone)

  })
  


  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/variables.scss';

  </style>
  
