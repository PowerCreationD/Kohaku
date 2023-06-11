<template>
    <div class="work_detail__img-wall">
        <img class="img_wall_item" v-for="img in styledContentData" :key="img.id" :src="getImageUrl(img.img_url)" :class="img.style" alt="img.id">
    </div>
</template>

<script>
export default {
    props: ["contentData"],
    methods: {
        getImageUrl(img) {
            const imageUrl = new URL(img, import.meta.url).href
            return imageUrl
        }
    },
    computed: {
        styledContentData() {
            let length = this.contentData.length
            switch(length) {
                case 2:
                    this.contentData.forEach((img, idx) => {
                        img["style"] = "item-2 item-bottom"
                        if ((idx + 1) == 2) img["style"] += " item-end"
                    })
                    return this.contentData
                case 3:
                    this.contentData.forEach((img, idx) => {
                        if ((idx + 1) == 1) img["style"] = "item-1 item-end"
                        else {
                            img["style"] = "item-2 item-bottom"
                            if ((idx + 1) == 3) img["style"] += " item-end"
                        }
                    })
                    return this.contentData
                case 4:
                    this.contentData.forEach((img, idx) => {
                        if ((idx + 1) == 1) img["style"] = "item-1 item-end"
                        else {
                            img["style"] = "item-3 item-bottom"
                            if ((idx + 1) == 4) img["style"] += " item-end"
                        }
                    })
                    return this.contentData
                case 6:
                    this.contentData.forEach((img, idx) => {
                        if ((idx + 1) == 1) img["style"] = "item-1 item-end"
                        else if ((idx + 1) == 2 || (idx + 1) == 3) {
                            img["style"] = "item-2"
                            if ((idx + 1) == 3) img["style"] += " item-end"
                        }
                        else {
                            img["style"] = "item-3 item-bottom"
                            if ((idx + 1) == 6) img["style"] += " item-end"
                        }
                    })
                    return this.contentData
                case 7:
                case 8:
                    this.contentData.forEach((img, idx) => {
                        img["style"] = "item-1 item-end item-no-space"
                        if (((idx + 1) == 8 && length == 8) || ((idx + 1) == 7 && length == 7)) {
                            img["style"] += " item-bottom"
                        }
                    })  
                    return this.contentData
            } 
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 767px) {
    .work_detail__img-wall {
        display: flex;
        flex-wrap: wrap;
        .img_wall_item {
            margin-right: 24px;
            margin-bottom: 24px;
        }
        .item-1{
            width: 100%;
        }
        .item-2{
            width: calc((100% - 24px) / 2);
        }
        .item-3{
            width: calc((100% - 48px) / 3);
        }
        img.item-end {
            margin-right: 0;
        }
        img.item-no-space {
            margin-right: 0;
            margin-bottom: 0;
        }
        img.item-bottom {
            margin-bottom: 48px;
        }

    }
}
@media screen and (max-width: 767px) {
    .work_detail__img-wall {
        display: flex;
        flex-wrap: wrap;
        .img_wall_item {
            width: 100%;
            margin-bottom: 16px;
        }
        img:last-child {
            margin-bottom: 24px;
        }
        .img_wall_item.item-no-space{
            margin-bottom: 0px;
        }
        .img_wall_item.item-no-space:last-child {
            margin-bottom: 24px;
        }
    }
}
</style>