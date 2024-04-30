<template>
<div class="company-table-wrap">
    <div class="company-table">
      <div v-for="item in table" :key="item" class="company-table__row">
        <div class="company-table__title font-6">{{ item.title }}</div>
        <div class="company-table__content font-7">{{ item.content }}</div>
      </div>
    </div>
</div>
</template>

<style src="@/assets/scss/about/_company-table.scss" scoped></style>

<script>
export default {
  name: 'CompanyTable',
  data() {
    return {
      table: [
        { title: '公司名', content: '琥白股份有限公司' },
        { title: '營業地址', content: '高雄市鹽埕區大勇路11號3F' },
        { title: '負責人', content: '林凱元' },
        { title: '資本額', content: '新台幣 2,000,000 元整' },
        { title: '統編', content: '90349136' },
        { title: '事業內容', content: '軟硬體系統整合開發、內容企劃、商業設計' },
        { title: '關係企業', content: '創次方股份有限公司 （統編：90521327）' }
      ]
    }
  }
}
</script>
