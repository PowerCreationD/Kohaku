<script setup>
import imgAmber from '@/assets/image/global/image_amber.png'
</script>

<template>
  <div class="member">
    <page-title>MEMBER</page-title>
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

<style src="@/assets/scss/member.scss" scoped></style>

<script>
import pageTitle from '@/components/global/PageTitle.vue'
import memberCard from '@/components/member/MemberCard.vue'
export default {
  components: { pageTitle, memberCard },
  data() {
    return {
      windowWidth: 0,
      amber: {
        src: imgAmber,
        alt: 'image_amber'
      },
      members: [
        {
          id: 'charles',
          name: '凱元 Charles',
          position: '執行長',
          intro: `畢業自日本東京大學，研究領域從資訊到設計再到供應鏈，雖然拿到博士學位，相較於停留在一個領域，更熱衷跨領域的串連碰撞，步履不停的探索知識的疆界。

世界太大，繞了一圈回歸台灣後想要為自然與土地做設計，從結構對社會的根本問題提出解方，並把世界的資金與契機帶進台灣。`,
          skills: ['食農供應鏈', '人機互動', '國際企劃', '系統設計', '水瓶座邏輯']
        },
        {
          id: 'hannah',
          name: '詩涵 Hannah',
          position: '全端工程師',
          intro:
            '師大資工人，巨蟹座( ´ ▽ ` )ﾉ' +
            `。成為一名專業的工程師後，貪心的想開發更多的角色，將工程思維迭代到各個領域，帶來的成效都讓人驚喜。

相信走過的地方都是好風景，彼此信賴的旅伴能一起爬更高的山。喜歡琥白的大家牽絆緊密，一次又一次的為彼此的成果努力、創造超乎預期的成品。`,
          skills: [
            '網站建置',
            '資料庫設計',
            '數據分析',
            '把問題轉成解方',
            '星座小老師',
            '把你的問題變成驚喜'
          ]
        },
        {
          id: 'arthur',
          name: '柏維 Arthur',
          position: '全端工程師',
          intro: `台灣科大電子系，掌握前端、後端、ROS2開發技術和硬體設計整合，專門執行自主移動機器人（AMR）操控與平台開發。享受用雙手創造的過程並熱衷持續優化，打造使用者更合用、愛用的產品。

在工程之外是一位文學愛好者，也是村上春樹的忠實書迷，也因此對藝術、設計多有共感，結合機電整合專長參與多項小型科技藝術策展。`,
          skills: [
            '前端框架開發',
            '資料庫設計',
            'Web API 建構與設計',
            'ROS2',
            '文科與理組雙作業系統'
          ]
        },
        {
          id: 'albert',
          name: '書彥 Albert',
          position: '全端工程師',
          intro: `業主愛用的台科資工人，精通多種前後台製作技術和Dual Max的熬夜技能。人生最大的樂趣是發現知識的盲區再逐個擊破，追求用更精準的蓋出完美的程式。

加入琥白後接觸到設計領域，大腦直接開啟新世界，同時發現資工的更多可能。最喜歡的動物是獨角獸，希望綜合這兩個領域後的自己也變成獨特又充滿潛力的獨角獸🦄。`,
          skills: ['前後端工程', '伺服器管理與架設', '資料庫設計', '用肝發電熬夜永動']
        },

        {
          id: 'lily',
          name: '子涵 Lily',
          position: '硬體工程師',
          intro: `平時都在打C++但跟它的關係時常Segmentation Fault。不管是打Code、打球或做研究，喜歡為生活設定很多小小挑戰，於是把隨口聊出來的TUI概念認真寫上了了Ubicomp Demo Article，也更確定自己熱衷於EDA設計與機構。

夢想是座位旁的冰箱會自動孵出想吃的各種食物，還有一個能到世界各地的任意門。`,
          skills: ['硬體設計', '軟體開發', '我不是在打球就是在打Code']
        },
        {
          id: 'jozie',
          name: '趯瑾 Jozie',
          position: '前端工程師',
          intro: `認為前端的靈魂在於把設計師的美感跟工程師的邏輯溫柔轉譯，協調理性與感性、拿捏互動的平衡與可能性。

喜歡被怪東西可愛到那種驚喜感，也熱愛創造驚奇，希望帶來更多有趣的使用者體驗。最近的願望是腦海裡的貓貓3D化，工作到一半時會來鍵盤邊蹭摸摸。`,
          skills: [
            '前端互動設計',
            '前端框架開發',
            '響應式網頁開發',
            '發現好聽的歌',
            '獨立音樂探勘者'
          ]
        },
        {
          id: 'arien',
          name: '采蘋 Arien',
          position: '商業設計師',
          intro: `從復興到台科的純血設計人，平面視覺是看家本領也抓住UIUX的跨域趨勢，養成以客戶視角分析問題的研究能力。能說流利的日文，也是對日式的內斂多一分理解，更細心的捕捉溝通中傳達的需求與期望。

在琥白把敏捷精神融入設計流程，與工程團隊默契絕佳，對資訊產品(與甲方)瞬息萬變的需求見招拆招。有個重要的靈感罐罐收集日常，讓推出的每一份設計總是溫暖、驚喜、直指人心。`,
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
          intro: `臺科大設計系，具備工業設計專長更熱愛工藝，擅長的風格是日本設計沉靜、簡練的美感和細節巧思。平時操控Rhino曲面建模、(難得)放假的時間喜歡拿牛皮敲敲縫縫。

為了追求更好常常徹夜通宵，但模糊的構想被賦予條件、一一成型的瞬間，感動實在太多，讓自己在設計路上痛並快樂著地繼續前行。`,
          skills: ['產品設計', '3D建模渲染', '模型製作', '日文翻譯']
        },
        {
          id: 'brooke',
          name: '采倫 Brooke',
          position: '內容企劃師',
          intro: `對新事物、新契機興趣濃厚，熱愛能開眼界的國際商會與展演，有流利的英語能力和衝上前探問的勇氣，抓住世界的最新快訊。喜歡的腦力遊戲是潛在機會連連看，湊出1+1>2的組合總是快樂無比。希望將簡單的日常轉化成不平凡的記憶。

在琥白練習對工程師與設計師的跨域溝通力，並擔任公關執行精準說話與靜觀其變的判斷力。`,
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
      if (width > 600) {
        return 10
      } else {
        return 20
      }
    }
  }
}
</script>
