<template>
  <div class="work-detail">
    <WorkDetailHeader
      :name="workItem.name"
      :content="workItem.content"
      :keywords="workItem.keywords"
    ></WorkDetailHeader>
    <div
      class="work-detail-image-section"
      :class="`work-detail-image-section--layout-type-${workItem.layoutType}`"
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

    <button class="return-button button--primary" @click="returnPrevPage">
      {{ $t('global.buttons.back') }}
    </button>
  </div>
</template>

<style src="@/assets/scss/workDetail/work-detail.scss" scoped></style>

<script>
import WorkDetailHeader from '@/components/workDetail/WorkDetailHeader.vue'

import { importWorkFolderImages } from '@/library/importWorkFolderImages.js'
import { getWorkItem } from '@/library/getWorkItem.js'
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
      workItem: undefined
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
    returnPrevPage() {
      const fromRoute = this.$router.options.history.state.back
      if (fromRoute) {
        this.$router.go(-1)
      } else {
        this.$router.push('/work')
      }
    }
  },
  created() {
    this.workItem = getWorkItem(this.project)
    this.images = importWorkFolderImages(this.workItem.id)

    if (this.images[1].fileName.includes('web') || this.images[1].fileName.includes('app')) {
      this.images.splice(0, 1)
    }
  }
}
</script>
