<script setup>
import bigWhite from '@/assets/image/global/logo_kohaku-big-white.png'
import bigBlack from '@/assets/image/global/logo_kohaku-big-black.png'
import smallWhite from '@/assets/image/global/logo_kohaku-small-white.png'
import smallBlack from '@/assets/image/global/logo_kohaku-small-black.png'
</script>

<template>
  <div class="kohaku-logo">
    <img
      class="kohaku-logo__image"
      v-if="size == 'big' && color == 'white'"
      :src="bigWhite"
      alt="Kohaku"
    />
    <img
      class="kohaku-logo__image"
      v-if="size == 'big' && color == 'black'"
      :src="bigBlack"
      alt="Kohaku"
    />
    <img
      class="kohaku-logo__image"
      v-if="size == 'small' && color == 'white'"
      :src="smallWhite"
      alt="Kohaku"
    />
    <img
      class="kohaku-logo__image"
      v-if="size == 'small' && color == 'black'"
      :src="smallBlack"
      alt="Kohaku"
    />
  </div>
</template>

<script>
export default {
  name: 'KohakuLogo',
  props: {
    size: {
      type: String,
      default: 'small'
    },
    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>
