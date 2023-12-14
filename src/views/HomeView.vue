<script setup></script>

<template>
  <div class="home">
    <HomeTitleSection />
  </div>
</template>

<script>
import MoreArrowIcon from '@/components/global/MoreArrowIcon.vue'
import StepLineArrowTipIcon from '@/components/global/StepLineArrowTipIcon.vue'
import CategoryButtonArrowTipIcon from '@/components/global/CategoryButtonArrowTipIcon.vue'
import LeftArrowIcon from '@/components/global/LeftArrowIcon.vue'
import RightArrowIcon from '@/components/global/RightArrowIcon.vue'
import DropdownComponent from '@/components/global/DropdownComponent.vue'

import HomeTitleSection from '../components/home/HomeTitleSection.vue'

export default {
  components: {
    MoreArrowIcon,
    StepLineArrowTipIcon,
    CategoryButtonArrowTipIcon,
    LeftArrowIcon,
    RightArrowIcon,
    DropdownComponent,
    HomeTitleSection
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
