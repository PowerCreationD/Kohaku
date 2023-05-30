<template>
  <div class="form" ref="top">
    <form @submit.prevent="handleSubmit">
      <div class="form__page--1" v-show="formPage == 1">
        <div
          class="form__section form__type"
          :class="{ error: selectedProjectTypes.error }"
          :errorMsg="selectedProjectTypes.msg"
        >
          <label class="form__title" for="project-type">專案類型</label>
          <div class="form__type-checkbox">
            <div
              id="project-type"
              v-for="project in projectTypes"
              :key="project.id"
              class="checkbox"
            >
              <label :for="project.id" class="checkbox__label"
                ><input
                  type="checkbox"
                  :id="project.id"
                  :value="project"
                  v-model="selectedProjectTypes.value"
                  class="checkbox__box"
                />
                {{ project.name }}</label
              >
            </div>
          </div>
        </div>
        <div
          class="form__section form__budget"
          :class="{ error: budget.error }"
          :errorMsg="budget.msg"
        >
          <label class="form__title" for="budget">預算</label>
          <input id="budget" type="number" v-model.number="budget.value" />
        </div>
        <div
          class="form__section form__date-wrap"
          :class="{ error: date.error }"
          :errorMsg="date.msg"
        >
          <label class="form__title" for="date">預估專案時間</label>
          <div id="date" class="form__date">
            <input type="date" v-model="date.value.startDate" />
            <span class="form__date--dash">~</span>
            <input type="date" v-model="date.value.endDate" :min="date.value.startDate" />
          </div>
        </div>
        <div
          class="form__section form__desc"
          :class="{ error: description.error }"
          :errorMsg="description.msg"
        >
          <label class="form__title" for="desc">專案內容概述</label>
          <textarea
            id="desc"
            cols="30"
            rows="10"
            v-model="description.value"
            class="form__desc"
          ></textarea>
        </div>
        <div class="form__btns">
          <button type="button" class="button button--primary" @click="validate()">下一步</button>
        </div>
      </div>
      <div class="form__page--2" v-show="formPage == 2">
        <div
          class="form__section form__person"
          :class="{ error: person.error }"
          :errorMsg="person.msg"
        >
          <label class="form__title" for="person">聯絡人</label>
          <input id="person" type="text" v-model="person.value" />
        </div>
        <div
          class="form__section form__company"
          :class="{ error: company.error }"
          :errorMsg="company.msg"
        >
          <label class="form__title" for="company">公司 / 品牌名稱</label>
          <input id="company" type="text" v-model="company.value" />
        </div>
        <div
          class="form__section form__phone"
          :class="{ error: phone.error }"
          :errorMsg="phone.msg"
        >
          <label class="form__title" for="phone">聯絡電話</label>
          <input id="phone" type="text" v-model="phone.value" />
        </div>
        <div
          class="form__section form__email"
          :class="{ error: email.error }"
          :errorMsg="email.msg"
        >
          <label class="form__title" for="email">聯絡信箱</label>
          <input id="email" type="text" v-model="email.value" />
        </div>
        <div class="form__btns">
          <button type="button" class="button button--primary" @click="formPage--, scroll()">
            上一步
          </button>
          <button type="submit" class="button button--primary">送出表單</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'formComponent',
  data() {
    return {
      formPage: 1,
      selectedProjectTypes: {
        value: [],
        error: undefined,
        mes: undefined
      },
      budget: {
        value: undefined,
        error: undefined,
        mes: undefined
      },
      date: {
        value: {
          startDate: undefined,
          endDate: undefined
        },
        error: undefined,
        mes: undefined
      },
      description: {
        value: undefined,
        error: undefined,
        mes: undefined
      },
      person: {
        value: undefined,
        error: undefined,
        mes: undefined
      },
      company: {
        value: undefined,
        error: undefined,
        mes: undefined
      },
      phone: {
        value: undefined,
        error: undefined,
        mes: undefined
      },
      email: {
        value: undefined,
        error: undefined,
        mes: undefined
      },
      projectTypes: [
        {
          id: 'planning',
          name: '企劃發想與數位行銷'
        },
        {
          id: 'system',
          name: '系統設計 / 開發與維運'
        },
        {
          id: 'trade',
          name: '國內 / 國際貿易服務'
        },
        {
          id: 'product',
          name: '產品設計與量產開發'
        },
        {
          id: 'design',
          name: '品牌形象與視覺設計'
        }
      ]
    }
  },
  methods: {
    validate() {
      // Page 1
      const type = this.selectedProjectTypes
      const budget = this.budget
      const date = this.date
      const startDate = date.value.startDate
      const endDate = date.value.endDate
      const description = this.description

      // Page 2
      const person = this.person
      const company = this.company
      const phone = this.phone
      const email = this.email

      if (this.formPage == 1) {
        // project type
        if (!type.value.length) {
          type.error = true
          type.msg = '此處不可為空白'
        } else {
          type.error = false
          type.msg = ''
        }

        // budget
        if (!budget.value) {
          budget.error = true
          budget.msg = '此處不可為空白'
        } else {
          budget.error = false
          budget.msg = ''
        }

        // date
        if (!startDate | !endDate) {
          date.error = true
          date.msg = '此處不可為空白'
        } else {
          date.error = false
          date.msg = ''
        }

        // description
        if (!description.value) {
          description.error = true
          description.msg = '此處不可為空白'
        } else {
          description.error = false
          description.msg = ''
        }

        // validate
        if (!type.error && !budget.error && !date.error && !description.error) {
          this.formPage++
        }

        // scroll to top
        this.scroll()
      } else {
        // person
        if (!person.value) {
          person.error = true
          person.msg = '此處不可為空白'
        } else {
          person.error = false
          person.msg = ''
        }

        // company
        if (!company.value) {
          company.error = true
          company.msg = '此處不可為空白'
        } else {
          company.error = false
          company.msg = ''
        }

        // phone
        if (!phone.value) {
          phone.error = true
          phone.msg = '此處不可為空白'
        } else {
          phone.error = false
          phone.msg = ''
        }

        // email
        if (!email.value) {
          email.error = true
          email.msg = '此處不可為空白'
        } else {
          const mailRe = /\S+@\S+\.\S+/

          if (!String(email.value).match(mailRe)) {
            email.error = true
            email.msg = '信箱格式錯誤'
          } else {
            email.error = false
            email.msg = ''
          }
        }
      }
    },
    handleSubmit() {
      this.validate()
    },
    scroll() {
      let offset = document.querySelector('.header').clientHeight + 24
      window.scrollTo({
        behavior: 'smooth',
        top:
          document.querySelector('.form').getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          offset
      })
    }
  }
}
</script>

<style src="../../assets/scss/components/_contactForm.scss"></style>
