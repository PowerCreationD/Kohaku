<template>
  <router-view class="main-content" />
  <PageFooter />
  <PageHeader />
</template>

<script>
import PageHeader from './components/global/PageHeader.vue'
import PageFooter from './components/global/PageFooter.vue'

export default {
  components: { PageHeader, PageFooter }
}
</script>
