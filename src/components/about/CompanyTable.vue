<template>
  <div class="company-table-wrap test">
    <h2 class="company-table-wrap__title font-1 scroll-animation-slide-and-fade-in">OVERVIEW</h2>

    <div class="company-table scroll-animation-slide-and-fade-in">
      <div v-for="item in table" :key="item" class="company-table__row">
        <div class="company-table__title font-6">{{ item.title }}</div>
        <div class="company-table__content font-7" v-if="item.name !== 'related_company'">
          {{ item.content }}
        </div>
        <div v-else class="company-table__related_company">
          <p v-for="company in item.content" :key="company" class="font-7">
            {{ company.name }} <br class="mobile" />（統編：{{ company.business_id }}）
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/assets/scss/about/_company-table.scss" scoped></style>

<script>
export default {
  name: 'CompanyTable',
  inject: ['mobileCheck'],
  data() {
    return {
      table: [
        { name: 'company_name', title: '公司名', content: '琥白股份有限公司' },
        { name: 'address', title: '營業地址', content: '高雄市鹽埕區大勇路11號3樓' },
        { name: 'responsible', title: '負責人', content: '林凱元' },
        { name: 'capital', title: '資本額', content: '新台幣 2,000,000 元整' },
        { name: 'business_id', title: '統編', content: '90349136' },
        { name: 'content', title: '事業內容', content: '軟硬體系統整合開發、內容企劃、商業設計' },
        {
          name: 'related_company',
          title: '關係企業',
          content: [
            { name: '創次方股份有限公司', business_id: '90521327' },
            { name: '萬屋休閒農場', business_id: '88769287' }
          ]
        }
      ]
    }
  }
}
</script>
