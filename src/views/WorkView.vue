<template>
  <div class="work__background">
    <div class="work">
        <div class="work__description-top">
            <h1 class="title">WORK</h1>
            <div class="section__line-top"></div>
        </div>
        <ServiceDropdown class="service-dropdown" v-if="isMobile || isTablet" :options="serviceOptions" @select="selectService"/>
        <div v-else class="work__button_filter">
            <button class="work__nav_button all" @click="selectCategory('all')" :class="{active: activeBtn === 'all' }">{{ $t('work.project_types.all') }}</button>
            <button class="work__nav_button" @click="selectCategory('system_development')" :class="{active: activeBtn === 'system_development' }">{{ $t('work.project_types.system') }}</button>
            <button class="work__nav_button" @click="selectCategory('trading')" :class="{active: activeBtn === 'trading' }">{{ $t('work.project_types.trading') }}</button>
            <button class="work__nav_button" @click="selectCategory('product_design')" :class="{active: activeBtn === 'product_design' }">{{ $t('work.project_types.product') }}</button>
            <button class="work__nav_button" @click="selectCategory('commercial_design')" :class="{active: activeBtn === 'commercial_design' }">{{ $t('work.project_types.design') }}</button>
            <button class="work__nav_button" @click="selectCategory('event_planning')" :class="{active: activeBtn === 'event_planning' }">{{ $t('work.project_types.planning') }}</button>
        </div>
        <div class="work__display_area">
            <div class="work__item" v-for="work in filteredWork" :key="work.id" :class="work.style">
                <router-link :to="{ name: 'WorkDetail', params: { project: work.project } }">
                    <img v-lazy="work.img_url" alt="" >
                </router-link>
                <p @click="goToDetailPage(work)">{{ work.name }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ServiceDropdown from '../components/services/ServiceDropdown.vue'
export default {
    components: { ServiceDropdown },
    data() {
        return {
            isMobile: false,
            isTablet: false,
            activeBtn: 'all',
            filteredWorkList: [],
            workList: [
                {
                    "id": 1,
                    "name": this.$t('work.vegibus.name'),
                    "img_url": img_vegibus_system,
                    "tag": ["system_development"],
                    "project": "e-commerce-and-logistics-system"
                },
                {
                    "id": 2,
                    "name": this.$t('work.mobile_mover.name'),
                    "img_url": img_mobilemover_app,
                    "tag": ["system_development"],
                    "project": "autonomous-mobile-robot"
                },
                {
                    "id": 3,
                    "name": this.$t('work.woodworking_book.name'),
                    "img_url": img_woodwork_1,
                    "tag": ["commercial_design"],
                    "project": "woodworking-craft-tool-guide"
                },
                {
                    "id": 4,
                    "name": this.$t('work.mu_maison.name'),
                    "img_url": img_kizuna_1,
                    "tag": ["product_design"],
                    "project": "mu-maison"
                },
                {
                    "id": 5,
                    "name": this.$t('work.leek_kimchi.name'),
                    "img_url": img_kimchi_1,
                    "tag": ["commercial_design"],
                    "project": "leek-kimchi"
                },
                {
                    "id": 6,
                    "name": this.$t('work.hiroshima_station.name'),
                    "img_url": img_hiroshima_station_1,
                    "tag": ["commercial_design"],
                    "project": "hiroshima-miyajima-station"
                },
                {
                    "id": 7,
                    "name": this.$t('work.takahata_business_card.name'),
                    "img_url": img_takahata_business_card_1,
                    "tag": ["commercial_design"],
                    "project": "takahata-business-card-design"
                },
                {
                    "id": 8,
                    "name": this.$t('work.m2labo_business_card.name'),
                    "img_url": img_power_creation_business_card_1,
                    "tag": ["commercial_design"],
                    "project": "m2labo-business-card-design"
                },
                {
                    "id": 9,
                    "name": this.$t('work.pineapples.name'),
                    "img_url": img_pineapple_1,
                    "tag": ["trading"],
                    "project": "exporting-pineapples"
                },
                {
                    "id": 10,
                    "name": this.$t('work.lathe_machine_workshop.name'),
                    "img_url": img_wood_workshop_1,
                    "tag": ["event_planning"],
                    "project": "lathe-machine-workshop"
                }
            ],
            serviceOptions: [
                {
                    text: this.$t('work.project_types.all'),
                    value: 'all'
                },
                {
                    text: this.$t('work.project_types.system'),
                    value: 'system_development'
                },
                {
                    text: this.$t('work.project_types.trading'),
                    value: 'trading'
                },
                {
                    text: this.$t('work.project_types.product'),
                    value: 'product_design'
                },
                {
                    text: this.$t('work.project_types.design'),
                    value: 'commercial_design'
                },
                {
                    text: this.$t('work.project_types.planning'),
                    value: 'event_planning'
                }
            ]
        }
    },
    methods: {
        selectCategory(type) {
            this.activeBtn = type
            if(type === 'all') {
                this.$router.push({ name: 'Work'})
            }else{
                type = type.replace('_',"-")
                this.$router.replace({query: { type: type }})
            }
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
        },
        checkViewportSize() {
            this.isMobile = window.innerWidth < this.$mobileDeviceMaxWidth
            this.isTablet = window.innerWidth < this.$mobileTabletDeviceMaxWidth
        },
        selectService(id) {
            window.scrollTo(0, 0)
            this.activeBtn = id
        },
        goToDetailPage(work) {
            this.$router.push({ name: 'WorkDetail', params: { project: work.project }})
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
            }
        }
    },
    mounted() {
        if (this.$route.query.type) {
            const filterType = this.$route.query.type.replace("-", "_")
            this.activeBtn = filterType
        }
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
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
* {
  font-family: 'Ubuntu', Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.work__background {
    background: #F5F5F5;
}
.work {
    display: flex;
    flex-direction: column;
    .work__description-top {
        display: flex;
        .title {
            margin: 0;
            margin-right: 40px;
            @include typography.font($index: 1);
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
}
.work__nav_button {
    font-size: 16px;
    height: 46px;
    width: 192px;
    margin-left: 20px;
    margin-top: 12px;
    border-style: none;
    border-radius: 71px;
    background: #FFFFFF;
    color: #000000;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    &:first-child {
        margin-left: 0px;
    }
 
}
.active {
    background: #E6AE4A;
    color: white;
    font-weight: bold;
}
.work__nav_button.all {
    width: 80px;
}
.service-dropdown {
        
    position: sticky;
    top: 96px;
    z-index: 0;
    background-color: #F5F5F5;
    padding: 16px 0 0 0;
    margin-bottom: 36px;
    box-shadow: 0px 20px 0px 0px #F5F5F5, // down
        5vw 0px 0px 0px #F5F5F5, // right
        5vw 4px 0px 0px #F5F5F5,
        5vw 20px 0px 0px #F5F5F5,
        -5vw 0px 0px 0px #F5F5F5, // left
        -5vw 4px 0px 0px #F5F5F5,
        -5vw 20px 0px 0px #F5F5F5;         
}
@media screen and (min-width: 1024px) {
    .work__display_area {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        .work__item {
            width: calc( (100% - 48px) / 3);
            margin-bottom: 36px;
            // height: auto;
            // object-fit: contain;
            img {
                width: 100%;
                height: 256px;
                object-fit: cover;
                cursor: pointer;
            }
            p {
                margin-top: 12px;
                @include typography.font($index: 7);
                cursor: pointer;
            }
        }
        div.item-between {
            margin-right: 24px;
        }
        div.item-2 {
            width: calc( (100% - 24px) / 2);
            margin-bottom: 36px;
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
            margin-bottom: 36px;
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

@media screen and (min-width: 767px) and (max-width: 1023px) {
    .work__display_area {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        
        .work__item {
            width: calc( (100% - 24px) / 2);
            margin-bottom: 36px;
            
            img {
                width: 100%;
                height: 234px;
                object-fit: cover;
            }
            p {
                margin-top: 12px;
                @include typography.font($index: 7);
                cursor: pointer;
            }
        }
    }
}

@media screen and (max-width: 766px) {
    .service-dropdown {
        
        position: sticky;
        top: 66px;
        z-index: 0;
        background-color: #F5F5F5;
        padding: 16px 0 0 0;
        margin-bottom: 36px;
        box-shadow: 0px 20px 0px 0px #F5F5F5, // down
            5vw 0px 0px 0px #F5F5F5, // right
            5vw 4px 0px 0px #F5F5F5,
            5vw 20px 0px 0px #F5F5F5,
            -5vw 0px 0px 0px #F5F5F5, // left
            -5vw 4px 0px 0px #F5F5F5,
            -5vw 20px 0px 0px #F5F5F5;         
    }
    .work__display_area {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        // justify-content: flex-start;
        .work__item {
            width: 100%;
            margin-bottom: 24px;
            // height: auto;
            // object-fit: contain;
            img {
                width: 100%;
                height: 228px;
                object-fit: cover;
                cursor: pointer;
            }
            p {
                margin-top: 12px;
                @include typography.font($index: 7);
                cursor: pointer;
            }
        }
    }
}

</style>

<script setup>
import img_vegibus_system from '@/assets/image/work/system_development/vegibus/img_vegibus_system.jpeg'
import img_mobilemover_app from '@/assets/image/work/system_development/mobilemover/img_mobilemover_app.png'
import img_woodwork_1 from '@/assets/image/work/commercial_design/book/img_woodwork_1.jpg'
import img_kizuna_1 from '@/assets/image/work/product_design/img_kizuna_1.jpg'
import img_kimchi_1 from '@/assets/image/work/commercial_design/kimchi/img_kimchi_1.jpg'
import img_hiroshima_station_1 from '@/assets/image/work/commercial_design/hiroshima_station/img_hiroshima_station_1.jpg'
import img_takahata_business_card_1 from '@/assets/image/work/commercial_design/takahata/img_takahata_business_card_1.jpg'
import img_power_creation_business_card_1 from '@/assets/image/work/commercial_design/power_creation/img_power_creation_business_card_1.jpg'
import img_pineapple_1 from '@/assets/image/work/trading/img_pineapple_1.jpg'
import img_wood_workshop_1 from '@/assets/image/work/event_planning/img_wood_workshop_1.jpg'
</script>