<template>
  <div class="about">
    <!-- * Header -->
    <page-title>ABOUT</page-title>

    <!-- * Intro -->
    <div class="intro">
      <div class="intro-tittle-and-logo">
        <div class="intro__title">
          <article>
            <p>
              琥白誕生於2021與2022之間<br />
              故事的開始是一群來自不同背景的青年<br />
              因為期望回歸根本的初心，於是扎根於臺灣<br />
              因為對於農業未來的想像，於是深耕於傳產
            </p>
          </article>
        </div>
        <div class="intro__logo">
          <img :src="logo.src" :alt="logo.alt" />
        </div>
      </div>
      <div class="intro-banner-and-desc">
        <div class="intro__banner">
          <img :src="banner.src" :alt="banner.alt" />
        </div>
        <div class="intro__desc">
          <article>
            <p>
              乘載文化底蘊的同時<br />
              也持續注入新興的能量與創意<br />
              結合地方與國際的思維<br />
              推動資訊與設計的揉和
            </p>
            <br />
            <p>
              從企劃到行銷、<br />
              從設計到開發、<br />
              從產地到產業、<br />
              從傳承到創新
            </p>
            <br />
            <p>
              以跨域整合的思維<br />
              串連起所有的端點<br />
              匯聚不同服務的影響力<br />
              翻轉價值
            </p>
          </article>
        </div>
      </div>
    </div>

    <!-- * Kohaku -->
    <div class="brand">
      <div class="brand__wrap">
        <h2 class="brand__name">琥白 Kohaku</h2>
        <article class="brand__desc">
          <p>
            琥珀，是液態的松脂，化石化的結晶，包裹著千萬年前的古生物遺跡，形成了動人的時光膠囊。我們猶如琥珀，以才能為基底，包覆著人們的想法，色調時而溫潤柔美、時而神秘幽邃，最終凝結成一顆顆獨一無二的寶石
          </p>
          <p>
            白，是留白，設計中空白未填滿的空間，也是能給予人喘息的空間。留白隱喻的並非取代人，而是讓人在沉澱中自由發揮，得以更好地思考與創造
          </p>
        </article>
        <div class="brand__amber">
          <img class="brand__amber--left-top" :src="amber.src" :alt="amber.alt" />
          <img class="brand__amber--right-top" :src="amber.src" :alt="amber.alt" />
          <img class="brand__amber--left-bottom" :src="amber.src" :alt="amber.alt" />
          <img class="brand__amber--right-bottom" :src="amber.src" :alt="amber.alt" />
        </div>
      </div>
    </div>

    <!-- * Milestone -->
    <milestone></milestone>
  </div>
</template>

<style src="@/assets/scss/about.scss" scoped></style>

<script>
import milestone from '@/components/about/Milestone.vue'
import pageTitle from '@/components/global/PageTitle.vue'
export default {
  components: { milestone, pageTitle },
  data() {
    return {
      banner: {
        src: '/src/assets/img/about/banner_image.jpg',
        alt: 'banner_image'
      },
      logo: {
        src: '/src/assets/img/about/logo_kohaku_small.png',
        alt: 'logo_kohaku'
      },
      amber: {
        src: '/src/assets/img/global/image_amber.png',
        alt: 'image_amber'
      }
    }
  }
}
</script>
