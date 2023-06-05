<script setup>
import imgAmber from '@/assets/image/global/image_amber.png'
</script>

<template>
  <div class="contact">
    <page-title>CONTACT</page-title>
    <div class="contact-wrap">
      <div class="intro">
        <h2 class="intro__title">
          歡迎與琥白分享你的天馬行空，<br />
          我們將為您從微小的點子打造亮眼解方！
        </h2>
        <article class="intro__desc">
          <p>
            來信說明您的產業需求與價值願景，<br />
            我們會儘速與您聯繫！
          </p>
        </article>
        <img class="intro__background" :src="img.src" :alt="img.alt" />
      </div>
      <contact-form></contact-form>
    </div>
  </div>
</template>

<style src="@/assets/scss/contact.scss" scoped></style>

<script>
import pageTitle from '../components/global/PageTitle.vue'
import contactForm from '../components/contact/ContactForm.vue'
export default {
  components: { pageTitle, contactForm },
  data() {
    return {
      img: {
        src: imgAmber,
        alt: 'contact us'
      }
    }
  }
}
</script>
