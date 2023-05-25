<template>
  <div class="member">
    <page-header>MEMBER</page-header>
    <div class="member-wrap">
      <template v-for="person in members" :key="person.id">
        <member-card :person="person"></member-card>
      </template>
    </div>
    <div class="ambers">
      <img v-for="n in amberNum" :key="n" :src="amber.src" :alt="amber.alt" :class="'amber-' + n" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
* {
  font-family: 'Ubuntu', sans-serif;
  padding: 0;
  margin: 0;
}
$gray: #777;

.member {
  width: min(1200px, 90%, calc(100% - 32px));
  margin: auto;
  padding: 120px 0;
  position: relative;
}
:global(div#app) {
  overflow: hidden;
}
// --------------------

// member
.member-wrap {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 56px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 36px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 56px;
  }
}

// amber
.ambers img {
  position: absolute;
  z-index: -1;
  opacity: 0.4;
}

@for $i from 1 through 20 {
  .amber-#{$i} {
    left: calc((random(140) - 20) * 1%);
    top: calc(random(100) * 1%);
    width: random(4) * 100px;
  }
}
</style>

<script>
import pageHeader from '../components/global/PageHeader.vue'
import memberCard from '../components/member/MemberCard.vue'
export default {
  components: { pageHeader, memberCard },
  data() {
    return {
      windowWidth: 0,
      amber: {
        src: '/src/assets/global/image_amber.png',
        alt: 'image_amber'
      },
      members: [
        {
          id: 'charles',
          name: '凱元 Charles',
          position: '執行長',
          intro:
            '畢業自日本東京大學農學生命科學研究科，從資訊到設計再到供應鏈，雖然拿到博士學位，卻一直沒停留在一個領域。想要為自然做設計，發現社會的根本問題，然後把世界的錢賺進台灣。',
          skills: ['食農供應鏈', '人機互動', '國際企劃', '系統設計', '水瓶座邏輯']
        },
        {
          id: 'hannah',
          name: '詩涵 Hannah',
          position: '全端工程師',
          intro:
            '巨蟹座( ´ ▽ ` )ﾉ。畢業於師大資訊工程系，不想只是一個工程師，相信走過路過的地方都會是好風景，但最重要的還是一起走下去的人。因為感情好，所以有品質，因為有品質，所以感情好。',
          skills: ['網站建置', '資料庫設計', '數據分析', '把問題轉成解方', '星座小老師']
        },
        {
          id: 'arthur',
          name: '柏維 Arthur',
          position: '全端工程師',
          intro:
            '臺灣科技大學電子工程系畢業．具備前端、後端、ROS2 開發經驗，參與過自主移動機器人（AMR）操控平台開發．喜歡一項產品透過自己的雙手被創造出來，並且有使用者喜歡使用它．在工程領域之外，是一位村上春樹的忠實讀者。',
          skills: ['前端框架開發', '資料庫設計', 'Web API 建構與設計', 'ROS2']
        },
        {
          id: 'albert',
          name: '書彥 Albert',
          position: '全端工程師',
          intro: `畢業於台科資工系，並有多個不同技術的前後台製作經驗。人生的目標就是不斷補足不足的知識，吸收新的酷東西，再將之應用到我的作品中！對於所做的東西，也會追求做到好、做到完美！
            從以前到現在都在資工的世界打滾，近期開始碰觸到設計，希望能成為一個資工設計雙標仔。喜歡吃辣、熬夜、獨角獸。`,
          skills: ['前後端工程', '伺服器管理與架設', '資料庫設計']
        },

        {
          id: 'lily',
          name: '子涵 Lily',
          position: '硬體工程師',
          intro:
            '電機系背景，在Ubicomp發過TUI相關的demo article，之中負責機構的連接及設計（唯一跟硬體最相關的經歷？）平時都在打C++但跟他的關係時常segmentation fault。只要有趣，無論簡單還是困難的事情都想試試看！夢想能有一個打開就能吃到想吃食物的冰箱跟打開就能去世界各地的門。',
          skills: ['硬體設計', '軟體開發']
        },
        {
          id: 'jozie',
          name: '趯瑾 Jozie',
          position: '前端工程師',
          intro:
            '透過理性的程式語言，感性地詮釋設計師的美感理念，培養互動性思維，希望帶來更有趣的使用者體驗。夢想是鍵盤上有貓。',
          skills: ['網頁切版', '前端互動設計', '前端框架開發', '響應式網頁開發', '發現好聽的歌']
        },
        {
          id: 'arien',
          name: '采蘋 Arien',
          position: '商業設計師',
          intro:
            '擅長在日常生活中尋找靈感儲存，擁有中/日語、跨域溝通能力，喜歡以客戶角度出發分析問題，並利用設計及溝通能力與客戶一起尋找出最適合且獨一無二的良方。',
          skills: [
            '品牌形象',
            '平面設計',
            '網站介面設計',
            '裝幀設計',
            '活動視覺設計',
            '日文溝通與翻譯'
          ]
        },
        {
          id: 'ivy',
          name: '逸青 Ivy',
          position: '商業設計師',
          intro: `細膩的魂系設計師。秉持親身體驗、鍛鍊經驗的方式理解使用者思維與真實問題，並邀請參與設計過程，找出雙贏解方。
擅長替他人理清思緒，並用文字力、設計眼，對「就是」提出直指人心的新解。平時逐靈感而居，凌晨三點的咖啡廳水草最盛，經常放牧於此。`,
          skills: ['參與式設計', '概念共構', '產品設計', '視覺設計', '跨域企劃']
        },
        {
          id: 'lishin',
          name: '立心 Lishin',
          position: '產品設計師',
          intro:
            '台灣科技大學設計系畢業，喜歡手做相關的事物，在構想與執行的過程裡痛並快樂的持續於設計路上模索中。',
          skills: ['產品設計', '3D建模渲染', '模型製作', '日文翻譯']
        },
        {
          id: 'brooke',
          name: '采倫 Brooke',
          position: '內容企劃師',
          intro:
            '曾在各大展覽館遊走，穿梭國際間大小展演、商會，擁有中/英語、跨域溝通能力，希望將每個簡單的日常事務轉化成不平凡的記憶。',
          skills: ['服務設計', '資料規劃', '內容企劃', '活動執行']
        }
      ]
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    }
  },
  computed: {
    amberNum() {
      let width = this.windowWidth
      if (width > 1000) {
        return 10
      } else if (width > 600) {
        return 15
      } else {
        return 20
      }
    }
  }
}
</script>
