<template>
  <div class="milestone">
    <h2 class="milestone__title">MILESTONE</h2>
    <div class="milestone-wrap">
      <div class="phase" v-for="item in milestone" :key="item.key">
        <p class="phase__date">{{ item.date }}</p>
        <div class="phase__things">
          <p class="phase__thing" v-for="thing in item.content" :key="thing">{{ thing }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/scss/components/_milestone.scss" scoped></style>

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
