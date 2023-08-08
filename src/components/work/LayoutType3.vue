<template>
    <div class="work_detail__img-item-1">
        <img src="/src/assets/image/work/product_design/img_kizuna_1.jpg" alt="">
    </div>
    <div class="work_detail__img-item-1">
        <img src="/src/assets/image/work/product_design/img_kizuna_2.jpg" alt="">
        <p>三步驟展開使用不需工具組合</p>
    </div>
    <div class="work_detail__img-item-2">
        <div class="item-2 item-gap">
            <img src="/src/assets/image/work/product_design/img_kizuna_3.jpg" alt="" />
            <p>考量工法精選木料，梣木堅韌負以彎曲結構，松木輕軟使桌面細膩合用。牛皮桌面，回應辦公長時間操作鍵鼠、執筆書寫時置腕處的絕對舒適，並輕柔回饋筆觸。</p>
        </div>
        <div class="item-2">
            <img src="/src/assets/image/work/product_design/img_kizuna_4.jpg" alt="" />
            <p>將桌面折合、座椅靠攏，不需拆裝即可收納三件傢俱組合。收束實木傢俱的量體，空間轉換時實現優雅推移，定位再輕巧展開，旋即重啟生產力。</p>
        </div>
    </div>
    <div class="work_detail__img-item-1 item-bottom">
        <img src="/src/assets/image/work/product_design/img_kizuna_5.png" alt="">
    </div>
    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/components/typography' as typography;
.work_detail__img-item-1 {
    margin-bottom: 24px;
    img {
        width: 100%;
    }
    p {
        @include typography.font($index: 7);
        margin: 24px 0 0 0;
    }
}
div.item-bottom img:last-child{
    margin-bottom: 24px;
}
.work_detail__img-item-2 {
    display: flex;
    .item-2 {
        width: calc((100% - 24px) / 2);
        margin-bottom: 48px;
        img {
            width: 100%;
        }
        p {
            @include typography.font($index: 7);
            margin: 24px 0 0 0;
        }
    }
    .item-gap {
        margin-right: 24px;
    }
}

@media screen and (max-width: 767px) {
    .work_detail__img-item-1 {
        margin-bottom: 0px;
        img {
            width: 100%;
            margin-bottom: 16px;
        }
        p {
            margin: 0 0 16px 0;
        }
    }
    div.item-bottom img:last-child{
        margin-bottom: 24px;
    }
    .work_detail__img-item-2 {
        display: flex;
        flex-wrap: wrap;
        .item-2 {
            width: 100%;
            margin-bottom: 0px;
            img {
                width: 100%;
                margin-bottom: 16px;
            }
            p {
                margin: 0 0 16px 0;
            }
        }
        .item-gap {
            margin-right: 0px;
        }
    }
}
</style>