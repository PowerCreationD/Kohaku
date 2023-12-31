<script setup>
import waveImage from '@/assets/image/global/frame_gold-wave.png'
import grassAndAmber from '@/assets/image/global/background_grass-and-amber.jpg'
import amberImage from '@/assets/image/global/image_amber.png'
</script>
<template>
  <div class="home__section about-section">
    <div class="about-section__container words-section">
      <p class="font-1 words-section__title scroll-animation-slide-and-fade-in">{{ $t('home.about.name') }}</p>
      <p class="font-1 words-section__title scroll-animation-slide-and-fade-in">{{ $t('home.about.brand') }}</p>
      <img class="words-section__wave-image" :src="waveImage" alt="wave" />
      <article class="words-section__text">
        <p class="font-7 scroll-animation-slide-and-fade-in">{{ $t('home.about.text') }}</p>
      </article>
      <div class="words-section__background">
        <img
          class="words-section__background-amber words-section__background-amber--left"
          :src="amberImage"
          alt="kohaku"
        />
        <img
          class="words-section__background-amber words-section__background-amber--right"
          :src="amberImage"
          alt="kohaku"
        />
      </div>
    </div>
    <div class="about-section__container image-section">
      <img class="image-section__background-image" :src="grassAndAmber" alt="kohaku" />
    </div>
  </div>
</template>

<style src="@/assets/scss/home/_home-about-section.scss"></style>

<script>
export default {
  name: 'HomeAboutSection'
}
</script>
