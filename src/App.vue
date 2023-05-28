<template>
  <PageHeader />
  <div class="container--body">
    <router-view />
  </div>
  <PageFooter />
</template>

<script>
import PageHeader from './components/global/PageHeader.vue'
import PageFooter from './components/global/PageFooter.vue'

export default {
  components: { PageHeader, PageFooter }
}
</script>
