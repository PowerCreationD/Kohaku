<script setup></script>
<template>
  <div class="home__section">
    <div class="solution-section"></div>
  </div>
</template>

<style src="@/assets/scss/home/_home-solution-section.scss"></style>

<script>
export default {
  name: 'HomeSolutionSection',
  data() {
    return {
      steps: [
        {
          step: 1,
          title: '需求研究',
          text: '首先深入了解需求，從場域、使用者與現實情境，找出問題核心！根據這些發現，為您量身打造解決方案。'
        },
        {
          step: 2,
          title: '概念設計',
          text: '進行腦力激盪，構建精彩的原型，接著持續調整與改良，確保這些點子能夠真正幫助您實現目標。'
        },
        {
          step: 3,
          title: '落地實現',
          text: '此刻，是時候付諸實踐了！我們整合數位技術，提供全端工程服務，確保每個細節，讓概念完美落地。'
        }
      ]
    }
  }
}
</script>
