<script setup>
import mainImage1 from '@/assets/image/work/content/sustainable-agri-mover/0.png'
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
import mainImage14 from '@/assets/image/work/design/leek-kimchi-packaging/0.jpg'
import mainImage15 from '@/assets/image/work/system/japan-agri-ecom-logistics/web_1.png'
import mainImage16 from '@/assets/image/work/system/auto-robot-control-platform/0.jpg'
import mainImage17 from '@/assets/image/work/system/koko-bot/0.png'
import mainImage18 from '@/assets/image/work/system/koko-scale/0.jpg'
import mainImage19 from '@/assets/image/work/design/kohaku-business-card/0.jpg'
import mainImage20 from '@/assets/image/work/design/southern-island-daily-dried-fruit/0.png'
import mainImage21 from '@/assets/image/work/design/act-japanese-rice-packaging/0.png'
import mainImage22 from '@/assets/image/work/content/taiwan-banana-japan-tasting-event/0.jpg'
import mainImage23 from '@/assets/image/work/content/sustainability-and-circular-economy-workshop/0.jpg'
import mainImage24 from '@/assets/image/work/content/craft-gene-construction/0.jpeg'
import mainImage25 from '@/assets/image/work/content/daxi-woodworker-survey-record/0.jpeg'
import mainImage26 from '@/assets/image/work/system/act-rpa-development/0.png'
import mainImage27 from '@/assets/image/work/system/remote-control-smart-sprayer/0.jpeg'
import mainImage28 from '@/assets/image/work/system/plant-moisture-data-notification-line-bot/0.png'
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
          id: 27,
          type: 'system',
          project: 'remote-control-smart-sprayer',
          concept: this.$t('work.projects[27].concept'),
          mainImage: mainImage27,
          name: this.$t('work.projects[27].name')
        },

        {
          id: 20,
          type: 'design',
          project: 'southern-island-daily-dried-fruit',
          concept: this.$t('work.projects[20].concept'),
          mainImage: mainImage20,
          name: this.$t('work.projects[20].name')
        },
        {
          id: 15,
          type: 'system',
          project: 'japan-agri-ecom-logistics',
          concept: this.$t('work.projects[15].concept'),
          mainImage: mainImage15,
          name: this.$t('work.projects[15].name')
        },
        {
          id: 17,
          type: 'system',
          project: 'koko-bot',
          concept: this.$t('work.projects[17].concept'),
          mainImage: mainImage17,
          name: this.$t('work.projects[17].name')
        },
        {
          id: 18,
          type: 'system',
          project: 'koko-scale',
          concept: this.$t('work.projects[18].concept'),
          mainImage: mainImage18,
          name: this.$t('work.projects[18].name')
        },
        {
          id: 2,
          type: 'content',
          project: 'tech-agri-workshop',
          concept: this.$t('work.projects[2].concept'),
          mainImage: mainImage2,
          name: this.$t('work.projects[2].name')
        },
        {
          id: 28,
          type: 'system',
          project: 'plant-moisture-data-notification-line-bot',
          concept: this.$t('work.projects[28].concept'),
          mainImage: mainImage28,
          name: this.$t('work.projects[28].name')
        },
        {
          id: 1,
          type: 'content',
          project: 'sustainable-agri-mover',
          concept: this.$t('work.projects[1].concept'),
          mainImage: mainImage1,
          name: this.$t('work.projects[1].name')
        },
        {
          id: 7,
          type: 'content',
          project: 'pingtung-pineapple-export',
          concept: this.$t('work.projects[7].concept'),
          mainImage: mainImage7,
          name: this.$t('work.projects[7].name')
        },
        {
          id: 22,
          type: 'content',
          project: 'taiwan-banana-japan-tasting-event',
          concept: this.$t('work.projects[22].concept'),
          mainImage: mainImage22,
          name: this.$t('work.projects[22].name')
        },

        {
          id: 11,
          type: 'design',
          project: 'power-creation-business-card',
          concept: this.$t('work.projects[11].concept'),
          mainImage: mainImage11,
          name: this.$t('work.projects[11].name')
        },
        {
          id: 12,
          type: 'design',
          project: 'japan-gov-business-card',
          concept: this.$t('work.projects[12].concept'),
          mainImage: mainImage12,
          name: this.$t('work.projects[12].name')
        },
        {
          id: 8,
          type: 'design',
          project: 'mu-maison',
          concept: this.$t('work.projects[8].concept'),
          mainImage: mainImage8,
          name: this.$t('work.projects[8].name')
        },
        {
          id: 9,
          type: 'design',
          project: 'recycled-pottery-furniture',
          concept: this.$t('work.projects[9].concept'),
          mainImage: mainImage9,
          name: this.$t('work.projects[9].name')
        },
        {
          id: 10,
          type: 'design',
          project: 'woodworking-craft-tool-guide',
          concept: this.$t('work.projects[10].concept'),
          mainImage: mainImage10,
          name: this.$t('work.projects[10].name')
        },
        {
          id: 21,
          type: 'design',
          project: 'act-japanese-rice-packaging',
          concept: this.$t('work.projects[21].concept'),
          mainImage: mainImage21,
          name: this.$t('work.projects[21].name')
        },


        {
          id: 4,
          type: 'content',
          project: 'digital-craft-platform',
          concept: this.$t('work.projects[4].concept'),
          mainImage: mainImage4,
          name: this.$t('work.projects[4].name')
        },
        {
          id: 14,
          type: 'design',
          project: 'leek-kimchi-packaging',
          concept: this.$t('work.projects[14].concept'),
          mainImage: mainImage14,
          name: this.$t('work.projects[14].name')
        },

        {
          id: 16,
          type: 'system',
          project: 'auto-robot-control-platform',
          concept: this.$t('work.projects[16].concept'),
          mainImage: mainImage16,
          name: this.$t('work.projects[16].name')
        },

        {
          id: 19,
          type: 'design',
          project: 'kohaku-business-card',
          concept: this.$t('work.projects[19].concept'),
          mainImage: mainImage19,
          name: this.$t('work.projects[19].name')
        },

        {
          id: 23,
          type: 'content',
          project: 'sustainability-and-circular-economy-workshop',
          concept: this.$t('work.projects[23].concept'),
          mainImage: mainImage23,
          name: this.$t('work.projects[23].name')
        },
        {
          id: 24,
          type: 'content',
          project: 'craft-gene-construction',
          concept: this.$t('work.projects[24].concept'),
          mainImage: mainImage24,
          name: this.$t('work.projects[24].name')
        },
        {
          id: 25,
          type: 'content',
          project: 'daxi-woodworker-survey-record',
          concept: this.$t('work.projects[25].concept'),
          mainImage: mainImage25,
          name: this.$t('work.projects[25].name')
        },
        {
          id: 26,
          type: 'system',
          project: 'act-rpa-development',
          concept: this.$t('work.projects[26].concept'),
          mainImage: mainImage26,
          name: this.$t('work.projects[26].name')
        },
        {
          id: 3,
          type: 'content',
          project: 'lathe-tech-workshop',
          concept: this.$t('work.projects[3].concept'),
          mainImage: mainImage3,
          name: this.$t('work.projects[3].name')
        },

        {
          id: 5,
          type: 'content',
          project: 'ceatec-agri-week',
          concept: this.$t('work.projects[5].concept'),
          mainImage: mainImage5,
          name: this.$t('work.projects[5].name')
        },
        {
          id: 6,
          type: 'content',
          project: 'supermarket-japan-station',
          concept: this.$t('work.projects[6].concept'),
          mainImage: mainImage6,
          name: this.$t('work.projects[6].name')
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
