<template>
  <div
    class="header"
    ref="header"
    :class="[
      { 'header--transparent-mode': isTransparentMode },
      {
        'header--full-screen-mode': $route['name'] === 'home' && scrollPosition == 0 && !sidebarOpen
      },
      { 'header--hidden-mode': isHeaderHidden && !isTransparentMode && !sidebarOpen }
    ]"
  >
    <div class="header__section header__section--logo">
      <button class="button button--logo" @click="goHome">
        <KohakuLogo
          :size="'big'"
          :color="isTransparentMode ? 'white' : 'black'"
          class="header__big-logo"
        />
      </button>
    </div>
    <div class="header__section header__section--navigation">
      <template v-if="isMobileDevice">
        <button class="button button--logo" @click="openSidebar">
          <div class="hamburger-menu">
            <div
              class="hamburger-menu__line"
              :class="{ 'hamburger-menu__line--transparent-mode': isTransparentMode }"
              v-for="n in 3"
              :key="n"
            ></div>
          </div>
        </button>
      </template>
      <template v-else>
        <router-link
          class="link link--no-underline link--uppercase header__navigation-link font-7"
          :class="isTransparentMode ? 'link--text-white' : 'link--text-black'"
          v-for="navigationLink in navigationLinks"
          :key="navigationLink.text"
          :to="navigationLink.link"
        >
          {{ navigationLink.text }}
        </router-link>
      </template>
    </div>
    <div v-if="!isMobileDevice" class="header__section header__section--buttons">
      <DropdownComponent
        @selectOption="changeLanguageHandler"
        :options="languageOptions"
        :defaultIndex="defaultLocal"
        :color="isTransparentMode ? 'white' : 'gold'"
      />
      <button class="button--tertiary header__contact-button">聯絡我們</button>
    </div>
    <HeaderSidebar
      :navigationLinks="navigationLinks"
      :languageOptions="languageOptions"
      :defaultLocal="defaultLocal"
      @changeLanguage="changeLanguageHandler"
      v-show="sidebarOpen"
      v-model:sidebarOpen="sidebarOpen"
    />
  </div>
</template>

<style src="@/assets/scss/components/header-and-footer/header.scss"></style>

<script>
import KohakuLogo from './KohakuLogo.vue'
import DropdownComponent from './DropdownComponent.vue'
import HeaderSidebar from './HeaderSidebar.vue'

export default {
  name: 'PageHeader',
  components: { KohakuLogo, DropdownComponent, HeaderSidebar },
  data() {
    return {
      headerHeight: 0,
      scrollPosition: 0,
      isHeaderHidden: false,
      isMobileDevice: false,
      sidebarOpen: false,
      navigationLinks: [
        {
          text: 'about',
          link: '/about'
        },
        {
          text: 'services',
          link: '/services',
          subPages: [
            {
              text: 'system',
              link: '/services/system'
            },
            {
              text: 'design',
              link: '/services/design'
            },
            {
              text: 'content',
              link: '/services/content'
            }
          ]
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
      defaultLocal: undefined,
      languageOptions: [
        {
          value: 'zh',
          text: '中'
        },
        {
          value: 'ja',
          text: '日'
        },
        {
          value: 'en',
          text: 'En'
        }
      ]
    }
  },
  beforeMount() {
    this.setDefaultLocal()
  },
  mounted() {
    this.checkViewportSize()
    window.addEventListener('resize', this.checkViewportSize)

    this.catchHeaderHeight()
    window.addEventListener('resize', this.catchHeaderHeight)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkViewportSize)
    window.removeEventListener('resize', this.catchHeaderHeight)
    window.removeEventListener('scroll', this.handleScroll)
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
    },
    setDefaultLocal() {
      const LOCALE_KEY = localStorage.getItem('LOCALE_KEY')
      if (LOCALE_KEY === 'ja') {
        this.defaultLocal = 1
      } else if (LOCALE_KEY === 'en') {
        this.defaultLocal = 2
      } else {
        this.defaultLocal = 0
      }
    },
    changeLanguageHandler(selectedOption) {
      this.$i18n.locale = selectedOption.value
      localStorage.setItem('LOCALE_KEY', selectedOption.value)
      window.location.reload()
    },
    catchHeaderHeight() {
      this.headerHeight = this.$refs.header.clientHeight
    },
    handleScroll() {
      const currentScrollPosition = window.scrollY

      if (
        this.$route['name'] !== 'home' &&
        (this.currentScrollPosition <= 0 || this.scrollPosition <= 0)
      ) {
        this.isHeaderHidden = false
      } else if (
        this.$route['name'] == 'home' &&
        (this.currentScrollPosition <= 0 || this.scrollPosition <= 0)
      ) {
        this.isHeaderHidden = true
      } else if (currentScrollPosition > this.scrollPosition) {
        this.isHeaderHidden = true
      } else if (currentScrollPosition < this.scrollPosition) {
        this.isHeaderHidden = false
      }
      this.scrollPosition = currentScrollPosition
    }
  },
  computed: {
    isTransparentMode() {
      if (this.$route['name'] !== 'home') {
        return false
      } else {
        return this.scrollPosition < window.innerHeight - this.headerHeight / 2
      }
    }
  }
}
</script>
