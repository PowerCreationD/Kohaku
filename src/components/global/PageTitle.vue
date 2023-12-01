<script setup>
import waveImage from '@/assets/image/global/frame_gold-wave.png'
</script>

<template>
  <div class="page-title">
    <div class="wave-and-title-container">
      <img :src="waveImage" alt="wave" class="wave-image" />
      <h1 class="page-title__name"><slot></slot></h1>
    </div>
    <div class="page-title__space"></div>
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

<style src="@/assets/scss/components/_pageTitle.scss" scoped></style>
