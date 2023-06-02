<template>
  <div class="service-card">
    <div class="service-card-box">
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
    <img :src="cardData.services[0].img_url" />
</div>
</template>

<script>
    export default {
        props: ['cardData']
    }
</script>

<style lang="scss" scoped>
.service-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 924px;

    img {
        width: 628px;
        height: 285px;
        object-fit: cover;
    }

    &__title-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0 0 30px 0;
    }

    &__title-text {
        font-size: 24px;
        font-weight: bold;
        margin: 0 0 0 16px;
    }

    &__main-content{
        display: flex;
        flex-direction: column;
        h5 {
            font-size: 20px;
            font-weight: bold;
            color: #E6AE4A;;
            margin: 10px 0;
        }
        ul {
            font-size: 16px;
            margin: 10px 0;
            padding: 0 16px;

            li {
                list-style: disc;
            }
        }
    }
}
</style>