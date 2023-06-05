<script setup>
import imgAmber from '@/assets/image/global/image_amber.png'
import imgLogo from '@/assets/image/about/logo_kohaku_small.png'
import imgBanner from '@/assets/image/about/banner_image.jpg'
</script>

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
            琥珀，是液態的松脂，化石化的結晶，包裹千萬年前的生命，形成動人的時光膠囊。 <br />
            白，是設計中的留白，未被填滿而包容一切的自由。
          </p>
          <br />
          <p>
            在琥白，才能和創意自在流動，去包裹一個個初出的想法，
            幾經高壓凝結成獨一無二的寶石，綻放或柔美、或奪目的輝光。
            這是一處孵夢之地，邀請你一起野放天馬行空的想法，發展那些大膽的可能。
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
        src: imgBanner,
        alt: 'banner_image'
      },
      logo: {
        src: imgLogo,
        alt: 'logo_kohaku'
      },
      amber: {
        src: imgAmber,
        alt: 'image_amber'
      }
    }
  }
}
</script>
