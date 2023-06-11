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
          "name": "系統設計 / 開發與維運",
          "slogan": ["客製資訊系統導入產業", "協助趨勢洞察建立遠見"],
          "description": "以 SaaS （Software as a Service）軟體服務出發，提供產業系統客製、跨系統整合服務，並有終端設備串接與開發專業，協助收集數據幫助決策，優化流程提升供銷效能。",
          "content": [
            {
              "title": "系統開發",
              "services": [
                {
                  "subtitle": "前端開發",
                  "items": ["前端框架開發", "前端互動設計", "RWD 響應式網站", "漸進式網站應用程式 (PWA)"],
                  "img_url": img_frontend
                },
                {
                  "subtitle": "後端開發",
                  "items": ["資料庫設計與規劃", "API 開發 / 第三方 API 串接", "雲端整合部署", "CI / CD"],
                  "img_url": img_backend
                }
              ]
            },
            {
              "title": "資料分析",
              "services": [
                {
                  "subtitle": "商業資料探勘",
                  "items": ["商業數據分析與可視化", "BI 工具導入", "資料收集、轉移與載入自動化"],
                  "img_url": img_data_analysis
                }
              ]
            },
            {
              "title": "設備開發",
              "services": [
                {
                  "subtitle": "嵌入式系統開發",
                  "items": ["物聯網裝置整合開發"],
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
              "title": "產銷系統設計｜日本農產電商物流系統",
              "img_url": img_vegibus_system
            },
            {
              "id": 2,
              "title": "機電整合開發｜自主移動機器人控制平台",
              "img_url": img_mobilemover_app
            }]
          }
        },
        {
          "id": "trading",
          "name": "國內 / 國際貿易服務",
          "slogan": ["發現台灣在地美味食力", "打造全新面貌走向國際"],
          "description": "專營台、日農產與食品雙向供銷，以及農用機具代理進出口，致力於發揚台灣好食與精工。具備專業的中、英、日語窗口，提供選品諮詢與外銷代辦，並有依目標地區消費習慣的品牌包裝再造服務，幫助MIT產品走向世界。",
          "content": [
            {
              "title": "進出口貿易",
              "services": [
                {
                  "subtitle": "進出口單一窗口服務",
                  "items": ["進出口選品諮詢", "市場風向探勘", "行銷企劃與代操", "中／英／日三語言窗口", "異國品牌包裝Redesign"],
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
              "title": "日本外銷｜出口屏東台農金鑽鳳梨",
              "img_url": img_pineapple_1
            }]
          }
        },
        {
          "id": "product_design",
          "name": "產品設計與量產開發",
          "slogan": ["剖析未被留心的不便利", "用美學將痛點優雅轉譯"],
          "description": "深究物件與人的夥伴關係，刻畫機能、型態與互動上的優質體驗以細膩的設計雕琢產品，回應使用者對生活的期待。",
          "content": [
            {
              "title": "產品研發",
              "services": [
                {
                  "subtitle": "研發與設計服務",
                  "items": ["問題研究", "概念提案", "參與式設計過程", "產品外觀設計", "3D模型建構", "模型製作"],
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
              "title": "傢俱設計｜慕廂－優雅收移的實木家具",
              "img_url": img_kizuna_1
            }]
          }
        },
        {
          "id": "commercial_design",
          "name": "品牌形象與視覺設計",
          "slogan": ["直指人心的視覺傳達", "昇華品牌與客戶的關係"],
          "description": "一頁書、一件包裝、一套專業完整的品牌形象，由量身定制的設計精準傳達願景，讓您的客戶體驗品牌無微不至的用心，加深信任您的服務與產品。",
          "content": [
            {
              "title": "商業設計",
              "services": [
                {
                  "subtitle": "視覺設計",
                  "items": ["品牌形象設計", "裝幀設計", "平面設計", "包裝設計", "網站介面設計"],
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
              "title": "日本高級超市 韭菜泡菜包裝設計",
              "img_url": img_kimchi_1
            }, 
            {
              "id": 8,
              "title": "視覺與包裝｜創次方股份有限公司 名片設計",
              "img_url": img_power_creation_business_card_1
            }]
          }
        },
        {
          "id": "event_planning",
          "name": "企劃發想與活動策劃",
          "slogan": ["羽量團隊效能無限", "超高動能協助靈活策展"],
          "description": "設計起家的創意人才加上打破框架的企業文化，為您的企劃提供意想不到的創新解方，熟悉外部團隊協作，與您迅速對接需求，自課程設計到會展活動，皆能提供專業的執行統籌。",
          "content": [
            {
              "title": "企劃活動",
              "services": [
                {
                  "subtitle": "活動策劃服務",
                  "items": ["課程、活動、展覽題材開發", "內容企劃", "執行統籌", "現場主持與場務", "活動視覺及媒體代操"],
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
                "title": "活動紀錄｜車床技術轉譯研究工作坊",
                "img_url": img_wood_workshop_1
            }]
          }
        }
      ],
      dataToBeRendered: {
        "id": "system_development",
        "name": "系統設計 / 開發與維運",
        "slogan": ["客製資訊系統導入產業", "協助趨勢洞察建立遠見"],
        "description": "以 SaaS （Software as a Service）軟體服務出發，提供產業系統客製、跨系統整合服務，並有終端設備串接與開發專業，協助收集數據幫助決策，優化流程提升供銷效能。",
        "content": [
          {
            "title": "系統開發",
            "services": [
              {
                "subtitle": "前端開發",
                "items": ["前端框架開發", "前端互動設計", "RWD 響應式網站", "漸進式網站應用程式 (PWA)"],
                "img_url": img_frontend
              },
              {
                "subtitle": "後端開發",
                "items": ["資料庫設計與規劃", "API 開發 / 第三方 API 串接", "雲端整合部署", "CI / CD"],
                "img_url": img_backend
              }
            ]
          },
          {
            "title": "資料分析",
            "services": [
              {
                "subtitle": "商業資料探勘",
                "items": ["商業數據分析與可視化", "BI 工具導入", "資料收集、轉移與載入自動化"],
                "img_url": img_data_analysis
              }
            ]
          },
          {
            "title": "設備開發",
            "services": [
              {
                "subtitle": "嵌入式系統開發",
                "items": ["物聯網裝置整合開發"],
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
            "title": "產銷系統設計｜日本農產電商物流系統",
            "img_url": img_vegibus_system
          },
          {
            "id": 2,
            "title": "機電整合開發｜自主移動機器人控制平台",
            "img_url": img_mobilemover_app
          }]
        }
      },
      dataCard1: [
        {
          "title": "系統開發",
          "services": [
            {
              "subtitle": "前端開發",
              "items": ["前端框架開發", "前端互動設計", "RWD 響應式網站", "漸進式網站應用程式 (PWA)"],
              "img_url": img_frontend
            },
            {
              "subtitle": "後端開發",
              "items": ["資料庫設計與規劃", "API 開發 / 第三方 API 串接", "雲端整合部署", "CI / CD"],
              "img_url": img_backend
            }
          ]
        }
      ],
      dataCard2:[
        {
          "title": "資料分析",
          "services": [
            {
              "subtitle": "商業資料探勘",
              "items": ["商業數據分析與可視化", "BI 工具導入", "資料收集、轉移與載入自動化"],
              "img_url": img_data_analysis
            }
          ]
        },
        {
          "title": "設備開發",
          "services": [
            {
              "subtitle": "嵌入式系統開發",
              "items": ["物聯網裝置整合開發"],
              "img_url": img_embedded_system
            }
          ]
        }
      ],
      serviceOptions: [
        {
          text: '系統設計 / 開發與維運',
          value: 'system_development'
        },
        {
          text: '國內 / 國際貿易服務',
          value: 'trading'
        },
        {
          text: '產品設計與量產開發',
          value: 'product_design'
        },
        {
          text: '品牌形象與視覺設計',
          value: 'commercial_design'
        },
        {
          text: '企劃發想與活動策劃',
          value: 'event_planning'
        }
      ]
    }
  },
  methods: {
    selectService(id) {
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
      background-color: #FFFFFF;
      font-size: 16px;
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
import img_frontend from '@/assets/services/system_development/img_frontend.jpeg'
import img_backend from '@/assets/services/system_development/img_backend.jpeg'
import img_data_analysis from '@/assets/services/system_development/img_data_analysis.jpeg'
import img_embedded_system from '@/assets/services/system_development/img_embedded_system.jpeg'
import img_vegibus_system from '@/assets/work/system_development/vegibus/img_vegibus_system.png'
import img_mobilemover_app from '@/assets/work/system_development/mobilemover/img_mobilemover_app.png'
import img_trading_cover from '@/assets/services/trading/img_trading_cover.jpeg'
import img_pineapple_1 from '@/assets/work/trading/img_pineapple_1.jpeg'
import img_product_cover from '@/assets/services/product_design/img_product_cover.png'
import img_kizuna_1 from '@/assets/work/product_design/img_kizuna_1.png'
import img_commercial_design_cover from '@/assets/services/commercial_design/img_commercial_design_cover.jpeg'
import img_kimchi_1 from '@/assets/work/commercial_design/kimchi/img_kimchi_1.jpeg'
import img_power_creation_business_card_1 from '@/assets/work/commercial_design/power_creation/img_power_creation_business_card_1.jpeg'
import img_event_planning_cover from '@/assets/services/event_planning/img_event_planning_cover.jpeg'
import img_wood_workshop_1 from '@/assets/work/event_planning/img_wood_workshop_1.jpeg'
</script>