<template>
  <div class="work-example-section">
    <h3 class="work-example-section__title font-1">{{ $t('services.example_title') }}</h3>
    <div class="work-example-section__container">
      <workCard v-for="(work, index) in workExample" :key="index" :work="work"></workCard>
    </div>
    <div class="button-section">
      <button
        class="button-section__see-more-button button--tertiary"
        @click="goToWork()"
        aria-label="Go To Work"
      >
        {{ $t('global.buttons.view_more') }}
      </button>
    </div>
  </div>
</template>

<style src="@/assets/scss/services/_work-example-section.scss" scoped></style>

<script>
import workCard from '@/components/work/WorkCard.vue'

export default {
  components: { workCard },
  props: {
    workExample: {
      type: Object,
      default: null
    },
    workType: {
      type: String,
      default: null
    }
  },
  methods: {
    goToWork() {
      this.$router.push({
        name: 'Work',
        query: { types: this.workType }
      })
    }
  }
}
</script>
