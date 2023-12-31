<template>
  <div class="work-detail-header-section">
    <div class="work-detail-header-section__title">
      <span class="font-3">{{ name }}</span>
    </div>
    <div class="work-detail-header-section__content">
      <p class="work-detail-header-section__text font-7">{{ content }}</p>
    </div>
    <div class="work-detail-header-section__keywords-container">
      <span v-for="item in keywords" :key="item" class="work-detail-header-section__keyword font-6"
        >#{{ item }}</span
      >
    </div>
  </div>
</template>

<style src="@/assets/scss/workDetail/_work-detail-header.scss" scoped></style>

<script>
export default {
  name: 'WorkDetailHeader',
  props: {
    name: { type: String },
    content: { type: String },
    keywords: { type: Array }
  }
}
</script>
