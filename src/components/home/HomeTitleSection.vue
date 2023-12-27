<script setup>
import titleSectionBackgroundImageUrl from '@/assets/image/home/background_homepage.png'
import imageCube from '@/assets/image/home/image_cube.png'
import imagePentagon from '@/assets/image/home/image_pentagon.png'
import imagKohakuAndSphere from '@/assets/image/home/image_kohaku-and-sphere.png'
</script>

<template>
  <CurveWrap>
    <div class="home__section home-title-section">
      <div class="home-title-section__title-box">
        <p class="font-0 home-title-section__title animation-gradient-text">設計驅動永續</p>
        <div class="home-title-section__comma animation-fade-in-delay">
          <CommaIcon color="'white'" />
        </div>
      </div>
      <div class="home-title-section__title-box">
        <p class="font-0 home-title-section__title animation-gradient-text">Design for Nature</p>
        <div class="home-title-section__comma animation-fade-in-delay">
          <CommaIcon color="'white'" />
        </div>
      </div>
      <p class="font-6 home-title-section__text animation-fade-in-background">
        我們致力於食農、工藝、社群和地方議題<br />
        由In-house的設計研究與工程技術團隊，持續實現對永續的無限可能
      </p>
      <img
        class="background-image home-title-section__background-image"
        :src="titleSectionBackgroundImageUrl"
      />
    </div>

    <div class="home-title-section__geometries animation-fade-in-background">
      <img
        class="home-title-section__geometry home-title-section__geometry--translucent"
        :src="imageCube"
        alt="imageCube"
      />
      <img
        class="home-title-section__geometry home-title-section__geometry--translucent"
        :src="imagePentagon"
        alt="imagePentagon"
      />
      <img
        class="home-title-section__geometry animation-rotation"
        :src="imagKohakuAndSphere"
        alt="imagKohakuAndSphere"
      />
      <img
        class="home-title-section__geometry home-title-section__geometry--translucent"
        :src="imagePentagon"
        alt="imagePentagon"
      />
    </div>
  </CurveWrap>
</template>

<style src="@/assets/scss/home/_home-title-section.scss" scoped></style>

<script>
import CommaIcon from '@/components/global/CommaIcon.vue'
import CurveWrap from '@/components/home/CurveWrap.vue'

export default {
  name: 'HomeTitleSection',
  components: {
    CommaIcon,
    CurveWrap
  }
}
</script>
