<script setup>
import imgAmber from '@/assets/image/global/image_amber-circle.png'
import imgLogo from '@/assets/image/global/logo_kohaku-small-white.png'
import videoSrc from '@/assets/image/about/animation_radio-move.mp4'
</script>

<template>
  <div class="about">
    <!-- * Header -->
    <page-title>ABOUT</page-title>

    <!-- * Intro -->
    <div class="intro show-on-scroll">
      <article class="intro__desc">
        <p class="font-7 scroll-animation-slide-and-fade-in">
          {{ $t('about.description.introduction') }}
        </p>
      </article>

      <video class="intro__video scroll-animation-slide-and-fade-in" width="320" height="240" type="video/mp4" autoplay muted loop>
        <source :src="videoSrc" />
      </video>

      <article class="intro__desc">
        <p class="font-7 scroll-animation-slide-and-fade-in">
          {{ $t('about.description.mission_values') }}
        </p>
      </article>
    </div>

    <!-- * Kohaku -->
    <div class="brand-section show-on-scroll">
      <div class="brand-wrap">
        <img class="brand-wrap__logo scroll-animation-slide-and-fade-in" :src="imgLogo" alt="kohaku" />
        <h2 class="brand-wrap__name font-1 scroll-animation-slide-and-fade-in">
          琥白（Kohaku）
        </h2>
        <article class="brand-wrap__desc scroll-animation-slide-and-fade-in">
          <p class="font-7">{{ $t('about.brand.text') }}</p>
        </article>
      </div>
      <div class="amber-wrap">
        <img :src="imgAmber" alt="amber" class="amber-wrap__amber amber-wrap__amber--left" />
        <img :src="imgAmber" alt="amber" class="amber-wrap__amber amber-wrap__amber--right" />
      </div>
    </div>

    <!-- * Milestone -->
    <milestone class="show-on-scroll"></milestone>
  </div>
</template>

<style src="@/assets/scss/about/about.scss" scoped></style>

<script>
import milestone from '@/components/about/Milestone.vue'
import pageTitle from '@/components/global/PageTitle.vue'
export default {
  components: { milestone, pageTitle },
  data() {
    return {}
  }
}
</script>
