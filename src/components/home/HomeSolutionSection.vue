<script setup>
import systemWeb from '@/assets/image/home/image_solution-system-web.jpg'
import systemApp from '@/assets/image/home/image_solution-system-app.jpg'
import designWeb from '@/assets/image/home/image_solution-design-web.jpg'
import designApp from '@/assets/image/home/image_solution-design-app.jpg'
import contentWeb from '@/assets/image/home/image_solution-content-web.jpg'
import contentApp from '@/assets/image/home/image_solution-content-app.jpg'
</script>
<template>
  <div class="home__section solution-section" :style="backgroundStyle">
    <div class="solution-section__carousel-control">
      <div class="carousel-control carousel-control--prev" @click="prevHandler">
        <LeftArrowIcon class="carousel-control__arrow-icon"></LeftArrowIcon>
      </div>
      <div class="carousel-control carousel-control--next">
        <RightArrowIcon class="carousel-control__arrow-icon" @click="nextHandler"></RightArrowIcon>
      </div>
    </div>
    <div class="solution-section__carousel">
      <div class="carousel-section carousel-section-top">
        <h2 class="carousel-section-top__title font-1 scroll-animation-slide-and-fade-in">SOLUTION</h2>
        <div class="carousel-section-top__menu">
          <div class="carousel-section-top__menu-divider">|</div>
          <template v-for="(item, idx) in solution" :key="item.title">
            <span
              class="carousel-section-top__menu-text"
              :class="idx == index ? 'font-6' : 'font-7'"
              >{{ item.title }}</span
            >
            <div class="carousel-section-top__menu-divider">|</div>
          </template>
        </div>
      </div>
      <div class="carousel-section carousel-section-middle">
        <div class="carousel-section-middle__wave-and-title">
          <WaveImage
            :color="mobileCheck.value ? 'gold' : 'white'"
            class="carousel-section-middle__wave"
          />
          <h3 class="carousel-section-middle__title font-1 scroll-animation-slide-and-fade-in">{{ solution[index].title }}</h3>
        </div>
        <pre class="carousel-section-middle__text font-7 scroll-animation-slide-and-fade-in">{{
          solution[index].text.join('\n')
        }}</pre>
      </div>
      <div class="carousel-section carousel-section-bottom">
        <button class="button button--quaternary" @click="viewService()">查看服務</button>
        <div class="carousel-section-bottom__keywords-container">
          <span
            class="carousel-section-bottom__keyword font-7"
            v-for="item in solution[index].keywords"
            :key="item"
            >#{{ item }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/scss/home/_home-solution-section.scss"></style>

<script>
import LeftArrowIcon from '@/components/global/LeftArrowIcon.vue'
import RightArrowIcon from '@/components/global/RightArrowIcon.vue'
import WaveImage from '@/components/global/WaveImage.vue'
import { mobileCheckSymbol } from '@/App.vue'

export default {
  name: 'HomeSolutionSection',
  components: {
    LeftArrowIcon,
    RightArrowIcon,
    WaveImage
  },
  inject: {
    mobileCheck: mobileCheckSymbol
  },
  data() {
    return {
      index: 1,
      solution: [
        {
          title: '系統設計與全端開發',
          text: ['客製資訊系統導入產業', '數位產品服務全端開發'],
          keywords: [
            '前端設計開發',
            '後端整合部署',
            '商業資料探勘',
            '軟硬體整合設計',
            '應用程式開發'
          ],
          webImage: systemWeb,
          appImage: systemApp
        },
        {
          title: '商業設計與原型製作',
          text: ['美學轉譯優雅品牌形象', '量身定制精準傳達願景'],
          keywords: [
            '商業視覺設計',
            '企業識別系統',
            '空間展示設計',
            '介面與互動設計',
            '複合媒材與產品設計'
          ],
          webImage: designWeb,
          appImage: designApp
        },
        {
          title: '內容設計與活動統籌',
          text: ['以設計研究和永續為核心', '重視實質效益的策略創意'],
          keywords: [
            '永續與循環企劃',
            '服務與體驗設計',
            '課程與活動設計',
            '展覽策劃與執行',
            '數位轉型與再造'
          ],
          webImage: contentWeb,
          appImage: contentApp
        }
      ]
    }
  },
  methods: {
    prevHandler() {
      this.index == 0 ? (this.index = this.solution.length - 1) : (this.index -= 1)
    },
    nextHandler() {
      this.index == this.solution.length - 1 ? (this.index = 0) : (this.index += 1)
    },
    viewService() {
      let type = ''
      switch (this.index) {
        case 0:
          type = 'system'
          break
        case 1:
          type = 'design'
          break
        case 2:
          type = 'content'
          break
        default:
          break
      }

      this.$router.push({
        name: 'Services',
        params: { type: type }
      })
    }
  },
  computed: {
    backgroundStyle() {
      const backgrounds = {
        0: this.mobileCheck.value ? systemApp : systemWeb,
        1: this.mobileCheck.value ? designApp : designWeb,
        2: this.mobileCheck.value ? contentApp : contentWeb
      }

      return {
        backgroundImage: `url(${backgrounds[this.index]})`
      }
    }
  }
}
</script>
