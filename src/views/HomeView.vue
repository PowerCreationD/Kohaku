<template>
  <div class="home">
    <h1>Homepage</h1>
    <button class="button button--primary">Contact Us!</button>
    <button class="button button--thumbnail-navigation">
      <RightArrowIcon class="button--thumbnail-navigation__arrow-icon" />
    </button>
    <button class="button button--thumbnail-navigation">
      <LeftArrowIcon class="button--thumbnail-navigation__arrow-icon" />
    </button>
    <button class="button button--more">
      查看所有專案
      <MoreArrowIcon class="button--more__arrow-icon" />
    </button>
    <button class="button button--sidebar">企劃發想與數位行銷</button>
    <button class="button button--service">Software Engineering</button>
    <button class="button button--top-selection">Software Engineering</button>
    <CommaIcon class="comma--test" />
    <DropdownArrowIcon class="dropdown-arrow--test" />
    <BigLogo class="big-logo--test" />
    <SmallLogo class="small-logo--test" />
  </div>
</template>

<script>
import RightArrowIcon from '../components/global/RightArrowIcon.vue'
import LeftArrowIcon from '../components/global/LeftArrowIcon.vue'
import MoreArrowIcon from '../components/global/MoreArrowIcon.vue'
import CommaIcon from '../components/global/CommaIcon.vue'
import DropdownArrowIcon from '../components/global/DropdownArrowIcon.vue'
import BigLogo from '../components/global/BigLogo.vue'
import SmallLogo from '../components/global/SmallLogo.vue'

export default {
  components: {
    RightArrowIcon,
    LeftArrowIcon,
    MoreArrowIcon,
    CommaIcon,
    DropdownArrowIcon,
    BigLogo,
    SmallLogo
  }
}
</script>

<style lang="scss">
.comma--test {
  width: 13px;
  height: 22px;
  path {
    fill: black;
  }
}

.dropdown-arrow--test {
  width: 17px;
  height: 22px;
  path {
    stroke: black;
  }
}

.big-logo--test {
  height: 50px;
}

.small-logo--test {
  height: 50px;
}
</style>
