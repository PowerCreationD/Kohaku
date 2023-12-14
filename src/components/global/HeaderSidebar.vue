<script setup>
import backgroundImageUrl from '@/assets/sidebar.png'
</script>

<template>
  <div class="sidebar">
    <img class="background-image" :src="backgroundImageUrl" />
    <button class="button button--icon sidebar__hamburger-menu" @click="closeSidebar">
      <div class="hamburger-menu hamburger-menu--rotated">
        <div class="hamburger-menu__line" v-for="n in 3" :key="n"></div>
      </div>
    </button>
    <button class="button button-logo" @click="goHome">
      <BigLogo class="sidebar__big-logo" />
    </button>
    <div class="sidebar__link-container">
      <template v-for="navigationLink in navigationLinks" :key="navigationLink.text">
        <router-link
          class="link link--no-underline link--text-black link--uppercase sidebar__navigation-link"
          :to="navigationLink.link"
          @click="closeSidebar"
        >
          {{ navigationLink.text }}
        </router-link>
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

<script>
import BigLogo from './KohakuLogo.vue'
import DropdownComponent from './DropdownComponent.vue'

export default {
  name: 'HeaderSidebar',
  components: { BigLogo, DropdownComponent },
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
    defaultLocal:{
      type: Number
    }
  },
  emits: ['update:sidebarOpen'],
  methods: {
    goHome() {
      this.closeSidebar()
      this.$router.push('/')
    },
    closeSidebar() {
      this.$emit('update:sidebarOpen', false)
    },
    changeLanguageHandler(selectedOption) {
      this.$emit('changeLanguage', selectedOption);
      this.closeSidebar()
    }
  }
}
</script>
