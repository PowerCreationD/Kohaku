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
            {{ company.name }} <br class="mobile" />（{{
              $t('about.overview.related_company.id')
            }}：{{ company.business_id }}）
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
        {
          name: 'company_name',
          title: this.$t('about.overview.company_name.title'),
          content: this.$t('about.overview.company_name.content')
        },
        {
          name: 'address',
          title: this.$t('about.overview.address.title'),
          content: this.$t('about.overview.address.content')
        },
        {
          name: 'responsible',
          title: this.$t('about.overview.responsible.title'),
          content: this.$t('about.overview.responsible.content')
        },
        {
          name: 'capital',
          title: this.$t('about.overview.capital.title'),
          content: this.$t('about.overview.capital.content')
        },
        {
          name: 'business_id',
          title: this.$t('about.overview.business_id.title'),
          content: this.$t('about.overview.business_id.content')
        },
        {
          name: 'content',
          title: this.$t('about.overview.content.title'),
          content: this.$t('about.overview.content.content')
        },
        {
          name: 'related_company',
          title: this.$t('about.overview.related_company.title'),
          content: [
            {
              name: this.$t('about.overview.related_company.content[0].name'),
              business_id: this.$t('about.overview.related_company.content[0].business_id')
            },
            {
              name: this.$t('about.overview.related_company.content[1].name'),
              business_id: this.$t('about.overview.related_company.content[1].business_id')
            }
          ]
        }
      ]
    }
  }
}
</script>
