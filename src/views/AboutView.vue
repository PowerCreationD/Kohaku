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
            <p>{{ $t('about.description.introduction') }}</p>
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
            <p>{{ $t('about.description.mission_values') }}</p>
          </article>
        </div>
      </div>
    </div>

    <!-- * Kohaku -->
    <div class="brand">
      <div class="brand__wrap">
        <h2 class="brand__name">{{ $t('about.brand.name') }}</h2>
        <article class="brand__desc">
          <p>{{ $t('about.brand.meaning') }}</p>
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
