<template>
  <div class="service-card">
    <div class="service-card__title-row">
        <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.96805 0.98814C8.29463 -0.358023 10.4172 -0.328757 11.7158 1.07594C15.6257 5.31928 10.2636 11.5672 0.293254 22L0 21.6781C0 21.6781 10.3054 11.538 10.0401 7.99697C9.97031 6.95808 8.68563 7.1922 7.77797 6.66544C7.44283 6.48985 7.14958 6.25574 6.87029 5.96309C5.58561 4.57303 5.61353 2.34894 6.95408 0.98814H6.96805Z" fill="#E6AE4A"/>
        </svg>
        <h4 class="service-card__title-text">{{ cardData.title }}</h4>
    </div>
    <div class="service-card__content-row">
        <div class="service-card__main-content 
                    service-card__content-row--space" 
            v-for="data in cardData.services" :key="data">
            <h5>{{ processData(data) }}</h5>
            <ul>
                <li v-for="itm in data.items" :key="itm">{{ itm }}</li>
            </ul>
            <div class="service-card__image">
                <img :src="ImageUrlSrc" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["cardData"],
    data() {
        return {
            imgPath: ""
        }
    },
    computed: {
        ImageUrlSrc() {
            const imageUrl = new URL(this.imgPath, import.meta.url).href
            return imageUrl
        }
    },
    methods: {
        processData(data) {
            this.imgPath = data.img_url
            return data.subtitle
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/components/typography' as typography;
@use '../../assets/scss/components/variable' as var;

.service-card {
    width: 100%;

    &__title-row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    &__title-text {
        @include typography.font($index: 3);
        margin: 0 0 0 16px;
    }

    &__content-row {
        display: flex;
        flex-direction: row;

        &--space {
            margin-right: 68px;
        }
    }
    &__main-content {
        display: flex;
        flex-direction: column;
        width: calc( (100% - 68px) / 2);
        h5 {
            @include typography.font($index: 4);
            color: map-get(var.$color, gold);
        }
        ul {
            @include typography.font($index: 7);
            padding: 0 16px;

            li {
                list-style: disc;
            }
        }
        
    }
    &__image {
        
        img {
            width: 100%;
            height: 285px;
            object-fit: cover;
        }
    }
    
}
@media screen and (min-width: 767px) {
    .service-card {
        &__title-row {
            margin-bottom: 30px;
        }
        &__main-content {
            h5 {
                margin: 10px 0;
            }
            ul {
                margin: 10px 0;
                li {
                    list-style: disc;
                }
            }
            
        }
    }
}

@media screen and (max-width: 767px) {
    .service-card {
        &__title-row {
            margin-bottom: 35px;
        }
        &__title-text {
            margin-top: -6px;
        }
        &__content-row {
            flex-wrap: wrap;
            &--space {
                margin-right: 0px;
            }
        }
        &__main-content {
            display: flex;
            flex-direction: column;
            width: 100%;
            &:last-child {
                margin-top: 36px;
            }
            h5 {
                @include typography.font($index: 4);
                color: map-get(var.$color, gold);
                margin-bottom: 8px;
            }
            ul {
                @include typography.font($index: 7);
                margin-bottom: 16px;
                padding: 0 16px;

                li {
                    list-style: disc;
                }
            }
        }
        
    }
}




</style>