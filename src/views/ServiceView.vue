<template>
  <div class="services">
    <pageTitle>{{ serviceTitle }}</pageTitle>
    <p class="services-section__text font-7">{{ serviceText }}</p>
    <servicesItemsSection :serviceItem="serviceItem" />
    <servicesToolsSection v-if="serviceTool.length" :serviceTool="serviceTool" />
    <workExampleSection :workExample="workExample" :workType="workType" />
  </div>
</template>

<style src="@/assets/scss/services/services.scss" scoped></style>

<script>
import pageTitle from '@/components/global/PageTitle.vue'
import servicesItemsSection from '@/components/services/ServicesItemsSection.vue'
import servicesToolsSection from '@/components/services/ServicesToolsSection.vue'
import workExampleSection from '@/components/services/WorkExampleSection.vue'
import { getServiceItem } from '@/library/getServiceItem.js'
import { getWorkItem } from '@/library/getWorkItem.js'

export default {
  components: { pageTitle, servicesItemsSection, servicesToolsSection, workExampleSection },
  data() {
    return {
      serviceTitle: undefined,
      serviceText: undefined,
      serviceItem: undefined,
      serviceTool: undefined,
      workExample: undefined,
      workType: undefined
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const typeParam = this.$route.params.type
      const defaultType = 'system'
      let service
      if (typeParam) {
        this.workType = typeParam
        service = getServiceItem(typeParam)
        switch (typeParam) {
          case 'system':
            this.workExample = [
              getWorkItem('japan-agri-ecom-logistics'),
              getWorkItem('auto-robot-control-platform'),
              getWorkItem('koko-bot')
            ]
            break

          case 'design':
            this.workExample = [
              getWorkItem('mu-maison'),
              getWorkItem('recycled-pottery-furniture'),
              getWorkItem('woodworking-craft-tool-guide')
            ]
            break

          case 'content':
            this.workExample = [
              getWorkItem('sustainable-agri-mover'),
              getWorkItem('tech-agri-workshop'),
              getWorkItem('lathe-tech-workshop')
            ]
            break
          default:
            break
        }
      } else {
        this.workType = defaultType
        service = getServiceItem(defaultType).items
      }
      this.serviceTitle = service.title
      this.serviceText = service.text
      this.serviceItem = service.items
      this.serviceTool = service.tools
    }
  },
  watch: {
    $route() {
      this.fetchData()
    }
  }
}
</script>
