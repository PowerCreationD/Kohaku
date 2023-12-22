<template>
  <div class="work-card-grid">
    <workCard v-for="(work, index) in workItems" :key="index" :work="work"></workCard>
  </div>
</template>

<style src="@/assets/scss/work/_work-card-grid.scss" scoped></style>

<script>
import workCard from './WorkCard.vue'

export default {
  name: 'WorkCardGrid',
  components: { workCard },
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
