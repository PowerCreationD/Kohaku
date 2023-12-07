<script setup>
defineProps({
  workItems: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div class="work-card-container">
    <div v-for="(work, index) in workItems" :key="index" class="work-card">
      <picture class="work-card__image-section" @click="goToPage(work.project)"
        ><img loading="lazy" class="work-card__image" :src="work.img" :alt="work.id"
      /></picture>
      <p class="font-7 work-card__name">{{ work.name }}</p>
    </div>
  </div>
</template>

<style src="@/assets/scss/components/work/_workCard.scss" scoped></style>

<script>
export default {
  name: 'WorkCardGrid',
  data() {
    return {}
  },
  methods: {
    goToPage(page) {
      if (!page) return
      this.$router.push({ name: 'WorkDetail', params: { project: page } })
    }
  }
}
</script>
