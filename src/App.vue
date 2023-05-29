<template>
  <PageHeader />
  <router-view class="container--body" />
  <PageFooter />
</template>

<script>
import PageHeader from './components/global/PageHeader.vue'
import PageFooter from './components/global/PageFooter.vue'

export default {
  components: { PageHeader, PageFooter }
}
</script>
