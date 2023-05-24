<template>
  <div class="service">
    <div id="service__side_navbar">
        <button class="navbar_button" v-for="service in getServiceNames" :key="service.id" @click="selectService(service.id)">
          {{ service.name }}
        </button>
    </div>
    <div id="service__main_content">
      <ServiceHeaderSection :headerData="dataToBeRendered"/>
      <div v-show="dataCard1.length" v-for="data in dataCard1" :key="data">
        <ServiceCardType1 :cardData="data"/>
        <div class="section__line"></div>
      </div>
      <div v-show="dataCard2.length" v-for="data in dataCard2" :key="data">
        <ServiceCardType2 :cardData="data"/>
        <div class="section__line" ></div>
      </div>
      <WorkExampleSection v-if="dataToBeRendered.works_example.length" :workData="dataToBeRendered.works_example"/>
    </div>
  </div>
</template>

<script>
import ServiceHeaderSection from "../components/service/ServiceHeaderSection.vue"
import ServiceCardType1 from "../components/service/ServiceCardType1.vue"
import ServiceCardType2 from "../components/service/ServiceCardType2.vue"
import WorkExampleSection from "../components/service/WorkExampleSection.vue"

export default {
  components: { ServiceCardType1, ServiceCardType2, WorkExampleSection, ServiceHeaderSection },
  data() {
    return {
      selectedService: "system_development",
      serviceData: [
        {
          "id": "system_development",
          "name": "系統設計 / 開發與維運",
          "description": "以 SaaS （Software as a Service）軟體服務出發，專注於提供客制化系統開發、跨系統整合、終端設備串接與開發服務，並提供資料分析導入服務，協助客戶洞悉自身產業、產出決策，找到商業上更上一層的突破口．",
          "content": [
            {
              "title": "系統開發",
              "services": [
                {
                  "subtitle": "前端開發",
                  "items": ["前端框架開發", "前端互動設計", "RWD 響應式網站"],
                  "img_url": "src/assets/service/system_development/img_frontend.jpeg"
                },
                {
                  "subtitle": "後端開發",
                  "items": ["資料庫設計與規劃", "API 開發 / 第三方 API 串接", "雲端整合部署"],
                  "img_url": "src/assets/service/system_development/img_backend.jpeg"
                }
              ]
            },
            {
              "title": "資料分析",
              "services": [
                {
                  "subtitle": "商業資料探勘",
                  "items": ["商業數據分析與可視化", "BI 工具導入", "資料收集、轉移與載入自動化"],
                  "img_url": "src/assets/service/system_development/img_data_analysis.jpeg"
                }
              ]
            },
            {
              "title": "設備開發",
              "services": [
                {
                  "subtitle": "嵌入式系統開發",
                  "items": ["物聯網裝置整合開發"],
                  "img_url": "src/assets/service/system_development/img_embedded_system.jpeg"
                }
              ]
            }
          ],
          "works_example": [
          {
            "title": "Vegibus 農產品電商系統",
            "img_url": "src/assets/works/system_development/vegibus/img_vegibus_system.png"
          },
          {
            "title": "Mobile Mover 自主行走機器人控制平台 (MM App)",
            "img_url": "src/assets/works/system_development/mobilemover/img_mobilemover_app.png"
          }]
        },
        {
          "id": "trading",
          "name": "國內 / 國際貿易服務",
          "description": "因應各地市場需求，考量地方飲食購買文化，定義最符合供需雙方之產品規格，將最好的食品供應給最需要的人。",
          "content": [
            {
              "title": "進出口貿易",
              "services": [
                {
                  "subtitle": "進出口單一窗口服務",
                  "items": ["報關手續代理", "貿易文件與法規協助", "市場調查與選品", "通路對接與媒合", "產品代理與行銷"],
                  "img_url": "src/assets/service/trading/img_trading_cover.png"
                }
              ]
            }
          ],
          "works_example": [
          {
            "title": "屏東台農17號金鑽鳳梨外銷日本",
            "img_url": "src/assets/works/trading/img_pineapple_1.jpeg"
          }]
        },
        {
          "id": "product_design",
          "name": "產品設計與量產開發",
          "description": "藉觀察與深談剖析未被留心的問題，以美學乘載機能，將不便利優雅轉譯為日常驚喜。發掘並了解使用者痛點，透過加深與產品互動上、視覺上連結所帶來的感受，提供更貼近使用者期待的設計。",
          "content": [
            {
              "title": "產品研發",
              "services": [
                {
                  "subtitle": "研發與設計服務",
                  "items": ["問題研究", "概念提案", "參與式設計過程", "產品外觀設計", "3D模型建構", "模型製作"],
                  "img_url": "src/assets/service/product_design/img_product_cover.png"
                }
              ]
            }
          ],
          "works_example": [
          {
            "title": "慕．廂",
            "img_url": "src/assets/works/product_design/img_kizuna_1.png"
          }]
        },
        {
          "id": "commmercial_design",
          "name": "品牌形象與視覺設計",
          "description": "整合每位客戶需求，為客戶品牌量身定製專屬設計，串連品牌與消費者之間的連結。",
          "content": [
            {
              "title": "商業設計",
              "services": [
                {
                  "subtitle": "視覺設計",
                  "items": ["品牌形象設計", "裝幀設計", "平面設計", "包裝設計", "網站介面設計"],
                  "img_url": "src/assets/service/commercial_design/img_commercial_design_cover.jpeg"
                }
              ]
            }
          ],
          "works_example": [
          {
            "title": "ニラたっぷりキムチ 韭菜泡菜包裝設計",
            "img_url": "src/assets/works/commercial_design/kimchi/img_kimchi_1.jpeg"
          }, 
          {
            "title": "創次方股份有限公司 名片設計",
            "img_url": "src/assets/works/commercial_design/power_creation/img_power_creation_business_card_1.jpeg"
          }]
        },
        {
          "id": "event_planning",
          "name": "企劃發想與活動策劃",
          "description": "從台灣大型專業展覽（工具機展、智慧城市展）起家，擁有主持人、設備、專業人員團隊統籌經驗，從需求討論至影音紀錄回顧皆可一手包辦。",
          "content": [
            {
              "title": "企劃活動",
              "services": [
                {
                  "subtitle": "活動策劃服務",
                  "items": ["專案流程優化", "活動內容企劃", "活動視覺及推廣品", "主持人、司儀及燈音廠商"],
                  "img_url": "src/assets/service/event_planning/img_event_planning_cover.jpeg"
                }
              ]
            }
          ],
          "works_example": []
        }
      ],
      dataToBeRendered: {
          "id": "system_development",
          "name": "系統設計 / 開發與維運",
          "description": "以 SaaS （Software as a Service）軟體服務出發，專注於提供客制化系統開發、跨系統整合、終端設備串接與開發服務，並提供資料分析導入服務，協助客戶洞悉自身產業、產出決策，找到商業上更上一層的突破口．",
          "content": [
            {
              "title": "系統開發",
              "services": [
                {
                  "subtitle": "前端開發",
                  "items": ["前端框架開發", "前端互動設計", "RWD 響應式網站"],
                  "img_url": "src/assets/service/system_development/img_frontend.jpeg"
                },
                {
                  "subtitle": "後端開發",
                  "items": ["資料庫設計與規劃", "API 開發 / 第三方 API 串接", "雲端整合部署"],
                  "img_url": "src/assets/service/system_development/img_backend.jpeg"
                }
              ]
            },
            {
              "title": "資料分析",
              "services": [
                {
                  "subtitle": "商業資料探勘",
                  "items": ["商業數據分析與可視化", "BI 工具導入", "資料收集、轉移與載入自動化"],
                  "img_url": "src/assets/service/system_development/img_data_analysis.jpeg"
                }
              ]
            },
            {
              "title": "設備開發",
              "services": [
                {
                  "subtitle": "嵌入式系統開發",
                  "items": ["物聯網裝置整合開發"],
                  "img_url": "src/assets/service/system_development/img_embedded_system.jpeg"
                }
              ]
            }
          ],
          "works_example": [
          {
            "title": "Vegibus 農產品電商系統",
            "img_url": "src/assets/works/system_development/vegibus/img_vegibus_system.png"
          },
          {
            "title": "Mobile Mover 自主行走機器人控制平台 (MM App)",
            "img_url": "src/assets/works/system_development/mobilemover/img_mobilemover_app.png"
          }]
      },
      dataCard1: [
        {
          "title": "系統開發",
          "services": [
            {
              "subtitle": "前端開發",
              "items": ["前端框架開發", "前端互動設計", "RWD 響應式網站"],
              "img_url": "src/assets/service/system_development/img_frontend.jpeg"
            },
            {
              "subtitle": "後端開發",
              "items": ["資料庫設計與規劃", "API 開發 / 第三方 API 串接", "雲端整合部署"],
              "img_url": "src/assets/service/system_development/img_backend.jpeg"
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
              "img_url": "src/assets/service/system_development/img_data_analysis.jpeg"
            }
          ]
        },
        {
          "title": "設備開發",
          "services": [
            {
              "subtitle": "嵌入式系統開發",
              "items": ["物聯網裝置整合開發"],
              "img_url": "src/assets/service/system_development/img_embedded_system.jpeg"
            }
          ]
        }
      ]
    }
  },
  methods: {
    selectService(id) {
      const result = this.serviceData.filter(data => data["id"] === id)
      this.dataToBeRendered = result[0]
      this.dataCard1 = result[0].content.filter(data => data["services"].length == 2)
      this.dataCard2 = result[0].content.filter(data => data["services"].length == 1)
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
    },
    getRenderData() {
      // return result
    }
  },
  mounted() {
    // this.dataToBeRendered = this.serviceData[0]
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Ubuntu', Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.service {
    display: flex;
    flex-direction: row;
    margin: 140px auto;
    width: 1200px;
}
#service__side_navbar {
    width: 20%;
    display: flex;
    flex-direction: column;

}
#service__main_content {
    width: 80%;
}
.navbar_button {
  background-color: #FFFFFF;
  font-size: 16px;
  padding: 12px 0px;
  margin-bottom: 6px;
  width: 220px;
  border: none;
  text-align: left;
  cursor: pointer;
  .active {
    color: #E6AE4A;
    font-weight: bold;
    border-top: 1px solid #E6AE4A;
    border-bottom: 1px solid #E6AE4A;
  }
}
.navbar_button:hover {
  color: #E6AE4A;
  font-weight: bold;
  border-top: 1px solid #E6AE4A;
  border-bottom: 1px solid #E6AE4A;
}
.section__line {
  width: 924px;
  border-bottom: 1px solid #777777;
  margin: 50px 0;
}
</style>