<template>
  <div class="milestone">
    <h2 class="milestone__title">MILESTONE</h2>
    <div class="milestone-wrap">
      <div class="phase" v-for="item in milestone" :key="item.key">
        <p class="phase__date">{{ item.date }}</p>
        <div class="phase__things">
          <p class="phase__thing" v-for="thing in item.content" :key="thing">{{ thing }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'milestoneComponent',
  data() {
    return {
      milestone: [
        {
          date: '2021/09',
          content: [
            '與「株式会社エムスクエア・ラボ（m2labo）」、「株式会社やさいバス（Vegibus）」合作並獲其投資',
            '成立創次方股份有限公司'
          ]
        },
        {
          date: '2022/04',
          content: ['獲111年度教育部「U-start創新創業計畫」第一階段補助']
        },
        {
          date: '2022/07',
          content: ['成立琥白股份有限公司']
        },
        {
          date: '2022/08',
          content: [
            '與「スズキ株式会社（Suzuki）」、「株式会社エムスクエア・ラボ（m2labo）」合作，共同開發MobileMover'
          ]
        },
        {
          date: '2023/03',
          content: ['與「株式会社CuboRex」合作，取得產品代理權']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Ubuntu', sans-serif;
  padding: 0;
  margin: 0;
}

h1,
h2 {
  font-size: 36px;
}

@media screen and (max-width: 767px) {
  p {
    font-size: 14px;
    line-height: 20px;
  }
  h1,
  h2 {
    font-size: 22px;
  }
}
// --------------------
.milestone {
  margin-top: 76px;
  &-wrap {
    display: flex;
    flex-direction: column;
    margin-top: 164px;
    width: min(900px, 100%);
    margin-left: auto;
  }
  .phase {
    display: flex;
    margin-bottom: 16px;
    &__date {
      width: 61px;
      margin-right: 51px;
      flex-shrink: 0;
    }
    &__things {
      flex-grow: 1;
      p + p {
        margin-top: 16px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .milestone {
    margin-top: 36px;
    &-wrap {
      margin-top: 76px;
    }
    .phase {
      &__date {
        margin-right: 36px;
      }
    }
  }
}
</style>
