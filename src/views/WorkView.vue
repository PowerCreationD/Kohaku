<template>
  <div class="work__background">
    <div class="work">
        <div class="work__description-top">
            <h1 class="title">WORK</h1>
            <div class="section__line-top"></div>
        </div>
        <div class="work__button_filter">
            <h4>範圍</h4>
            <button class="work__nav_button all" @click="activeBtn = 'all'" :class="{active: activeBtn === 'all' }">全部</button>
            <button class="work__nav_button" @click="activeBtn = 'system'" :class="{active: activeBtn === 'system' }">系統設計 / 開發與維運</button>
            <button class="work__nav_button" @click="activeBtn = 'trade'" :class="{active: activeBtn === 'trade' }">國內 / 國際貿易服務</button>
            <button class="work__nav_button" @click="activeBtn = 'product'" :class="{active: activeBtn === 'product' }">產品設計與量產開發</button>
            <button class="work__nav_button" @click="activeBtn = 'commercial'" :class="{active: activeBtn === 'commercial' }">品牌形象與視覺設計</button>
            <button class="work__nav_button" @click="activeBtn = 'event'" :class="{active: activeBtn === 'event' }">企劃發想與活動策劃</button>
        </div>
        <div class="work__display_area">
            <div class="work__item">
                <img src="src/assets/works/system_development/vegibus/img_vegibus_system.png" alt="">
                <p>Vegibus 農產品電商系統</p>
            </div>
            <div class="work__item">
                <img src="src/assets/works/system_development/mobilemover/img_mobilemover_app.png" alt="">
                <p>Mobile Mover 自主行走機器人控制平台 (MM App)</p>
            </div>
            <div class="work__item">
                <img src="src/assets/works/commercial_design/book/img_woodwork_1.jpeg" alt="">
                <p>木工基本機械操作工具書</p>
            </div>
            <div class="work__item item-2">
                <img src="src/assets/works/product_design/img_kizuna_1.png" alt="">
                <p>慕．廂</p>
            </div>
            <div class="work__item item-2">
                <img src="src/assets/works/commercial_design/kimchi/img_kimchi_1.jpeg" alt="">
                <p>ニラたっぷりキムチ 韭菜泡菜包裝設計</p>
            </div>
            <div class="work__item">
                <img src="src/assets/works/commercial_design/hiroshima_station/img_hiroshima_station_1.jpeg" alt="">
                <p>廣島三原車站 快閃自助蔬果攤</p>
            </div>
            <div class="work__item">
                <img src="src/assets/works/commercial_design/takahata/img_takahata_business_card_1.jpeg" alt="">
                <p>高畠市役場 名片設計</p>
            </div>
            <div class="work__item">
                <img src="src/assets/works/commercial_design/power_creation/img_power_creation_business_card_1.jpeg" alt="">
                <p>創次方股份有限公司 名片設計</p>
            </div>
            <div class="work__item item-4">
                <img src="src/assets/works/trading/img_pineapple_1.jpeg" alt="">
                <p>屏東台農17號金鑽鳳梨外銷日本</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            activeBtn: 'all',
            workList: [
                {
                    "work_id": "",
                    "img_url": "",
                    "tag": [""]
                },
                {
                    "work_id": "",
                    "img_url": "",
                    "tag": [""]
                },
                {
                    "work_id": "",
                    "img_url": "",
                    "tag": [""]
                },
                {
                    "work_id": "",
                    "img_url": "",
                    "tag": [""]
                },
                {
                    "work_id": "",
                    "img_url": "",
                    "tag": [""]
                },
                {
                    "work_id": "",
                    "img_url": "",
                    "tag": [""]
                },
                {
                    "work_id": "",
                    "img_url": "",
                    "tag": [""]
                },
                {
                    "work_id": "",
                    "img_url": "",
                    "tag": [""]
                },
                {
                    "work_id": "",
                    "img_url": "",
                    "tag": [""]
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
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
    width: 1200px;
    .work__description-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .title {
            width: 10%;
            font-size: 36px;
            font-weight: bold;
            margin: 0;
            line-height: 28px;
        }
        .section__line-top {
            width: 87.5%;
            border-top: 1px solid #777777;
        }
    }
    .work__button_filter{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
        margin-bottom: 48px;
        
    }
    .work__display_area {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .work__item {
            width: 32%;
            img {
                width: 100%;
                height: 256px;
                object-fit: cover;
            }
        }
        div.item-2 {
            width: 49%;
            img {
                width: 100%;
                height: 390px;
                object-fit: cover;
            }
        }
        div.item-4 {
            width: 24.5%;
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