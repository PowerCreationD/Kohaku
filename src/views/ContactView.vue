<template>
  <div class="contact">
    <page-title>CONTACT</page-title>
    <div class="contact-wrap">
      <div class="intro">
        <h2 class="intro__title">承載傳統智慧，設計全新感受</h2>
        <article class="intro__desc">
          <p>
            歡迎和我們聊聊您的想法，協助我們了解您的產業需求與期望創造的價值．送出表單後，我們將會有專人與您接洽．期待與您一同合作！
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
        src: '/src/assets/image/global/image_amber.png',
        alt: 'contact us'
      }
    }
  }
}
</script>
