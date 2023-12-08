<template>
  <div class="tool-section">
    <h2 class="tool-section__title font-1">客製化開發工具</h2>
    <div class="tool-section__grid">
      <div v-for="tool in serviceTool" :key="tool.title" class="tool-item">
        <h3 class="tool-item__title font-3">{{ tool.title }}</h3>
        <ul class="tool-item__list">
          <li v-for="item in tool.list" :key="item" class="tool-item__detail font-7">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/scss/services/_services-tools-section.scss" scoped></style>

<script>
export default {
  props: {
    serviceTool: {
      type: Object,
      default: null
    }
  }
}
</script>
