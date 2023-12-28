<script setup>
import mainImage1 from '@/assets/image/work/content/sustainable-agri-mover/0.jpg'
import mainImage2 from '@/assets/image/work/content/tech-agri-workshop/0.jpg'
import mainImage3 from '@/assets/image/work/content/lathe-tech-workshop/0.jpg'
import mainImage4 from '@/assets/image/work/content/digital-craft-platform/0.png'
import mainImage5 from '@/assets/image/work/content/ceatec-agri-week/0.jpg'
import mainImage6 from '@/assets/image/work/content/supermarket-japan-station/0.jpg'
import mainImage7 from '@/assets/image/work/content/pingtung-pineapple-export/0.jpg'
import mainImage8 from '@/assets/image/work/design/mu-maison/0.png'
import mainImage9 from '@/assets/image/work/design/recycled-pottery-furniture/0.jpg'
import mainImage10 from '@/assets/image/work/design/woodworking-craft-tool-guide/0.jpg'
import mainImage11 from '@/assets/image/work/design/power-creation-business-card/0.jpg'
import mainImage12 from '@/assets/image/work/design/japan-gov-business-card/0.jpg'
import mainImage13 from '@/assets/image/work/design/breakfast-nightshop-branding/0.jpg'
import mainImage14 from '@/assets/image/work/design/leek-kimchi-packaging/0.jpg'
import mainImage15 from '@/assets/image/work/system/japan-agri-ecom-logistics/0.jpg'
import mainImage16 from '@/assets/image/work/system/auto-robot-control-platform/0.jpg'
import mainImage17 from '@/assets/image/work/system/koko-bot/0.jpg'
import mainImage18 from '@/assets/image/work/system/koko-scale/0.jpg'
import mainImage19 from '@/assets/image/work/design/kohaku-business-card/0.jpg'
</script>

<template>
  <div class="work">
    <page-title>WORK</page-title>
    <type-filter
      v-model:checkedTypes="checkedTypes"
      v-model:isSelectAll="isSelectAll"
    ></type-filter>
    <workCardGrid :workItems="filterWorkItems"></workCardGrid>
  </div>
</template>

<style src="@/assets/scss/work/work.scss" scoped></style>

<script>
import pageTitle from '@/components/global/PageTitle.vue'
import typeFilter from '@/components/work/TypeFilter.vue'
import workCardGrid from '@/components/work/WorkCardGrid.vue'

export default {
  components: { pageTitle, typeFilter, workCardGrid },
  data() {
    return {
      checkedTypes: [],
      isSelectAll: true,
      workItems: [
        {
          id: 1,
          type: 'content',
          project: 'sustainable-agri-mover',
          mainImage: mainImage1,
          name: this.$t('work.projects[1].name'),
          layoutType: 1,
          content: this.$t('work.projects[1].content'),
          keywords: [
            this.$t('work.projects[1].keywords[0]'),
            this.$t('work.projects[1].keywords[1]'),
            this.$t('work.projects[1].keywords[2]')
          ]
        },
        {
          id: 2,
          type: 'content',
          project: 'tech-agri-workshop',
          mainImage: mainImage2,
          name: this.$t('work.projects[2].name'),
          layoutType: 2,
          content: this.$t('work.projects[2].content'),
          keywords: [
            this.$t('work.projects[2].keywords[0]'),
            this.$t('work.projects[2].keywords[1]'),
            this.$t('work.projects[2].keywords[2]'),
            this.$t('work.projects[2].keywords[3]')
          ]
        },
        {
          id: 3,
          type: 'content',
          project: 'lathe-tech-workshop',
          mainImage: mainImage3,
          name: this.$t('work.projects[3].name'),
          layoutType: 1,
          content: this.$t('work.projects[3].content'),
          keywords: [
            this.$t('work.projects[3].keywords[0]'),
            this.$t('work.projects[3].keywords[1]'),
            this.$t('work.projects[3].keywords[2]')
          ]
        },
        {
          id: 4,
          type: 'content',
          project: 'digital-craft-platform',
          mainImage: mainImage4,
          name: this.$t('work.projects[4].name'),
          layoutType: 3,
          content: this.$t('work.projects[4].content'),
          keywords: [
            this.$t('work.projects[4].keywords[0]'),
            this.$t('work.projects[4].keywords[1]'),
            this.$t('work.projects[4].keywords[2]'),
            this.$t('work.projects[4].keywords[3]')
          ]
        },
        {
          id: 5,
          type: 'content',
          project: 'ceatec-agri-week',
          mainImage: mainImage5,
          name: this.$t('work.projects[5].name'),
          layoutType: 2,
          content: this.$t('work.projects[5].content'),
          keywords: [
            this.$t('work.projects[5].keywords[0]'),
            this.$t('work.projects[5].keywords[1]'),
            this.$t('work.projects[5].keywords[2]')
          ]
        },
        {
          id: 6,
          type: 'content',
          project: 'supermarket-japan-station',
          mainImage: mainImage6,
          name: this.$t('work.projects[6].name'),
          layoutType: 4,
          content: this.$t('work.projects[6].content'),
          keywords: [
            this.$t('work.projects[6].keywords[0]'),
            this.$t('work.projects[6].keywords[1]')
          ]
        },
        {
          id: 7,
          type: 'content',
          project: 'pingtung-pineapple-export',
          mainImage: mainImage7,
          name: this.$t('work.projects[7].name'),
          layoutType: 1,
          content: this.$t('work.projects[7].content'),
          keywords: [
            this.$t('work.projects[7].keywords[0]'),
            this.$t('work.projects[7].keywords[1]')
          ]
        },
        {
          id: 8,
          type: 'design',
          project: 'mu-maison',
          mainImage: mainImage8,
          name: this.$t('work.projects[8].name'),
          layoutType: 3,
          content: this.$t('work.projects[8].content'),
          keywords: [
            this.$t('work.projects[8].keywords[0]'),
            this.$t('work.projects[8].keywords[1]')
          ]
        },
        {
          id: 9,
          type: 'design',
          project: 'recycled-pottery-furniture',
          mainImage: mainImage9,
          name: this.$t('work.projects[9].name'),
          layoutType: 4,
          content: this.$t('work.projects[9].content'),
          keywords: [
            this.$t('work.projects[9].keywords[0]'),
            this.$t('work.projects[9].keywords[1]'),
            this.$t('work.projects[9].keywords[2]'),
            this.$t('work.projects[9].keywords[3]')
          ]
        },
        {
          id: 10,
          type: 'design',
          project: 'woodworking-craft-tool-guide',
          mainImage: mainImage10,
          name: this.$t('work.projects[10].name'),
          layoutType: 1,
          content: this.$t('work.projects[10].content'),
          keywords: [
            this.$t('work.projects[10].keywords[0]'),
            this.$t('work.projects[10].keywords[1]'),
            this.$t('work.projects[10].keywords[2]')
          ]
        },
        {
          id: 11,
          type: 'design',
          project: 'power-creation-business-card',
          mainImage: mainImage11,
          name: this.$t('work.projects[11].name'),
          layoutType: 5,
          content: this.$t('work.projects[11].content'),
          keywords: [
            this.$t('work.projects[11].keywords[0]'),
            this.$t('work.projects[11].keywords[1]')
          ]
        },
        {
          id: 12,
          type: 'design',
          project: 'japan-gov-business-card',
          mainImage: mainImage12,
          name: this.$t('work.projects[12].name'),
          layoutType: 5,
          content: this.$t('work.projects[12].content'),
          keywords: [
            this.$t('work.projects[12].keywords[0]'),
            this.$t('work.projects[12].keywords[1]')
          ]
        },
        {
          id: 13,
          type: 'design',
          project: 'breakfast-nightshop-branding',
          mainImage: mainImage13,
          name: this.$t('work.projects[13].name'),
          layoutType: 3,
          content: this.$t('work.projects[13].content'),
          keywords: [
            this.$t('work.projects[13].keywords[0]'),
            this.$t('work.projects[13].keywords[1]'),
            this.$t('work.projects[13].keywords[2]'),
            this.$t('work.projects[13].keywords[3]')
          ]
        },
        {
          id: 14,
          type: 'design',
          project: 'leek-kimchi-packaging',
          mainImage: mainImage14,
          name: this.$t('work.projects[14].name'),
          layoutType: 6,
          content: this.$t('work.projects[14].content'),
          keywords: [
            this.$t('work.projects[14].keywords[0]'),
            this.$t('work.projects[14].keywords[1]')
          ]
        },
        {
          id: 15,
          type: 'system',
          project: 'japan-agri-ecom-logistics',
          mainImage: mainImage15,
          name: this.$t('work.projects[15].name'),
          layoutType: 3,
          content: this.$t('work.projects[15].content'),
          keywords: [
            this.$t('work.projects[15].keywords[0]'),
            this.$t('work.projects[15].keywords[1]'),
            this.$t('work.projects[15].keywords[2]')
          ]
        },
        {
          id: 16,
          type: 'system',
          project: 'auto-robot-control-platform',
          mainImage: mainImage16,
          name: this.$t('work.projects[16].name'),
          layoutType: 7,
          content: this.$t('work.projects[16].content'),
          keywords: [
            this.$t('work.projects[16].keywords[0]'),
            this.$t('work.projects[16].keywords[1]'),
            this.$t('work.projects[16].keywords[2]')
          ]
        },
        {
          id: 17,
          type: 'system',
          project: 'koko-bot',
          mainImage: mainImage17,
          name: this.$t('work.projects[17].name'),
          layoutType: 1,
          content: this.$t('work.projects[17].content'),
          keywords: [
            this.$t('work.projects[17].keywords[0]'),
            this.$t('work.projects[17].keywords[1]')
          ]
        },
        {
          id: 18,
          type: 'system',
          project: 'koko-scale',
          mainImage: mainImage18,
          name: this.$t('work.projects[18].name'),
          layoutType: 1,
          content: this.$t('work.projects[18].content'),
          keywords: [
            this.$t('work.projects[18].keywords[0]'),
            this.$t('work.projects[18].keywords[1]')
          ]
        },
        {
          id: 19,
          type: 'design',
          project: 'kohaku-business-card',
          mainImage: mainImage19,
          name: this.$t('work.projects[19].name'),
          layoutType: 5,
          content: this.$t('work.projects[19].content'),
          keywords: [
            this.$t('work.projects[19].keywords[0]'),
            this.$t('work.projects[19].keywords[1]')
          ]
        }
      ]
    }
  },
  computed: {
    filterWorkItems() {
      if (this.isSelectAll) {
        return this.workItems
      } else {
        return this.workItems.filter((work) => this.checkedTypes.includes(work.type))
      }
    }
  },
  mounted() {
    const typesParam = this.$route.query.types
    if (typesParam) {
      this.checkedTypes = typesParam.split(',')
      this.isSelectAll = false
    }
  }
}
</script>
