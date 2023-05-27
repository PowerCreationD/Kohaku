<template>
  <div class="work__background">
    <div class="work">
        <div class="work__description-top">
            <h1 class="title">WORK</h1>
            <div class="section__line-top"></div>
        </div>
        <div class="work__button_filter">
            <button class="work__nav_button all" @click="selectCategory('all')" :class="{active: activeBtn === 'all' }">全部</button>
            <button class="work__nav_button" @click="selectCategory('system_development')" :class="{active: activeBtn === 'system_development' }">系統設計 / 開發與維運</button>
            <button class="work__nav_button" @click="selectCategory('trading')" :class="{active: activeBtn === 'trading' }">國內 / 國際貿易服務</button>
            <button class="work__nav_button" @click="selectCategory('product_design')" :class="{active: activeBtn === 'product_design' }">產品設計與量產開發</button>
            <button class="work__nav_button" @click="selectCategory('commercial_design')" :class="{active: activeBtn === 'commercial_design' }">品牌形象與視覺設計</button>
            <button class="work__nav_button" @click="selectCategory('event_planning')" :class="{active: activeBtn === 'event_planning' }">企劃發想與活動策劃</button>
        </div>
        <div class="work__display_area">
            <div class="work__item" v-for="work in filteredWork" :key="work.id" :class="work.style">
                <img :src="work.img_url" alt="">
                <p>{{ work.name }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
    data() {
        return {
            activeBtn: 'all',
            filteredWorkList: [],
            workList: [
                {
                    "id": 1,
                    "name": "Vegibus 農產品電商系統",
                    "img_url": "src/assets/works/system_development/vegibus/img_vegibus_system.png",
                    "tag": ["system_development"]
                },
                {
                    "id": 2,
                    "name": "Mobile Mover 自主行走機器人控制平台 (MM App)",
                    "img_url": "src/assets/works/system_development/mobilemover/img_mobilemover_app.png",
                    "tag": ["system_development"]
                },
                {
                    "id": 3,
                    "name": "木工基本機械操作工具書",
                    "img_url": "src/assets/works/commercial_design/book/img_woodwork_1.jpeg",
                    "tag": ["commercial_design"]
                },
                {
                    "id": 4,
                    "name": "慕．廂",
                    "img_url": "src/assets/works/product_design/img_kizuna_1.png",
                    "tag": ["product_design"]
                },
                {
                    "id": 5,
                    "name": "ニラたっぷりキムチ 韭菜泡菜包裝設計",
                    "img_url": "src/assets/works/commercial_design/kimchi/img_kimchi_1.jpeg",
                    "tag": ["commercial_design"]
                },
                {
                    "id": 6,
                    "name": "廣島三原車站 快閃自助蔬果攤",
                    "img_url": "src/assets/works/commercial_design/hiroshima_station/img_hiroshima_station_1.jpeg",
                    "tag": ["commercial_design"]
                },
                {
                    "id": 7,
                    "name": "高畠市役場 名片設計",
                    "img_url": "src/assets/works/commercial_design/takahata/img_takahata_business_card_1.jpeg",
                    "tag": ["commercial_design"]
                },
                {
                    "id": 8,
                    "name": "創次方股份有限公司 名片設計",
                    "img_url": "src/assets/works/commercial_design/power_creation/img_power_creation_business_card_1.jpeg",
                    "tag": ["commercial_design"]
                },
                {
                    "id": 9,
                    "name": "屏東台農17號金鑽鳳梨外銷日本",
                    "img_url": "src/assets/works/trading/img_pineapple_1.jpeg",
                    "tag": ["trading"]
                }
            ]
        }
    },
    methods: {
        selectCategory(type) {
            this.activeBtn = type
            console.log(this.activeBtn)
        },
        addStyle(workList){
            workList.forEach((work, index) => {
                const remainder = (index + 1) % 12
                if (remainder == 1 || remainder == 2 || remainder == 3){
                    work["style"] = ""
                    if (remainder == 1 || remainder == 2){
                        work["style"] += "item-between"
                    }
                }
                else if (remainder == 4 || remainder == 5) {
                    work["style"] = "item-2"
                    if (remainder == 4){
                        work["style"] += " item-between"
                    }
                }
                else if (remainder == 6 || remainder == 7 || remainder == 8) {
                    work["style"] = ""
                    if (remainder == 6 || remainder == 7){
                        work["style"] += " item-between"
                    }
                }
                else {
                    work["style"] = "item-4"
                    if (remainder == 9 || remainder == 10 || remainder == 11){
                        work["style"] += " item-between"
                    }
                }

            })
            return workList
        }
    },
    computed: {
        filteredWork() {
            if(this.activeBtn === "all") {
                const addStyleWorkList = this.addStyle(this.workList)
                return addStyleWorkList
            }
            else {
                const filteredWorkList = this.workList.filter(work => work.tag.includes(this.activeBtn))
                const addStyleFilteredWorkList = this.addStyle(filteredWorkList)
                return addStyleFilteredWorkList
                // console.log(filtered)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
* {
  font-family: 'Ubuntu', Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.work__background {
    background: #F5F5F5;
    // position: absolute;
}
.work {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 140px 0;
    width: calc(100% - 240px);
    .work__description-top {
        display: flex;
        .title {
            margin: 0;
            margin-right: 40px;
            font-size: 36px;
            font-weight: bold;
        }
        .section__line-top {
            flex-grow: 1;
            border-top: 1px solid #777777;
            margin-top: 7px;
        }
    }
    .work__button_filter{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 48px;
        
    }
    .work__display_area {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        .work__item {
            width: calc( (100% - 48px) / 3);
            // height: auto;
            // object-fit: contain;
            img {
                width: 100%;
                height: 256px;
                object-fit: cover;
            }
        }
        div.item-between {
            margin-right: 24px;
        }
        div.item-2 {
            width: calc( (100% - 24px) / 2);
            // height: auto;
            // object-fit: contain;
            img {
                width: 100%;
                height: 390px;
                object-fit: cover;
            }
        }
        div.item-4 {
            width: calc( (100% - 72px) / 4);
            // height: auto;
            // object-fit: contain;
            img {
                width: 100%;
                height: 188px;
                object-fit: cover;
            }
        }
    }
}
.work__nav_button {
    font-size: 16px;
    height: 46px;
    width: 192px;
    margin-right: 20px;
    margin-top: 12px;
    border-style: none;
    border-radius: 71px;
    background: #FFFFFF;
    color: #000000;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
 
}
.active {
    background: #E6AE4A;
    color: white;
    font-weight: bold;
}
.work__nav_button.all {
    width: 80px;
}




</style>