<template>
  <div class="work_detail__background">
    <div class="work_detail">
        <WorkDetailHeader :headerData="workDetail[id]" />
        <component :is="type" :contentData="workDetail[id].content" />
        <button class="work_detail__return-btn" @click="returnWorkPage">返回</button>
    </div>
  </div>
</template>

<script>
import WorkDetailHeader from "../components/work/WorkDetailHeader.vue"
import LayoutType1 from "../components/work/LayoutType1.vue"
import LayoutType2 from "../components/work/LayoutType2.vue"
import LayoutType3 from "../components/work/LayoutType3.vue"

export default {
    props: ["id"],
    components: { WorkDetailHeader, LayoutType1, LayoutType2, LayoutType3 },
    data() {
        return {
            workDetail: {
                1: {
                    "type": "LayoutType2",
                    "name": "Vegibus 農產品電商系統",
                    "tags": ["#系統開發", "#前端開發", "#網站介面設計"],
                    "paragraph": "Vegibus 是 2017 年開始在日本營運的農產電商與物流系統，目標致力於推廣農產品的地產地銷生態．透過區域性組成的「蔬菜巴士」站點，讓生產者及購買者在固定站點進行交貨、拿貨，再由物流司機依照固定路線配送貨物，形成區域相連的物流網．購買者可以在配送效率提高、訂單物流費降低的受益下，享用到碳足跡里程低、新鮮度最高的蔬果。",
                    "content": [
                        {
                            "img_url": "/src/assets/work/system_development/vegibus/img_vegibus_system_1.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/system_development/vegibus/img_vegibus_system_2.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/system_development/vegibus/img_vegibus_system_3.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/system_development/vegibus/img_vegibus_system_4.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/system_development/vegibus/img_vegibus_system_5.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/system_development/vegibus/img_vegibus_system_6.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/system_development/vegibus/img_vegibus_system_7.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/system_development/vegibus/img_vegibus_system_8.jpeg"
                        }
                    ],
                },
                2: {
                    "type": "LayoutType1",
                    "name": "Mobile Mover 自主行走機器人控制平台",
                    "tags": ["#嵌入式系統開發", "#前端開發", "#網站介面設計"],
                    "paragraph": "Mobile Mover 為一台主要應用於農業的自動行走載具，設計目的是在於提供農業高齡化、勞動力短缺趨勢下，一個未來的解決方案．Mobile Mover 可以依照農務需求搭載不同的功能，從搬運、除草、壓草到噴農藥都能客制變換。"
                },
                3: {
                    "type": "LayoutType2",
                    "name": "木工基本機械操作工具書",
                    "tags": ["#裝幀設計", "#視覺設計", "#插畫設計"],
                    "paragraph": "與國立台灣工藝研究發展中心合作，將匠人50年的工藝精華化為實體，讓有心想從事木工的後勁能有務實的參考資料。",
                    "content": [
                        {
                            "img_url": "/src/assets/work/commercial_design/book/img_woodwork_1.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/commercial_design/book/img_woodwork_2.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/commercial_design/book/img_woodwork_3.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/commercial_design/book/img_woodwork_4.jpeg"
                        }
                    ],
                },
                4: {
                    "type": "LayoutType3",
                    "name": "慕．廂",
                    "tags": ["#家具設計", "#產品設計"],
                    "paragraph": "為當代而生的傢俱組合，回應空間共享、靈活移動等機能訴求。以書桌、單椅與收納櫃三件傢俱，構築任何場域中的個人空間。不須任何拆裝、組合，即可收納與推移，以操作體現優雅從容。"
                },
                5: {
                    "type": "LayoutType2",
                    "name": "ニラたっぷりキムチ 韭菜泡菜包裝設計",
                    "tags": ["#包裝設計", "#視覺設計"],
                    "paragraph": "與在地農家合作，使用農家產地直送韭菜研發泡菜，並製作其包裝。",
                    "content": [
                        {
                            "img_url": "/src/assets/work/commercial_design/kimchi/img_kimchi_1.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/commercial_design/kimchi/img_kimchi_2.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/commercial_design/kimchi/img_kimchi_3.jpeg"
                        }
                    ]
                },
                6: {
                    "type": "LayoutType2",
                    "name": "廣島三原車站 快閃自助蔬果攤",
                    "tags": ["#空間設計", "#視覺設計"],
                    "paragraph": "於西日本JR地方車站建置無人商店，並負責服務、視覺及空間設計，在整合空間人與物的同時，達到兼具舒適感及實用的平衡。",
                    "content": [
                        {
                            "img_url": "/src/assets/work/commercial_design/hiroshima_station/img_hiroshima_station_1.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/commercial_design/hiroshima_station/img_hiroshima_station_2.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/commercial_design/hiroshima_station/img_hiroshima_station_3.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/commercial_design/hiroshima_station/img_hiroshima_station_4.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/commercial_design/hiroshima_station/img_hiroshima_station_5.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/commercial_design/hiroshima_station/img_hiroshima_station_6.jpeg"
                        }
                    ]
                },
                7: {
                    "type": "LayoutType2",
                    "name": "高畠市役場 名片設計",
                    "tags": ["#名片設計", "#視覺設計"],
                    "paragraph": "LOGO結合高畠市內被指定回國家登錄有形文化財的「舊高畠車站」外型，名片背面紋路則是以高畠當地石材「高畠石」紋路作為發想，讓市役場的人可以在初次見面時與收取名片的人有更多跟當地的話題，為兩方接下來的溝通拋磚引玉。",
                    "content": [
                        {
                            "img_url": "/src/assets/work/commercial_design/takahata/img_takahata_business_card_1.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/commercial_design/takahata/img_takahata_business_card_2.jpeg"
                        }
                    ]
                },
                8: {
                    "type": "LayoutType2",
                    "name": "創次方股份有限公司 名片設計",
                    "tags": ["#名片設計", "#視覺設計"],
                    "paragraph": "母公司「エムスクエア・ラボ」與本公司名片，兩面圖像象徵日出而作，日落不息，火紅的朝陽和夕陽也代表著日本的國旗。",
                    "content": [
                        {
                            "img_url": "/src/assets/work/commercial_design/power_creation/img_power_creation_business_card_1.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/commercial_design/power_creation/img_power_creation_business_card_2.jpeg"
                        }
                    ]
                },
                9: {
                    "type": "LayoutType2",
                    "name": "屏東台農17號金鑽鳳梨外銷日本",
                    "tags": ["#國際貿易", "#外銷服務"],
                    "paragraph": "本公司於2022年5月，為日本Vegibus公司及屏東縣綠地農特產品生產合作社牽線鏈結，將共22公噸的屏東台農17號金鑽鳳梨，直送日本超市(Kasumiカスミ)，省去了中間通路，大幅縮短供應鏈，減少運輸時間與成本，讓日本民眾可以享受到更新鮮便宜的台灣鳳梨，此舉是由民間主導，台日產地直銷的一大創新。",
                    "content": [
                        {
                            "img_url": "/src/assets/work/trading/img_pineapple_1.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/trading/img_pineapple_2.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/trading/img_pineapple_3.jpeg"
                        },
                        {
                            "img_url": "/src/assets/work/trading/img_pineapple_4.jpeg"
                        }
                    ]
                }
            }
        }
    },
    methods: {
        returnWorkPage() {
            this.$router.push({ name: 'Work' })
        }
    },
    computed: {
        type() {
            console.log(this.workDetail[this.id].type)
            return this.workDetail[this.id].type
        }
    },
    mounted () {
        window.scrollTo(0, 0)
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
.work_detail__background {
    background: #F5F5F5;
    // position: absolute;
}
.work_detail {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 140px 0;
    width: calc(100% - 240px);

    .work_detail__return-btn {
        width: 156px;
        color: #FFFFFF;
        background-color: #E6AE4A;
        padding: 8px 0px;
        font-weight: bold;
        font-size: 16px;
        border-style: none;
        border-radius: 4px;
        cursor: pointer;
    }
}
</style>