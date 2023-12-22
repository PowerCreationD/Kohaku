<script setup>
import imgAmber from '@/assets/image/global/image_amber-line.png'
</script>

<template>
  <div class="milestone">
    <h2 class="milestone__title font-1">MILESTONE</h2>
    <img :src="imgAmber" alt="amber" class="amber" />
    <div class="milestone-wrap">
      <div class="phase" v-for="item in milestone" :key="item.key">
        <div class="phase__date-and-thing">
          <p class="phase__date font-7">{{ item.date }}</p>
          <div class="phase__things">
            <p class="phase__thing font-7" v-for="thing in item.content" :key="thing">
              {{ thing }}
            </p>
          </div>
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
