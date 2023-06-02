<template>
    <div class="service__intro">
        <div class="service__intro__description">
          <div class="service__intro__line-top"></div>
          <div class="service__intro__title">SERVICES</div>
        </div>
        <p>{{ headerData.description }}</p>
        <div class="service__intro__line-bottom"></div>
    </div>
</template>

<script>
export default {
    props: ["headerData"]
}
</script>

<style lang="scss" scoped>
.service__intro {
  width: 100%;
  
  p {
    padding: 40px 0;
    font-size: 16px;
    line-height: 22px;
    text-align: justify;  
  }

  &__description {
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
</style>