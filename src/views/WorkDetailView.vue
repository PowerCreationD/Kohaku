<template>
  <div class="work_detail__background">
    <div class="work_detail">
        <WorkDetailHeader :headerData="workDetail[project]" />
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
    props: ['project'],
    components: { WorkDetailHeader, LayoutType1, LayoutType2, LayoutType3 },
    data() {
        return {
            isMobile: false,
            workDetail: {
                'e-commerce-and-logistics-system': {
                    "type": "LayoutType2",
                    "name": this.$t('work.vegibus.name'),
                    "tags": [
                        this.$t('work.vegibus.detail.tags[0]'),
                        this.$t('work.vegibus.detail.tags[1]'),
                        this.$t('work.vegibus.detail.tags[2]')
                    ],
                    "paragraph": this.$t('work.vegibus.detail.paragraph'),
                    "content": [
                        {
                            "img_url": img_vegibus_system_1
                        },
                        {
                            "img_url": img_vegibus_system_2
                        },
                        {
                            "img_url": img_vegibus_system_3
                        },
                        {
                            "img_url": img_vegibus_system_4
                        },
                        {
                            "img_url": img_vegibus_system_5
                        },
                        {
                            "img_url": img_vegibus_system_6
                        },
                        {
                            "img_url": img_vegibus_system_7
                        },
                        {
                            "img_url": img_vegibus_system_8
                        }
                    ],
                    "mobileContent": [
                        {
                            "img_url": img_vegibus_system_mobile_1
                        },
                        {
                            "img_url": img_vegibus_system_mobile_2
                        },
                        {
                            "img_url": img_vegibus_system_mobile_3
                        },
                        {
                            "img_url": img_vegibus_system_mobile_4
                        },
                        {
                            "img_url": img_vegibus_system_mobile_5
                        },
                        {
                            "img_url": img_vegibus_system_mobile_6
                        },
                        {
                            "img_url": img_vegibus_system_mobile_7
                        }
                    ]
                },
                "autonomous-mobile-robot": {
                    "type": "LayoutType1",
                    "name": this.$t('work.mobile_mover.name'),
                    "tags": [
                        this.$t('work.mobile_mover.detail.tags[0]'),
                        this.$t('work.mobile_mover.detail.tags[1]'),
                        this.$t('work.mobile_mover.detail.tags[2]')
                    ],
                    "paragraph": this.$t('work.mobile_mover.detail.paragraph')
                },
                "woodworking-craft-tool-guide": {
                    "type": "LayoutType2",
                    "name": this.$t('work.woodworking_book.name'),
                    "tags": [
                        this.$t('work.woodworking_book.detail.tags[0]'),
                        this.$t('work.woodworking_book.detail.tags[1]'),
                        this.$t('work.woodworking_book.detail.tags[2]')
                    ],
                    "paragraph": this.$t('work.woodworking_book.detail.paragraph'),
                    "content": [
                        {
                            "img_url": img_woodwork_1
                        },
                        {
                            "img_url": img_woodwork_2
                        },
                        {
                            "img_url": img_woodwork_3
                        },
                        {
                            "img_url": img_woodwork_4
                        }
                    ],
                },
                "mu-maison": {
                    "type": "LayoutType3",
                    "name": this.$t('work.mu_maison.name'),
                    "tags": [
                        this.$t('work.mu_maison.detail.tags[0]'),
                        this.$t('work.mu_maison.detail.tags[1]')
                    ],
                    "paragraph": this.$t('work.mu_maison.detail.paragraph'),
                },
                "leek-kimchi": {
                    "type": "LayoutType2",
                    "name": this.$t('work.leek_kimchi.name'),
                    "tags": [
                        this.$t('work.leek_kimchi.detail.tags[0]'),
                        this.$t('work.leek_kimchi.detail.tags[1]')
                    ],
                    "paragraph": this.$t('work.leek_kimchi.detail.paragraph'),
                    "content": [
                        {
                            "img_url": img_kimchi_1
                        },
                        {
                            "img_url": img_kimchi_2
                        },
                        {
                            "img_url": img_kimchi_3
                        }
                    ]
                },
                "hiroshima-miyajima-station": {
                    "type": "LayoutType2",
                    "name": this.$t('work.hiroshima_station.name'),
                    "tags": [
                        this.$t('work.hiroshima_station.detail.tags[0]'),
                        this.$t('work.hiroshima_station.detail.tags[1]')
                    ],
                    "paragraph": this.$t('work.hiroshima_station.detail.paragraph'),
                    "content": [
                        {
                            "img_url": img_hiroshima_station_1
                        },
                        {
                            "img_url": img_hiroshima_station_2
                        },
                        {
                            "img_url": img_hiroshima_station_3
                        },
                        {
                            "img_url": img_hiroshima_station_4
                        },
                        {
                            "img_url": img_hiroshima_station_5
                        },
                        {
                            "img_url": img_hiroshima_station_6
                        }
                    ]
                },
                "takahata-business-card-design": {
                    "type": "LayoutType2",
                    "name": this.$t('work.takahata_business_card.name'),
                    "tags": [
                        this.$t('work.takahata_business_card.detail.tags[0]'),
                        this.$t('work.takahata_business_card.detail.tags[1]')
                    ],                    "paragraph": this.$t('work.takahata_business_card.detail.paragraph'),
                    "content": [
                        {
                            "img_url": img_takahata_business_card_1
                        },
                        {
                            "img_url": img_takahata_business_card_2
                        }
                    ]
                },
                "m2labo-business-card-design": {
                    "type": "LayoutType2",
                    "name": this.$t('work.m2labo_business_card.name'),
                    "tags": [
                        this.$t('work.m2labo_business_card.detail.tags[0]'),
                        this.$t('work.m2labo_business_card.detail.tags[1]')
                    ],
                    "paragraph": this.$t('work.m2labo_business_card.detail.paragraph'),
                    "content": [
                        {
                            "img_url": img_power_creation_business_card_1
                        },
                        {
                            "img_url": img_power_creation_business_card_2
                        }
                    ]
                },
                "exporting-pineapples": {
                    "type": "LayoutType2",
                    "name": this.$t('work.pineapples.name'),
                    "tags": [
                        this.$t('work.pineapples.detail.tags[0]'),
                        this.$t('work.pineapples.detail.tags[1]')
                    ],
                    "paragraph": this.$t('work.pineapples.detail.paragraph'),
                    "content": [
                        {
                            "img_url": img_pineapple_1
                        },
                        {
                            "img_url": img_pineapple_2
                        },
                        {
                            "img_url": img_pineapple_3
                        },
                        {
                            "img_url": img_pineapple_4
                        }
                    ]
                },
                "lathe-machine-workshop": {
                    "type": "LayoutType2",
                    "name": this.$t('work.lathe_machine_workshop.name'),
                    "tags": [
                        this.$t('work.lathe_machine_workshop.detail.tags[0]'),
                        this.$t('work.lathe_machine_workshop.detail.tags[1]'),
                        this.$t('work.lathe_machine_workshop.detail.tags[2]')
                    ],
                    "paragraph": this.$t('work.lathe_machine_workshop.detail.paragraph'),
                    "content": [
                        {
                            "img_url": img_wood_workshop_1
                        },
                        {
                            "img_url": img_wood_workshop_2
                        },
                        {
                            "img_url": img_wood_workshop_3
                        },
                        {
                            "img_url": img_wood_workshop_4
                        }
                    ]
                }
            }
        }
    },
    methods: {
        returnWorkPage() {
            this.$router.push({ name: 'Work'})
        },
        checkViewportSize() {
            this.isMobile = window.innerWidth < this.$mobileDeviceMaxWidth
        }
    },
    computed: {
        type() {
            return this.workDetail[this.project].type
        },
        selectContentData(){
            if (this.project === 'e-commerce-and-logistics-system' && this.isMobile) {
                return this.workDetail[this.project].mobileContent
            }
            return this.workDetail[this.project].content
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

<script setup>
import img_vegibus_system_1 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_1.jpg'
import img_vegibus_system_2 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_2.jpg'
import img_vegibus_system_3 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_3.jpg'
import img_vegibus_system_4 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_4.jpg'
import img_vegibus_system_5 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_5.jpg'
import img_vegibus_system_6 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_6.jpg'
import img_vegibus_system_7 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_7.jpg'
import img_vegibus_system_8 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_8.jpg'
import img_vegibus_system_mobile_1 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_mobile_1.jpg'
import img_vegibus_system_mobile_2 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_mobile_2.jpg'
import img_vegibus_system_mobile_3 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_mobile_3.jpg'
import img_vegibus_system_mobile_4 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_mobile_4.jpg'
import img_vegibus_system_mobile_5 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_mobile_5.jpg'
import img_vegibus_system_mobile_6 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_mobile_6.jpg'
import img_vegibus_system_mobile_7 from '@/assets/image/work/system_development/vegibus/img_vegibus_system_mobile_7.jpg'
import img_woodwork_1 from '@/assets/image/work/commercial_design/book/img_woodwork_1.jpg'
import img_woodwork_2 from '@/assets/image/work/commercial_design/book/img_woodwork_2.jpg'
import img_woodwork_3 from '@/assets/image/work/commercial_design/book/img_woodwork_3.jpg'
import img_woodwork_4 from '@/assets/image/work/commercial_design/book/img_woodwork_4.jpg'
import img_kimchi_1 from '@/assets/image/work/commercial_design/kimchi/img_kimchi_1.jpg'
import img_kimchi_2 from '@/assets/image/work/commercial_design/kimchi/img_kimchi_2.jpg'
import img_kimchi_3 from '@/assets/image/work/commercial_design/kimchi/img_kimchi_3.jpg'
import img_hiroshima_station_1 from '@/assets/image/work/commercial_design/hiroshima_station/img_hiroshima_station_1.jpg'
import img_hiroshima_station_2 from '@/assets/image/work/commercial_design/hiroshima_station/img_hiroshima_station_2.jpg'
import img_hiroshima_station_3 from '@/assets/image/work/commercial_design/hiroshima_station/img_hiroshima_station_3.jpg'
import img_hiroshima_station_4 from '@/assets/image/work/commercial_design/hiroshima_station/img_hiroshima_station_4.jpg'
import img_hiroshima_station_5 from '@/assets/image/work/commercial_design/hiroshima_station/img_hiroshima_station_5.jpg'
import img_hiroshima_station_6 from '@/assets/image/work/commercial_design/hiroshima_station/img_hiroshima_station_6.jpg'
import img_takahata_business_card_1 from '@/assets/image/work/commercial_design/takahata/img_takahata_business_card_1.jpg'
import img_takahata_business_card_2 from '@/assets/image/work/commercial_design/takahata/img_takahata_business_card_2.jpg'
import img_power_creation_business_card_1 from '@/assets/image/work/commercial_design/power_creation/img_power_creation_business_card_1.jpg'
import img_power_creation_business_card_2 from '@/assets/image/work/commercial_design/power_creation/img_power_creation_business_card_2.jpg'
import img_pineapple_1 from '@/assets/image/work/trading/img_pineapple_1.jpg'
import img_pineapple_2 from '@/assets/image/work/trading/img_pineapple_2.jpg'
import img_pineapple_3 from '@/assets/image/work/trading/img_pineapple_3.jpg'
import img_pineapple_4 from '@/assets/image/work/trading/img_pineapple_4.jpg'
import img_wood_workshop_1 from '@/assets/image/work/event_planning/img_wood_workshop_1.jpg'
import img_wood_workshop_2 from '@/assets/image/work/event_planning/img_wood_workshop_2.jpg'
import img_wood_workshop_3 from '@/assets/image/work/event_planning/img_wood_workshop_3.jpg'
import img_wood_workshop_4 from '@/assets/image/work/event_planning/img_wood_workshop_4.jpg'
</script>