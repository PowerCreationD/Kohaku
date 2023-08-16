<template>
  <div class="work-example-section">
    <div class="work-example-section__title">
        <h1>WORK</h1>
        <svg v-if="isMobile" width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.96805 0.98814C8.29463 -0.358023 10.4172 -0.328757 11.7158 1.07594C15.6257 5.31928 10.2636 11.5672 0.293254 22L0 21.6781C0 21.6781 10.3054 11.538 10.0401 7.99697C9.97031 6.95808 8.68563 7.1922 7.77797 6.66544C7.44283 6.48985 7.14958 6.25574 6.87029 5.96309C5.58561 4.57303 5.61353 2.34894 6.95408 0.98814H6.96805Z" fill="#E6AE4A"/>
        </svg>
        <svg v-else width="23" height="37" viewBox="0 0 23 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3281 1.66187C14.6751 -0.60213 18.4304 -0.552909 20.728 1.80953C27.6455 8.94606 18.1586 19.454 0.518834 37L0 36.4586C0 36.4586 18.2327 19.4048 17.7633 13.4495C17.6398 11.7022 15.3669 12.096 13.761 11.2101C13.1681 10.9148 12.6492 10.521 12.1551 10.0288C9.88222 7.69101 9.93163 3.95048 12.3034 1.66187H12.3281Z" fill="#E6AE4A"/>
        </svg>
    </div>
    <div class="work-example-section__main">
        <div class="work-example-section__main-content">
            <div class="work-example-section__display" v-for="itm in workData.exampleList" :key="itm.title">
                <div class="work-example-section__example-item">
                    <img v-lazy="getImageUrl(itm.img_url)" @click="goToDetailPage(itm.project)"/>
                </div>
                <p @click="goToDetailPage(itm.project)">{{ itm.title }}</p>
            </div>
        </div>
        <router-link v-if="workData['workNumber'] > 2" 
                    class="link work-example-section__more-arrow" 
                    :to="{ name: 'Work', params: { type: workData.type }  }">
            {{$t('global.buttons.view_more')}}<MoreArrowIcon class="link__icon"/>
        </router-link>
    </div>
  </div>
</template>

<script>
import MoreArrowIcon from '@/components/global/MoreArrowIcon.vue'
export default {
    components: { MoreArrowIcon },
    props: ["workData"],
    data() {
      return {
        isMobile: false
      }
    },
    methods: {
        goToDetailPage(projectId) {
            this.$router.push({ name: 'WorkDetail', params: { project: projectId } })
        },
        checkViewportSize() {
            this.isMobile = window.innerWidth < this.$mobileDeviceMaxWidth
        },
        getImageUrl(img) {
            const imageUrl = new URL(img, import.meta.url).href
            return imageUrl
        }
    },
    mounted() {
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
.work-example-section {
    &__title {
        display: flex;
        h1 {
            @include typography.font($index: 1);
        }
        svg {
            position: absolute;
        }
    }
    &__display {
        p {
            @include typography.font($index: 7);
            cursor: pointer;
        }
    }
}
@media screen and (min-width: 767px) { 
    .work-example-section {
        &__title {
            h1 {
                line-height: 26px;
            }
            svg {
                margin: 12px 0 0 120px;
            }
        }

        &__main {
            background-color: #F5F5F5;
            display: flex;
            flex-direction: column;
            padding: min(76px , 5vw);
            width: max((100% + 5vw),(100% + (100vw - 1200px)/2));
        }

        &__main-content {
            background-color: #F5F5F5;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
        }

        &__display {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex-basis: 0;
            flex-grow: 1;

            img {
                width: 100%;
                max-width: 390px;
                cursor: pointer;
            }
            p {
                margin: 10px 0;
            }

            &:not(:first-child){
                margin-left: 66px;
            }
            &:first-child{
                max-width: calc((100% - 66px)/2);
            }
        }

        &__example-item {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__more-arrow {
            width: max-content;
            padding: 0;
            margin-top: 6px;
            margin-left: min(calc(100% - 87px), 759px);
        }
    }
}
@media screen and (max-width: 766px) { 
    .work-example-section {
        margin-top: 36px;
        &__title {
            h1 {
                line-height: 16px;
            }
            svg {
                margin: 8px 0 0 74px;
            }
        }

        &__main {
            background-color: #F5F5F5;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100vw;
            padding: 36px max(16px , 5vw);
            margin-left: min(-16px, -5vw);
        }

        &__main-content {
            
            display: flex;
            flex-direction: column;
            align-items: center;
            
        }

        &__display {
            display: flex;
            flex-direction: column;
            
            img {
                width: 100%;
                cursor: pointer;
            }
            p {
                margin-top: 12px;
                margin-bottom: 24px;
            }
            
        }
        &__display:last-child {
            p {
                margin-bottom: 0px;
            }
        }
        &__more-arrow {
            margin-top: 16px;
            padding: 0;
            width: max-content;
            margin-left: calc(100% - 75px);
        }

    }
}

</style>