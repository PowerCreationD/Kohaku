<script setup>
import mainImage1 from '@/assets/image/work/content/sustainable-agri-mover/0.jpg'
import mainImage2 from '@/assets/image/work/content/tech-agri-workshop/0.jpg'
import mainImage3 from '@/assets/image/work/content/lathe-tech-workshop/0.jpg'
import mainImage8 from '@/assets/image/work/design/mu-maison/0.png'
import mainImage9 from '@/assets/image/work/design/recycled-pottery-furniture/0.jpg'
import mainImage10 from '@/assets/image/work/design/woodworking-craft-tool-guide/0.jpg'
import mainImage15 from '@/assets/image/work/system/japan-agri-ecom-logistics/0.jpg'
import mainImage16 from '@/assets/image/work/system/auto-robot-control-platform/0.jpg'
import mainImage17 from '@/assets/image/work/system/koko-bot/0.jpg'

import icon_frontend from '@/assets/image/services/icon/icon_frontend.png'
import icon_backend from '@/assets/image/services/icon/icon_backend.png'
import icon_app from '@/assets/image/services/icon/icon_app.png'
import icon_data from '@/assets/image/services/icon/icon_data.png'
import icon_integration from '@/assets/image/services/icon/icon_integration.png'

import icon_visual from '@/assets/image/services/icon/icon_visual.png'
import icon_corporate from '@/assets/image/services/icon/icon_corporate.png'
import icon_media_product from '@/assets/image/services/icon/icon_media_product.png'
import icon_space from '@/assets/image/services/icon/icon_space.png'
import icon_interface from '@/assets/image/services/icon/icon_interface.png'

import icon_sustainable from '@/assets/image/services/icon/icon_sustainable.png'
import icon_service_experience from '@/assets/image/services/icon/icon_service_experience.png'
import icon_course_event from '@/assets/image/services/icon/icon_course_event.png'
import icon_exhibition from '@/assets/image/services/icon/icon_exhibition.png'
import icon_digital_transformation from '@/assets/image/services/icon/icon_digital_transformation.png'
</script>

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

export default {
  components: { pageTitle, servicesItemsSection, servicesToolsSection, workExampleSection },
  data() {
    return {
      serviceTitle: undefined,
      serviceText: undefined,
      serviceItem: undefined,
      serviceTool: undefined,
      workExample: undefined,
      workType: undefined,
      servicesItems: {
        system: {
          title: this.$t('services.system.title'),
          text: this.$t('services.system.text'),
          items: [
            {
              title: this.$t('services.system.items[0].title'),
              icon: icon_frontend,
              list: [
                this.$t('services.system.items[0].list[0]'),
                this.$t('services.system.items[0].list[1]'),
                this.$t('services.system.items[0].list[2]')
              ]
            },
            {
              title: this.$t('services.system.items[1].title'),
              icon: icon_backend,
              list: [
                this.$t('services.system.items[1].list[0]'),
                this.$t('services.system.items[1].list[1]'),
                this.$t('services.system.items[1].list[2]'),
                this.$t('services.system.items[1].list[3]'),
                this.$t('services.system.items[1].list[4]')
              ]
            },
            {
              title: this.$t('services.system.items[2].title'),
              icon: icon_app,
              list: [
                this.$t('services.system.items[2].list[0]'),
                this.$t('services.system.items[2].list[1]')
              ]
            },
            {
              title: this.$t('services.system.items[3].title'),
              icon: icon_data,
              list: [
                this.$t('services.system.items[3].list[0]'),
                this.$t('services.system.items[3].list[1]'),
                this.$t('services.system.items[3].list[2]')
              ]
            },
            {
              title: this.$t('services.system.items[4].title'),
              icon: icon_integration,
              list: [
                this.$t('services.system.items[4].list[0]'),
                this.$t('services.system.items[4].list[1]')
              ]
            }
          ],
          tools: [
            {
              title: this.$t('services.system.tools[0].title'),
              list: [
                this.$t('services.system.tools[0].list[0]'),
                this.$t('services.system.tools[0].list[1]'),
                this.$t('services.system.tools[0].list[2]')
              ]
            },
            {
              title: this.$t('services.system.tools[1].title'),
              list: [
                this.$t('services.system.tools[1].list[0]'),
                this.$t('services.system.tools[1].list[1]'),
                this.$t('services.system.tools[1].list[2]')
              ]
            },
            {
              title: this.$t('services.system.tools[2].title'),
              list: [
                this.$t('services.system.tools[2].list[0]'),
                this.$t('services.system.tools[2].list[1]'),
                this.$t('services.system.tools[2].list[2]'),
                this.$t('services.system.tools[2].list[3]')
              ]
            },
            {
              title: this.$t('services.system.tools[3].title'),
              list: [
                this.$t('services.system.tools[3].list[0]'),
                this.$t('services.system.tools[3].list[1]'),
                this.$t('services.system.tools[3].list[2]'),
                this.$t('services.system.tools[3].list[3]')
              ]
            },
            {
              title: this.$t('services.system.tools[4].title'),
              list: [
                this.$t('services.system.tools[4].list[0]'),
                this.$t('services.system.tools[4].list[1]'),
                this.$t('services.system.tools[4].list[2]')
              ]
            },

            {
              title: this.$t('services.system.tools[5].title'),
              list: [
                this.$t('services.system.tools[5].list[0]'),
                this.$t('services.system.tools[5].list[1]'),
                this.$t('services.system.tools[5].list[2]')
              ]
            },
            {
              title: this.$t('services.system.tools[6].title'),
              list: [
                this.$t('services.system.tools[6].list[0]'),
                this.$t('services.system.tools[6].list[1]')
              ]
            },
            {
              title: this.$t('services.system.tools[7].title'),
              list: [this.$t('services.system.tools[7].list[0]')]
            },
            {
              title: this.$t('services.system.tools[8].title'),
              list: [this.$t('services.system.tools[8].list[0]')]
            },
            {
              title: this.$t('services.system.tools[9].title'),
              list: [this.$t('services.system.tools[9].list[0]')]
            },
            {
              title: this.$t('services.system.tools[10].title'),
              list: [
                this.$t('services.system.tools[10].list[0]'),
                this.$t('services.system.tools[10].list[1]')
              ]
            }
          ]
        },
        design: {
          title: this.$t('services.design.title'),
          text: this.$t('services.design.text'),
          items: [
            {
              title: this.$t('services.design.items[0].title'),
              icon: icon_visual,
              list: [
                this.$t('services.design.items[0].list[0]'),
                this.$t('services.design.items[0].list[1]'),
                this.$t('services.design.items[0].list[2]'),
                this.$t('services.design.items[0].list[3]')
              ]
            },
            {
              title: this.$t('services.design.items[1].title'),
              icon: icon_corporate,
              list: [
                this.$t('services.design.items[1].list[0]'),
                this.$t('services.design.items[1].list[1]'),
                this.$t('services.design.items[1].list[2]')
              ]
            },
            {
              title: this.$t('services.design.items[2].title'),
              icon: icon_media_product,
              list: [
                this.$t('services.design.items[2].list[0]'),
                this.$t('services.design.items[2].list[1]'),
                this.$t('services.design.items[2].list[2]'),
                this.$t('services.design.items[2].list[3]')
              ]
            },
            {
              title: this.$t('services.design.items[3].title'),
              icon: icon_space,
              list: [
                this.$t('services.design.items[3].list[0]'),
                this.$t('services.design.items[3].list[1]'),
                this.$t('services.design.items[3].list[2]')
              ]
            },
            {
              title: this.$t('services.design.items[4].title'),
              icon: icon_interface,
              list: [
                this.$t('services.design.items[4].list[0]'),
                this.$t('services.design.items[4].list[1]')
              ]
            }
          ],
          tools: []
        },
        content: {
          title: this.$t('services.content.title'),
          text: this.$t('services.content.text'),
          items: [
            {
              title: this.$t('services.content.items[0].title'),
              icon: icon_sustainable,
              list: [
                this.$t('services.content.items[0].list[0]'),
                this.$t('services.content.items[0].list[1]'),
                this.$t('services.content.items[0].list[2]')
              ]
            },
            {
              title: this.$t('services.content.items[1].title'),
              icon: icon_service_experience,
              list: [
                this.$t('services.content.items[1].list[0]'),
                this.$t('services.content.items[1].list[1]'),
                this.$t('services.content.items[1].list[2]')
              ]
            },
            {
              title: this.$t('services.content.items[2].title'),
              icon: icon_course_event,
              list: [
                this.$t('services.content.items[2].list[0]'),
                this.$t('services.content.items[2].list[1]')
              ]
            },
            {
              title: this.$t('services.content.items[3].title'),
              icon: icon_exhibition,
              list: [
                this.$t('services.content.items[3].list[0]'),
                this.$t('services.content.items[3].list[1]')
              ]
            },
            {
              title: this.$t('services.content.items[4].title'),
              icon: icon_digital_transformation,
              list: [
                this.$t('services.content.items[4].list[0]'),
                this.$t('services.content.items[4].list[1]'),
                this.$t('services.content.items[4].list[2]')
              ]
            }
          ],
          tools: []
        }
      }
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
        service = this.getServiceItem(typeParam)

        switch (typeParam) {
          case 'system':
            this.workExample = [
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
              }
            ]
            break

          case 'design':
            this.workExample = [
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
              }
            ]
            break

          case 'content':
            this.workExample = [
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
              }
            ]
            break
          default:
            break
        }
      } else {
        this.workType = defaultType
        service = this.getServiceItem(defaultType).items
      }
      this.serviceTitle = service.title
      this.serviceText = service.text
      this.serviceItem = service.items
      this.serviceTool = service.tools
    },
    getServiceItem(type) {
      const serviceItem = this.servicesItems[type]
      return serviceItem
    }
  },
  watch: {
    $route() {
      this.fetchData()
    }
  }
}
</script>
