<script setup>
import waveImage from '@/assets/image/global/frame_gold-wave.png'
import decoImage from '@/assets/image/member/frame_decoration.png'
</script>

<template>
  <div class="member-card">
    <div class="member-card__profile">
      <img class="member-card__profile-image" :src="imageSrc" :alt="person.id" />
      <img class="member-card__profile-deco" :src="decoImage" alt="deco" />
    </div>
    <img class="member-card__wave-image" :src="waveImage" alt="wave" />
    <h3 class="font-3 member-card__name">{{ person.name }}</h3>
    <p class="font-7 member-card__position">{{ person.position }}</p>
    <div class="member-card__description-box">
      <div class="member-card__description-box--left"></div>
      <h5 class="font-6 member-card__description">{{ person.description }}</h5>
      <div class="member-card__description-box--right"></div>
    </div>
    <p class="member-card__skills">
      <span class="font-7 member-card__skill" v-for="skill in person.skills" :key="skill"
        >#{{ skill }}</span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'MemberCard',
  props: {
    person: Array
  },
  computed: {
    maskID() {
      return `mask_${this.person.id}`
    },
    maskUrl() {
      return `url(#mask_${this.person.id})`
    },
    patternID() {
      return `pattern_${this.person.id}`
    },
    patternUrl() {
      return `url(#pattern_${this.person.id})`
    },
    hashID() {
      return `#${this.person.id}`
    },
    imageSrc() {
      const imageUrl = new URL(
        `../../assets/image/member/image_profile_${this.person.id}.png`,
        import.meta.url
      ).href
      return imageUrl
    }
  }
}
</script>

<style src="@/assets/scss/member/_member-card.scss" scoped></style>
