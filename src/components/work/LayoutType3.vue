<template>
    <div class="work_detail__img-item-1">
        <img v-lazy="img_kizuna_1" alt="">
    </div>
    <div class="work_detail__img-item-1">
        <img v-lazy="img_kizuna_2" alt="">
        <p>{{$t('work.mu_maison.detail.description.desc_1')}}</p>
    </div>
    <div class="work_detail__img-item-2">
        <div class="item-2 item-gap">
            <img v-lazy="img_kizuna_3" alt="" />
            <p>{{$t('work.mu_maison.detail.description.desc_2')}}</p>
        </div>
        <div class="item-2">
            <img v-lazy="img_kizuna_4" alt="" />
            <p>{{$t('work.mu_maison.detail.description.desc_3')}}</p>
        </div>
    </div>
    <div class="work_detail__img-item-1 item-bottom">
        <img v-lazy="img_kizuna_5" alt="">
    </div>
    
</template>

<script setup>
import img_kizuna_1 from '@/assets/image/work/product_design/img_kizuna_1.jpg'
import img_kizuna_2 from '@/assets/image/work/product_design/img_kizuna_2.jpg'
import img_kizuna_3 from '@/assets/image/work/product_design/img_kizuna_3.jpg'
import img_kizuna_4 from '@/assets/image/work/product_design/img_kizuna_4.jpg'
import img_kizuna_5 from '@/assets/image/work/product_design/img_kizuna_5.png'
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