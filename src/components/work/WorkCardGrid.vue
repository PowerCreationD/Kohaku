<template>
  <div class="work-card-container">
    <div v-for="(work, index) in workItems" :key="index" class="work-card" @click="goToPage(work)">
      <picture class="work-card__image-section"
        ><img loading="lazy" class="work-card__image" :src="work.mainImage" :alt="work.id"
      /></picture>
      <p class="font-7 work-card__name">{{ work.name }}</p>
    </div>
  </div>
</template>

<style src="@/assets/scss/components/work/_workCard.scss" scoped></style>

<script>
export default {
  name: 'WorkCardGrid',
  props: {
    workItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    goToPage(work) {
      if (!work.project) return
      this.$router.push({
        name: 'WorkDetail',
        params: { project: work.project }
      })
    }
  }
}
</script>
