<template>
  <div class="page-title">
    <h1 class="page-title__name"><slot></slot></h1>
    <div class="page-title__space"></div>
  </div>
</template>

<script>
export default {
  name: 'pageTitleComponent',
  data() {
    return {}
}
}
</script>

<style src="@/assets/scss/components/_pageTitle.scss" scoped></style>
