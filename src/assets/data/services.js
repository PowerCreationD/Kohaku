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

const serviceItem = {
  system: {
    title: '系統設計與全端開發',
    text: '以 SaaS （Software as a Service）軟體服務出發，提供產業系統客製、跨系統整合服務，串接系統及終端設備，協助收集數據幫助決策，優化流程提升供銷效能。',
    items: [
      {
        title: '前端設計開發',
        icon: icon_frontend,
        list: ['前端框架開發', '前端互動設計', 'RWD 響應式網站']
      },
      {
        title: '後端整合部署',
        icon: icon_backend,
        list: [
          '資料庫設計與規劃',
          'API 開發 / 第三方 API 串接',
          '雲端架構設計',
          'CI / CD',
          'CMS開發'
        ]
      },
      {
        title: '應用程式開發',
        icon: icon_app,
        list: ['漸進式網站應用程式 (PWA)', '跨平台 (Hybrid) 應用程式開發']
      },
      {
        title: '商業資料探勘與分析',
        icon: icon_data,
        list: ['商業數據分析與可視化', 'BI 工具導入', '資料收集、轉移與載入自動化']
      },
      {
        title: '軟硬體整合設計',
        icon: icon_integration,
        list: ['物聯網裝置開發', '嵌入式系統']
      }
    ],
    tools: [
      {
        title: '前端框架',
        list: ['Vue', 'React', 'jQuery']
      },
      {
        title: '前端 UI 框架',
        list: ['Vuetify', 'PrimeVue', 'BootstrapVue']
      },
      {
        title: '前端互動及視覺化',
        list: ['D3.js', 'p5.js', 'Three.js', 'Chart.js']
      },
      {
        title: 'Server端開發工具',
        list: ['Python', 'Flask', 'Django', 'NodeJS']
      },
      {
        title: '資料庫開發',
        list: ['MySQL', 'PostgreSQL', 'MongoDB']
      },

      {
        title: 'API 開發',
        list: ['客製化 API 開發', '整合串接 金流/物流 API', '整合串接 ERP/CRM API']
      },
      {
        title: 'App 開發',
        list: ['React Native 開發 (Hybrid)', 'Ionic 開發 (Hybrid)']
      },
      {
        title: '雲端架構部署',
        list: ['Amazon Web Services (AWS)']
      },
      {
        title: '部署工具',
        list: ['Docker']
      },
      {
        title: '網站數據分析工具',
        list: ['Google Analytics']
      },
      {
        title: '第三方應用開發',
        list: ['LINE BOT', 'Google App Script']
      }
    ]
  },
  design: {
    title: '商業設計與原型製作',
    text: `由美學切入探究，重新詮釋被忽視的不便之處，展現出優雅的產品與服務。
    一頁視覺、一件包裝，甚至一套服務體驗，都將是您精確地傳達願景的載體。

    我們的著重於探討與人之間的默契連結，透過設計轉譯，讓您的客戶對企業願景感同身受，並增加對產品、服務的信任感。`,
    items: [
      {
        title: '商業視覺設計',
        icon: icon_visual,
        list: ['裝幀設計', '插畫設計', '平面排版與美術', '永續包裝設計']
      },
      {
        title: '企業識別系統',
        icon: icon_corporate,
        list: ['VI 視覺識別', 'BI 行為識別', 'MI 理念識別']
      },
      {
        title: '複合媒材與產品設計',
        icon: icon_media_product,
        list: ['產品外觀設計', '3D模型建構', '模型製作', '多媒材應用']
      },
      {
        title: '空間展示設計',
        icon: icon_space,
        list: ['空間視覺', '攤位設計', '展場互動設計']
      },
      {
        title: '介面與互動設計',
        icon: icon_interface,
        list: ['人機介面設計', '網頁互動設計']
      }
    ],
    tools: []
  },
  content: {
    title: '內容設計與活動統籌',
    text: '以永續為核心，搭配設計驅動轉型與數位策略，重視轉換率與內容，打造人事物更高層次的形象、溝通與體驗，使產業的面貌煥然一新。',
    items: [
      {
        title: '永續與循環企劃',
        icon: icon_sustainable,
        list: ['ESG減碳規劃', '永續供應鏈', '循環經濟策略']
      },
      {
        title: '服務與體驗設計',
        icon: icon_service_experience,
        list: ['使用者研究', '客戶體驗', '市場與數據分析']
      },
      {
        title: '課程與活動設計',
        icon: icon_course_event,
        list: ['技術課程規劃', '設計工作坊']
      },
      {
        title: '展覽策劃與執行',
        icon: icon_exhibition,
        list: ['品牌形象展演', '展覽互動體驗']
      },
      {
        title: '數位轉型與再造',
        icon: icon_digital_transformation,
        list: ['數位典藏與轉譯', '數位工具評估與導入', '作業流程轉型']
      }
    ],
    tools: []
  }
}

export default serviceItem
