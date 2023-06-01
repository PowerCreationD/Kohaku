<template>
  <!-- <div class="example_section"> -->
    <div class="example_title">
        <h1>WORK</h1>
        <svg width="23" height="37" viewBox="0 0 23 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3281 1.66187C14.6751 -0.60213 18.4304 -0.552909 20.728 1.80953C27.6455 8.94606 18.1586 19.454 0.518834 37L0 36.4586C0 36.4586 18.2327 19.4048 17.7633 13.4495C17.6398 11.7022 15.3669 12.096 13.761 11.2101C13.1681 10.9148 12.6492 10.521 12.1551 10.0288C9.88222 7.69101 9.93163 3.95048 12.3034 1.66187H12.3281Z" fill="#E6AE4A"/>
        </svg>
    </div>
    <div class="work_example">
        <div class="example_col" v-for="itm in workData" :key="itm.title">
            <div class="example_item">
                <img :src="itm.img_url"/>
            </div>
            <p>{{ itm.title }}</p>
        </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
    props: ["workData"]
}
</script>

<style lang="scss" scoped>
.example_title {
    display: flex;
    h1 {
        font-size: 36px;
        font-weight: bold;
        margin: 0;
        line-height: 26px;
    }
    svg {
        position: absolute;
        z-index: 2;
        margin: 12px 0 0 120px;
    }
}
.work_example {
    height: 447px;
    background-color: #F5F5F5;
    display: flex;
    flex-direction: row;
    align-items: center;
    .example_col {
        display: flex;
        flex-direction: column;
        margin-left: 75px;
        .example_item {
            width: 390px;
            height: 260px;
            background-color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img {
            width: 80%;
            cursor: pointer;
        }
        p {
            margin: 10px 0;
        }
    }
}
</style>