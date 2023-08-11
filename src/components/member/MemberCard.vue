<template>
  <div class="member-card">
    <svg class="member-card__image"
      viewBox="0 0 362 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <mask
        :id="maskID"
        style="mask-type: luminance"
        maskUnits="userSpaceOnUse"
        x="17"
        y="11"
        width="340"
        height="342"
      >
        <path
          d="M342.713 226.278L297.697 303.425C276.066 340.491 233.037 359.433 191.096 350.347L104.618 331.628C62.5595 322.519 31.1883 287.325 26.9439 244.506L18.1745 155.935C13.9535 113.293 37.5959 72.7662 76.801 55.4729L158.228 19.5416C197.597 2.1665 243.665 12.1753 272.289 44.3065L331.137 110.381C359.679 142.43 364.356 189.201 342.725 226.278H342.713Z"
          fill="white"
        />
      </mask>
      <g :mask="maskUrl">
        <rect x="-10.8125" y="0.2069" width="400" height="400" :fill="patternUrl" />
      </g>
      <path
        d="M321.436 78.8282L238.836 18.7966C204.344 -6.26554 157.651 -6.26554 123.17 18.7966L40.5703 78.8282C6.07846 103.89 -8.35391 148.31 4.82679 188.864L36.3799 285.999C49.5497 326.554 87.3286 354 129.951 354H232.055C274.677 354 312.456 326.543 325.626 285.999L357.179 188.864C370.349 148.31 355.917 103.89 321.436 78.8282ZM341.365 226.294L296.685 302.885C275.222 339.683 232.512 358.485 190.891 349.471L105.059 330.887C63.3182 321.85 32.1786 286.914 27.9665 244.399L19.2592 156.475C15.0688 114.146 38.535 73.9072 77.4458 56.7382L158.261 21.0611C197.335 3.81593 243.059 13.745 271.467 45.6442L329.871 111.25C358.202 143.062 362.839 189.507 341.375 226.305L341.365 226.294Z"
        fill="#3D3A39"
      />
      <defs>
        <pattern :id="patternID" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use :xlink:href="hashID" transform="translate(-0.166667) scale(0.000330688)" />
        </pattern>
        <image :id="person.id" width="4032" height="3024" :xlink:href="imageSrc" />
      </defs>
    </svg>

    <p class="font-7 member-card__position">{{ person.position }}</p>
    <h3 class="font-3 member-card__name">{{ person.name }}</h3>
    <h5 class="font-4 member-card__description">#{{ person.description }}</h5>
    <p class="member-card__skills">
      <span class="font-6 member-card__skill" v-for="skill in person.skills" :key="skill"
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
        `../../assets/image/member/image_profile_${this.person.id}.jpg`,
        import.meta.url
      ).href
      return imageUrl
    }
  }
}
</script>

<style src="@/assets/scss/components/_memberCard.scss" scoped></style>
