<script setup>
import imgAmber from '@/assets/image/global/image_amber-line.png'
</script>

<template>
  <div class="milestone">
    <h2 class="milestone__title font-1 scroll-animation-slide-and-fade-in">MILESTONE</h2>
    <img :src="imgAmber" alt="amber" class="amber" />
    <div class="milestone-wrap scroll-animation-slide-and-fade-in">
      <div class="phase" v-for="phase in milestone" :key="phase.year">
        <div class="phase__year-and-title">
          <p class="phase__year font-6">{{ phase.year }}</p>
          <p class="phase__title font-6">{{ phase.title }}</p>
        </div>
        <div class="phase__contents">
          <template v-for="event in phase.events" :key="event">
            <p class="phase__contents-event font-7">{{ event.name }}</p>
            <template v-if="event.detail"
              ><p class="phase__contents-detail font-7" v-for="item in event.detail" :key="item">
                {{ item }}
              </p></template
            >
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/scss/about/_milestone.scss" scoped></style>

<script>
import zh from '@/locale/zh'
import ja from '@/locale/ja'
import en from '@/locale/en'

export default {
  name: 'milestoneComponent',
  computed: {
    milestone() {
      if (this.$i18n.locale === 'zh') {
        return zh.about.milestone
      } else if (this.$i18n.locale === 'ja') {
        return ja.about.milestone
      } else {
        return en.about.milestone
      }
    }
  }
}
</script>
