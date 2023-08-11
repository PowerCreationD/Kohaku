<template>
  <div class="service-card">
    <div class="service-card__box">
        <div class="service-card__title-row">
            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.96805 0.98814C8.29463 -0.358023 10.4172 -0.328757 11.7158 1.07594C15.6257 5.31928 10.2636 11.5672 0.293254 22L0 21.6781C0 21.6781 10.3054 11.538 10.0401 7.99697C9.97031 6.95808 8.68563 7.1922 7.77797 6.66544C7.44283 6.48985 7.14958 6.25574 6.87029 5.96309C5.58561 4.57303 5.61353 2.34894 6.95408 0.98814H6.96805Z" fill="#E6AE4A"/>
            </svg>
            <h4 class="service-card__title-text">{{ cardData.title }}</h4>
        </div>
        <div class="service-card__main-content">
            <h5>{{ cardData.services[0].subtitle }}</h5>
            <ul>
                <li  v-for="item in cardData.services[0].items" :key="item">{{ item }}</li>
            </ul>
        </div>
    </div>
    <img v-lazy="getImageUrl(cardData.services[0].img_url)" />
</div>
</template>

<script>
    export default {
        props: ['cardData'],
        methods: {
            getImageUrl(img) {
                const imageUrl = new URL(img, import.meta.url).href
                return imageUrl
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../../assets/scss/components/typography' as typography;
@use '../../assets/scss/components/variable' as var;
.service-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    &__title-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0 0 30px 0;
    }

    &__title-text {
        @include typography.font($index: 3);
        margin: 0 0 0 16px;
    }

    &__main-content{
        display: flex;
        flex-direction: column;
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
}
@media screen and (min-width: 767px) {
    .service-card {

        &__box {
            width: 32%;
        }
        img {
            width: 68%;
            height: 285px;
            object-fit: cover;
        }

        &__main-content{
            display: flex;
            flex-direction: column;

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
        flex-wrap: wrap;

        &__box {
            width: 100%;
        }
        img {
            width: 100%;
            height: 285px;
            object-fit: cover;
        }
        &__title-text {
            margin-top: -6px;
        }

        &__main-content{
            display: flex;
            flex-direction: column;
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