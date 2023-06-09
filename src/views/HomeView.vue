<script setup>
import titleSectionBackgroundImageUrl from '@/assets/home_title_section_background.png'
import titleSectionMobileBackgroundImageUrl from '@/assets/home_title_section_background_mobile_version.png'
import researchSectionBackgroundImageUrl from '@/assets/home_research_section_background.png'
import researchSectionMobileBackgroundImageUrl from '@/assets/home_research_section_background_mobile_version.png'
import conceptSectionImageUrl from '@/assets/home_concept_section_image.png'
import conceptSectionMobileImageUrl from '@/assets/home_concept_section_image_mobile_version.png'
import solutionSectionImageUrl from '@/assets/home_solution_section_image.png'
import contactSectionImageUrl from '@/assets/home_contact_section_image.jpg'
import vegibusCoverImageUrl from '@/assets/work/system_development/vegibus/img_vegibus_system.png'
import mobileMoverCoverImageUrl from '@/assets/work/system_development/mobilemover/img_mobilemover_app.png'
import pineappleTradingCoverImageUrl from '@/assets/work/trading/img_pineapple_1.jpeg'
import kizunaFurnitureDesignCoverImageUrl from '@/assets/work/product_design/img_kizuna_1.png'
import woodWorkBookCoverImageUrl from '@/assets/work/commercial_design/book/img_woodwork_1.jpeg'
import m2LaboBusinessCardDesignCoverImageUrl from '@/assets/work/commercial_design/power_creation/img_power_creation_business_card_1.jpeg'
import takahataBusinessCardDesignCoverImageUrl from '@/assets/work/commercial_design/takahata/img_takahata_business_card_1.jpeg'
import kimchiPackageDesignCoverImageUrl from '@/assets/work/commercial_design/kimchi/img_kimchi_1.jpeg'
import hiroshimaStationUnmannedStoreCoverImageUrl from '@/assets/work/commercial_design/hiroshima_station/img_hiroshima_station_1.jpeg'
</script>

<template>
  <div class="home">
    <div class="home__section home-title-section">
      <p class="font-2 home-title-section__title">RESEARCH x CONCEPT = SOLUTION</p>
      <p class="font-7 home-title-section__text">
        如琥珀包覆萬物、經高壓而璀燦<br />
        並以留白包容所有可能——
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
        <p class="font-1 home-research-section__title">RESEARCH&nbsp;&nbsp;大量的研究</p>
      </div>
      <div class="container home-research-section__step-line-and-context-container">
        <div class="home__step-line home-research-section__step-line"></div>
        <div class="container home-research-section__context-container">
          <p class="font-3 home-research-section__subtitle">
            凝練條件、經驗與遠見<br />
            鎖定真實的需求啟動改變
          </p>
          <p class="font-7 home-research-section__text">
            如松脂包覆萬物、預備成就寶石<br />
            琥白以大量的研究、跨域的思維支持客戶的初衷，<br />
            為您的創新概念，考量落地發光的完備條件。
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
        <p class="font-1 home-concept-section__title">CONCEPT&nbsp;&nbsp;大膽的概念</p>
      </div>
      <div class="container home-concept-section__step-line-and-context-and-image-container">
        <div class="home__step-line home-concept-section__step-line"></div>
        <div class="container home-concept-section__context-container">
          <p class="font-3 home-concept-section__subtitle">
            跳躍的思維打破成見<br />
            五大專業的連結無遠弗屆
          </p>
          <p class="font-7 home-concept-section__text">
            以寬廣的留白，包容對可能未來的一切想像，<br />
            跨越資訊、機工、設計、貿易、創新領域的專業，<br />
            將既有條件共構出開創性的新解。
          </p>
          <img
            class="image home-concept-section__image"
            :src="conceptSectionMobileImageUrl"
            v-if="isMobileDevice"
          />
        </div>
        <img
          class="image home-concept-section__image"
          :src="conceptSectionImageUrl"
          v-if="!isMobileDevice"
        />
      </div>
    </div>
    <div class="home__section home-solution-section">
      <div class="container home-solution-section__pin-and-title-and-small-title-container">
        <div class="home__step-pin"></div>
        <p class="font-1 home-solution-section__title">SOLUTION</p>
        <p class="font-7 home-solution-section__small-title" v-if="!isMobileDevice">
          精金百煉的縝密洞見&nbsp;&nbsp;成就傳產革新的寬闊局面
        </p>
      </div>
      <div class="container home-solution-section__step-line-and-context-and-image-container">
        <div class="home__step-line home-solution-section__step-line">
          <StepLineArrowTipIcon
            class="home-solution-section__step-line-arrow-tip-icon"
          ></StepLineArrowTipIcon>
        </div>
        <div class="container home-solution-section__context-container">
          <p class="font-7 home-solution-section__small-title" v-if="isMobileDevice">
            精金百煉的縝密洞見&nbsp;&nbsp;成就傳產革新的寬闊局面
          </p>
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
              查看詳細服務
              <MoreArrowIcon class="link__icon" />
            </router-link>
          </div>
        </div>
        <img class="image home-solution-section__image" :src="solutionSectionImageUrl" />
      </div>
      <p class="home-solution-section__left-vertical-texts" v-if="!isMobileDevice">三大語言</p>
      <p class="home-solution-section__right-vertical-texts" v-if="!isMobileDevice">五大領域</p>
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
              查看所有專案
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
          >
            <LeftArrowIcon
              class="button__icon home-work-section__navigation-button-icon"
            ></LeftArrowIcon>
          </button>
          <button
            class="button button--icon home-work-section__right-navigation-button"
            @click="changeToNextProject"
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
          查看所有專案
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
        >
          <LeftArrowIcon
            class="button__icon home-work-section__navigation-button-icon"
          ></LeftArrowIcon>
        </button>
        <button
          class="button button--icon home-work-section__right-navigation-button"
          @click="changeToNextProject"
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
          <p class="font-3 home-contact-section__subtitle">承載傳統智慧，設計全新感受</p>
          <p class="font-7 home-contact-section__text">
            琥白擅長將結合設計力、資訊力，從微小的點子打造亮眼解方！
            歡迎聯繫我們拓展產業的無限可能！
          </p>
          <button class="button button--primary" @click="goToContactPage">聯絡我們</button>
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
          name: '系統設計 / 開發與維運',
          shortName: '系統開發',
          subtitleSentences: ['客製資訊系統導入產業', '協助趨勢洞察建立遠見'],
          textSentences: [
            '以 SaaS （Software as a Service）軟體服務出發，提供產業系統客製、跨系統整合服務，並有終端設備串接與開發專業，協助收集數據幫助決策，優化流程提升供銷效能。'
          ],
          keywordList: [
            {
              name: '系統開發',
              children: ['前端開發', '後端開發']
            },
            {
              name: '資料分析',
              children: ['商業資料探勘']
            },
            {
              name: '設備開發',
              children: ['嵌入式系統開發']
            }
          ],
          serviceLink: '/'
        },
        {
          name: '國內 / 國際貿易服務',
          shortName: '貿易服務',
          subtitleSentences: ['發現台灣在地美味食力', '打造全新面貌走向國際'],
          textSentences: [
            '專營台、日農產與食品雙向供銷，以及農用機具代理進出口，致力於發揚台灣好食與精工。',
            '具備專業的中、英、日語窗口，提供選品諮詢與外銷代辦，並有依目標地區消費習慣的品牌包裝再造服務，幫助MIT產品走向世界。'
          ],
          keywordList: [
            {
              name: '進出口選品諮詢'
            },
            {
              name: '市場風向探勘'
            },
            {
              name: '行銷企劃與代操'
            },
            {
              name: '中／英／日三語言窗口'
            },
            {
              name: '異國品牌包裝Redesign'
            }
          ],
          serviceLink: '/'
        },
        {
          name: '產品設計與量產開發',
          shortName: '產品設計',
          subtitleSentences: ['剖析未被留心的不便利', '用美學將痛點優雅轉譯'],
          textSentences: [
            '深究物件與人的夥伴關係，刻畫機能、型態與互動上的優質體驗。',
            '以細膩的設計雕琢產品，回應使用者對生活的期待。'
          ],
          keywordList: [
            {
              name: '問題研究'
            },
            {
              name: '概念提案'
            },
            {
              name: '參與式設計過程'
            },
            {
              name: '產品外觀設計'
            },
            {
              name: '3D模型建構'
            },
            {
              name: '模型製作'
            }
          ],
          serviceLink: '/'
        },
        {
          name: '品牌形象與視覺設計',
          shortName: '視覺設計',
          subtitleSentences: ['直指人心的視覺傳達', '昇華品牌與客戶的關係'],
          textSentences: [
            '一頁書、一件包裝、一套專業完整的品牌形象，由量身定制的設計精準傳達願景，',
            '讓您的客戶體驗品牌無微不至的用心，加深信任您的服務與產品。'
          ],
          keywordList: [
            {
              name: '品牌形象設計'
            },
            {
              name: '裝幀設計'
            },
            {
              name: '平面設計'
            },
            {
              name: '包裝設計'
            },
            {
              name: '網站介面設計'
            }
          ],
          serviceLink: '/'
        },
        {
          name: '企劃發想與活動策劃',
          shortName: '企劃發想',
          subtitleSentences: ['羽量團隊效能無限', '超高動能協助靈活策展'],
          textSentences: [
            '設計起家的創意人才加上打破框架的企業文化，為您的企劃提供意想不到的創新解方，',
            '熟悉外部團隊協作，與您迅速對接需求，自課程設計到會展活動，皆能提供專業的執行統籌。'
          ],
          keywordList: [
            {
              name: '課程、活動、展覽題材開發'
            },
            {
              name: '內容企劃'
            },
            {
              name: '執行統籌'
            },
            {
              name: '現場主持與場務'
            },
            {
              name: '活動視覺及媒體代操'
            }
          ],
          serviceLink: '/'
        }
      ],
      work: [
        {
          name: '系統設計、開發與維運',
          text: '系統設計、開發與維運',
          projects: [
            {
              name: '產銷系統設計｜日本農產電商物流系統',
              description:
                '與農產經銷日商Vegibus合作，致力於推廣農產品地產地銷的供應永續，為既有概念「蔬菜巴士」開發專屬資訊系統，一站整合產地供應、配送貨態、消費訂單與金流資訊，協助實現物流端自多站農家取貨、集運、沿線配送到府之複雜流程。\n落地營運的Vegibus蔬菜巴士，成功建立日本靜岡縣、茨城縣、千葉縣、大阪府等縣的在地農產物流網，讓消費者享受到低碳足跡、高新鮮度的蔬果，並建立友善永續的在地食農關係。',
              coverImageUrl: vegibusCoverImageUrl,
              workLink: '/work/1'
            },
            {
              name: '機電整合開發｜農用自走車控制平台',
              description:
                '因應農村高齡化勞動力短缺、農業精緻化管理繁瑣等情境，提出農用自走車——Mobile Mover，以智慧農機作為未來解方，配合作物管理週期搭載特定配件，實現壓草、除草、投藥、收成搬運等全功能農務支援。\n農用機電整合技術同時考量農場地域模型建構、地圖路徑分析、便利易用的掌上操作系統，並設計以銀髮農戶為對象適應系統的轉型服務流，為農場主減輕經營負擔。',
              coverImageUrl: mobileMoverCoverImageUrl,
              workLink: '/work/2'
            }
          ]
        },
        {
          name: '國內、國際貿易服務',
          text: '國內、國際貿易服務',
          projects: [
            {
              name: '日本外銷｜出口屏東台農金鑽鳳梨',
              description:
                '協助屏東縣綠地農特產品生產合作社與農產經銷日商Vegibus對接合作，出口台農17號金鑽鳳梨，直送日本當地大型超市Kasumiカスミ。\n此為民間推動之農產外銷革新，由農家直送終端消費者，大幅提升產品新鮮度與價格競爭力，縮短外銷途徑提升農民收益，也讓日本民眾享用更新鮮、更便宜的台灣鳳梨。',
              coverImageUrl: pineappleTradingCoverImageUrl,
              workLink: '/work/9'
            }
          ]
        },
        {
          name: '產品設計與量產開發',
          text: '產品設計與量產開發',
          projects: [
            {
              name: '傢俱設計｜慕廂－優雅收移的實木家具',
              description:
                '回應當代對室內工作空間靈活、共享等流動性訴求，慕廂收束實木家具的量體，以逐一靠攏的動作取代拆裝，輕鬆的收合桌、椅與邊櫃，並實現優雅不費力的平面推移。',
              coverImageUrl: kizunaFurnitureDesignCoverImageUrl,
              workLink: '/work/4'
            }
          ]
        },
        {
          name: '品牌形象與視覺設計',
          text: '品牌形象與視覺設計',
          projects: [
            {
              name: '書籍與裝幀｜木工藝工具書',
              description:
                '與國立台灣工藝研究發展中心合作，實地採集影像、口述，細緻保存匠人50年技藝精華以傳承後勁，並執行編印出版，完成上架國家書店納入政府出版品。',
              /*'國家書店政府出版品連結：',
                'https://www.govbooks.com.tw/books/137952'*/
              coverImageUrl: woodWorkBookCoverImageUrl,
              workLink: '/work/3'
            },
            {
              name: '視覺與包裝｜M2Labo名片設計',
              description:
                '與日本公司「エムスクエア・ラボ」合作，火紅的朝陽和夕陽也代表著日本的國旗，兩面圖像象徵企業日出而作，日落不息之精進精神。',
              coverImageUrl: m2LaboBusinessCardDesignCoverImageUrl,
              workLink: '/work/8'
            },
            {
              name: '高畠市役場名片設計',
              description:
                '為日本高畠市地區公所設計機關公務名片。\nLOGO結合市內之國家有形文化資產「舊高畠車站」，背面雅緻紋理則取自特色礦產「高畠石」。\n圍繞地方風情的細節增強基層機關與在地的連結，也使初見面的交換名片富饒更多驚喜話題。\n*畠：音田',
              coverImageUrl: takahataBusinessCardDesignCoverImageUrl,
              workLink: '/work/7'
            },
            {
              name: '日本高級超市 韭菜泡菜包裝設計',
              description:
                '輔導農家運用地產優勢研製韭菜泡菜特產，並協助設計包裝利供銷，增加農產加工增值的效益。',
              coverImageUrl: kimchiPackageDesignCoverImageUrl,
              workLink: '/work/5'
            },
            {
              name: '商空與展櫃｜廣島三原車站無人商店',
              description:
                '於西日本JR地方車站建置無人商店，自陳設、空間、至店內視覺經一致性統籌規劃，兼具舒適感及實用的平衡，達到自在便利的購物體驗。',
              coverImageUrl: hiroshimaStationUnmannedStoreCoverImageUrl,
              workLink: '/work/6'
            },
            {
              name: '廣島Fresta與SOGO超市攤位設計',
              description:
                '於西日本JR地方車站建置無人商店，自陳設、空間、至店內視覺經一致性統籌規劃，兼具舒適感及實用的平衡，達到自在便利的購物體驗。',
              coverImageUrl: hiroshimaStationUnmannedStoreCoverImageUrl,
              workLink: '/work/6'
            }
          ]
        },
        {
          name: '企劃發想與數位行銷',
          text: '企劃發想與數位行銷',
          projects: []
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
