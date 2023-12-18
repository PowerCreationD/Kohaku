<script setup>
import waveImage from '@/assets/image/global/frame_gold-wave.png'
import imageCube from '@/assets/image/home/image_cube-white-background.png'
import imagePentagon from '@/assets/image/home/image_pentagon-white-background.png'
import imagKohakuAndSphere from '@/assets/image/home/image_kohaku-and-sphere.png'
</script>
<template>
  <div class="home__section">
    <div class="service-section">
      <div class="service-section__title title-section">
        <div class="title-section__image-and-title">
          <img class="title-section__image" :src="waveImage" alt="wave" />
          <h2 class="title-section__title font-1">SERVICE</h2>
        </div>
        <p class="title-section__text font-7">
          你的創新概念準備起跑了嗎？讓琥白幫助您的願景步伐穩健的實現！
        </p>
      </div>

      <div class="service-section__content content-section">
        <div v-for="item in steps" :key="item.step" class="content-section__container">
          <div class="content-section__image-and-line">
            <img :src="item.image" :alt="item.title" class="content-section__image" />
            <div v-if="item.step === 1" class="content-section__line"></div>
          </div>

          <div class="content-section__description">
            <span class="description-section__step font-3">STEP{{ item.step }}</span>
            <span class="description-section__title font-3">{{ item.title }}</span>
            <span class="description-section__text font-7">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/scss/home/_home-service-section.scss"></style>

<script>
export default {
  name: 'HomeServiceSection',
  data() {
    return {
      steps: [
        {
          step: 1,
          title: '需求研究',
          text: '首先深入了解需求，從場域、使用者與現實情境，找出問題核心！根據這些發現，為您量身打造解決方案。',
          image: imageCube
        },
        {
          step: 2,
          title: '概念設計',
          text: '進行腦力激盪，構建精彩的原型，接著持續調整與改良，確保這些點子能夠真正幫助您實現目標。',
          image: imagePentagon
        },
        {
          step: 3,
          title: '落地實現',
          text: '此刻，是時候付諸實踐了！我們整合數位技術，提供全端工程服務，確保每個細節，讓概念完美落地。',
          image: imagKohakuAndSphere
        }
      ]
    }
  }
}
</script>
