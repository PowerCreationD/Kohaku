<template>
    <div class="work_detail__img-row-1">
        <img src="/src/assets/work/system_development/mobilemover/img_mobilemover_1.jpeg" alt="">
    </div>
    <div class="work_detail__img-row-2">
        <div class="row-2 row-gap">
            <img src="/src/assets/work/system_development/mobilemover/img_mobilemover_2.jpeg" alt="" />
            <p>Mobile Mover 以平板控制，配備虛擬搖桿以靈活移動載具</p>
        </div>
        <div class="row-2">
            <img src="/src/assets/work/system_development/mobilemover/img_mobilemover_3.png" alt="" />
            <p>搭配上 Mobile Mover App 的使用介面，使用者可以為 Mobile Mover 設定任務排程、任務路線，並在任務執行中即時監控載具的工作情況</p>
        </div>
    </div>
    <div class="work_detail__img-row-3">
        <div class="row-3">
            <img class="row-3-gap" src="/src/assets/work/system_development/mobilemover/img_mobilemover_4.png" alt="" />
            <img class="row-3-gap" src="/src/assets/work/system_development/mobilemover/img_mobilemover_5.png" alt="" />
            <img src="/src/assets/work/system_development/mobilemover/img_mobilemover_6.png" alt="" />
        </div>
        <p>處理多張地圖、多條路徑使用情境，使用者可以設置不同的地圖及路線，透過綁定、置換使 Mobile Mover 彈性規劃任務路徑</p>
    </div>
    <div class="work_detail__img-row-4">
        <div class="row-4">
            <img class="row-4-gap" src="/src/assets/work/system_development/mobilemover/img_mobilemover_7.jpeg" alt="" />
            <img class="" src="/src/assets/work/system_development/mobilemover/img_mobilemover_8.jpeg" alt="" />
        </div>
    </div>
</template>

<script>
export default {

}
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