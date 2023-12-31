<script setup>
import imgAmber from '@/assets/image/global/image_amber.png'
</script>

<template>
  <div class="member">
    <page-title>MEMBER</page-title>
    <div class="member-wrap">
      <template v-for="person in members" :key="person.id">
        <member-card :person="person"></member-card>
      </template>
    </div>
    <div class="ambers">
      <img v-for="n in amberNum" :key="n" :src="amber.src" :alt="amber.alt" :class="'amber-' + n" />
    </div>
  </div>
</template>

<style src="@/assets/scss/member/member.scss" scoped></style>

<script>
import pageTitle from '@/components/global/PageTitle.vue'
import memberCard from '@/components/member/MemberCard.vue'
export default {
  components: { pageTitle, memberCard },
  data() {
    return {
      windowWidth: 0,
      amber: {
        src: imgAmber,
        alt: 'image_amber'
      },
      members: [
        {
          id: 'charles',
          name: this.$t('member.charles.name'),
          position: this.$t('member.charles.position'),
          intro: this.$t('member.charles.intro'),
          description: this.$t('member.charles.description'),
          skills: [
            this.$t('member.charles.skills[0]'),
            this.$t('member.charles.skills[1]'),
            this.$t('member.charles.skills[2]'),
            this.$t('member.charles.skills[3]')
          ]
        },
        {
          id: 'hannah',
          name: this.$t('member.hannah.name'),
          position: this.$t('member.hannah.position'),
          intro: this.$t('member.hannah.intro'),
          description: this.$t('member.hannah.description'),
          skills: [
            this.$t('member.hannah.skills[0]'),
            this.$t('member.hannah.skills[1]'),
            this.$t('member.hannah.skills[2]')
          ]
        },
        {
          id: 'brooke',
          name: this.$t('member.brooke.name'),
          position: this.$t('member.brooke.position'),
          intro: this.$t('member.brooke.intro'),
          description: this.$t('member.brooke.description'),
          skills: [
            this.$t('member.brooke.skills[0]'),
            this.$t('member.brooke.skills[1]'),
            this.$t('member.brooke.skills[2]'),
            this.$t('member.brooke.skills[3]')
          ]
        },
        {
          id: 'jozie',
          name: this.$t('member.jozie.name'),
          position: this.$t('member.jozie.position'),
          intro: this.$t('member.jozie.intro'),
          description: this.$t('member.jozie.description'),
          skills: [
            this.$t('member.jozie.skills[0]'),
            this.$t('member.jozie.skills[1]'),
            this.$t('member.jozie.skills[2]'),
            this.$t('member.jozie.skills[3]')
          ]
        },
        {
          id: 'arthur',
          name: this.$t('member.arthur.name'),
          position: this.$t('member.arthur.position'),
          intro: this.$t('member.arthur.intro'),
          description: this.$t('member.arthur.description'),
          skills: [
            this.$t('member.arthur.skills[0]'),
            this.$t('member.arthur.skills[1]'),
            this.$t('member.arthur.skills[2]')
          ]
        },
        {
          id: 'albert',
          name: this.$t('member.albert.name'),
          position: this.$t('member.albert.position'),
          intro: this.$t('member.albert.intro'),
          description: this.$t('member.albert.description'),
          skills: [
            this.$t('member.albert.skills[0]'),
            this.$t('member.albert.skills[1]'),
            this.$t('member.albert.skills[2]'),
            this.$t('member.albert.skills[3]'),
            this.$t('member.albert.skills[4]')
          ]
        },
        {
          id: 'lihsin',
          name: this.$t('member.lihsin.name'),
          position: this.$t('member.lihsin.position'),
          intro: this.$t('member.lihsin.intro'),
          description: this.$t('member.lihsin.description'),
          skills: [
            this.$t('member.lihsin.skills[0]'),
            this.$t('member.lihsin.skills[1]'),
            this.$t('member.lihsin.skills[2]'),
            this.$t('member.lihsin.skills[3]'),
            this.$t('member.lihsin.skills[4]')
          ]
        },
        {
          id: 'ivy',
          name: this.$t('member.ivy.name'),
          position: this.$t('member.ivy.position'),
          intro: this.$t('member.ivy.intro'),
          description: this.$t('member.ivy.description'),
          skills: [
            this.$t('member.ivy.skills[0]'),
            this.$t('member.ivy.skills[1]'),
            this.$t('member.ivy.skills[2]'),
            this.$t('member.ivy.skills[3]'),
            this.$t('member.ivy.skills[4]')
          ]
        },

        {
          id: 'lily',
          name: this.$t('member.lily.name'),
          position: this.$t('member.lily.position'),
          intro: this.$t('member.lily.intro'),
          description: this.$t('member.lily.description'),
          skills: [
            this.$t('member.lily.skills[0]'),
            this.$t('member.lily.skills[1]'),
            this.$t('member.lily.skills[2]')
          ]
        },
        {
          id: 'andrew',
          name: this.$t('member.andrew.name'),
          position: this.$t('member.andrew.position'),
          intro: this.$t('member.andrew.intro'),
          description: this.$t('member.andrew.description'),
          skills: [
            this.$t('member.andrew.skills[0]'),
            this.$t('member.andrew.skills[1]'),
            this.$t('member.andrew.skills[2]'),
            this.$t('member.andrew.skills[3]')
          ]
        },
        {
          id: 'ti',
          name: this.$t('member.ti.name'),
          position: this.$t('member.ti.position'),
          intro: this.$t('member.ti.intro'),
          description: this.$t('member.ti.description'),
          skills: [
            this.$t('member.ti.skills[0]'),
            this.$t('member.ti.skills[1]'),
            this.$t('member.ti.skills[2]'),
            this.$t('member.ti.skills[3]')
          ]
        }
      ]
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    }
  },
  computed: {
    amberNum() {
      let width = this.windowWidth
      if (width > 600) {
        return 10
      } else {
        return 20
      }
    }
  }
}
</script>
