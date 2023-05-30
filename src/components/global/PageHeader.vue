<template>
  <div class="header">
    <div class="header__section header__section--left">
      <button class="button button--logo" @click="goHome">
        <BigLogo class="header__big-logo" />
      </button>
    </div>
    <div class="header__section header__section--right">
      <template v-if="isMobileDevice">
        <button class="button button--logo" @click="openSidebar">
          <div class="hamburger-menu">
            <div class="hamburger-menu__line" v-for="n in 3" :key="n"></div>
          </div>
        </button>
      </template>
      <template v-else>
        <router-link
          class="link link--no-underline link--text-black link--uppercase header__navigation-link"
          v-for="navigationLink in navigationLinks"
          :key="navigationLink.text"
          :to="navigationLink.link"
        >
          {{ navigationLink.text }}
        </router-link>
        <DropdownComponent :options="languageOptions" />
      </template>
    </div>
    <HeaderSidebar
      :navigationLinks="navigationLinks"
      :languageOptions="languageOptions"
      v-show="sidebarOpen"
      v-model:sidebarOpen="sidebarOpen"
    />
  </div>
</template>

<script>
import BigLogo from './BigLogo.vue'
import DropdownComponent from './DropdownComponent.vue'
import HeaderSidebar from './HeaderSidebar.vue'

export default {
  name: 'PageHeader',
  components: { BigLogo, DropdownComponent, HeaderSidebar },
  data() {
    return {
      isMobileDevice: false,
      sidebarOpen: false,
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
    },
    goHome() {
      this.$router.push('/')
    },
    openSidebar() {
      this.sidebarOpen = true
    },
    closeSidebar() {
      this.sidebarOpen = false
    }
  }
}
</script>
