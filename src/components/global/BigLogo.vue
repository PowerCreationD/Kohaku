<template>
  <img :src="link" />
</template>

<script>
export default {
  name: 'BigLogo',
  data() {
    return {
      link: 'src/assets/big_logo.png'
    }
  }
}
</script>
