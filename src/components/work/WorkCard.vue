<template>
  <div class="work-card" @click="goToPage(work)">
    <picture class="work-card__image-section"
      ><img loading="lazy" class="work-card__image" :src="work.mainImage" :alt="work.id"
    /></picture>
    <p class="font-7 work-card__name">{{ work.name }}</p>
  </div>
</template>

<style src="@/assets/scss/components/work/_workCard.scss" scoped></style>

<script>
export default {
  name: 'WorkCard',
  props: {
    work: {
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
