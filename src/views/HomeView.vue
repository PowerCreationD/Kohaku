<script setup>
import titleSectionBackgroundImageUrl from '@/assets/home_title_section_background.png'
import titleSectionMobileBackgroundImageUrl from '@/assets/home_title_section_background_mobile_version.svg'
import researchSectionBackgroundImageUrl from '@/assets/home_research_section_background.png'
import researchSectionMobileBackgroundImageUrl from '@/assets/home_research_section_background_mobile_version.png'
import conceptSectionImageUrl from '@/assets/home_concept_section_image.png'
import conceptSectionMobileImageUrl from '@/assets/home_concept_section_image_mobile_version.png'
import solutionSectionImageUrl from '@/assets/home_solution_section_image.png'
import contactSectionImageUrl from '@/assets/home_contact_section_image.jpg'
import vegibusCoverImageUrl from '@/assets/image/work/system_development/vegibus/img_vegibus_system_homepage_cover.jpeg'
import mobileMoverCoverImageUrl from '@/assets/image/work/system_development/mobilemover/img_mobilemover_1.jpg'
import pineappleTradingCoverImageUrl from '@/assets/image/work/trading/img_pineapple_1.jpg'
import kizunaFurnitureDesignCoverImageUrl from '@/assets/image/work/product_design/img_kizuna_1.jpg'
import woodWorkBookCoverImageUrl from '@/assets/image/work/commercial_design/book/img_woodwork_1.jpg'
import m2LaboBusinessCardDesignCoverImageUrl from '@/assets/image/work/commercial_design/power_creation/img_power_creation_business_card_1.jpg'
import takahataBusinessCardDesignCoverImageUrl from '@/assets/image/work/commercial_design/takahata/img_takahata_business_card_1.jpg'
import kimchiPackageDesignCoverImageUrl from '@/assets/image/work/commercial_design/kimchi/img_kimchi_1.jpg'
import hiroshimaStationUnmannedStoreCoverImageUrl from '@/assets/image/work/commercial_design/hiroshima_station/img_hiroshima_station_1.jpg'
import woodWorkshopCoverImageUrl from '@/assets/image/work/event_planning/img_wood_workshop_1.jpg'
</script>

<template>
  <div class="home">
    <div class="home__section home-title-section">
      <p class="font-2 home-title-section__title">{{ $t('homepage.slogan') }}</p>
      <p class="font-7 home-title-section__text">
        {{ $t('homepage.description[0]') }}<br />
        {{ $t('homepage.description[1]') }}
      </p>
      <img
        class="background-image home-title-section__background-image"
        :src="
          isMobileDevice ? titleSectionMobileBackgroundImageUrl : titleSectionBackgroundImageUrl
        "
      />
    </div>
    <div class="home__section home-research-section">
      <div class="container home-research-section__pin-and-title-container">
        <div class="home__step-pin"></div>
        <p class="font-1 home-research-section__title">{{ $t('homepage.research.title') }}</p>
      </div>
      <div class="container home-research-section__step-line-and-context-container">
        <div class="home__step-line home-research-section__step-line"></div>
        <div class="container home-research-section__context-container">
          <p class="font-3 home-research-section__subtitle">
            {{ $t('homepage.research.subtitle') }}
          </p>
          <p class="font-7 home-research-section__text">
            {{ $t('homepage.research.text[0]') }}<br />
            {{ $t('homepage.research.text[1]') }}
          </p>
        </div>
      </div>
      <img
        class="background-image home-research-section__background-image"
        :src="
          isMobileDevice
            ? researchSectionMobileBackgroundImageUrl
            : researchSectionBackgroundImageUrl
        "
      />
    </div>
    <div class="home__section home-concept-section">
      <div class="container home-concept-section__pin-and-title-container">
        <div class="home__step-pin"></div>
        <p class="font-1 home-concept-section__title">{{ $t('homepage.concept.title') }}</p>
      </div>
      <div class="container home-concept-section__step-line-and-context-and-image-container">
        <div class="home__step-line home-concept-section__step-line"></div>
        <div class="container home-concept-section__context-container">
          <p class="font-3 home-concept-section__subtitle">{{ $t('homepage.concept.subtitle') }}</p>
          <p class="font-7 home-concept-section__text">
            {{ $t('homepage.concept.text[0]') }}<br />
            {{ $t('homepage.concept.text[1]') }}
          </p>
          <img
            class="image home-concept-section__image"
            :src="conceptSectionMobileImageUrl"
            v-if="isMobileDevice"
          />
        </div>
        <div class="container home-concept-section__image-container" v-if="!isMobileDevice">
          <img class="image home-concept-section__image" :src="conceptSectionImageUrl" />
        </div>
      </div>
    </div>
    <div class="home__section home-solution-section">
      <div class="container home-solution-section__pin-and-title-container">
        <div class="home__step-pin"></div>
        <p class="font-1 home-solution-section__title">{{ $t('homepage.solutions.title') }}</p>
      </div>
      <div class="container home-solution-section__step-line-and-context-and-image-container">
        <div class="home__step-line home-solution-section__step-line">
          <StepLineArrowTipIcon
            class="home-solution-section__step-line-arrow-tip-icon"
          ></StepLineArrowTipIcon>
        </div>
        <div class="container home-solution-section__context-container">
          <div class="container home-solution-section__service-button-container">
            <button
              class="button button--text-only home-solution-section__service-button"
              :class="{
                'home-solution-section__service-button--selected': currentSolutionIndex === index
              }"
              v-for="(solution, index) in solutions"
              :key="index"
              @click="selectSolution(index)"
            >
              {{ isMobileDevice ? solution.shortName : solution.name }}
            </button>
          </div>
          <div class="container home-solution-section__information-container">
            <div class="container home-solution-section__subtitle-container">
              <p
                class="font-3 home-solution-section__subtitle"
                v-for="(subtitle, index) in solutions[currentSolutionIndex].subtitleSentences"
                :key="index"
              >
                {{ subtitle }}
              </p>
            </div>
            <div class="container home-solution-section__text-container">
              <p
                class="font-7 home-solution-section__text"
                v-for="(text, index) in solutions[currentSolutionIndex].textSentences"
                :key="index"
              >
                {{ text }}
              </p>
            </div>
            <div class="container home-solution-section__keyword-container">
              <ul class="list list--disc home-solution-section__left-keyword-list">
                <li
                  class="list__item"
                  v-for="(keyword, index) in firstHalfOfKeywordList"
                  :key="index"
                >
                  {{ keyword.name }}
                  <ul class="list list--circle" v-if="'children' in keyword">
                    <li
                      class="list__item"
                      v-for="(keywordChild, index) in keyword.children"
                      :key="index"
                    >
                      {{ keywordChild }}
                    </li>
                  </ul>
                </li>
              </ul>
              <ul class="list list--disc home-solution-section__right-keyword-list">
                <li
                  class="list__item"
                  v-for="(keyword, index) in secondHalfOfKeywordList"
                  :key="index"
                >
                  {{ keyword.name }}
                  <ul class="list list--circle" v-if="'children' in keyword">
                    <li
                      class="list__item"
                      v-for="(keywordChild, index) in keyword.children"
                      :key="index"
                    >
                      {{ keywordChild }}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <router-link class="link" :to="solutions[currentSolutionIndex].serviceLink">
              {{ $t('global.buttons.view_the_service') }}
              <MoreArrowIcon class="link__icon" />
            </router-link>
          </div>
        </div>
        <img class="image home-solution-section__image" :src="solutionSectionImageUrl" />
      </div>
      <p class="home-solution-section__left-vertical-texts" v-if="!isMobileDevice">
        {{ $t('homepage.solutions.subtitle[0]') }}
      </p>
      <p class="home-solution-section__right-vertical-texts" v-if="!isMobileDevice">
        {{ $t('homepage.solutions.subtitle[1]') }}
      </p>
    </div>
    <div class="home__section home-work-section" v-if="!isMobileDevice">
      <p class="font-1 home-work-section__title">WORK</p>
      <div class="container home-work-section__context-container">
        <div class="container home-work-section__description-and-category-container">
          <div class="container home-work-section__description-and-more-button-container">
            <p class="font-7 home-work-section__description">
              {{ work[currentWorkCategoryIndex].projects[currentWorkProjectIndex].description }}
            </p>
            <router-link class="link" to="/work">
              {{ $t('global.buttons.view_all_project') }}
              <MoreArrowIcon class="link__icon" />
            </router-link>
          </div>
          <div class="container home-work-section__category-container">
            <template v-for="(work, index) in work" :key="index">
              <hr class="separator home-work-section__category-separator" v-if="index === 0" />
              <button
                class="button button--text-only home-work-section__category-button"
                :class="{
                  'home-work-section__category-button--selected': index === currentWorkCategoryIndex
                }"
                @click="selectWorkCategory(index)"
              >
                {{ work.name }}
                <div
                  class="home-work-section__category-button-arrow"
                  v-if="index === currentWorkCategoryIndex"
                >
                  <CategoryButtonArrowTipIcon
                    class="home-work-section__category-button-arrow-tip-icon"
                  ></CategoryButtonArrowTipIcon>
                </div>
              </button>
              <hr class="separator home-work-section__category-separator" />
            </template>
          </div>
        </div>
        <div class="container home-work-section__cover-image-and-navigation-button-container">
          <img
            class="image home-work-section__cover-image"
            :src="work[currentWorkCategoryIndex].projects[currentWorkProjectIndex].coverImageUrl"
          />
          <button
            class="button button--icon home-work-section__left-navigation-button"
            @click="changeToPreviousProject"
            v-if="work[currentWorkCategoryIndex].projects.length > 1"
          >
            <LeftArrowIcon
              class="button__icon home-work-section__navigation-button-icon"
            ></LeftArrowIcon>
          </button>
          <button
            class="button button--icon home-work-section__right-navigation-button"
            @click="changeToNextProject"
            v-if="work[currentWorkCategoryIndex].projects.length > 1"
          >
            <RightArrowIcon
              class="button__icon home-work-section__navigation-button-icon"
            ></RightArrowIcon>
          </button>
          <p class="font-6 home-work-section__work-name">
            {{ work[currentWorkCategoryIndex].projects[currentWorkProjectIndex].name }}
          </p>
        </div>
      </div>
    </div>
    <div class="home__section home-work-section" v-else>
      <div class="container home-work-section__title-and-more-button-container">
        <p class="font-1 home-work-section__title">WORK</p>
        <router-link class="link" to="/work">
          {{ $t('global.buttons.view_all_project') }}
          <MoreArrowIcon class="link__icon" />
        </router-link>
      </div>
      <DropdownComponent
        class="home-work-section__dropdown"
        :options="work"
        :defaultIndex="0"
        :emitSelectOptionEventOnMounted="true"
        @selectOption="selectWorkOption"
      />
      <div class="container home-work-section__cover-image-and-navigation-button-container">
        <img
          class="image home-work-section__cover-image"
          :src="work[currentWorkCategoryIndex].projects[currentWorkProjectIndex].coverImageUrl"
        />
        <button
          class="button button--icon home-work-section__left-navigation-button"
          @click="changeToPreviousProject"
          v-if="work[currentWorkCategoryIndex].projects.length > 1"
        >
          <LeftArrowIcon
            class="button__icon home-work-section__navigation-button-icon"
          ></LeftArrowIcon>
        </button>
        <button
          class="button button--icon home-work-section__right-navigation-button"
          @click="changeToNextProject"
          v-if="work[currentWorkCategoryIndex].projects.length > 1"
        >
          <RightArrowIcon
            class="button__icon home-work-section__navigation-button-icon"
          ></RightArrowIcon>
        </button>
      </div>
      <p class="font-6 home-work-section__work-name">
        {{ work[currentWorkCategoryIndex].projects[currentWorkProjectIndex].name }}
      </p>
      <p class="font-7 home-work-section__description">
        {{ work[currentWorkCategoryIndex].projects[currentWorkProjectIndex].description }}
      </p>
    </div>
    <div class="home__section home-contact-section">
      <p class="font-1 home-contact-section__title">CONTACT US</p>
      <div class="container home-contact-section__image-and-context-container">
        <img class="image home-contact-section__image" :src="contactSectionImageUrl" />
        <div class="container home-contact-section__context-container">
          <p class="font-3 home-contact-section__subtitle">{{ $t('homepage.contact.subtitle') }}</p>
          <p class="font-7 home-contact-section__text">
            {{ $t('homepage.contact.text') }}
          </p>
          <button class="button button--primary" @click="goToContactPage">{{ $t('global.buttons.contact_us') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoreArrowIcon from '@/components/global/MoreArrowIcon.vue'
import StepLineArrowTipIcon from '@/components/global/StepLineArrowTipIcon.vue'
import CategoryButtonArrowTipIcon from '@/components/global/CategoryButtonArrowTipIcon.vue'
import LeftArrowIcon from '@/components/global/LeftArrowIcon.vue'
import RightArrowIcon from '@/components/global/RightArrowIcon.vue'
import DropdownComponent from '@/components/global/DropdownComponent.vue'

export default {
  components: {
    MoreArrowIcon,
    StepLineArrowTipIcon,
    CategoryButtonArrowTipIcon,
    LeftArrowIcon,
    RightArrowIcon,
    DropdownComponent
  },
  data() {
    return {
      isMobileDevice: false,
      currentSolutionIndex: 0,
      currentWorkCategoryIndex: 0,
      currentWorkProjectIndex: 0,
      solutions: [
        {
          name: this.$t('homepage.solutions.system.name'),
          shortName: this.$t('homepage.solutions.system.shortName'),
          subtitleSentences: [
            this.$t('homepage.solutions.system.subtitleSentences[0]'),
            this.$t('homepage.solutions.system.subtitleSentences[1]')
          ],
          textSentences: [this.$t('homepage.solutions.system.textSentences[0]')],
          keywordList: [
            {
              name: this.$t('homepage.solutions.system.keywordList[0].name'),
              children: [
                this.$t('homepage.solutions.system.keywordList[0].children[0]'),
                this.$t('homepage.solutions.system.keywordList[0].children[1]')
              ]
            },
            {
              name: this.$t('homepage.solutions.system.keywordList[1].name'),
              children: [this.$t('homepage.solutions.system.keywordList[1].children[0]')]
            },
            {
              name: this.$t('homepage.solutions.system.keywordList[2].name'),
              children: [this.$t('homepage.solutions.system.keywordList[2].children[0]')]
            }
          ],
          serviceLink: '/services/system-development'
        },
        {
          name: this.$t('homepage.solutions.trading.name'),
          shortName: this.$t('homepage.solutions.trading.shortName'),
          subtitleSentences: [
            this.$t('homepage.solutions.trading.subtitleSentences[0]'),
            this.$t('homepage.solutions.trading.subtitleSentences[1]')
          ],
          textSentences: [
            this.$t('homepage.solutions.trading.textSentences[0]')
          ],
          keywordList: [
            {
              name: this.$t('homepage.solutions.trading.keywordList[0].name')
            },
            {
              name: this.$t('homepage.solutions.trading.keywordList[1].name')
            },
            {
              name: this.$t('homepage.solutions.trading.keywordList[2].name')
            },
            {
              name: this.$t('homepage.solutions.trading.keywordList[3].name')
            },
            {
              name: this.$t('homepage.solutions.trading.keywordList[4].name')
            }
          ],
          serviceLink: '/services/trading'
        },
        {
          name: this.$t('homepage.solutions.product.name'),
          shortName: this.$t('homepage.solutions.product.shortName'),
          subtitleSentences: [
            this.$t('homepage.solutions.product.subtitleSentences[0]'),
            this.$t('homepage.solutions.product.subtitleSentences[1]')
          ],
          textSentences: [
            this.$t('homepage.solutions.product.textSentences[0]'),
            this.$t('homepage.solutions.product.textSentences[1]')
          ],
          keywordList: [
            {
              name: this.$t('homepage.solutions.product.keywordList[0].name')
            },
            {
              name: this.$t('homepage.solutions.product.keywordList[1].name')
            },
            {
              name: this.$t('homepage.solutions.product.keywordList[2].name')
            },
            {
              name: this.$t('homepage.solutions.product.keywordList[3].name')
            },
            {
              name: this.$t('homepage.solutions.product.keywordList[4].name')
            },
            {
              name: this.$t('homepage.solutions.product.keywordList[5].name')
            }
          ],
          serviceLink: '/services/product-design'
        },
        {
          name: this.$t('homepage.solutions.design.name'),
          shortName: this.$t('homepage.solutions.design.shortName'),
          subtitleSentences: [
            this.$t('homepage.solutions.design.subtitleSentences[0]'),
            this.$t('homepage.solutions.design.subtitleSentences[1]')
          ],
          textSentences: [
            this.$t('homepage.solutions.design.textSentences[0]'),
            this.$t('homepage.solutions.design.textSentences[1]')
          ],
          keywordList: [
            {
              name: this.$t('homepage.solutions.design.keywordList[0].name')
            },
            {
              name: this.$t('homepage.solutions.design.keywordList[1].name')
            },
            {
              name: this.$t('homepage.solutions.design.keywordList[2].name')
            },
            {
              name: this.$t('homepage.solutions.design.keywordList[3].name')
            },
            {
              name: this.$t('homepage.solutions.design.keywordList[4].name')
            }
          ],
          serviceLink: '/services/commercial-design'
        },
        {
          name: this.$t('homepage.solutions.planning.name'),
          shortName: this.$t('homepage.solutions.planning.shortName'),
          subtitleSentences: [
            this.$t('homepage.solutions.planning.subtitleSentences[0]'),
            this.$t('homepage.solutions.planning.subtitleSentences[1]')
          ],
          textSentences: [
            this.$t('homepage.solutions.planning.textSentences[0]'),
            this.$t('homepage.solutions.planning.textSentences[1]')
          ],
          keywordList: [
            {
              name: this.$t('homepage.solutions.planning.keywordList[0].name')
            },
            {
              name: this.$t('homepage.solutions.planning.keywordList[1].name')
            },
            {
              name: this.$t('homepage.solutions.planning.keywordList[2].name')
            },
            {
              name: this.$t('homepage.solutions.planning.keywordList[3].name')
            },
            {
              name: this.$t('homepage.solutions.planning.keywordList[4].name')
            }
          ],
          serviceLink: '/services/event-planning'
        }
      ],
      work: [
        {
          name: this.$t('homepage.work.system.name'),
          text: this.$t('homepage.work.system.text'),
          projects: [
            {
              name: this.$t('homepage.work.system.projects[0].name'),
              description: this.$t('homepage.work.system.projects[0].description'),
              coverImageUrl: vegibusCoverImageUrl,
              workLink: '/work/1'
            },
            {
              name: this.$t('homepage.work.system.projects[1].name'),
              description: this.$t('homepage.work.system.projects[1].description'),
              coverImageUrl: mobileMoverCoverImageUrl,
              workLink: '/work/2'
            }
          ]
        },
        {
          name: this.$t('homepage.work.trading.name'),
          text: this.$t('homepage.work.trading.text'),
          projects: [
            {
              name: this.$t('homepage.work.trading.projects[0].name'),
              description: this.$t('homepage.work.trading.projects[0].description'),
              coverImageUrl: pineappleTradingCoverImageUrl,
              workLink: '/work/9'
            }
          ]
        },
        {
          name: this.$t('homepage.work.product.name'),
          text: this.$t('homepage.work.product.text'),
          projects: [
            {
              name: this.$t('homepage.work.product.projects[0].name'),
              description: this.$t('homepage.work.product.projects[0].description'),
              coverImageUrl: kizunaFurnitureDesignCoverImageUrl,
              workLink: '/work/4'
            }
          ]
        },
        {
          name: this.$t('homepage.work.design.name'),
          text: this.$t('homepage.work.design.text'),
          projects: [
            {
              name: this.$t('homepage.work.design.projects[0].name'),
              description: this.$t('homepage.work.design.projects[0].description'),
              /*'國家書店政府出版品連結：',
                'https://www.govbooks.com.tw/books/137952'*/
              coverImageUrl: woodWorkBookCoverImageUrl,
              workLink: '/work/3'
            },
            {
              name: this.$t('homepage.work.design.projects[1].name'),
              description: this.$t('homepage.work.design.projects[1].description'),
              coverImageUrl: m2LaboBusinessCardDesignCoverImageUrl,
              workLink: '/work/8'
            },
            {
              name: this.$t('homepage.work.design.projects[2].name'),
              description: this.$t('homepage.work.design.projects[2].description'),
              coverImageUrl: takahataBusinessCardDesignCoverImageUrl,
              workLink: '/work/7'
            },
            {
              name: this.$t('homepage.work.design.projects[3].name'),
              description: this.$t('homepage.work.design.projects[3].description'),
              coverImageUrl: kimchiPackageDesignCoverImageUrl,
              workLink: '/work/5'
            },
            {
              name: this.$t('homepage.work.design.projects[4].name'),
              description: this.$t('homepage.work.design.projects[4].description'),
              coverImageUrl: hiroshimaStationUnmannedStoreCoverImageUrl,
              workLink: '/work/6'
            }
          ]
        },
        {
          name: this.$t('homepage.work.planning.name'),
          text: this.$t('homepage.work.planning.text'),
          projects: [
            {
              name: this.$t('homepage.work.planning.projects[0].name'),
              description: this.$t('homepage.work.planning.projects[0].description'),
              coverImageUrl: woodWorkshopCoverImageUrl,
              workLink: '/work/10'
            }
          ]
        }
      ]
    }
  },
  computed: {
    firstHalfOfKeywordList() {
      var halfLength = Math.ceil(this.solutions[this.currentSolutionIndex].keywordList.length / 2)
      return this.solutions[this.currentSolutionIndex].keywordList.slice(0, halfLength)
    },
    secondHalfOfKeywordList() {
      var halfLength = Math.ceil(this.solutions[this.currentSolutionIndex].keywordList.length / 2)
      return this.solutions[this.currentSolutionIndex].keywordList.slice(halfLength)
    }
  },
  mounted() {
    this.checkViewportSize()
    window.addEventListener('resize', this.checkViewportSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkViewportSize)
  },
  methods: {
    checkViewportSize() {
      this.isMobileDevice = window.innerWidth < this.$mobileDeviceMaxWidth
    },
    selectSolution(index) {
      this.currentSolutionIndex = index
      this.currentWorkProjectIndex = 0
    },
    selectWorkCategory(index) {
      this.currentWorkCategoryIndex = index
      this.currentWorkProjectIndex = 0
    },
    changeToPreviousProject() {
      this.currentWorkProjectIndex -= 1
      if (this.currentWorkProjectIndex < 0) {
        this.currentWorkProjectIndex = this.work[this.currentWorkCategoryIndex].projects.length - 1
      }
    },
    changeToNextProject() {
      this.currentWorkProjectIndex += 1
      if (
        this.currentWorkProjectIndex >= this.work[this.currentWorkCategoryIndex].projects.length
      ) {
        this.currentWorkProjectIndex = 0
      }
    },
    goToContactPage() {
      this.$router.push('/contact')
    },
    selectWorkOption(selectedOption) {
      this.currentWorkCategoryIndex = this.work.indexOf(selectedOption)
      this.currentWorkProjectIndex = 0
    }
  }
}
</script>
