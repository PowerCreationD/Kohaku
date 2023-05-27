<template>
    <div class="work_detail__description-top">
        <h1 class="title">{{ headerData.name }}</h1>
        <div class="section__line-top"></div>
    </div>
    <div class="work_detail__description-bottom">
        <div class="work_detail__tag">{{ tagList }}</div>
        <p class="work_detail__paragraph">{{ headerData.paragraph }}</p>
    </div>
    <div class="section__line-bottom"></div>
</template>

<script>
export default {
    props: ["headerData"],
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
    }
}
</script>

<style lang="scss" scoped>
.work_detail__description-top {
    display: flex;
    margin-bottom: 43px;
    .title {
        margin: 0;
        margin-right: 40px;
        font-size: 20px;
        font-weight: bold;
    }
    .section__line-top {
        flex-grow: 1;
        border-top: 1px solid #777777;
        margin-top: 7px;
    }
}
.work_detail__description-bottom {
    display: flex;
    margin-bottom: 16px;
    .work_detail__tag {
        width: 30%;
        font-size: 16px;
        margin-right: 94px;
        color: #E6AE4A;
        display: flex;
        align-items: flex-end;
    }
    .work_detail__paragraph {
        // flex-grow: 1;
        width: 70%;
        margin: 0;
    }
}
.section__line-bottom{
    flex-grow: 1;
    border-top: 1px solid #777777;
    margin-bottom: 36px;
}
</style>