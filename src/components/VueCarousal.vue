<script setup>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide,  Navigation } from 'vue3-carousel';

// Carousel configuration
const config = {
  itemsToShow: 1,
  snapAlign: 'center',

  autoplay: 2000,
  wrapAround: true,
  pauseAutoplayOnHover: true,

  // 'breakpointMode' determines how the carousel breakpoints are calculated
  // Acceptable values: 'viewport' (default) | 'carousel'
  // 'viewport' - breakpoints are based on the viewport width
  // 'carousel' - breakpoints are based on the carousel width
  breakpointMode: 'carousel',

  // Breakpoints are mobile-first
  // Any settings not specified will fall back to the carousel's default settings
  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    // 400px and up
    400: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
    // 500px and up
    500: {
      itemsToShow: 4,
      gap:5,
      snapAlign: 'start',
    },
  },
};
const images = ['slide 1', 'slide 2', 'slide 3', 'slide 4', 'slide 5', 'slide 6', 'slide 7', 'slide 8', 'slide 9']

</script>

<template>
  <!-- Resizable container for testing 'carousel' breakpointMode -->
  <!-- Drag the right edge to adjust the width and see the breakpoints change -->
  <div class="carousel__wrapper px-5">
    <Carousel v-bind="config">
      <Slide v-for="slide in images" :key="slide">
        <div class="carousel__item text-light w-100"> {{ slide }}</div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style>
    .carousel__item{
        background-color: blueviolet;
        height: 200px;
        border-radius: 8px;
    }
</style>
