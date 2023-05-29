<template>
  <div class="footer">
    <KohakuAndM2Logo class="footer__logo" />
    <div class="footer__navigation-link-row">
      <template v-for="(navigationLink, index) in navigationLinks" :key="navigationLink.text">
        <router-link class="footer__navigation-link" :to="navigationLink.link">
          {{ navigationLink.text }}
        </router-link>
        <CommaIcon class="footer__navigation-comma" v-if="index != navigationLinks.length - 1" />
      </template>
    </div>
    <div
      class="footer__information-section"
      v-for="(informationValue, informationLabel) in companyInformation"
      :key="informationLabel"
    >
      <p class="footer__information-label">{{ informationLabel }}</p>
      <p class="footer__information-value">{{ informationValue }}</p>
    </div>
  </div>
</template>

<script>
import KohakuAndM2Logo from './KohakuAndM2Logo.vue'
import CommaIcon from './CommaIcon.vue'

export default {
  name: 'PageFooter',
  components: { KohakuAndM2Logo, CommaIcon },
  data() {
    return {
      navigationLinks: [
        {
          text: 'about',
          link: '/about'
        },
        {
          text: 'services',
          link: '/service'
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
      companyInformation: {
        mail: 'kohakucasatw@gmail.com',
        businessTime: 'Mon~Fri / 10:00-19:00',
        address: '高雄市鹽埕區大勇路11號3樓507室'
      }
    }
  }
}
</script>
