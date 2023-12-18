<script setup></script>

<template>
  <div class="home">
    <HomeTitleSection />
    <HomeAboutSection />
    <HomeServiceSection />
  </div>
</template>

<style src="../assets/scss/home/home.scss"></style>

<script>
import HomeTitleSection from '../components/home/HomeTitleSection.vue'
import HomeAboutSection from '../components/home/HomeAboutSection.vue'
import HomeServiceSection from '../components/home/HomeServiceSection.vue'

export default {
  components: {
    HomeTitleSection,
    HomeAboutSection,
    HomeServiceSection
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  beforeUnmount() {},
  methods: {}
}
</script>
