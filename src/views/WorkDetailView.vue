<template>
  <div class="work_detail__background">
    <div class="work_detail">
        <WorkDetailHeader :headerData="workDetail[id]" />
        <component :is="type" :contentData="selectContentData" />
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
            isMobile: false,
            workDetail: {
                1: {
                    "type": "LayoutType2",
                    "name": "產銷系統設計｜日本農產電商物流系統",
                    "tags": ["#系統開發", "#前端開發", "#網站介面設計"],
                    "paragraph": "與農產經銷日商 Vegibus 合作，致力於推廣農產品地產地銷的供應永續，為既有概念「蔬菜巴士」開發專屬資訊系統，一站整合產地供應、配送貨態、消費訂單與金流資訊，協助實現物流端自多站農家取貨、集運、沿線配送到府之複雜流程。落地營運的 Vegibus 蔬菜巴士，成功建立日本靜岡縣、茨城縣、千葉縣、大阪府等縣的在地農產物流網，讓消費者享受到低碳足跡、高新鮮度的蔬果，並建立友善永續的在地食農關係。",
                    "content": [
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_1.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_2.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_3.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_4.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_5.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_6.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_7.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_8.jpeg"
                        }
                    ],
                    "mobileContent": [
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_mobile_1.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_mobile_2.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_mobile_3.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_mobile_4.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_mobile_5.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_mobile_6.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/system_development/vegibus/img_vegibus_system_mobile_7.jpeg"
                        }
                    ]
                },
                2: {
                    "type": "LayoutType1",
                    "name": "機電整合開發｜自主移動機器人控制平台",
                    "tags": ["#嵌入式系統開發", "#前端開發", "#網站介面設計"],
                    "paragraph": "因應農村高齡化勞動力短缺、農業精緻化管理繁瑣等情境，提出農用自走車 —— Mobile Mover，以智慧農機作為未來解方，配合作物管理週期，實現壓草、除草、投藥、收成搬運等全功能農務支援。農用機電整合技術同時考量農場地域模型建構、地圖路徑分析、便利易用的掌上操作系統，並設計以銀髮農戶為對象適應系統的轉型服務流，為農場主減輕經營負擔。"
                },
                3: {
                    "type": "LayoutType2",
                    "name": "書籍與裝幀｜木工藝工具書",
                    "tags": ["#裝幀設計", "#視覺設計", "#插畫設計"],
                    "paragraph": "與國立台灣工藝研究發展中心合作，實地採集影像、口述，細緻保存匠人50年技藝精華以傳承後勁，並執行編印出版，完成上架國家書店納入政府出版品。國家書店政府出版品連結：https://www.govbooks.com.tw/books/137952",
                    "content": [
                        {
                            "img_url": "../../assets/work/commercial_design/book/img_woodwork_1.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/commercial_design/book/img_woodwork_2.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/commercial_design/book/img_woodwork_3.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/commercial_design/book/img_woodwork_4.jpeg"
                        }
                    ],
                },
                4: {
                    "type": "LayoutType3",
                    "name": "傢俱設計｜慕廂－優雅收移的實木家具",
                    "tags": ["#家具設計", "#產品設計"],
                    "paragraph": "回應當代對室內工作空間靈活、共享等流動性訴求，慕廂收束實木家具的量體，以逐一靠攏的動作取代拆裝，輕鬆的收合桌、椅與邊櫃，並實現優雅不費力的平面推移。"
                },
                5: {
                    "type": "LayoutType2",
                    "name": "日本高級超市 韭菜泡菜包裝設計",
                    "tags": ["#包裝設計", "#視覺設計"],
                    "paragraph": "輔導農家運用地產優勢研製韭菜泡菜特產，並協助設計包裝利供銷，增加農產加工增值的效益。",
                    "content": [
                        {
                            "img_url": "../../assets/work/commercial_design/kimchi/img_kimchi_1.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/commercial_design/kimchi/img_kimchi_2.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/commercial_design/kimchi/img_kimchi_3.jpeg"
                        }
                    ]
                },
                6: {
                    "type": "LayoutType2",
                    "name": "商空與展櫃｜廣島三原車站無人商店",
                    "tags": ["#空間設計", "#視覺設計"],
                    "paragraph": "於西日本JR地方車站建置無人商店，自陳設、空間、至店內視覺經一致性統籌規劃，兼具舒適感及實用的平衡，達到自在便利的購物體驗。",
                    "content": [
                        {
                            "img_url": "../../assets/work/commercial_design/hiroshima_station/img_hiroshima_station_1.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/commercial_design/hiroshima_station/img_hiroshima_station_2.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/commercial_design/hiroshima_station/img_hiroshima_station_3.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/commercial_design/hiroshima_station/img_hiroshima_station_4.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/commercial_design/hiroshima_station/img_hiroshima_station_5.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/commercial_design/hiroshima_station/img_hiroshima_station_6.jpeg"
                        }
                    ]
                },
                7: {
                    "type": "LayoutType2",
                    "name": "高畠市役場名片設計",
                    "tags": ["#名片設計", "#視覺設計"],
                    "paragraph": "為日本高畠市地區公所設計機關公務名片。LOGO結合市內之國家有形文化資產「舊高畠車站」，背面雅緻紋理則取自特色礦產「高畠石」。圍繞地方風情的細節增強基層機關與在地的連結，也使初見面的交換名片富饒更多驚喜話題。*畠：音田",
                    "content": [
                        {
                            "img_url": "../../assets/work/commercial_design/takahata/img_takahata_business_card_1.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/commercial_design/takahata/img_takahata_business_card_2.jpeg"
                        }
                    ]
                },
                8: {
                    "type": "LayoutType2",
                    "name": "視覺與包裝｜創次方股份有限公司 名片設計",
                    "tags": ["#名片設計", "#視覺設計"],
                    "paragraph": "與日本公司「エムスクエア・ラボ」合作，火紅的朝陽和夕陽也代表著日本的國旗，兩面圖像象徵企業日出而作，日落不息之精進精神。",
                    "content": [
                        {
                            "img_url": "../../assets/work/commercial_design/power_creation/img_power_creation_business_card_1.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/commercial_design/power_creation/img_power_creation_business_card_2.jpeg"
                        }
                    ]
                },
                9: {
                    "type": "LayoutType2",
                    "name": "日本外銷｜出口屏東台農金鑽鳳梨",
                    "tags": ["#國際貿易", "#外銷服務"],
                    "paragraph": "協助屏東縣綠地農特產品生產合作社與農產經銷日商Vegibus對接合作，出口台農17號金鑽鳳梨，直送日本當地大型超市Kasumiカスミ。此為民間推動之農產外銷革新，由農家直送終端消費者，大幅提升產品新鮮度與價格競爭力，縮短外銷途徑提升農民收益，也讓日本民眾享用更新鮮、更便宜的台灣鳳梨。",
                    "content": [
                        {
                            "img_url": "../../assets/work/trading/img_pineapple_1.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/trading/img_pineapple_2.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/trading/img_pineapple_3.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/trading/img_pineapple_4.jpeg"
                        }
                    ]
                },
                10: {
                    "type": "LayoutType2",
                    "name": "活動紀錄｜車床技術轉譯研究工作坊",
                    "tags": ["#活動紀錄", "#影片剪輯", "#腳本企劃"],
                    "paragraph": "與國立台灣工藝研究發展中心合作，實地採集影像、口述，細緻保存匠人50年技藝精華以傳承後勁，執行影片剪輯、影像紀錄，並於活動結束當日上映，作為活動結尾。車床活動紀錄連結：https://youtu.be/fygtvFBfvxU",
                    "content": [
                        {
                            "img_url": "../../assets/work/event_planning/img_wood_workshop_1.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/event_planning/img_wood_workshop_2.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/event_planning/img_wood_workshop_3.jpeg"
                        },
                        {
                            "img_url": "../../assets/work/event_planning/img_wood_workshop_4.jpeg"
                        }
                    ]
                }
            }
        }
    },
    methods: {
        returnWorkPage() {
            this.$router.push({ name: 'Work' })
        },
        checkViewportSize() {
            this.isMobile = window.innerWidth < this.$mobileDeviceMaxWidth
        }
    },
    computed: {
        type() {
            return this.workDetail[this.id].type
        },
        selectContentData(){
            if (this.id == 1 && this.isMobile) {
                return this.workDetail[this.id].mobileContent
            }
            return this.workDetail[this.id].content
        }
    },
    mounted() {
        window.scrollTo(0, 0)
        this.checkViewportSize()
        window.addEventListener('resize', this.checkViewportSize)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkViewportSize)
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/components/typography' as typography;
@use '../assets/scss/components/variable' as var;
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
* {
  font-family: 'Ubuntu', Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.work_detail__background {
    background: #F5F5F5;
}
.work_detail {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
}
.work_detail__return-btn {
    width: 156px;
    color: #FFFFFF;
    background-color: map-get(var.$color, gold);
    padding: 8px 0px;
    @include typography.font($index: 6);
    border-style: none;
    border-radius: 4px;
    cursor: pointer;
}
@media screen and (max-width: 767px) {
    .work_detail__return-btn {
        width: 128px;
        margin-bottom: 56px;
    }
}
</style>