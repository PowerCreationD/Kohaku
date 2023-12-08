<script setup>
import waveImage from '@/assets/image/global/frame_gold-wave.png'
</script>

<template>
  <div class="intro-section">
    <img class="intro-section__items-container-wave-image" :src="waveImage" alt="waveImage" />
    <div class="intro-section__items-container">
      <div v-for="item in serviceItem" :key="item.title" class="item-box">
        <h3 class="item-box__title font-3">{{ item.title }}</h3>
        <ul class="item-box__list">
          <li v-for="detailItem in item.list" :key="detailItem" class="item-box__detail font-7">
            {{ detailItem }}
          </li>
        </ul>
        <picture class="item-box__icon-box">
          <img class="item-box__icon-image" :src="item.icon" alt="" />
        </picture>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/scss/services/_services-items-section.scss" scoped></style>

<script>
export default {
  props: {
    serviceItem: {
      type: Object,
      default: null
    }
  }
}
</script>
