<template>
    <div class="service__intro">
        <div v-if="!isMobile" class="service__intro__header">
          <div class="service__intro__line-top"></div>
          <div class="service__intro__title">SERVICES</div>
        </div>
        <h1 v-else>{{ headerData.name }}</h1>
        <div v-if="!isMobile" class="service__intro__slogan">
          <p v-for="item in headerData.slogan" :key="item">{{ item }}</p>
        </div>
        <p class="service__intro__description">{{ headerData.description }}</p>
        <div class="service__intro__line-bottom"></div>
    </div>
</template>

<script>
export default {
    props: ["headerData"],
    data() {
      return {
        isMobile: false
      }
    },
    methods: {
      checkViewportSize() {
        this.isMobile = window.innerWidth < this.$mobileDeviceMaxWidth
      }
    },
    mounted() {
      this.checkViewportSize()
      window.addEventListener('resize', this.checkViewportSize)
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkViewportSize)
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/components/typography' as typography;
.service__intro {
  width: 100%;
  
  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__line-top {
    flex-grow: 1;
    // width: 75%;
    margin-right: 40px;
    border-top: 1px solid #777777;
  }

  &__title {
    // width: 20%;
    font-size: 36px;
    font-weight: bold;
    text-align: end;
    margin-top: -7px;
  }

  &__line-bottom {
    border-bottom: 1px solid #777777;
    margin-bottom: 40px;
  }
}
@media screen and (min-width: 767px) {
  .service__intro {
    
    &__description {
      padding-bottom: 40px;
      font-size: 16px;
      line-height: 22px;
      text-align: justify;  
    }

    &__slogan {
      @include typography.font($index: 6);
      margin-bottom: 12px;
    }

  }
}

@media screen and (max-width: 767px) {
  .service__intro {
    margin-top: 36px;

    h1 {
      @include typography.font($index: 1);
    }
  
    &__description {
      padding-top: 16px;
      padding-bottom: 36px;
      @include typography.font($index: 7);
      line-height: 22px;
      text-align: justify;  
    }
  }
}
</style>