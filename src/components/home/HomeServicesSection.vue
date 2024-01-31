<script setup>
import systemWeb from '@/assets/image/home/image_services-system-web.jpg'
import systemApp from '@/assets/image/home/image_services-system-app.jpg'
import designWeb from '@/assets/image/home/image_services-design-web.jpg'
import designApp from '@/assets/image/home/image_services-design-app.jpg'
import contentWeb from '@/assets/image/home/image_services-content-web.jpg'
import contentApp from '@/assets/image/home/image_services-content-app.jpg'
</script>
<template>
  <div class="home__section services-section" :style="backgroundStyle">
    <div class="services-section__carousel-control">
      <div class="carousel-control carousel-control--prev" @click="prevHandler">
        <LeftArrowIcon class="carousel-control__arrow-icon"></LeftArrowIcon>
      </div>
      <div class="carousel-control carousel-control--next">
        <RightArrowIcon class="carousel-control__arrow-icon" @click="nextHandler"></RightArrowIcon>
      </div>
    </div>
    <div class="services-section__carousel">
      <div class="carousel-section carousel-section-top">
        <h2 class="carousel-section-top__title font-1 scroll-animation-slide-and-fade-in">
          SERVICES
        </h2>
        <div class="carousel-section-top__menu">
          <div class="carousel-section-top__menu-divider">|</div>
          <template v-for="(item, idx) in services" :key="item.title">
            <span
              class="carousel-section-top__menu-text"
              :class="idx == index ? 'font-6 font-emphasis' : 'font-7 '"
              @click="index = idx"
              >{{ item.title }}</span
            >
            <div class="carousel-section-top__menu-divider">|</div>
          </template>
        </div>
      </div>
      <div class="carousel-section carousel-section-middle">
        <div class="carousel-section-middle__wave-and-title">
          <WaveImage
            :color="mobileCheck.value ? 'gold' : 'white'"
            class="carousel-section-middle__wave"
          />
          <h3 class="carousel-section-middle__title font-1 scroll-animation-slide-and-fade-in">
            {{ services[index].title }}
          </h3>
        </div>
        <p class="carousel-section-middle__text font-7 scroll-animation-slide-and-fade-in">
          {{ services[index].text.join('\n') }}
        </p>
      </div>
      <div class="carousel-section carousel-section-bottom">
        <button class="button button--quaternary" @click="viewService()" aria-label="View More">
          {{ $t('global.buttons.view_more') }}
        </button>
        <div class="carousel-section-bottom__keywords-container">
          <span
            class="carousel-section-bottom__keyword font-7"
            v-for="item in services[index].keywords"
            :key="item"
            >#{{ item }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/scss/home/_home-services-section.scss"></style>

<script>
import LeftArrowIcon from '@/components/global/LeftArrowIcon.vue'
import RightArrowIcon from '@/components/global/RightArrowIcon.vue'
import WaveImage from '@/components/global/WaveImage.vue'
import { mobileCheckSymbol } from '@/App.vue'

export default {
  name: 'HomeServicesSection',
  components: {
    LeftArrowIcon,
    RightArrowIcon,
    WaveImage
  },
  inject: {
    mobileCheck: mobileCheckSymbol
  },
  data() {
    return {
      index: 0,
      services: [
        {
          title: this.$t('home.services[0].title'),
          text: [this.$t('home.services[0].text[0]'), this.$t('home.services[0].text[1]')],
          keywords: [
            this.$t('home.services[0].keywords[0]'),
            this.$t('home.services[0].keywords[1]'),
            this.$t('home.services[0].keywords[2]'),
            this.$t('home.services[0].keywords[3]'),
            this.$t('home.services[0].keywords[4]')
          ],
          webImage: systemWeb,
          appImage: systemApp
        },
        {
          title: this.$t('home.services[1].title'),
          text: [this.$t('home.services[1].text[0]'), this.$t('home.services[1].text[1]')],
          keywords: [
            this.$t('home.services[1].keywords[0]'),
            this.$t('home.services[1].keywords[1]'),
            this.$t('home.services[1].keywords[2]'),
            this.$t('home.services[1].keywords[3]'),
            this.$t('home.services[1].keywords[4]')
          ],
          webImage: designWeb,
          appImage: designApp
        },
        {
          title: this.$t('home.services[2].title'),
          text: [this.$t('home.services[2].text[0]'), this.$t('home.services[2].text[1]')],
          keywords: [
            this.$t('home.services[2].keywords[0]'),
            this.$t('home.services[2].keywords[1]'),
            this.$t('home.services[2].keywords[2]'),
            this.$t('home.services[2].keywords[3]'),
            this.$t('home.services[2].keywords[4]')
          ],
          webImage: contentWeb,
          appImage: contentApp
        }
      ]
    }
  },
  methods: {
    prevHandler() {
      this.index == 0 ? (this.index = this.services.length - 1) : (this.index -= 1)
    },
    nextHandler() {
      this.index == this.services.length - 1 ? (this.index = 0) : (this.index += 1)
    },
    viewService() {
      let type = ''
      switch (this.index) {
        case 0:
          type = 'system'
          break
        case 1:
          type = 'design'
          break
        case 2:
          type = 'content'
          break
        default:
          break
      }

      this.$router.push({
        name: 'Services',
        params: { type: type }
      })
    }
  },
  computed: {
    backgroundStyle() {
      const backgrounds = {
        0: this.mobileCheck.value ? systemApp : systemWeb,
        1: this.mobileCheck.value ? designApp : designWeb,
        2: this.mobileCheck.value ? contentApp : contentWeb
      }

      return {
        backgroundImage: `url(${backgrounds[this.index]})`
      }
    }
  }
}
</script>
