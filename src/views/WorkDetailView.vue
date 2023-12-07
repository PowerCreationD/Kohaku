<template>
  <div class="work-detail">
    <WorkDetailHeader
      :name="workInfo.name"
      :content="workInfo.content"
      :keywords="workInfo.keywords"
    ></WorkDetailHeader>
    <div
      class="work-detail-image-section"
      :class="`work-detail-image-section--layout-type-${workInfo.layoutType}`"
    >
      <picture
        v-for="img in images"
        :key="img.index"
        v-show="shouldShowImage(img.fileName)"
        class="work-detail-image-section__image-box"
      >
        <img
          class="work-detail-image-section__image"
          :src="img.path"
          :alt="img.index"
          loading="lazy"
        />
      </picture>
    </div>

    <button class="return-button button--primary" @click="returnWorkPage">
      {{ $t('global.buttons.back') }}
    </button>
  </div>
</template>

<style src="@/assets/scss/workDetail/work-detail.scss" scoped></style>

<script>
import WorkDetailHeader from '@/components/workDetail/WorkDetailHeader.vue'

import { importFolderImages } from '@/library/importFolderImages.js'
import { getWorkItemInfo } from '@/library/getWorkItemInfo.js'
import { mobileCheckSymbol } from '@/App.vue'

export default {
  props: {
    project: {
      type: String
    }
  },
  components: { WorkDetailHeader },
  inject: {
    mobileCheck: mobileCheckSymbol
  },
  data() {
    return {
      images: undefined,
      workInfo: undefined
    }
  },
  methods: {
    shouldShowImage(fileName) {
      if (!this.mobileCheck.value) {
        if (fileName.includes('web')) {
          return true
        } else if (fileName.includes('app')) {
          return false
        } else {
          return true
        }
      } else {
        if (fileName.includes('app')) {
          return true
        } else if (fileName.includes('web')) {
          return false
        } else {
          return true
        }
      }
    },
    returnWorkPage() {
      this.$router.push({ name: 'Work' })
    }
  },
  created() {
    this.workInfo = getWorkItemInfo(this.project)
    this.images = importFolderImages(this.workInfo.id)

    if (this.images[1].fileName.includes('web') || this.images[1].fileName.includes('app')) {
      this.images.splice(0, 1)
    }
  }
}
</script>
