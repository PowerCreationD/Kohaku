<template>
  <div class="about">
    <!-- * Header -->
    <page-header>ABOUT</page-header>

    <!-- * Intro -->
    <div class="intro">
      <div class="intro-tittle-and-logo">
        <div class="intro__title">
          <article>
            <p>琥白誕生於2021與2022之間</p>
            <p>故事的開始是一群來自不同背景的青年</p>
            <p>因為期望回歸根本的初心，於是扎根於臺灣</p>
            <p>因為對於農業未來的想像，於是深耕於傳產</p>
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
            <p>乘載文化底蘊的同時</p>
            <p>也持續注入新興的能量與創意</p>
            <p>結合地方與國際的思維</p>
            <p>推動資訊與設計的揉和</p>

            <p>從企劃到行銷、</p>
            <p>從設計到開發、</p>
            <p>從產地到產業、</p>
            <p>從傳承到創新</p>

            <p>以跨域整合的思維</p>
            <p>串連起所有的端點</p>
            <p>匯聚不同服務的影響力</p>
            <p>翻轉價值</p>
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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
* {
  font-family: 'Ubuntu', sans-serif;
  padding: 0;
  margin: 0;
}
$gray: #777;

.about {
  width: min(1200px, 90%, calc(100% - 32px));
  margin: auto;
  padding: 120px 0 140px 0;
}
h1,
h2 {
  font-size: 36px;
}

@media screen and (max-width: 767px) {
  p {
    font-size: 14px;
    line-height: 20px;
  }
  .about {
    padding: 56px 0;
  }
  h1,
  h2 {
    font-size: 22px;
  }
}
// --------------------
.intro {
  display: flex;
  flex-direction: column;
  margin-bottom: 96px;
  margin-top: 60px;
  > div {
    display: flex;

    &:first-child {
      margin-bottom: 56px;
    }
  }
  &__title {
    flex-grow: 1;
  }
  &__logo {
    height: 88px;
    img {
      height: 100%;
    }
  }
  &__banner {
    flex-grow: 1;
    margin-right: 56px;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  &__desc {
    width: auto;
    min-width: 27%;
    flex-shrink: 0;
  }
}

@media screen and (max-width: 767px) {
  .intro {
    margin: 0;
    > div {
      flex-wrap: wrap;

      &:first-child {
        margin-bottom: 16px;
      }
    }
    &-tittle-and-logo {
      flex-direction: column-reverse;
    }
    &__logo {
      align-self: flex-end;
      margin-bottom: 24px;
    }
    &__banner {
      margin-right: 0;
      // position: absolute;
      // left: 0;
    }
    &__desc {
      margin: 36px auto;
      text-align: center;
    }
  }
}

.brand {
  border-top: 1px solid $gray;
  border-bottom: 1px solid $gray;
  overflow: hidden;
  position: relative;
  &__wrap {
    width: min(65%, 786px);
    margin: auto;
    height: 512px;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
  }
  &__name {
    margin-bottom: 20px;
  }
  &__desc {
    text-align: justify;
  }
  &__amber {
    img {
      position: absolute;
    }
    &--left-top {
      width: 315px;
      transform: rotate(145.33deg);
      top: -167px;
      left: -26px;
    }
    &--right-top {
      width: 218px;
      transform: rotate(39.77deg);
      right: 10%;
      top: -155px;
    }
    &--left-bottom {
      width: 281px;
      transform: rotate(39.77deg);
      left: 20%;
      bottom: -193px;
    }
    &--right-bottom {
      width: 304px;
      right: 0;
      bottom: 13%;
      z-index: -1;
    }
  }
}

@media screen and (max-width: 767px) {
  .brand {
    &__wrap {
      width: 100%;
      height: 400px;
    }
  }
}
</style>

<script>
import milestone from '../components/about/milestone.vue'
import pageHeader from '../components/global/PageHeader.vue'
export default {
  components: { milestone, pageHeader },
  data() {
    return {
      banner: {
        src: '/src/assets/about/banner_image.jpg',
        alt: 'banner_image'
      },
      logo: {
        src: '/src/assets/about/logo_kohaku_small.png',
        alt: 'logo_kohaku'
      },
      amber: {
        src: '/src/assets/about/image_amber.png',
        alt: 'image_amber'
      }
    }
  }
}
</script>
