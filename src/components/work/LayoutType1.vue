<template>
    <div class="work_detail__img-row-1">
        <img v-lazy="img_mobilemover_1" alt="">
    </div>
    <div class="work_detail__img-row-2">
        <div class="row-2 row-gap">
            <img v-lazy="img_mobilemover_2" alt="" />
            <p>Mobile Mover App 可為農機設定任務排程、路線、執行內容，並於執行中即時監控載具的工作情況</p>
        </div>
        <div class="row-2">
            <img v-lazy="img_mobilemover_3" alt="" />
            <p>考量田間操作情境，Mobile Mover 首重移動裝置 App 開發，以平板控制並以虛擬搖桿以靈活操作</p>
        </div>
    </div>
    <div class="work_detail__img-row-3">
        <div class="row-3">
            <img class="row-3-gap" v-lazy="img_mobilemover_4" alt="" />
            <img class="row-3-gap" v-lazy="img_mobilemover_5" alt="" />
            <img v-lazy="img_mobilemover_6" alt="" />
        </div>
        <p>針對載具的執行路線、狀態、電量、速度、位置回報，即時監控載具，使用者可依照不同任務需求設定、編輯與儲存路徑，建立標準化工作內容。App 可管理多張地圖的多條路徑，簡明化田間管理工作內容，並透過綁定、置換使 Mobile Mover 彈性規劃任務路徑</p>
    </div>
    <div class="work_detail__img-row-4">
        <div class="row-4">
            <img class="row-4-gap" v-lazy="img_mobilemover_7" alt="" />
            <img class="" v-lazy="img_mobilemover_8" alt="" />
        </div>
    </div>
</template>

<script setup>
import img_mobilemover_1 from '@/assets/image/work/system_development/mobilemover/img_mobilemover_1.jpg'
import img_mobilemover_2 from '@/assets/image/work/system_development/mobilemover/img_mobilemover_2.jpg'
import img_mobilemover_3 from '@/assets/image/work/system_development/mobilemover/img_mobilemover_3.png'
import img_mobilemover_4 from '@/assets/image/work/system_development/mobilemover/img_mobilemover_4.png'
import img_mobilemover_5 from '@/assets/image/work/system_development/mobilemover/img_mobilemover_5.png'
import img_mobilemover_6 from '@/assets/image/work/system_development/mobilemover/img_mobilemover_6.png'
import img_mobilemover_7 from '@/assets/image/work/system_development/mobilemover/img_mobilemover_7.jpg'
import img_mobilemover_8 from '@/assets/image/work/system_development/mobilemover/img_mobilemover_8.jpg'
</script>

<style lang="scss" scoped>
@use '../../assets/scss/components/typography' as typography;
.work_detail__img-row-1 {
    margin-bottom: 24px;
    img {
        width: 100%;
    }
}
.work_detail__img-row-2 {
    display: flex;
    .row-2 {
        width: calc((100% - 24px) / 2);
        margin-bottom: 48px;
        img {
            width: 100%;
        }
        p {
            margin: 24px 0 0 0;
            @include typography.font($index: 7);
        }
    }
    .row-gap {
        margin-right: 24px;
    }
}
.work_detail__img-row-3 {
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
    .row-3 {
        display: flex;
        width: calc((100% - 24px) / 3);
        img {
            width: 100%;
        }
        .row-3-gap {
            margin-right: 12px;
        }
    }
    p {
        margin: 24px 0 0 0;
        @include typography.font($index: 7);
    }
}
.work_detail__img-row-4 {
    display: flex;
    margin-bottom: 48px;
    .row-4 {
        display: flex;
        width: calc((100% - 24px) / 2);
        img {
            width: 100%;
        }
    }
    .row-4-gap {
        margin-right: 24px;
    }
}

@media screen and (max-width: 767px) {
    .work_detail__img-row-1 {
        margin-bottom: 16px;
        img {
            width: 100%;
        }
    }
    .work_detail__img-row-2 {
        display: flex;
        flex-wrap: wrap;
        .row-2 {
            width: 100%;
            margin-bottom: 16px;
            img {
                width: 100%;
            }
            p {
                margin-top: 16px;
            }
        }
        .row-gap {
            margin-right: 0px;
        }
    }
    .work_detail__img-row-3 {
        display: flex;
        margin-bottom: 0px;
        .row-3 {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            img {
                width: 100%;
                margin-bottom: 16px;
            }
            .row-3-gap {
                margin-right: 0px;
            }
        }
        p {
            margin:0 0 16px 0;
        }
    }
    .work_detail__img-row-4 {
        display: flex;
        margin-bottom: 0px;
        .row-4 {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            img {
                width: 100%;
                margin-bottom: 16px;
            }
            img:last-child {
                margin-bottom: 24px;
            }
        }
        
        .row-4-gap {
            margin-right: 0px;
        }
    }
}
</style>