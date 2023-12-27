<script setup>
import waveImage from '@/assets/image/global/frame_gold-wave.png'
</script>

<template>
  <div class="page-title-section">
    <div class="page-title-section__wave-and-title">
      <img :src="waveImage" alt="wave" class="page-title-section__wave" />
      <h1 class="page-title-section__title"><slot></slot></h1>
    </div>
    <div class="page-title-section__space animation-reveal-from-left"></div>
  </div>
</template>

<script>
export default {
  name: 'pageTitleComponent',
  data() {
    return {}
  }
}
</script>
