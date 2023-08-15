<template>
  <div class="service">
    <template v-if="!isMobile">
      <div class="service__side-navbar">
          <button class="service__navbar-button" v-for="service in getServiceNames" 
                  :key="service.id" @click="selectService(service.id)" 
                  :class="{ 'service__navbar-button--active': activeBtn === service.id }">
            {{ service.name }}
          </button>
      </div>
    </template>
    <div class="service__main-content">
      <template v-if="isMobile">
        <div class="service-intro">
          <div class="service-intro__title">SERVICES</div>
          <div class="service-intro__line-top"></div>
        </div>
        <ServiceDropdown class="service-dropdown" 
                         :options="serviceOptions" @select="selectService"/>
      </template>
      <ServiceHeaderSection :headerData="dataToBeRendered"/>
      <div v-show="dataCard1.length" v-for="data in dataCard1" :key="data">
        <ServiceCardType1 :cardData="data"/>
        <div class="service__section-line" ></div>
      </div>
      <div v-show="dataCard2.length" v-for="data in dataCard2" :key="data">
        <ServiceCardType2 :cardData="data"/>
        <div v-if="!(dataCard2.indexOf(data)+1 == dataCard2.length) && isMobile" class="service__section-line" ></div>
        <div v-if="!isMobile" class="service__section-line" ></div>
      </div>
      <WorkExampleSection v-if="dataToBeRendered.works_example.exampleList.length" :workData="dataToBeRendered.works_example"/>
    </div>
  </div>
</template>

<script>
import ServiceHeaderSection from "../components/services/ServiceHeaderSection.vue"
import ServiceCardType1 from "../components/services/ServiceCardType1.vue"
import ServiceCardType2 from "../components/services/ServiceCardType2.vue"
import WorkExampleSection from "../components/services/WorkExampleSection.vue"
import ServiceDropdown from '../components/services/ServiceDropdown.vue'

export default {
  components: { ServiceCardType1, ServiceCardType2, WorkExampleSection, ServiceHeaderSection, ServiceDropdown },
  data() {
    return {
      isMobile: false,
      activeBtn: "system_development",
      selectedService: "system_development",
      serviceData: [
        {
          "id": "system_development",
          "name": this.$t('services.system.name'),
          "slogan": [
            this.$t('services.system.slogan[0]'),
            this.$t('services.system.slogan[1]')
          ],
          "description": this.$t('services.system.description'),
          "content": [
            {
              "title": this.$t('services.system.content[0].title'),
              "services": [
                {
                  "subtitle": this.$t('services.system.content[0].services[0].subtitle'),
                  "items": [
                    this.$t('services.system.content[0].services[0].items[0]'),
                    this.$t('services.system.content[0].services[0].items[1]'),
                    this.$t('services.system.content[0].services[0].items[2]'),
                    this.$t('services.system.content[0].services[0].items[3]'),
                  ],
                  "img_url": img_frontend
                },
                {
                  "subtitle": this.$t('services.system.content[0].services[1].subtitle'),
                  "items": [
                    this.$t('services.system.content[0].services[1].items[0]'),
                    this.$t('services.system.content[0].services[1].items[1]'),
                    this.$t('services.system.content[0].services[1].items[2]'),
                    this.$t('services.system.content[0].services[1].items[3]'),
                  ],
                  "img_url": img_backend
                }
              ]
            },
            {
              "title": this.$t('services.system.content[1].title'),
              "services": [
                {
                  "subtitle": this.$t('services.system.content[1].services[0].subtitle'),
                  "items": [
                    this.$t('services.system.content[1].services[0].items[0]'),
                    this.$t('services.system.content[1].services[0].items[1]'),
                    this.$t('services.system.content[1].services[0].items[2]'),
                  ],
                  "img_url": img_data_analysis
                }
              ]
            },
            {
              "title": this.$t('services.system.content[2].title'),
              "services": [
                {
                  "subtitle": this.$t('services.system.content[2].services[0].subtitle'),
                  "items": [
                    this.$t('services.system.content[2].services[0].items[0]')
                  ],
                  "img_url": img_embedded_system
                }
              ]
            }
          ],
          "works_example": {
            "type": "system-development",
            "workNumber": 2,
            "exampleList": [{
              "id": 1, 
              "project": "e-commerce-and-logistics-system",
              "title": this.$t('services.system.works_example[0]'),
              "img_url": img_vegibus_system
            },
            {
              "id": 2,
              "project": "autonomous-mobile-robot",
              "title": this.$t('services.system.works_example[1]'),
              "img_url": img_mobilemover_app
            }]
          }
        },
        {
          "id": "trading",
          "name": this.$t('services.trading.name'),
          "slogan": [
            this.$t('services.trading.slogan[0]'),
            this.$t('services.trading.slogan[1]')
          ],
          "description": this.$t('services.trading.description'),
          "content": [
            {
              "title": this.$t('services.trading.content[0].title'),
              "services": [
                {
                  "subtitle": this.$t('services.trading.content[0].services[0].subtitle'),
                  "items": [
                    this.$t('services.trading.content[0].services[0].items[0]'),
                    this.$t('services.trading.content[0].services[0].items[1]'),
                    this.$t('services.trading.content[0].services[0].items[2]'),
                  ],
                  "img_url": img_trading_cover
                }
              ]
            }
          ],
          "works_example": {
            "type": "trading",
            "workNumber": 1,
            "exampleList": [{
              "id": 9,
              "project": "exporting-pineapples",
              "title": this.$t('services.trading.works_example[0]'),
              "img_url": img_pineapple_1
            }]
          }
        },
        {
          "id": "product_design",
          "name": this.$t('services.product.name'),
          "slogan": [
            this.$t('services.product.slogan[0]'),
            this.$t('services.product.slogan[1]')
          ],
          "description": this.$t('services.product.description'),
          "content": [
            {
              "title": this.$t('services.product.content[0].title'),
              "services": [
                {
                  "subtitle": this.$t('services.product.content[0].services[0].subtitle'),
                  "items": [
                    this.$t('services.product.content[0].services[0].items[0]'),
                    this.$t('services.product.content[0].services[0].items[1]'),
                    this.$t('services.product.content[0].services[0].items[2]'),
                    this.$t('services.product.content[0].services[0].items[3]'),
                    this.$t('services.product.content[0].services[0].items[4]'),
                    this.$t('services.product.content[0].services[0].items[5]'),
                  ],
                  "img_url": img_product_cover
                }
              ]
            }
          ],
          "works_example": {
            "type": "product-design",
            "workNumber": 1,
            "exampleList": [{
              "id": 4,
              "project": "mu-maison",
              "title": this.$t('services.product.works_example[0]'),
              "img_url": img_kizuna_1
            }]
          }
        },
        {
          "id": "commercial_design",
          "name": this.$t('services.design.name'),
          "slogan": [
            this.$t('services.design.slogan[0]'),
            this.$t('services.design.slogan[1]')
          ],
          "description": this.$t('services.design.description'),
          "content": [
            {
              "title": this.$t('services.design.content[0].title'),
              "services": [
                {
                  "subtitle": this.$t('services.design.content[0].services[0].subtitle'),
                  "items": [
                    this.$t('services.design.content[0].services[0].items[0]'),
                    this.$t('services.design.content[0].services[0].items[1]'),
                    this.$t('services.design.content[0].services[0].items[2]'),
                    this.$t('services.design.content[0].services[0].items[3]'),
                    this.$t('services.design.content[0].services[0].items[4]'),
                  ],
                  "img_url": img_commercial_design_cover
                }
              ]
            }
          ],
          "works_example": {
            "type": "commercial-design",
            "workNumber": 5,
            "exampleList": [{
              "id": 5,
              "project": "leek-kimchi",
              "title": this.$t('services.design.works_example[0]'),
              "img_url": img_kimchi_1
            }, 
            {
              "id": 8,
              "project": "m2labo-business-card-design",
              "title": this.$t('services.design.works_example[1]'),
              "img_url": img_power_creation_business_card_1
            }]
          }
        },
        {
          "id": "event_planning",
          "name": this.$t('services.planning.name'),
          "slogan": [
            this.$t('services.planning.slogan[0]'),
            this.$t('services.planning.slogan[1]')
          ],
          "description": this.$t('services.planning.description'),
          "content": [
            {
              "title": this.$t('services.planning.content[0].title'),
              "services": [
                {
                  "subtitle": this.$t('services.planning.content[0].services[0].subtitle'),
                  "items": [
                    this.$t('services.planning.content[0].services[0].items[0]'),
                    this.$t('services.planning.content[0].services[0].items[1]'),
                    this.$t('services.planning.content[0].services[0].items[2]'),
                    this.$t('services.planning.content[0].services[0].items[3]'),
                    this.$t('services.planning.content[0].services[0].items[4]'),
                  ],
                  "img_url": img_event_planning_cover
                }
              ]
            }
          ],
          "works_example": {
            "type": "event-planning",
            "workNumber": 1,
            "exampleList": [{
                "id": 10, 
                "project": "lathe-machine-workshop",
                "title": this.$t('services.planning.works_example[0]'),
                "img_url": img_wood_workshop_1
            }]
          }
        }
      ],
      dataToBeRendered: {
        "id": "system_development",
        "name": this.$t('services.system.name'),
        "slogan": [
          this.$t('services.system.slogan[0]'),
          this.$t('services.system.slogan[1]')
        ],
        "description": this.$t('services.system.description'),
        "content": [
          {
            "title": this.$t('services.system.content[0].title'),
            "services": [
              {
                "subtitle": this.$t('services.system.content[0].services[0].subtitle'),
                "items": [
                  this.$t('services.system.content[0].services[0].items[0]'),
                  this.$t('services.system.content[0].services[0].items[1]'),
                  this.$t('services.system.content[0].services[0].items[2]'),
                  this.$t('services.system.content[0].services[0].items[3]'),
                ],
                "img_url": img_frontend
              },
              {
                "subtitle": this.$t('services.system.content[0].services[1].subtitle'),
                "items": [
                  this.$t('services.system.content[0].services[1].items[0]'),
                  this.$t('services.system.content[0].services[1].items[1]'),
                  this.$t('services.system.content[0].services[1].items[2]'),
                  this.$t('services.system.content[0].services[1].items[3]'),
                ],
                "img_url": img_backend
              }
            ]
          },
          {
            "title": this.$t('services.system.content[1].title'),
            "services": [
              {
                "subtitle": this.$t('services.system.content[1].services[0].subtitle'),
                "items": [
                  this.$t('services.system.content[1].services[0].items[0]'),
                  this.$t('services.system.content[1].services[0].items[1]'),
                  this.$t('services.system.content[1].services[0].items[2]'),
                ],
                "img_url": img_data_analysis
              }
            ]
          },
          {
            "title": this.$t('services.system.content[2].title'),
            "services": [
              {
                "subtitle": this.$t('services.system.content[2].services[0].subtitle'),
                "items": [
                  this.$t('services.system.content[2].services[0].items[0]')
                ],
                "img_url": img_embedded_system
              }
            ]
          }
        ],
        "works_example": {
          "type": "system-development",
          "workNumber": 2,
          "exampleList": [{
            "id": 1, 
            "project": "e-commerce-and-logistics-system",
            "title": this.$t('services.system.works_example[0]'),
            "img_url": img_vegibus_system
          },
          {
            "id": 2,
            "project": "autonomous-mobile-robot",
            "title": this.$t('services.system.works_example[1]'),
            "img_url": img_mobilemover_app
          }]
        }
      },
      dataCard1: [
        {
          "title": this.$t('services.system.content[0].title'),
            "services": [
              {
                "subtitle": this.$t('services.system.content[0].services[0].subtitle'),
                "items": [
                  this.$t('services.system.content[0].services[0].items[0]'),
                  this.$t('services.system.content[0].services[0].items[1]'),
                  this.$t('services.system.content[0].services[0].items[2]'),
                  this.$t('services.system.content[0].services[0].items[3]'),
                ],
                "img_url": img_frontend
              },
              {
                "subtitle": this.$t('services.system.content[0].services[1].subtitle'),
                "items": [
                  this.$t('services.system.content[0].services[1].items[0]'),
                  this.$t('services.system.content[0].services[1].items[1]'),
                  this.$t('services.system.content[0].services[1].items[2]'),
                  this.$t('services.system.content[0].services[1].items[3]'),
                ],
                "img_url": img_backend
              }
            ]
        }
      ],
      dataCard2:[
        {
          "title": this.$t('services.system.content[1].title'),
          "services": [
            {
              "subtitle": this.$t('services.system.content[1].services[0].subtitle'),
              "items": [
                this.$t('services.system.content[1].services[0].items[0]'),
                this.$t('services.system.content[1].services[0].items[1]'),
                this.$t('services.system.content[1].services[0].items[2]'),
              ],
              "img_url": img_data_analysis
            }
          ]
        },
        {
          "title": this.$t('services.system.content[2].title'),
          "services": [
            {
              "subtitle": this.$t('services.system.content[2].services[0].subtitle'),
              "items": [
                this.$t('services.system.content[2].services[0].items[0]')
              ],
              "img_url": img_embedded_system
            }
          ]
        }
      ],
      serviceOptions: [
        {
          text: this.$t('services.system.name'),
          value: 'system_development'
        },
        {
          text: this.$t('services.trading.name'),
          value: 'trading'
        },
        {
          text: this.$t('services.product.name'),
          value: 'product_design'
        },
        {
          text: this.$t('services.design.name'),
          value: 'commercial_design'
        },
        {
          text: this.$t('services.planning.name'),
          value: 'event_planning'
        }
      ]
    }
  },
  methods: {
    selectService(id) {
      let url_id = id.replace('_','-')
      this.$router.replace(`/services/${url_id}`)
      window.scrollTo(0, 0)
      this.activeBtn = id
      const result = this.serviceData.filter(data => data["id"] === id)
      this.dataToBeRendered = result[0]
      this.dataCard1 = result[0].content.filter(data => data["services"].length == 2)
      this.dataCard2 = result[0].content.filter(data => data["services"].length == 1)
    },
    checkViewportSize() {
      this.isMobile = window.innerWidth < this.$mobileDeviceMaxWidth
    }
  },
  computed: {
    getServiceNames() {
      let navList = []
      this.serviceData.forEach(ele => {
          let itm = { "id": ele.id, "name": ele.name }
          navList.push(itm)
      })
      return navList
    }
  },
  mounted() {
    if (this.$route.params.id !== "") {
      const serviceId = this.$route.params.id.replace("-", "_")
      this.selectService(serviceId)
      this.activeBtn = serviceId
    }
    this.checkViewportSize()
    window.addEventListener('resize', this.checkViewportSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkViewportSize)
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/components/typography' as typography;
@use '../assets/scss/components/variable' as var;
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
* {
  font-family: 'Ubuntu', Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.service {
    display: flex;
    flex-direction: row;

    &__side-navbar {
      width: 20%;
      display: flex;
      flex-direction: column;
      margin-right: 56px;
    }

    &__navbar-button {
      @include typography.font($index: 7);
      color: map-get(var.$color, black);
      background-color: #FFFFFF;
      padding: 12px 0px;
      width: 100%;
      border: none;
      text-align: left;
      border-top: 1px solid #FFFFFF;
      border-bottom: 1px solid #FFFFFF;
      cursor: pointer;

      &--active {
        color: #E6AE4A;
        font-weight: bold;
        border-top: 1px solid #E6AE4A;
        border-bottom: 1px solid #E6AE4A;
      }

      &:hover {
        color: #E6AE4A;
        font-weight: bold;
        border-top: 1px solid #E6AE4A;
        border-bottom: 1px solid #E6AE4A;
      }

      &:hover + &--active {
        border-top: 1px solid #FFFFFF;
      }

      &--active + &:hover {
        border-top: 1px solid #FFFFFF;
      }
    }

    &__main-content {
      width: 80%;
    }

    &__section-line {
      width: 100%;
      border-bottom: 1px solid #777777;
      margin: 50px 0;
    }
}
@media screen and (max-width: 767px) {
  .service {
    display: flex;
    flex-direction: column;

    &__main-content {
      width: 100%;
    }
  }
  .service-intro {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 36px;
    
    &__title {
      @include typography.font($index: 1);
      text-align: start;
      margin-top: -4px;
    }

    &__line-top {
      flex-grow: 1;
      margin-left: 12px;
      border-top: 1px solid #777777;
    }
  }
  .service-dropdown {

    position: sticky;
    top: 66px;
    z-index: 1;
    background-color: #FFFFFF;
    padding: 16px 0 0 0;
    // border-top: 1px solid #C4C4C4;
    box-shadow: 0px 20px 0px 0px #FFFFFF, // down
                5vw 0px 0px 0px #FFFFFF, // right
                5vw 4px 0px 0px #FFFFFF,
                5vw 20px 0px 0px #FFFFFF,
                -5vw 0px 0px 0px #FFFFFF, // left
                -5vw 4px 0px 0px #FFFFFF,
                -5vw 20px 0px 0px #FFFFFF;
  }
}
</style>

<script setup>
import img_frontend from '@/assets/image/services/system_development/img_frontend.jpg'
import img_backend from '@/assets/image/services/system_development/img_backend.jpg'
import img_data_analysis from '@/assets/image/services/system_development/img_data_analysis.jpg'
import img_embedded_system from '@/assets/image/services/system_development/img_embedded_system.jpg'
import img_vegibus_system from '@/assets/image/work/system_development/vegibus/img_vegibus_system.jpeg'
import img_mobilemover_app from '@/assets/image/work/system_development/mobilemover/img_mobilemover_app.png'
import img_trading_cover from '@/assets/image/services/trading/img_trading_cover.jpg'
import img_pineapple_1 from '@/assets/image/work/trading/img_pineapple_1.jpg'
import img_product_cover from '@/assets/image/services/product_design/img_product_cover.jpg'
import img_kizuna_1 from '@/assets/image/work/product_design/img_kizuna_1.jpg'
import img_commercial_design_cover from '@/assets/image/services/commercial_design/img_commercial_design_cover.jpg'
import img_kimchi_1 from '@/assets/image/work/commercial_design/kimchi/img_kimchi_1.jpg'
import img_power_creation_business_card_1 from '@/assets/image/work/commercial_design/power_creation/img_power_creation_business_card_1.jpg'
import img_event_planning_cover from '@/assets/image/services/event_planning/img_event_planning_cover.jpg'
import img_wood_workshop_1 from '@/assets/image/work/event_planning/img_wood_workshop_1.jpg'
</script>