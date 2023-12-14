<script setup></script>

<template>
  <div class="home">
    <HomeTitleSection />
    <HomeAboutSection />
  </div>
</template>

<style src="../assets/scss/home/home.scss"></style>

<script>
import HomeTitleSection from '../components/home/HomeTitleSection.vue'
import HomeAboutSection from '../components/home/HomeAboutSection.vue'

export default {
  components: {
    HomeTitleSection,
    HomeAboutSection
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
