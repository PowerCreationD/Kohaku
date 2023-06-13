<template>
<div class="dropdown dropdown--full-width">
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
import DropdownArrowIcon from '../global/DropdownArrowIcon.vue'

export default {
    name: 'ServiceDropdown',
    components: { DropdownArrowIcon },
    props: {
        options: {
            type: Object,
            default: null
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
            this.selectedOption = this.options[0]
        }
    },
    methods: {
        clickDropdown() {
            this.open = !this.open
        },
        selectOption(option) {
            this.selectedOption = option
            this.clickDropdown()
            this.$emit('select', option.value)
        }
    }
}
</script>

<style lang="scss" scoped>
// .dropdown {
//     position: sticky;
//     top: 66px;
//     z-index: 1;
//     background-color: #FFFFFF;
//     padding: 16px 0 0 0;
//     // border-top: 1px solid #C4C4C4;
//     box-shadow: 0px 20px 0px 0px #FFFFFF, // down
//                 5vw 0px 0px 0px #FFFFFF, // right
//                 5vw 4px 0px 0px #FFFFFF,
//                 5vw 20px 0px 0px #FFFFFF,
//                 -5vw 0px 0px 0px #FFFFFF, // left
//                 -5vw 4px 0px 0px #FFFFFF,
//                 -5vw 20px 0px 0px #FFFFFF;         
// }
</style>
  