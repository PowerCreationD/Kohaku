<template>
  <div class="header">
    <h1 class="header__title"><slot></slot></h1>
    <div class="header__space"></div>
  </div>
</template>

<script>
export default {
  name: 'pageHeaderComponent',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Ubuntu', sans-serif;
  padding: 0;
  margin: 0;
}
$gray: #777;

.header {
  display: flex;
  &__title {
    margin-right: 40px;
  }
  &__space {
    border-top: 1px solid $gray;
    flex-grow: 1;
    margin-top: 7px;
  }
}
</style>
