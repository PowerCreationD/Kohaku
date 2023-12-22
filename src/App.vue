<template>
  <router-view class="main-content" />
  <PageFooter />
  <PageHeader />
</template>

<style src="@/assets/scss/layout/_main-content.scss"></style>

<script>
import PageHeader from '@/components/layout/PageHeader.vue'
import PageFooter from '@/components/layout/PageFooter.vue'
import { reactive, onMounted, onBeforeUnmount } from 'vue'

export const mobileCheckSymbol = Symbol()

export default {
  components: { PageHeader, PageFooter },
  provide() {
    const isMobile = reactive({ value: window.innerWidth < 768 })

    const handleResize = () => {
      isMobile.value = window.innerWidth < 768
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      [mobileCheckSymbol]: isMobile
    }
  }
}
</script>
