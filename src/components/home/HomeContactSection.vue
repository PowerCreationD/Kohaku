<script setup>
import photoGroup from '@/assets/image/home/image_group-photo.jpg'
import imgAmber from '@/assets/image/global/image_amber.png'
</script>

<template>
  <div class="home__section contact-section">
    <div class="contact-section__photo-container" v-show="!mobileCheck.value">
      <img :src="photoGroup" alt="group image" class="contact-section__photo" />
    </div>
    <div class="contact-section__info-container">
      <div class="contact-section__wave-and-title">
        <WaveImage :color="'gold'" class="contact-section__wave" />
        <h2 class="contact-section__title font-1 scroll-animation-slide-and-fade-in">CONTACT US</h2>
      </div>
      <img
        v-show="mobileCheck.value"
        :src="photoGroup"
        alt="group image"
        class="contact-section__photo"
      />
      <p class="contact-section__slogan font-3 scroll-animation-slide-and-fade-in">從聯繫開始，拓展永續的無限可能！</p>
      <pre class="contact-section__text font-7 scroll-animation-slide-and-fade-in">
→ 有想法？告訴我們！
→ 有預算？交給我們！
→ 有目標？一起實現吧！</pre
      >

      <router-link to="/contact">
        <button class="button--primary button--primary-round contact-section__button">
          聯絡我們
        </button>
      </router-link>

      <img
        :src="imgAmber"
        alt="amber"
        class="contact-section__amber contact-section__amber--left"
      />
      <img
        :src="imgAmber"
        alt="amber"
        class="contact-section__amber contact-section__amber--right"
      />
    </div>
  </div>
</template>

<style src="@/assets/scss/home/_home-contact-section.scss" scoped></style>

<script>
import WaveImage from '@/components/global/WaveImage.vue'
import { mobileCheckSymbol } from '@/App.vue'

export default {
  name: 'HomeContactSection',
  components: { WaveImage },
  inject: {
    mobileCheck: mobileCheckSymbol
  }
}
</script>
