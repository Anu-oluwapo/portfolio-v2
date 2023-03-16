<template>
    <section class="about-section">
        <div class="section-header">
            <div class="content">
                <div><h1><span>ABOUT</span></h1> <Arrow class="arrow" color="#242424" /></div>
                <div><h1>ABOUT</h1> <Arrow class="arrow" color="white" /></div>
                <div><h1><span>ABOUT</span></h1> <Arrow class="arrow" color="#242424" /></div>
                <div><h1>ABOUT</h1> <Arrow class="arrow" color="white" /></div>
            </div>
            
        </div>
          <div class="container d-flex">
              
          </div>
      </section>
  </template>
  
  <script setup>
  import Arrow from '../assets/svg/arrow.vue'
  import { onMounted } from 'vue';

  onMounted(()=>{
  const content = document.querySelector('.section-header')
  const contentClone = document.querySelector('.content').cloneNode(true)

  content.append(contentClone)

  })
  


  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/variables.scss';

  </style>
  
