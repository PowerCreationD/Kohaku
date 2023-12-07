<script setup>
import workItems from '@/assets/data/work.js'
</script>

<template>
  <div class="work">
    <page-title>WORK</page-title>
    <type-filter
      v-model:checkedTypes="checkedTypes"
      v-model:isSelectAll="isSelectAll"
    ></type-filter>
    <workCardGrid :workItems="filterWorkItems"></workCardGrid>
  </div>
</template>

<style src="@/assets/scss/work.scss" scoped></style>
<style src="@/assets/scss/components/work/_workCard.scss" scoped></style>

<script>
import pageTitle from '@/components/global/PageTitle.vue'
import typeFilter from '@/components/work/TypeFilter.vue'
import workCardGrid from '@/components/work/WorkCardGrid.vue'

export default {
  components: { pageTitle, typeFilter, workCardGrid },
  data() {
    return {
      checkedTypes: [],
      isSelectAll: true,
      workItems: workItems
    }
  },
  methods: {
    goToPage(page) {
      if (!page) return
      this.$router.push({ name: 'WorkDetail', params: { project: page } })
    }
  },
  computed: {
    filterWorkItems() {
      if (this.isSelectAll) {
        return this.workItems
      } else {
        return this.workItems.filter((work) => this.checkedTypes.includes(work.type))
      }
    }
  }
}
</script>
