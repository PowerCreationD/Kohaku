<template>
    <div class="work_detail__img-item-1">
        <img src="/src/assets/work/product_design/img_kizuna_1.png" alt="">
    </div>
    <div class="work_detail__img-item-1">
        <img src="/src/assets/work/product_design/img_kizuna_2.png" alt="">
        <p>三步驟展開使用不需工具組合</p>
    </div>
    <div class="work_detail__img-item-2">
        <div class="item-2 item-gap">
            <img src="/src/assets/work/product_design/img_kizuna_3.png" alt="" />
            <p>選用堅硬的梣木加工彎曲結構、以三段工法進行榫接<br>輕軟的松木作為桌板與抽屜立面，並以牛皮包覆</p>
        </div>
        <div class="item-2">
            <img src="/src/assets/work/product_design/img_kizuna_4.png" alt="" />
            <p>三件一組的家具不需工具就能收合<br>優雅自然體現在組裝、移動等流程之中</p>
        </div>
    </div>
    <div class="work_detail__img-item-1 item-bottom">
        <img src="/src/assets/work/product_design/img_kizuna_5.png" alt="">
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