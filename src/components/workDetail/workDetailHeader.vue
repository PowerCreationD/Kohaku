<script setup>
import noiseLight from '@/assets/image/global/accent_noise-light.png'
</script>
<template>
  <div class="work-detail-header-section">
    <div class="work-detail-header-section__banner-section">
      <div class="work-detail-header-section__image-box">
        <img class="work-detail-header-section__image" :src="image" :alt="name" />
        <img class="work-detail-header-section__light" :src="noiseLight" alt="">
      </div>

      <div class="work-detail-header-section__title-section">
        <p class="font-3">WORK</p>
        <p class="font-2 work-detail-header-section__name">{{ name }}</p>
        <p class="font-6 work-detail-header-section__title">{{ title }}</p>
      </div>
    </div>

    <div class="work-detail-header-section__content">
      <div class="work-detail-header-section__info">
        <div class="work-detail-header-section__raw">
          <span class="work-detail-header-section__raw-label font-6">Client</span>
          <div class="work-detail-header-section__raw-line"></div>
          <p class="work-detail-header-section__raw-text font-7">西日本JR</p>
        </div>

        <div class="work-detail-header-section__raw">
          <span class="work-detail-header-section__raw-label font-6">Category</span>
          <div class="work-detail-header-section__raw-line"></div>
          <p class="work-detail-header-section__raw-text font-7">商業設計與原型製作</p>
        </div>

        <div class="work-detail-header-section__raw">
          <span class="work-detail-header-section__raw-label font-6">Concept</span>
          <div class="work-detail-header-section__raw-line"></div>
          <p class="work-detail-header-section__raw-text font-7">{{ title }}</p>
        </div>
      </div>

      <div class="work-detail-header-section__line"></div>

      <div class="work-detail-header-section__desc">
        <p class="work-detail-header-section__text font-7">{{ content }}</p>
        <div class="work-detail-header-section__keywords-container">
          <span
            v-for="item in keywords"
            :key="item"
            class="work-detail-header-section__keyword font-6"
            >#{{ item }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/scss/workDetail/_work-detail-header.scss" scoped></style>

<script>
export default {
  name: 'WorkDetailHeader',
  props: {
    title: { type: String },
    name: { type: String },
    type: { type: String },
    content: { type: String },
    keywords: { type: Array },
    image: { type: String }
  }
}
</script>
