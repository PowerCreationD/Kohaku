<template>
  <div class="home-curve">
    <div class="home-curve-section home-curve-section--top">
      <svg
        class="home-curve-section__curve home-curve-section__curve--top"
        viewBox="0 0 1376 56"
        fill="none"
      >
        <path
          d="M0 1.00009C116.293 1.00009 628.785 1.00007 739.306 1.00006C877.456 1.00005 851.428 29.3277 923.507 29.3277C995.585 29.3277 969.056 1.00003 1097.7 1.00002C1200.61 1.00002 1283.73 0.999995 1376 0.999988"
          stroke="white"
        />
      </svg>

      <svg
        class="home-curve-section__curve home-curve-section__curve--top"
        viewBox="0 0 1376 56"
        fill="none"
      >
        <path
          d="M0 1.00005C116.293 1.00004 680.342 1.00002 790.862 1.00001C929.013 1 944.029 54.9998 1016.11 54.9998C1088.19 54.9998 1122.22 0.999989 1250.86 0.999979C1353.78 0.999971 1283.73 0.99995 1376 0.999943"
          stroke="white"
        />
      </svg>
    </div>
    <slot></slot>
    <div class="home-curve-section home-curve-section--bottom">
      <svg
        class="home-curve-section__curve home-curve-section__curve--bottom"
        viewBox="0 0 1036 63"
        fill="none"
      >
        <path
          d="M0.371094 62C92.6383 62 365.97 62 468.882 62C597.522 62 631.559 1 703.638 1C775.716 1 790.733 62 928.883 62C1039.4 62 919.707 62 1036 62"
          stroke="white"
        />
      </svg>
      <svg
        class="home-curve-section__curve home-curve-section__curve--bottom"
        viewBox="0 0 1047 35"
        fill="none"
      >
        <path
          d="M0.858398 34C93.1256 34 358.949 34 461.861 34C564.773 34 563.472 0.5 635.55 0.5C707.629 0.5 702.123 34 840.273 34C950.794 34 930.205 34 1046.5 34"
          stroke="white"
        />
      </svg>
      <svg
        class="home-curve-section__curve home-curve-section__curve--bottom"
        viewBox="0 0 1047 24"
        fill="none"
      >
        <path
          d="M0.859375 23C93.1266 23 229.308 23 332.221 23C460.861 23 496.9 1 568.979 1C641.057 1 673.092 23 811.243 23C921.763 23 930.706 23 1047 23"
          stroke="white"
        />
      </svg>
    </div>
  </div>
</template>

<style src="@/assets/scss/home/_home-curve-section.scss" scoped></style>

<script>
export default {
  name: 'CurveWrap'
}
</script>
