<template>
  <div class="home">
    <HomeTitleSection />
    <HomeAboutSection class="show-on-scroll" />
    <HomeMethodsSection class="show-on-scroll" />
    <HomeServicesSection class="show-on-scroll" />
    <HomeContactSection class="show-on-scroll" />
  </div>
</template>

<style src="@/assets/scss/home/home.scss"></style>

<script>
import HomeTitleSection from '@/components/home/HomeTitleSection.vue'
import HomeAboutSection from '@/components/home/HomeAboutSection.vue'
import HomeMethodsSection from '@/components/home/HomeMethodsSection.vue'
import HomeServicesSection from '@/components/home/HomeServicesSection.vue'
import HomeContactSection from '@/components/home/HomeContactSection.vue'

import '@/library/scrollAnimation.js'

export default {
  components: {
    HomeTitleSection,
    HomeAboutSection,
    HomeMethodsSection,
    HomeServicesSection,
    HomeContactSection
  }
}
</script>
