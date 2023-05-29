<template>
  <div class="header">
    <div class="header__section header__section--left">
      <button class="button button--logo" @click="goHome">
        <BigLogo class="header__big-logo" />
      </button>
    </div>
    <div class="header__section header__section--right">
      <router-link
        class="header__navigation-link"
        v-for="navigationLink in navigationLinks"
        :key="navigationLink.text"
        :to="navigationLink.link"
      >
        {{ navigationLink.text }}
      </router-link>
      <DropdownComponent class="header__dropdown" :options="languageOptions" />
    </div>
  </div>
</template>

<script>
import BigLogo from './BigLogo.vue'
import DropdownComponent from './DropdownComponent.vue'

export default {
  name: 'pageHeaderComponent',
  components: { BigLogo, DropdownComponent },
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
      languageOptions: [
        {
          text: '中',
          value: 'ch'
        },
        {
          text: '日',
          value: 'jp'
        }
      ]
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>
