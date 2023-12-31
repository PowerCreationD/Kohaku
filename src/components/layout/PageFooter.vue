<script setup>
import IconFB from '@/assets/image/global/icon_facebook.png'
</script>
<template>
  <div class="footer">
    <KohakuAndPCLogo class="footer__logo" />
    <div class="footer__navigation-link-section">
      <template v-if="isMobileDevice">
        <div class="footer__navigation-link-row">
          <template
            v-for="(navigationLink, index) in firstHalfOfNavigationLinks"
            :key="navigationLink.text"
          >
            <router-link
              class="link link--no-underline link--text-white link--uppercase footer__navigation-link"
              :to="navigationLink.link"
            >
              {{ navigationLink.text }}
            </router-link>
            <CommaIcon
              color="gold"
              class="footer__navigation-comma"
              v-if="index != firstHalfOfNavigationLinks.length - 1"
            />
          </template>
        </div>
        <div class="footer__navigation-link-row">
          <template
            v-for="(navigationLink, index) in secondHalfOfNavigationLinks"
            :key="navigationLink.text"
          >
            <router-link
              class="link link--no-underline link--text-white link--uppercase footer__navigation-link"
              :to="navigationLink.link"
            >
              {{ navigationLink.text }}
            </router-link>
            <CommaIcon
              color="gold"
              class="footer__navigation-comma"
              v-if="index != secondHalfOfNavigationLinks.length - 1"
            />
          </template>
        </div>
      </template>
      <template v-else>
        <div class="footer__navigation-link-row">
          <template v-for="(navigationLink, index) in navigationLinks" :key="navigationLink.text">
            <router-link
              class="link link--no-underline link--text-white link--uppercase footer__navigation-link"
              :to="navigationLink.link"
            >
              {{ navigationLink.text }}
            </router-link>
            <CommaIcon
              color="gold"
              class="footer__navigation-comma"
              v-if="index != navigationLinks.length - 1"
            />
          </template>
        </div>
      </template>
    </div>
    <div
      class="footer__information-section"
      v-for="information in companyInformation"
      :key="information.label"
    >
      <p class="footer__information-label">{{ information.label }}</p>
      <p class="footer__information-value">{{ information.value }}</p>
    </div>
    <div class="footer__information-section">
      <a
        class="footer__information-social-software"
        href="https://www.facebook.com/kohakustudiotw"
        target="_blank"
        ><img :src="IconFB" alt="FB"
      /></a>
    </div>
  </div>
</template>

<style src="@/assets/scss/layout/_footer.scss"></style>

<script>
import KohakuAndPCLogo from '@/components/global/KohakuAndPCLogo.vue'
import CommaIcon from '@/components/global/CommaIcon.vue'

export default {
  name: 'PageFooter',
  components: { KohakuAndPCLogo, CommaIcon },
  data() {
    return {
      isMobileDevice: false,
      navigationLinks: [
        {
          text: 'about',
          link: '/about'
        },
        {
          text: 'services',
          link: '/services'
        },
        {
          text: 'work',
          link: '/work'
        },
        {
          text: 'member',
          link: '/member'
        },
        {
          text: 'contact',
          link: '/contact'
        }
      ],
      companyInformation: [
        {
          label: 'Mail',
          value: 'info@kohakustudio.co'
        },
        {
          label: 'Time',
          value: 'Mon~Fri / 10:00-19:00'
        },
        {
          label: 'Address',
          value: this.$t('global.footer.address')
        }
      ]
    }
  },
  computed: {
    firstHalfOfNavigationLinks() {
      var halfLength = Math.ceil(this.navigationLinks.length / 2)
      return this.navigationLinks.slice(0, halfLength)
    },
    secondHalfOfNavigationLinks() {
      var halfLength = Math.ceil(this.navigationLinks.length / 2)
      return this.navigationLinks.slice(halfLength)
    }
  },
  mounted() {
    this.checkViewportSize()
    window.addEventListener('resize', this.checkViewportSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkViewportSize)
  },
  methods: {
    checkViewportSize() {
      this.isMobileDevice = window.innerWidth < this.$mobileDeviceMaxWidth
    }
  }
}
</script>
