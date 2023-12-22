<template>
  <div v-show="!mobileCheck.value" class="filter-section">
    <div class="filter-item" :class="{ 'filter-item--active': isSelectAll }">
      <button
        class="filter-item__all"
        :class="isSelectAll ? 'filter-item__all--active font-6' : 'font-7'"
        @click="filterAll"
      >
        全部
      </button>
    </div>

    <div
      v-for="item in types"
      :key="item.id"
      class="filter-item"
      :class="{ 'filter-item--active': checkedTypes.includes(item.id) }"
    >
      <input
        type="checkbox"
        :id="item.id"
        :value="item.id"
        v-model="checkedTypes"
        class="filter-item__checkbox"
        @change="changeFilter"
      />
      <label
        :for="item.id"
        class="filter-item__label"
        :class="checkedTypes.includes(item.id) ? 'font-6 filter-item__label--active' : 'font-7'"
        >{{ item.text }}</label
      >
    </div>
  </div>

  <div v-show="mobileCheck.value" class="filter-section-mobile">
    <DropdownComponent
      @selectOption="addTypeOption"
      :options="dropdownOptions"
      :placeholder="'選擇服務'"
    />

    <div class="selected-option-container">
      <div v-for="checkedType in checkedTypes" :key="checkedType" class="selected-option">
        <span class="font-7">{{ getTypeText(checkedType) }}</span>
        <div class="selected-option__remove-icon" @click="removeType(checkedType)"></div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/scss/work/_type-filter.scss" scoped></style>

<script>
import DropdownComponent from '@/components/global/DropdownComponent.vue'
import { mobileCheckSymbol } from '@/App.vue'

export default {
  name: 'TypeFilter',
  components: { DropdownComponent },
  inject: {
    mobileCheck: mobileCheckSymbol
  },
  data() {
    return {
      types: [
        { id: 'system', text: '系統設計與全端開發' },
        { id: 'design', text: '商業設計與原型製作' },
        { id: 'content', text: '內容設計與活動統籌' }
      ],
      checkedTypes: [],
      isSelectAll: true
    }
  },
  methods: {
    updateFilterWorkItems() {
      this.$emit('update:checkedTypes', this.checkedTypes)
      this.$emit('update:isSelectAll', this.isSelectAll)
    },
    changeFilter() {
      this.isSelectAll = false
      this.updateFilterWorkItems()
    },
    filterAll() {
      this.isSelectAll = !this.isSelectAll
      if (!this.isSelectAll) {
        this.checkedTypes = []
      }
      this.updateFilterWorkItems()
    },
    addTypeOption(event) {
      // default => all
      if (event.id === 'default') {
        this.isSelectAll = true
        this.checkedTypes = []
      }
      // others
      else {
        this.isSelectAll = false
        const isTypeChecked = this.checkedTypes.includes(event.id)

        if (!isTypeChecked) {
          this.checkedTypes = [...this.checkedTypes, event.id]
        }
      }

      this.updateFilterWorkItems()
    },
    getTypeText(typeId) {
      const type = this.types.find((item) => item.id === typeId)
      return type ? type.text : ''
    },
    removeType(type) {
      this.checkedTypes = this.checkedTypes.filter((item) => item !== type)
      this.updateFilterWorkItems()
    },
    updateRoute() {
      const shouldRemoveTypes = this.checkedTypes.length === 0
      const query = shouldRemoveTypes ? {} : { types: this.checkedTypes.join(',') }
      this.$router.replace({ path: '/work', query })
    }
  },
  computed: {
    dropdownOptions() {
      const defaultType = { id: 'default', text: '選擇服務' }
      return [defaultType, ...this.types]
    }
  },
  mounted() {
    const typesParam = this.$route.query.types
    if (typesParam) {
      this.checkedTypes = typesParam.split(',')
    }
  },
  watch: {
    checkedTypes: {
      handler: 'updateRoute',
      deep: true
    }
  },
  beforeRouteUpdate(to, from, next) {
    const types = to.query.types
    this.checkedTypes = types ? types.split(',') : []
    next()
  }
}
</script>
