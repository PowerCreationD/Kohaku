<template>
  <img :src="link" />
</template>

<script>
export default {
  name: 'SmallLogo',
  data() {
    return {
      link: 'src/assets/small_logo.png'
    }
  }
}
</script>
