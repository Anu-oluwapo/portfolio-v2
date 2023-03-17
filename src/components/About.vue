<template>
    <section class="about-section">
            <SectionHeader :text="'ABOUT'"/>
          <div class="container d-flex">
            <div class="image-border">
            </div>
            <img src="/images/person.png" />
            <div class="text">
                <p>My name is Anuoluwapo Abolarin and i am a detail-oriented <b>front end developer</b>. 
                    I create captivating designs and curate interactive web experiences for amazing 
                    people using technologies such as HTML, CSS and Javascript / Typescript coupled 
                    with frameworks such as Bootstrap CSS, VueJS, NuxtJS, Vite, VueX, Pinia, etc. 
                    I'm also familiar with WordPress, Adobe xd and Figma as well which I use to 
                    create some of my designs. When i'm not working, i love to play games, 
                    edit videos, play some basketball and occasionally watch movies. </p>

                    <button type="button" class="btn"><span>GET IN TOUCH</span></button>
            </div>
              
          </div>
      </section>
  </template>
  
  <script setup>
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
  
