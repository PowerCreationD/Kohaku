<script setup>
import backgroundImageUrl from '@/assets/image/global/background_sidebar.png'
</script>

<template>
  <div class="sidebar">
    <img class="background-image" :src="backgroundImageUrl" alt="backgroundImage"/>
    <button
      class="button button--icon sidebar__hamburger-menu"
      @click="closeSidebar"
      aria-label="Close Sidebar"
    >
      <div class="hamburger-menu hamburger-menu--rotated">
        <div class="hamburger-menu__line" v-for="n in 3" :key="n"></div>
      </div>
    </button>
    <button class="button button-logo" @click="goHome" aria-label="Go Home">
      <kohakuLogo :size="'big'" :color="'black'" class="sidebar__big-logo" />
    </button>
    <div class="sidebar__link-container">
      <template v-for="navigationLink in navigationLinks" :key="navigationLink.text">
        <router-link
          v-if="navigationLink.link"
          class="link link--no-underline link--text-black link--uppercase sidebar__navigation-link"
          :to="navigationLink.link"
          @click="closeSidebar"
        >
          {{ navigationLink.text }}
        </router-link>
        <div v-else class="link link--no-underline link--text-black sidebar__navigation-container">
          <div
            class="sidebar__navigation-link link--uppercase font-7"
            @click="drawerOpen = !drawerOpen"
          >
            {{ navigationLink.text }}
            <DropdownArrowIcon
              class="dropdown__down-arrow sidebar__navigation-arrow"
              :class="{ 'sidebar__navigation-arrow--open': drawerOpen }"
            />
          </div>
          <div class="sidebar__sub-link-container" v-show="drawerOpen">
            <template v-for="(item, index) in navigationLink.subPages" :key="item.link">
              <hr
                class="sidebar__link-divider"
                :class="{ 'sidebar__link-divider--grey': index !== 0 }"
              />
              <router-link
                :to="item.link"
                class="link link--no-underline link--text-black sidebar__navigation-sub-link"
              >
                {{ item.text }}
              </router-link>
            </template>
          </div>
        </div>
        <hr class="sidebar__link-divider" />
      </template>
    </div>
    <DropdownComponent
      @selectOption="changeLanguageHandler"
      :options="languageOptions"
      :defaultIndex="defaultLocal"
    />
  </div>
</template>

<style src="@/assets/scss/layout/_sidebar.scss" scoped></style>
<style src="@/assets/scss/layout/_hamburger-menu.scss" scoped></style>

<script>
import kohakuLogo from '@/components/global/KohakuLogo.vue'
import DropdownComponent from '@/components/global/DropdownComponent.vue'
import DropdownArrowIcon from '@/components/global/DropdownArrowIcon.vue'

export default {
  name: 'HeaderSidebar',
  components: { kohakuLogo, DropdownComponent },
  props: {
    sidebarOpen: {
      type: Boolean
    },
    navigationLinks: {
      type: Object
    },
    languageOptions: {
      type: Object
    },
    defaultLocal: {
      type: Number
    }
  },
  emits: ['update:sidebarOpen'],
  data() {
    return {
      drawerOpen: false
    }
  },
  methods: {
    goHome() {
      this.closeSidebar()
      this.$router.push('/')
    },
    closeSidebar() {
      this.$emit('update:sidebarOpen', false)
    },
    changeLanguageHandler(selectedOption) {
      this.$emit('changeLanguage', selectedOption)
      this.closeSidebar()
    }
  },
  watch: {
    $route() {
      this.closeSidebar()
    }
  }
}
</script>
