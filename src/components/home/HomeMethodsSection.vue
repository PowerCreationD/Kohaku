<script setup>
import waveImage from '@/assets/image/global/frame_gold-wave.png'
import imageCube from '@/assets/image/home/image_cube-white-background.png'
import imagePentagon from '@/assets/image/home/image_pentagon-white-background.png'
import imagKohakuAndSphere from '@/assets/image/home/image_kohaku-and-sphere.png'
</script>
<template>
  <div class="home__section methods-section">
    <div class="methods-section__title title-section">
      <div class="title-section__image-and-title">
        <img class="title-section__image" :src="waveImage" alt="wave" />
        <h2 class="title-section__title font-1 scroll-animation-slide-and-fade-in">METHODS</h2>
      </div>
      <p class="title-section__text font-7 scroll-animation-slide-and-fade-in">
        {{ $t('home.methods.text') }}
      </p>
    </div>

    <div class="methods-section__content content-section">
      <div v-for="item in steps" :key="item.step" class="content-section__container">
        <div class="content-section__image-and-line">
          <img :src="item.image" :alt="item.title" class="content-section__image" />
          <div v-if="item.step === 1" class="content-section__line"></div>
        </div>

        <div class="content-section__description scroll-animation-slide-and-fade-in">
          <span class="description-section__step font-3">STEP{{ item.step }}</span>
          <span class="description-section__title font-3">{{ item.title }}</span>
          <span class="description-section__text font-7">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/scss/home/_home-methods-section.scss"></style>

<script>
export default {
  name: 'HomeMethodsSection',
  data() {
    return {
      steps: [
        {
          step: 1,
          title: this.$t('home.methods.steps[0].title'),
          text: this.$t('home.methods.steps[0].text'),
          image: imageCube
        },
        {
          step: 2,
          title: this.$t('home.methods.steps[1].title'),
          text: this.$t('home.methods.steps[1].text'),
          image: imagePentagon
        },
        {
          step: 3,
          title: this.$t('home.methods.steps[2].title'),
          text: this.$t('home.methods.steps[2].text'),
          image: imagKohakuAndSphere
        }
      ]
    }
  }
}
</script>
