<template>
  <div class="home">
    <HomeTitleSection />
    <HomeAboutSection class="show-on-scroll" />
    <HomeServiceSection class="show-on-scroll" />
    <HomeSolutionSection class="show-on-scroll" />
    <HomeContactSection class="show-on-scroll" />
  </div>
</template>

<style src="@/assets/scss/home/home.scss"></style>

<script>
import HomeTitleSection from '@/components/home/HomeTitleSection.vue'
import HomeAboutSection from '@/components/home/HomeAboutSection.vue'
import HomeServiceSection from '@/components/home/HomeServiceSection.vue'
import HomeSolutionSection from '@/components/home/HomeSolutionSection.vue'
import HomeContactSection from '@/components/home/HomeContactSection.vue'

import '@/library/scrollAnimation.js'

export default {
  components: {
    HomeTitleSection,
    HomeAboutSection,
    HomeServiceSection,
    HomeSolutionSection,
    HomeContactSection
  }
}
</script>
