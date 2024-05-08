<script setup>
import noiseLight from '@/assets/image/global/accent_noise-light.png'
</script>
<template>
  <div class="work-detail-header-section">
    <div class="work-detail-header-section__banner-section">
      <div class="work-detail-header-section__image-box">
        <img class="work-detail-header-section__image" :src="image" :alt="name" />
        <img class="work-detail-header-section__light" :src="noiseLight" alt="" />
      </div>

      <div class="work-detail-header-section__title-section">
        <p class="font-3">WORK</p>
        <p class="font-2 work-detail-header-section__name">{{ name }}</p>
        <p class="font-6 work-detail-header-section__title">{{ concept }}</p>
      </div>
    </div>

    <div class="work-detail-header-section__content">
      <div class="work-detail-header-section__info">
        <div v-if="this.$i18n.locale === 'zh'" class="work-detail-header-section__raw">
          <span class="work-detail-header-section__raw-label font-6">Collaborator</span>
          <div class="work-detail-header-section__raw-line"></div>
          <div class="work-detail-header-section__raw-container">
            <p
              class="work-detail-header-section__raw-text font-7"
              v-for="item in collaborator"
              :key="item"
            >
              {{ item }}
            </p>
          </div>
        </div>

        <div class="work-detail-header-section__raw">
          <span class="work-detail-header-section__raw-label font-6">Category</span>
          <div class="work-detail-header-section__raw-line"></div>
          <p class="work-detail-header-section__raw-text font-7">{{ typeText(type) }}</p>
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
    concept: { type: String },
    name: { type: String },
    collaborator: { type: String },
    type: { type: String },
    content: { type: String },
    keywords: { type: Array },
    image: { type: String }
  },
  methods: {
    typeText(id) {
      const types = [
        { id: 'system', text: this.$t('work.project_types.system') },
        { id: 'design', text: this.$t('work.project_types.design') },
        { id: 'content', text: this.$t('work.project_types.content') }
      ]
      const type = types.find((item) => item.id === id)
      return type ? type.text : ''
    }
  }
}
</script>
