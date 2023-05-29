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
    }
  },
  created() {
    if (this.options) {
      this.selectedOption = this.options[0]
    }
  },
  data() {
    return {
      selectedOption: {},
      open: false
    }
  },
  methods: {
    clickDropdown() {
      this.open = !this.open
    },
    selectOption(option) {
      this.selectedOption = option
      this.clickDropdown()
    }
  }
}
</script>
