const locale = {
  global: {
    buttons: {
      next: '下一步',
      prev: '上一步',
      back: '返回',
      close: '關閉',
      submit_form: '送出表單',
      contact_us: '聯絡我們',
      view_the_service: '查看詳細服務',
      view_all_project: '查看所有專案',
      view_more: '查看更多'
    },
    footer: {
      address: '（803）高雄市鹽埕區大勇路11號3樓'
    }
  },
  homepage: {
    slogan: '想像 × 創造 × 未來',
    description: ['我們透過跨領域的技術服務', '在食農、工藝、製造與地方課題創造企業的永續價值'],
    research: {
      title: 'RESEARCH  深度',
      subtitle: '洞察真實問題與需求',
      text: ['琥白以大量研究支持客戶的初衷，', '為您想要的改變，考量落地發光的完備條件。']
    },
    concept: {
      title: 'CONCEPT  廣度',
      subtitle: '跨領域思維不落俗套',
      text: ['琥白團隊成員來自不同專業知識背景', '與客戶從多元視角討論創新的雛形。']
    },
    solutions: {
      title: 'SOLUTION  最佳解',
      subtitle: ['三大語言', '五大領域'],
      system: {
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
        ]
      },
      trading: {
        name: '國內 / 國際貿易服務',
        shortName: '貿易服務',
        subtitleSentences: ['發現台灣在地美味食力', '打造全新面貌走向國際'],
        textSentences: [
          '專營台、日農產與食品雙向供銷，以及農用機具代理進出口，致力於發揚台灣好食與精工。具備專業的中、英、日語窗口，提供選品諮詢與外銷代辦，並有依目標地區消費習慣的品牌包裝再造服務，幫助MIT產品走向世界。'
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
        ]
      },
      product: {
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
        ]
      },
      design: {
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
        ]
      },
      planning: {
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
        ]
      }
    },
    work: {
      system: {
        name: '系統設計、開發與維運',
        text: '系統設計、開發與維運',
        projects: [
          {
            name: '產銷系統設計｜日本農產電商物流系統',
            description:
              '與農產經銷日商Vegibus合作，致力於推廣農產品地產地銷的供應永續，為既有概念「蔬菜巴士」開發專屬資訊系統，一站整合產地供應、配送貨態、消費訂單與金流資訊，協助實現物流端自多站農家取貨、集運、沿線配送到府之複雜流程。'
          },
          {
            name: '機電整合開發｜自主移動機器人控制平台',
            description:
              '因應農村高齡化勞動力短缺、農業精緻化管理繁瑣等情境，提出農用自走車——Mobile Mover，以智慧農機作為未來解方，配合作物管理週期搭載特定配件，實現壓草、除草、投藥、收成搬運等全功能農務支援。'
          }
        ]
      },
      trading: {
        name: '國內、國際貿易服務',
        text: '國內、國際貿易服務',
        projects: [
          {
            name: '日本外銷｜出口屏東台農金鑽鳳梨',
            description:
              '協助屏東縣綠地農特產品生產合作社與農產經銷日商Vegibus對接合作，出口台農17號金鑽鳳梨，直送日本當地大型超市Kasumiカスミ。'
          }
        ]
      },
      product: {
        name: '產品設計與量產開發',
        text: '產品設計與量產開發',
        projects: [
          {
            name: '傢俱設計｜慕廂－優雅收移的實木家具',
            description:
              '回應當代對室內工作空間靈活、共享等流動性訴求，慕廂收束實木家具的量體，以逐一靠攏的動作取代拆裝，輕鬆的收合桌、椅與邊櫃，並實現優雅不費力的平面推移。'
          }
        ]
      },
      design: {
        name: '品牌形象與視覺設計',
        text: '品牌形象與視覺設計',
        projects: [
          {
            name: '書籍與裝幀｜木工藝工具書',
            description:
              '與國立台灣工藝研究發展中心合作，實地採集影像、口述，細緻保存匠人50年技藝精華以傳承後勁，並執行編印出版，完成上架國家書店納入政府出版品。'
          },
          {
            name: '視覺與包裝｜M2Labo名片設計',
            description:
              '與日本公司「エムスクエア・ラボ」合作，火紅的朝陽和夕陽也代表著日本的國旗，兩面圖像象徵企業日出而作，日落不息之精進精神。'
          },
          {
            name: '高畠市役場名片設計',
            description:
              '為日本高畠市地區公所設計機關公務名片。\nLOGO結合市內之國家有形文化資產「舊高畠車站」，背面雅緻紋理則取自特色礦產「高畠石」。\n圍繞地方風情的細節增強基層機關與在地的連結，也使初見面的交換名片富饒更多驚喜話題。\n*畠：音田'
          },
          {
            name: '日本高級超市 韭菜泡菜包裝設計',
            description:
              '輔導農家運用地產優勢研製韭菜泡菜特產，並協助設計包裝利供銷，增加農產加工增值的效益。'
          },
          {
            name: '商空與展櫃｜廣島三原車站無人商店',
            description:
              '於西日本JR地方車站建置無人商店，自陳設、空間、至店內視覺經一致性統籌規劃，兼具舒適感及實用的平衡，達到自在便利的購物體驗。'
          }
        ]
      },
      planning: {
        name: '企劃發想與數位行銷',
        text: '企劃發想與數位行銷',
        projects: [
          {
            name: '活動紀錄｜車床技術轉譯研究工作坊',
            description:
              '與國立台灣工藝研究發展中心合作，實地採集影像、口述，細緻保存匠人50年技藝精華以傳承後勁，執行影片剪輯、影像紀錄，並於活動結束當日上映，作為活動結尾。'
          }
        ]
      }
    },
    contact: {
      subtitle: '承載傳統智慧，設計全新感受',
      text: '琥白擅長將結合設計力、資訊力，從微小的點子打造亮眼解方！歡迎聯繫我們拓展產業的無限可能！'
    }
  },
  about: {
    description: {
      introduction: `琥白誕生於2021與2022之間
            故事的開始是一群來自不同背景的青年
            因為期望回歸根本的初心，於是扎根於臺灣
            因為對於農業未來的想像，於是深耕於傳產`,

      mission_values: `乘載文化底蘊的同時
            也持續注入新興的能量與創意
            結合地方與國際的思維
            推動資訊與設計的揉和

            從企劃到行銷、
            從設計到開發、
            從產地到產業、
            從傳承到創新

            以跨域整合的思維
            串連起所有的端點
            匯聚不同服務的影響力
            翻轉價值`
    },

    brand: {
      name: '琥白 Kohaku',
      meaning: `琥珀，是液態的松脂，化石化的結晶，包裹千萬年前的生命，形成動人的時光膠囊。
            白，是設計中的留白，未被填滿而包容一切的自由。

            在琥白，才能和創意自在流動，去包裹一個個初出的想法， 幾經高壓凝結成獨一無二的寶石，綻放或柔美、或奪目的輝光。 這是一處孵夢之地，邀請你一起野放天馬行空的想法，發展那些大膽的可能。`
    },

    milestone: [
      {
        date: '2021/09',
        content: [
          '與「株式会社エムスクエア・ラボ（m2labo）」、「株式会社やさいバス（Vegibus）」合作並獲其投資',
          '成立「創次方股份有限公司」'
        ]
      },
      {
        date: '2022/04',
        content: ['獲111年度教育部「U-start創新創業計畫」第一階段補助']
      },
      {
        date: '2022/07',
        content: ['成立「琥白股份有限公司」']
      },
      {
        date: '2022/08',
        content: [
          '與「スズキ株式会社（Suzuki）」、「株式会社エムスクエア・ラボ（m2labo）」合作，共同開發MobileMover'
        ]
      },
      {
        date: '2023/03',
        content: ['與「株式会社CuboRex」合作，取得產品代理權']
      }
    ]
  },
  work: {
    project_types: {
      all: '全部',
      planning: '企劃發想與數位行銷',
      system: '系統設計 / 開發與維運',
      trading: '國內 / 國際貿易服務',
      product: '產品設計與量產開發',
      design: '品牌形象與視覺設計'
    },
    vegibus: {
      name: '產銷系統設計｜日本農產電商物流系統',
      detail: {
        tags: ['#系統開發', '#前端開發', '#網站介面設計'],
        paragraph:
          '與農產經銷日商 Vegibus 合作，致力於推廣農產品地產地銷的供應永續，為既有概念「蔬菜巴士」開發專屬資訊系統，一站整合產地供應、配送貨態、消費訂單與金流資訊，協助實現物流端自多站農家取貨、集運、沿線配送到府之複雜流程。落地營運的 Vegibus 蔬菜巴士，成功建立日本靜岡縣、茨城縣、千葉縣、大阪府等縣的在地農產物流網，讓消費者享受到低碳足跡、高新鮮度的蔬果，並建立友善永續的在地食農關係。'
      }
    },
    mobile_mover: {
      name: '機電整合開發｜自主移動機器人控制平台',
      detail: {
        tags: ['#嵌入式系統開發', '#前端開發', '#網站介面設計'],
        paragraph:
          '因應農村高齡化勞動力短缺、農業精緻化管理繁瑣等情境，提出農用自走車 —— Mobile Mover，以智慧農機作為未來解方，配合作物管理週期，實現壓草、除草、投藥、收成搬運等全功能農務支援。農用機電整合技術同時考量農場地域模型建構、地圖路徑分析、便利易用的掌上操作系統，並設計以銀髮農戶為對象適應系統的轉型服務流，為農場主減輕經營負擔。',
        description: {
          desc_1: `Mobile Mover App 可為農機設定任務排程、路線、執行內容，並於執行中即時監控載具的工作情況`,
          desc_2: `考量田間操作情境，Mobile Mover 首重移動裝置 App 開發，以平板控制並以虛擬搖桿以靈活操作`,
          desc_3: `針對載具的執行路線、狀態、電量、速度、位置回報，即時監控載具，使用者可依照不同任務需求設定、編輯與儲存路徑，建立標準化工作內容。App 可管理多張地圖的多條路徑，簡明化田間管理工作內容，並透過綁定、置換使 Mobile Mover 彈性規劃任務路徑`
        }
      }
    },
    woodworking_book: {
      name: '書籍與裝幀｜木工藝工具書',
      detail: {
        tags: ['#裝幀設計', '#視覺設計', '#插畫設計'],
        paragraph:
          "與國立台灣工藝研究發展中心合作，實地採集影像、口述，細緻保存匠人50年技藝精華以傳承後勁，並執行編印出版，完成上架國家書店納入政府出版品。國家書店政府出版品連結：<a style='color: hsla(38, 76%, 60%, 1);text-decoration: none;' href='https://www.govbooks.com.tw/books/137952' target='_blank'>https://www.govbooks.com.tw/books/137952</a>"
      }
    },
    mu_maison: {
      name: '傢俱設計｜慕廂－優雅收移的實木家具',
      detail: {
        tags: ['#家具設計', '#產品設計'],
        paragraph:
          '回應當代對室內工作空間靈活、共享等流動性訴求，慕廂收束實木家具的量體，以逐一靠攏的動作取代拆裝，輕鬆的收合桌、椅與邊櫃，並實現優雅不費力的平面推移。',
        description: {
          desc_1: `三步驟展開使用不需工具組合`,
          desc_2: `考量工法精選木料，梣木堅韌負以彎曲結構，松木輕軟使桌面細膩合用。牛皮桌面，回應辦公長時間操作鍵鼠、執筆書寫時置腕處的絕對舒適，並輕柔回饋筆觸。`,
          desc_3: `將桌面折合、座椅靠攏，不需拆裝即可收納三件傢俱組合。收束實木傢俱的量體，空間轉換時實現優雅推移，定位再輕巧展開，旋即重啟生產力。`
        }
      }
    },
    leek_kimchi: {
      name: '日本高級超市 韭菜泡菜包裝設計',
      detail: {
        tags: ['#包裝設計', '#視覺設計'],
        paragraph:
          '輔導農家運用地產優勢研製韭菜泡菜特產，並協助設計包裝利供銷，增加農產加工增值的效益。'
      }
    },
    hiroshima_station: {
      name: '商空與展櫃｜廣島三原車站無人商店',
      detail: {
        tags: ['#空間設計', '#視覺設計'],
        paragraph:
          '於西日本JR地方車站建置無人商店，自陳設、空間、至店內視覺經一致性統籌規劃，兼具舒適感及實用的平衡，達到自在便利的購物體驗。'
      }
    },
    takahata_business_card: {
      name: '高畠市役場名片設計',
      detail: {
        tags: ['#名片設計', '#視覺設計'],
        paragraph:
          '為日本高畠市地區公所設計機關公務名片。LOGO結合市內之國家有形文化資產「舊高畠車站」，背面雅緻紋理則取自特色礦產「高畠石」。圍繞地方風情的細節增強基層機關與在地的連結，也使初見面的交換名片富饒更多驚喜話題。*畠：音田'
      }
    },
    m2labo_business_card: {
      name: '視覺與包裝｜M2Labo名片設計',
      detail: {
        tags: ['#名片設計', '#視覺設計'],
        paragraph:
          '與日本公司「エムスクエア・ラボ」合作，火紅的朝陽和夕陽也代表著日本的國旗，兩面圖像象徵企業日出而作，日落不息之精進精神。'
      }
    },
    pineapples: {
      name: '日本外銷｜出口屏東台農金鑽鳳梨',
      detail: {
        tags: ['#國際貿易', '#外銷服務'],
        paragraph:
          '協助屏東縣綠地農特產品生產合作社與農產經銷日商Vegibus對接合作，出口台農17號金鑽鳳梨，直送日本當地大型超市Kasumiカスミ。此為民間推動之農產外銷革新，由農家直送終端消費者，大幅提升產品新鮮度與價格競爭力，縮短外銷途徑提升農民收益，也讓日本民眾享用更新鮮、更便宜的台灣鳳梨。'
      }
    },
    lathe_machine_workshop: {
      name: '活動紀錄｜車床技術轉譯研究工作坊',
      detail: {
        tags: ['#活動紀錄', '#影片剪輯', '#腳本企劃'],
        paragraph:
          "與國立台灣工藝研究發展中心合作，實地採集影像、口述，細緻保存匠人50年技藝精華以傳承後勁，執行影片剪輯、影像紀錄，並於活動結束當日上映，作為活動結尾。車床活動紀錄連結：<a style='color: hsla(38, 76%, 60%, 1);text-decoration: none;' href='https://youtu.be/fygtvFBfvxU' target='_blank'>https://youtu.be/fygtvFBfvxU</a>"
      }
    }
  },
  services: {
    system: {
      name: '系統設計 / 開發與維運',
      slogan: ['客製資訊系統導入產業', '協助趨勢洞察建立遠見'],
      description:
        '以 SaaS （Software as a Service）軟體服務出發，提供產業系統客製、跨系統整合服務，並有終端設備串接與開發專業，協助收集數據幫助決策，優化流程提升供銷效能。',
      content: [
        {
          title: '系統開發',
          services: [
            {
              subtitle: '前端開發',
              items: ['前端框架開發', '前端互動設計', 'RWD 響應式網站', '漸進式網站應用程式 (PWA)']
            },
            {
              subtitle: '後端開發',
              items: ['資料庫設計與規劃', 'API 開發 / 第三方 API 串接', '雲端整合部署', 'CI / CD']
            }
          ]
        },
        {
          title: '資料分析',
          services: [
            {
              subtitle: '商業資料探勘',
              items: ['商業數據分析與可視化', 'BI 工具導入', '資料收集、轉移與載入自動化']
            }
          ]
        },
        {
          title: '設備開發',
          services: [
            {
              subtitle: '嵌入式系統開發',
              items: ['物聯網裝置整合開發']
            }
          ]
        }
      ],
      works_example: ['產銷系統設計｜日本農產電商物流系統', '機電整合開發｜自主移動機器人控制平台']
    },
    trading: {
      name: '國內 / 國際貿易服務',
      slogan: ['發現台灣在地美味食力', '打造全新面貌走向國際'],
      description:
        '專營台、日農產與食品雙向供銷，以及農用機具代理進出口，致力於發揚台灣好食與精工。具備專業的中、英、日語窗口，提供選品諮詢與外銷代辦，並有依目標地區消費習慣的品牌包裝再造服務，幫助MIT產品走向世界。',
      content: [
        {
          title: '進出口貿易',
          services: [
            {
              subtitle: '進出口單一窗口服務',
              items: [
                '進出口選品諮詢',
                '市場風向探勘',
                '行銷企劃與代操',
                '中／英／日三語言窗口',
                '異國品牌包裝Redesign'
              ]
            }
          ]
        }
      ],
      works_example: ['日本外銷｜出口屏東台農金鑽鳳梨']
    },
    product: {
      name: '產品設計與量產開發',
      slogan: ['剖析未被留心的不便利', '用美學將痛點優雅轉譯'],
      description:
        '深究物件與人的夥伴關係，刻畫機能、型態與互動上的優質體驗以細膩的設計雕琢產品，回應使用者對生活的期待。',
      content: [
        {
          title: '產品研發',
          services: [
            {
              subtitle: '研發與設計服務',
              items: [
                '問題研究',
                '概念提案',
                '參與式設計過程',
                '產品外觀設計',
                '3D模型建構',
                '模型製作'
              ]
            }
          ]
        }
      ],
      works_example: ['傢俱設計｜慕廂－優雅收移的實木家具']
    },
    design: {
      name: '品牌形象與視覺設計',
      slogan: ['直指人心的視覺傳達', '昇華品牌與客戶的關係'],
      description:
        '一頁書、一件包裝、一套專業完整的品牌形象，由量身定制的設計精準傳達願景，讓您的客戶體驗品牌無微不至的用心，加深信任您的服務與產品。',
      content: [
        {
          title: '商業設計',
          services: [
            {
              subtitle: '視覺設計',
              items: ['品牌形象設計', '裝幀設計', '平面設計', '包裝設計', '網站介面設計']
            }
          ]
        }
      ],
      works_example: ['日本高級超市 韭菜泡菜包裝設計', '視覺與包裝｜M2Labo名片設計']
    },
    planning: {
      name: '企劃發想與活動策劃',
      slogan: ['羽量團隊效能無限', '超高動能協助靈活策展'],
      description:
        '設計起家的創意人才加上打破框架的企業文化，為您的企劃提供意想不到的創新解方，熟悉外部團隊協作，與您迅速對接需求，自課程設計到會展活動，皆能提供專業的執行統籌。',
      content: [
        {
          title: '企劃活動',
          services: [
            {
              subtitle: '活動策劃服務',
              items: [
                '課程、活動、展覽題材開發',
                '內容企劃',
                '執行統籌',
                '現場主持與場務',
                '活動視覺及媒體代操'
              ]
            }
          ]
        }
      ],
      works_example: ['活動紀錄｜車床技術轉譯研究工作坊']
    }
  },
  member: {
    charles: {
      name: '凱元 Charles',
      position: '執行長',
      description: '水瓶座邏輯',
      skills: ['食農供應鏈', '人機互動', '國際企劃', '系統設計'],
      intro: ``
    },
    hannah: {
      name: '詩涵 Hannah',
      position: '全端工程師',
      description: '把你的問題變成驚喜',
      skills: ['Web-Based 系統架構設計', '專案管理與品質控管', '數據分析與可視化'],
      intro: ``
    },
    arthur: {
      name: '柏維 Arthur',
      position: '全端工程師',
      description: '文科與理組雙作業系統',
      skills: ['API建構與設計', '軟硬體整合開發', '機器人作業系統'],
      intro: ``
    },
    albert: {
      name: '書彥 Albert',
      position: '全端工程師',
      description: '獨角獸愛好者',
      skills: ['伺服器配置', '網站效能優化', '資料庫設計', '資訊安全', 'AI導入'],
      intro: ``
    },
    lily: {
      name: '子涵 Lily',
      position: '硬體工程師',
      description: '我不是在打球就是在打Code',
      skills: ['嵌入式系統開發', '硬體架構設計', '硬體環境相容性評估'],
      intro: ``
    },
    jozie: {
      name: '趯瑾 Jozie',
      position: '前端工程師',
      description: '獨立音樂探勘者',
      skills: ['前端框架開發', '網站模板建置與客製化', '可視化與互動設計', 'SEO優化'],
      intro: ``
    },
    arien: {
      name: '采蘋 Arien',
      position: '商業設計師',
      description: '設計永動機',
      skills: ['使用者研究', '網站整體規劃', '網站介面設計', '品牌形象', '平面設計'],
      intro: ``
    },
    ivy: {
      name: '逸青 Ivy',
      position: '商業設計師',
      description: '咖啡杯底 靈感在這裡！',
      skills: ['品牌形象', '參與式設計', '跨域企劃發想與共構', '平面設計', '圖像與插畫設計'],
      intro: ``
    },
    lishin: {
      name: '立心 Lishin',
      position: '產品設計師',
      description: '最終確定版.final.final.final.3dm',
      skills: ['產品設計', '3D建模渲染', '模型製作', 'Rhinoceros 3D', 'KeyShot'],
      intro: ``
    },
    brooke: {
      name: '采倫 Brooke',
      position: '內容企劃師',
      description: '想做南極的設計',
      skills: ['服務設計', '資料規劃', '內容企劃', '活動執行'],
      intro: ``
    },
    andrew: {
      name: '俊宇 Andrew',
      position: '軟體工程師',
      description: '用科技發想實現設計巧思！',
      skills: ['人機互動', '空間運算', '電腦圖學', '產品設計'],
      intro: ``
    },
    ti: {
      name: '彩緹 Ti',
      position: '商務開發',
      description: '奇怪可愛也認真專業',
      skills: ['提案與簡報', '陌生開發', '跨域合作規劃與執行', '產品解說介紹'],
      intro: ``
    }
  },
  contact: {
    introduction: {
      title: `歡迎與琥白分享你的天馬行空，
            我們將為您從微小的點子打造亮眼解方！`,
      description: `來信說明您的產業需求與價值願景，
            我們會儘速與您聯繫！`
    },
    form: {
      project_type: '專案類型',
      project_types: {
        planning: '企劃發想與數位行銷',
        system: '系統設計 / 開發與維運',
        trading: '國內 / 國際貿易服務',
        product: '產品設計與量產開發',
        design: '品牌形象與視覺設計'
      },
      budget: '預算',
      estimated_project_time: '預估專案時間',
      project_content_overview: '專案內容概述',
      contact_person: '聯絡人',
      company_brand_name: '公司 / 品牌名稱',
      contact_number: '聯絡電話',
      contact_email: '聯絡信箱',
      validation: {
        required: '此處不可為空白',
        mail_format: '請輸入正確的信箱格式'
      }
    },
    popup: {
      confirm_submit: '確認送出',
      submit_form_confirmation: '確定要送出表單嗎？',
      thank_you: '謝謝您！',
      form_confirmation_message: '我們已收到您的回覆，並將確認信寄送到您填寫的聯絡信箱。'
    }
  }
}
export default locale
