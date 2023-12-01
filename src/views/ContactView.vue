<template>
  <div class="contact">
    <page-title>CONTACT</page-title>
    <div class="contact-background-box">
      <div class="contact-wrap">
        <div class="intro">
          <h2 class="intro__title font-3">
            {{ $t('contact.introduction.title') }}
          </h2>
          <article class="intro__desc font-7">
            {{ $t('contact.introduction.description') }}
          </article>
        </div>
        <contact-form></contact-form>
      </div>
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
    return {}
  }
}
</script>
