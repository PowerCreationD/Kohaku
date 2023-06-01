<template>
    <div class="service__intro">
        <div class="service__description-top">
          <div class="section__line-top"></div>
          <div class="title">SERVICES</div>
        </div>
        <p>{{ headerData.description }}</p>
        <div class="section__line-bottom"></div>
    </div>
</template>

<script>
export default {
    props: ["headerData"]
}
</script>

<style lang="scss" scoped>
.service__intro {
  width: 924px;
}
.service__intro p {
  padding: 40px 0;
  font-size: 16px;
  line-height: 22px;
  text-align: justify;  
}
.service__description-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.section__line-top {
  width: 75%;
  border-top: 1px solid #777777;
}
.title {
  width: 20%;
  font-size: 36px;
  font-weight: bold;
  text-align: end;
}
.section__line-bottom {
  border-bottom: 1px solid #777777;
  margin-bottom: 40px;
}
</style>