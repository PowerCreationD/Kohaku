<template>
  <svg class="commaIcon" width="37" height="60" viewBox="0 0 37 60" fill="none">
    <path
      d="M19.8322 2.69493C23.6078 -0.976423 29.6488 -0.896613 33.345 2.93437C44.4732 14.5071 29.2117 31.547 0.834645 60L0 59.1221C0 59.1221 29.3309 31.4672 28.5758 21.8099C28.377 18.9766 24.7206 19.6151 22.1373 18.1785C21.1834 17.6996 20.3488 17.0611 19.5539 16.263C15.8975 12.4719 15.977 6.40619 19.7924 2.69493H19.8322Z"
      :fill="color === 'gold' ? '#E6AE4A' : 'white'"
    />
  </svg>
</template>

<script>
export default {
  name: 'CommaIcon',
  props: {
    color: { type: String, default: 'white' }
  }
}
</script>
