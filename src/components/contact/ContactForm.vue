<template>
  <div class="form">
    <form @submit.prevent="handleSubmit">
      <div class="form__page--1" v-show="formPage == 1">
        <div
          class="form__section form__type"
          :class="{ error: selectedProjectTypes.error }"
          :errorMsg="selectedProjectTypes.msg"
        >
          <label class="form__title font-3" for="project-type">{{
            $t('contact.form.project_type')
          }}</label>
          <div class="form__type-checkbox">
            <div
              id="project-type"
              v-for="project in projectTypes"
              :key="project.id"
              class="checkbox"
            >
              <label :for="project.id" class="checkbox__label font-7"
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
          <label class="form__title font-3" for="budget">{{ $t('contact.form.budget') }}</label>
          <input
            class="font-7"
            id="budget"
            type="text"
            inputmode="numeric"
            v-model="budget.value"
            :placeholder="$t('contact.form.budget_placeholder')"
          />
        </div>
        <div
          class="form__section form__date-wrap"
          :class="{ error: date.error }"
          :errorMsg="date.msg"
        >
          <label class="form__title font-3" for="date">{{
            $t('contact.form.estimated_project_time')
          }}</label>
          <div id="date" class="form__date">
            <input
              class="form__date--picker font-7"
              type="date"
              v-model="date.value.startDate"
              :max="date.value.endDate"
            />
            <span class="form__date--dash font-7">~</span>
            <input
              class="form__date--picker font-7"
              type="date"
              v-model="date.value.endDate"
              :min="date.value.startDate"
            />
          </div>
        </div>
        <div
          class="form__section form__desc"
          :class="{ error: description.error }"
          :errorMsg="description.msg"
        >
          <label class="form__title font-3" for="desc">{{
            $t('contact.form.project_content_overview')
          }}</label>
          <textarea
            id="desc"
            cols="30"
            rows="10"
            v-model="description.value"
            class="form__desc font-7"
            :placeholder="$t('contact.form.project_content_overview_placeholder')"
          ></textarea>
        </div>
        <div class="form__btns">
          <button type="button" class="button button--primary form__btns--next" @click="validate()">
            {{ $t('global.buttons.next') }}
          </button>
        </div>
      </div>
      <div class="form__page--2" v-show="formPage == 2">
        <div
          class="form__section form__person"
          :class="{ error: person.error }"
          :errorMsg="person.msg"
        >
          <label class="form__title font-3" for="person">{{
            $t('contact.form.contact_person')
          }}</label>
          <input class="font-7" id="person" type="text" v-model="person.value" />
        </div>
        <div
          class="form__section form__company"
          :class="{ error: company.error }"
          :errorMsg="company.msg"
        >
          <label class="form__title font-3" for="company">{{
            $t('contact.form.company_brand_name')
          }}</label>
          <input
            class="font-7"
            id="company"
            type="text"
            v-model="company.value"
            :placeholder="$t('contact.form.company_brand_name_placeholder')"
          />
        </div>
        <div
          class="form__section form__phone"
          :class="{ error: phone.error }"
          :errorMsg="phone.msg"
        >
          <label class="form__title font-3" for="phone">{{
            $t('contact.form.contact_number')
          }}</label>
          <input class="font-7" id="phone" type="text" v-model="phone.value" />
        </div>
        <div
          class="form__section form__email"
          :class="{ error: email.error }"
          :errorMsg="email.msg"
        >
          <label class="form__title font-3" for="email">{{
            $t('contact.form.contact_email')
          }}</label>
          <input class="font-7" id="email" type="text" v-model="email.value" />
        </div>
        <div class="form__btns">
          <button
            type="button"
            class="button button--secondary form__btns--prev"
            @click="formPage--, scroll()"
          >
            {{ $t('global.buttons.prev') }}
          </button>
          <button
            type="submit"
            class="button button--primary form__btns--submit"
            @click="validate()"
          >
            {{ $t('global.buttons.submit_form') }}
          </button>
        </div>
      </div>
    </form>
  </div>

  <div class="background" v-show="popup == 1">
    <div class="popup">
      <div class="popup__header font-4">{{ $t('contact.popup.confirm_submit') }}</div>
      <div class="popup__content font-7">{{ $t('contact.popup.submit_form_confirmation') }}</div>
      <div class="popup__buttons">
        <button class="button button--secondary popup__buttons--back" @click="popup = 0">
          {{ $t('global.buttons.back') }}
        </button>
        <button
          class="button button--primary popup__buttons--submit"
          :disabled="sending"
          :class="{ 'popup__buttons--disabled': sending }"
          @click="sendEmail()"
        >
          {{ $t('global.buttons.submit_form') }}
        </button>
      </div>
    </div>
  </div>

  <div class="background" v-show="popup == 2">
    <div class="popup">
      <div class="popup__header font-4">{{ $t('contact.popup.thank_you') }}</div>
      <div class="popup__content font-7">
        {{ $t('contact.popup.form_confirmation_message') }}
      </div>
      <div class="popup__buttons">
        <button class="button button--secondary popup__buttons--close" @click="popup = 0">
          {{ $t('global.buttons.close') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'
export default {
  name: 'formComponent',
  data() {
    return {
      formPage: 1,
      popup: 0,
      sending: 0,
      selectedProjectTypes: {
        value: [],
        error: undefined,
        msg: undefined
      },
      budget: {
        value: undefined,
        error: undefined,
        msg: undefined
      },
      date: {
        value: {
          startDate: undefined,
          endDate: undefined
        },
        error: undefined,
        msg: undefined
      },
      description: {
        value: undefined,
        error: undefined,
        msg: undefined
      },
      person: {
        value: undefined,
        error: undefined,
        msg: undefined
      },
      company: {
        value: undefined,
        error: undefined,
        msg: undefined
      },
      phone: {
        value: undefined,
        error: undefined,
        msg: undefined
      },
      email: {
        value: undefined,
        error: undefined,
        msg: undefined
      },
      projectTypes: [
        {
          id: 'system',
          name: this.$t('contact.form.project_types.system')
        },
        {
          id: 'design',
          name: this.$t('contact.form.project_types.design')
        },
        {
          id: 'content',
          name: this.$t('contact.form.project_types.content')
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
          type.msg = this.$t('contact.form.validation.required')
        } else {
          type.error = false
          type.msg = ''
        }

        // budget
        if (!budget.value || budget.value == '0') {
          budget.error = true
          budget.msg = this.$t('contact.form.validation.required')
        } else {
          budget.error = false
          budget.msg = ''
        }

        // date
        if (!startDate | !endDate) {
          date.error = true
          date.msg = this.$t('contact.form.validation.required')
        } else {
          date.error = false
          date.msg = ''
        }

        // description
        if (!description.value) {
          description.error = true
          description.msg = this.$t('contact.form.validation.required')
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
          person.msg = this.$t('contact.form.validation.required')
        } else {
          person.error = false
          person.msg = ''
        }

        // company
        if (!company.value) {
          company.error = true
          company.msg = this.$t('contact.form.validation.required')
        } else {
          company.error = false
          company.msg = ''
        }

        // phone
        if (!phone.value) {
          phone.error = true
          phone.msg = this.$t('contact.form.validation.required')
        } else {
          phone.error = false
          phone.msg = ''
        }

        // email
        if (!email.value) {
          email.error = true
          email.msg = this.$t('contact.form.validation.required')
        } else {
          const mailRe = /\S+@\S+\.\S+/

          if (!String(email.value).match(mailRe)) {
            email.error = true
            email.msg = this.$t('contact.form.validation.mail_format')
          } else {
            email.error = false
            email.msg = ''
          }
        }

        // validate
        if (!person.error && !company.error && !phone.error && !email.error) {
          this.popup = 1
        } else {
          // scroll to top
          this.scroll()
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
    },
    sendEmail() {
      let typeArr = []
      this.selectedProjectTypes.value.map((type) => {
        typeArr.push(type.name)
      })
      let types = typeArr.join('、')
      let budget = this.budget.value
      let date = `${this.date.value.startDate} ~ ${this.date.value.endDate}`
      let description = this.description.value
      let person = this.person.value
      let company = this.company.value
      let phone = this.phone.value
      let email = this.email.value

      const templateParams = {
        user_name: `${person}`,
        user_email: `${email}`,
        message: `
        <div style="background: #F5F5F5; padding:5%; font-family: font-family: 'Ubuntu', sans-serif;">
            <div style="background: #FFFFFF;">
                <div style="width: 100%; height: 8px; background: #E6AE4A;"></div>
                <div style="padding: 6%;">
                    <div style="width:100%; display:flex; justify-content: flex-start;">
                        <img src="https://upload.cc/i1/2023/05/31/ZdgQ2u.png" alt="Kohaku" style="width:154px; margin-left:0;">
                    </div>
                    <div style="margin: 39px 0 28px 0;">
                        <article style="font-size: 16px;">
                            <p style="margin: 0;">感謝您！</p>
                            <p style="margin: 0;">我們已收到您的來信，將在確認內容後儘速與您接洽！</p>
                            <p style="margin: 0;">期待與您共同描繪屬於您的理想藍圖。</p>
                            <br>
                            <p style="margin: 0;">以下是您的填寫內容：</p>
                        </article>
                    </div>
                    <div style="padding:28px 0; border-top: 1px solid #C4C4C4; border-bottom: 1px solid #C4C4C4;">
                        <h3 style="margin: 0 0 16px 0; font-size:20px;">專案類型</h3>
                        <p style="margin:0; font-size: 16px;">${types}</p>
                    </div>
                    <div style="padding:28px 0; border-bottom: 1px solid #C4C4C4;">
                        <h3 style="margin: 0 0 16px 0; font-size:20px;">預算</h3>
                        <p style="margin:0; font-size: 16px;">${budget} 元</p>
                    </div>
                    <div style="padding:28px 0;border-bottom: 1px solid #C4C4C4;">
                        <h3 style="margin: 0 0 16px 0; font-size:20px;">預估專案時間</h3>
                        <p style="margin:0; font-size: 16px;">${date}</p>
                    </div>
                    <div style="padding:28px 0;border-bottom: 1px solid #C4C4C4;">
                        <h3 style="margin: 0 0 16px 0; font-size:20px;">專案內容概述</h3>
                        <p style="margin:0; font-size: 16px; white-space: pre-line;">${description}</p>
                    </div>
                    <div style="padding:28px 0;border-bottom: 1px solid #C4C4C4;">
                        <h3 style="margin: 0 0 16px 0; font-size:20px;">聯絡人</h3>
                        <p style="margin:0; font-size: 16px;">${person}</p>
                    </div>
                    <div style="padding:28px 0;border-bottom: 1px solid #C4C4C4;">
                        <h3 style="margin: 0 0 16px 0; font-size:20px;">公司 / 品牌名稱</h3>
                        <p style="margin:0; font-size: 16px;">${company}</p>
                    </div>
                    <div style="padding:28px 0;border-bottom: 1px solid #C4C4C4;">
                        <h3 style="margin: 0 0 16px 0; font-size:20px;">聯絡電話</h3>
                        <a style="margin:0; font-size: 16px; color:#000000">${phone}</a>
                    </div>
                    <div style="padding:28px 0;border-bottom: 1px solid #C4C4C4;">
                        <h3 style="margin: 0 0 16px 0; font-size:20px;">聯絡信箱</h3>
                        <a href="${email}" style="margin:0; font-size: 16px; text-decoration: none; color: #000000;">
                            ${email}</a>
                    </div>
                </div>
                <footer style="background: #3E3A39; color:#FFFFFF; padding:48px 6%; margin-top:105px">
                    <h1 style="font-size: 20px; margin:0 0 8px 0">琥白 KOHAKU</h1>
                    <h2 style="font-size: 16px; margin:0 0 28px 0">RESEARCH x CONCEPT = SOLUTION</h2>
                    <br>
                    <p style="font-size:12px; margin:0 0 12px 0;">
                        <span style="margin-right: 12px;">Time</span>
                        <span>Mon~Fri / 10:00-19:00</span>
                    </p>
                    <p style="font-size:12px; margin:0 0 12px 0;"">
                          <span style=" margin-right: 12px;">Address</span>
                        <a style="color: #FFFFFF;">高雄市鹽埕區大勇路11號3樓507室</a>
                    </p>
                    <p style=" font-size:12px; margin:0;">
                        <span style="margin-right: 12px;">Homepage</span>
                        <a href="https://kohakustudio.co"
                            style="text-decoration: none; color: #FFFFFF;">https://kohakustudio.co</a>
                    </p>
                </footer>
            </div>
        </div>
        `
      }

      this.sending = 1
      emailjs.send('smtpmail', 'contact_form', templateParams, 'mwaTjvTw4wztWGKUq').then(
        (result) => {
          this.sending = 0
          this.popup = 2
          console.log('SUCCESS!', result.text)
          this.resetForm()
        },
        (error) => {
          this.sending = 0
          this.popup = 0
          alert('FAILED...')
          console.log('FAILED...', error.text)
        }
      )
    },
    resetForm() {
      this.formPage = 1
      this.selectedProjectTypes = {
        value: [],
        error: undefined,
        msg: undefined
      }
      this.budget = {
        value: undefined,
        error: undefined,
        msg: undefined
      }
      this.date = {
        value: {
          startDate: undefined,
          endDate: undefined
        },
        error: undefined,
        msg: undefined
      }
      this.description = {
        value: undefined,
        error: undefined,
        msg: undefined
      }
      this.person = {
        value: undefined,
        error: undefined,
        msg: undefined
      }
      this.company = {
        value: undefined,
        error: undefined,
        msg: undefined
      }
      this.phone = {
        value: undefined,
        error: undefined,
        msg: undefined
      }
      this.email = {
        value: undefined,
        error: undefined,
        msg: undefined
      }
    }
  },
  watch: {
    budget: {
      handler(newValue) {
        if (!newValue.value) return
        const result = newValue.value
          .replace(/^0\d+/, '')
          .replace(/\D/g, '')
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        this.$nextTick(() => (this.budget.value = result))
      },
      deep: true
    },
    popup: {
      handler(newValue) {
        if (newValue == 0) {
          document.getElementsByTagName('body')[0].style.overflowY = 'auto'
        } else {
          document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
        }
      },
      immediate: true
    }
  }
}
</script>

<style src="@/assets/scss/contact/_contact-form.scss" scoped></style>
