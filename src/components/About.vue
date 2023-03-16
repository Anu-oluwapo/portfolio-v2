<template>
    <section class="about-section">
        <div class="section-header">
            <div class="content">
            <div><h1><span>ABOUT</span></h1> <Arrow class="arrow" color="#242424" /></div>
            <div><h1>ABOUT</h1> <Arrow class="arrow" color="white" /></div>
            <div><h1><span>ABOUT</span></h1> <Arrow class="arrow" color="#242424" /></div>
            <!-- <div><h1>ABOUT</h1> <Arrow class="arrow" color="white" /></div> -->
        </div>
        </div>
          <div class="container d-flex">
              
          </div>
      </section>
  </template>
  
  <script setup>
  import Arrow from '../assets/svg/arrow.vue'
  import { onMounted } from 'vue';
//   import gsap from 'gsap'

//   const sectionHeaderTl = gsap.timeline({ 
//     yoyo: false,
//     repeat: -1,
    
//   })

  onMounted(()=>{
    // sectionHeaderTl.fromTo('.section-header div', { x:'-100vw',duration: 5 }, { x:'-100', duration: 5})
  })
  


  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/variables.scss';

  </style>
  
