<template>
  <div class="dropdown">
    <div class="dropdown__selected-option" @click="clickDropdown">
      {{ selectedOption.text }}
    </div>
    <DropdownArrowIcon class="dropdown__down-arrow" @click="clickDropdown" />
    <ul class="dropdown__options" :class="{ 'dropdown__options--open': open }">
      <li
        class="dropdown__option"
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
      >
        {{ option.text }}
        <hr class="dropdown__divider" v-if="index != options.length - 1" />
      </li>
    </ul>
  </div>
</template>

<script>
import DropdownArrowIcon from './DropdownArrowIcon.vue'

export default {
  name: 'DropdownComponent',
  components: { DropdownArrowIcon },
  props: {
    options: {
      type: Object,
      default: null
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    emitSelectOptionEventOnMounted: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedOption: {},
      open: false
    }
  },
  created() {
    if (this.options) {
      this.selectedOption = this.options[this.defaultIndex]
    }
  },
  mounted() {
    if (this.emitSelectOptionEventOnMounted) {
      this.selectOption(this.options[this.defaultIndex])
      this.clickDropdown()
    }
  },
  methods: {
    clickDropdown() {
      this.open = !this.open
    },
    selectOption(option) {
      this.selectedOption = option
      this.clickDropdown()
      this.$emit('selectOption', this.selectedOption)
    }
  }
}
</script>
