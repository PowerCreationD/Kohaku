<template>
    <div class="work-detail-header">
        <template v-if="isMobile">
            <div class="section__line"></div>
            <div class="work-detail-header__description">
                <h1 class="work-detail-header__title">{{ headerData.name }}</h1>
                <div class="work-detail-header__tag">{{ tagList }}</div>
            </div>
            <div class="section__line"></div>
            <p class="work-detail-header__paragraph" v-html="headerData.paragraph"></p>
        </template>
        <template v-else>
            <div class="work-detail__description-top">
                <h1 class="title">{{ headerData.name }}</h1>
                <div class="section__line--top"></div>
            </div>
            <div class="work-detail__description-bottom">
                <div class="work-detail__tag">{{ tagList }}</div>
                <p class="work-detail__paragraph" v-html="headerData.paragraph"></p>
            </div>
            <div class="section__line--bottom"></div>
        </template>
    </div>
</template>

<script>
export default {
    props: ["headerData"],
    data() {
        return {
            isMobile: false
        }
    },
    methods: {
        checkViewportSize() {
            this.isMobile = window.innerWidth < this.$mobileDeviceMaxWidth
        }
    },
    computed: {
        tagList() {
            let text = ""
            this.headerData.tags.forEach((tag, index) => {
                if (index == 0) text += tag
                else { 
                    text = text + " " + tag
                }
            })
            return text
        }
    },
    mounted() {
        // window.scrollTo(0, 0)
        this.checkViewportSize()
        window.addEventListener('resize', this.checkViewportSize)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkViewportSize)
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/components/typography' as typography;
@use '../../assets/scss/components/variable' as var;
@media screen and (min-width: 767px) {
    .work-detail__description-top {
        display: flex;
        margin-bottom: 43px;
        .title {
            margin: 0;
            margin-right: 40px;
            @include typography.font($index: 4);
        }
        .section__line--top {
            flex-grow: 1;
            border-top: 1px solid #777777;
            margin-top: 7px;
        }
    }
    .work-detail__description-bottom {
        display: flex;
        margin-bottom: 16px;
        .work-detail__tag {
            display: flex;
            align-items: flex-end;
            width: 30%;
            @include typography.font($index: 6);
            color: map-get(var.$color, gold);
            margin-right: 94px;
        }
        .work-detail__paragraph {
            // flex-grow: 1;
            width: 70%;
            margin: 0;
        }
    }
    .section__line--bottom{
        flex-grow: 1;
        border-top: 1px solid #777777;
        margin-bottom: 36px;
    }
}
@media screen and (max-width: 767px) {
    .work-detail-header {

        &__description {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        &__title {
            width: 100%;
            @include typography.font($index: 4);
            margin-bottom: 8px;
        }
        &__tag {
            width: 100%;
            @include typography.font($index: 6);
            color: map-get(var.$color, gold);
            margin-bottom: 36px;
        }
        &__paragraph {
            width: 100%;
            @include typography.font($index: 7);
            margin-bottom: 36px;
        }
    }
    .section__line{
        flex-grow: 1;
        border-top: 1px solid #777777;
        margin-bottom: 36px;
    }
}
</style>