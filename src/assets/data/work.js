import mainImage1 from '@/assets/image/work/content/sustainable-agri-mover/0.jpg'
import mainImage2 from '@/assets/image/work/content/tech-agri-workshop/0.jpg'
import mainImage3 from '@/assets/image/work/content/lathe-tech-workshop/0.jpg'
import mainImage4 from '@/assets/image/work/content/digital-craft-platform/0.png'
import mainImage5 from '@/assets/image/work/content/ceatec-agri-week/0.jpg'
import mainImage6 from '@/assets/image/work/content/supermarket-japan-station/0.jpg'
import mainImage7 from '@/assets/image/work/content/pingtung-pineapple-export/0.jpg'
import mainImage8 from '@/assets/image/work/design/mu-maison/0.png'
import mainImage9 from '@/assets/image/work/design/recycled-pottery-furniture/0.jpg'
import mainImage10 from '@/assets/image/work/design/woodworking-craft-tool-guide/0.jpg'
import mainImage11 from '@/assets/image/work/design/power-creation-business-card/0.jpg'
import mainImage12 from '@/assets/image/work/design/japan-gov-business-card/0.jpg'
import mainImage13 from '@/assets/image/work/design/breakfast-nightshop-branding/0.jpg'
import mainImage14 from '@/assets/image/work/design/leek-kimchi-packaging/0.jpg'
import mainImage15 from '@/assets/image/work/system/japan-agri-ecom-logistics/0.jpg'
import mainImage16 from '@/assets/image/work/system/auto-robot-control-platform/0.jpg'
import mainImage17 from '@/assets/image/work/system/koko-bot/0.jpg'
import mainImage18 from '@/assets/image/work/system/koko-scale/0.jpg'
import mainImage19 from '@/assets/image/work/design/kohaku-business-card/0.jpg'

const workItems = [
  {
    id: 1,
    type: 'content',
    project: 'sustainable-agri-mover',
    mainImage: mainImage1,
    name: '永續與循環企劃｜小型農業自走車',
    layoutType: 1,
    content: `與日本汽車企業合作，針對農業勞動力高齡化的議題，提出小型農業自走車的使用者體驗設計，設計過程考慮農業場域的工作多樣性、適用於農夫的簡易直覺操作流程及介面，並評估環境永續的硬體耗材。`,
    keywords: ['體驗設計', '服務設計', '企業形象定位']
  },
  {
    id: 2,
    type: 'content',
    project: 'tech-agri-workshop',
    mainImage: mainImage2,
    name: '課程與活動設計｜ 科技農業技術工作坊',
    layoutType: 2,
    content: `與勞動力發展署南方創客基地合作，鎖定農業場域的應用，規劃暨執行三大主題系列課程「智慧交易」、「智慧管理」、「智慧生產」，整體活動為期一個月，過程引導參與者從設計思考、技術實踐到商業應用的全方位內容，成就軟硬體裝置之整合應用。`,
    keywords: ['課程設計', '活動規劃', '技術指導', '設計思考']
  },
  {
    id: 3,
    type: 'content',
    project: 'lathe-tech-workshop',
    mainImage: mainImage3,
    name: '課程與活動設計｜車床技術轉譯研究工作坊',
    layoutType: 1,
    content: `與台灣工藝研究單位合作，實地採集影像、口述，細緻保存匠人50年技藝精華以傳承後勁，執行影片剪輯、影像紀錄，並於活動結束當日上映，作為活動結尾。車床活動紀錄連結：https://youtu.be/fygtvFBfvxU`,
    keywords: ['活動紀錄', '影片剪輯', '腳本企劃']
  },
  {
    id: 4,
    type: 'content',
    project: 'digital-craft-platform',
    mainImage: mainImage4,
    name: '數位轉型與再造｜工藝學習平台',
    layoutType: 3,
    content: `與台灣工藝研究單位合作，規劃一式具包容性、全面性的工藝學習平台，整合工藝線上線下學習、展會活動及計畫資源，過程考量多重使用者的功能權限及網頁使用流程，使工藝內涵得以被更直覺地傳遞。`,
    keywords: ['服務設計', '流程規劃', '介面設計', '活動規劃']
  },
  {
    id: 5,
    type: 'content',
    project: 'ceatec-agri-week',
    mainImage: mainImage5,
    name: '空間展示設計｜CEATEC＆農業WEEK',
    layoutType: 2,
    content: `於2022年CEATEC及2023年農業WEEK展覽中與日本公司合作進行展場設計，清楚掌握展示目的及深入理解展示商材，並思考如何在情報眾多的展示會場中吸引觀展者的目光，將參展企業及展示商品的價值準確的傳達出去。`,
    keywords: ['空間設計', '展場設計', 'DM設計']
  },
  {
    id: 6,
    type: 'content',
    project: 'supermarket-japan-station',
    mainImage: mainImage6,
    name: '空間展示設計｜超市＆日本新幹線車站',
    layoutType: 4,
    content: `於西日本JR地方車站建置無人商店，自陳設、空間、至店內視覺經一致性統籌規劃，兼具舒適感及實用的平衡，達到自在便利的購物體驗。`,
    keywords: ['空間設計', '視覺設計']
  },
  {
    id: 7,
    type: 'content',
    project: 'pingtung-pineapple-export',
    mainImage: mainImage7,
    name: '農特產品外銷｜屏東台農金鑽鳳梨',
    layoutType: 1,
    content: `協助屏東縣綠地農特產品生產合作社與農產經銷日商 Vegibus 對接合作，出口台農17號金鑽鳳梨，直送日本當地高級超市。此為民間推動之農產外銷革新，由農家直送終端消費者，大幅提升產品新鮮度與價格競爭力，縮短外銷途徑提升農民收益，也讓日本民眾享用更新鮮、更便宜的台灣鳳梨。`,
    keywords: ['國際貿易', '外銷服務']
  },
  {
    id: 8,
    type: 'design',
    project: 'mu-maison',
    mainImage: mainImage8,
    name: '複合媒材與產品設計｜慕廂－優雅收移的實木家具',
    layoutType: 3,
    content: `回應當代對室內工作空間靈活、共享等流動性訴求，慕廂收束實木家具的量體，以逐一靠攏的動作取代拆裝，輕鬆的收合桌、椅與邊櫃，並實現優雅不費力的平面推移。`,
    keywords: ['家具設計', '產品設計']
  },
  {
    id: 9,
    type: 'design',
    project: 'recycled-pottery-furniture',
    mainImage: mainImage9,
    name: '複合媒材與產品設計｜陶廢料再製杯盤＆桌椅組',
    layoutType: 4,
    content: `與台灣工藝研究單位合作，運用循環的陶瓷廢料，發揮不同陶瓷廢料材料配方所獨有的紋理及質地，發展出不需濾紙的咖啡陶瓷濾杯「淳次（Puffer）」、契合手掌的器皿「沉次（Paltain）」以及象徵循環軟實力的桌椅「方角（Posible）」，為循環材料帶來新的面貌。`,
    keywords: ['永續設計', '循環材料', '產品設計', '產品製作']
  },
  {
    id: 10,
    type: 'design',
    project: 'woodworking-craft-tool-guide',
    mainImage: mainImage10,
    name: '商業視覺設計｜木工藝工具書',
    layoutType: 1,
    content: `與台灣工藝研究單位合作，實地採集影像、口述，細緻保存匠人50年技藝精華以傳承後勁，並執行編印出版，完成上架國家書店納入政府出版品。國家書店政府出版品連結：https://www.govbooks.com.tw/books/137952`,
    keywords: ['裝幀設計', '視覺設計', '插畫設計']
  },
  {
    id: 11,
    type: 'design',
    project: 'power-creation-business-card',
    mainImage: mainImage11,
    name: '商業視覺設計｜創次方公司名片設計',
    layoutType: 5,
    content: `與日本公司合作，火紅的朝陽和夕陽也代表著日本的國旗，兩面圖像象徵企業日出而作，日落不息之精進精神。`,
    keywords: ['名片設計', '視覺設計']
  },
  {
    id: 12,
    type: 'design',
    project: 'japan-gov-business-card',
    mainImage: mainImage12,
    name: '商業視覺設計｜日本區公所名片設計',
    layoutType: 5,
    content: `為日本山形縣高畠市地區公所市役場設計機關公務名片。LOGO結合市內之國家有形文化資產「舊高畠車站」，背面雅緻紋理則取自特色礦產「高畠石」。圍繞地方風情的細節增強基層機關與在地的連結，也使初見面的交換名片富饒更多驚喜話題。*畠：音田`,
    keywords: ['名片設計', '視覺設計']
  },
  {
    id: 13,
    type: 'design',
    project: 'breakfast-nightshop-branding',
    mainImage: mainImage13,
    name: '品牌形象識別｜早餐宵夜店平面設計',
    layoutType: 3,
    content: `與高雄在地早餐宵夜店合作，將主題意象「元寶」以及店名中的「妤」，配合整體「飽滿」、「鮮明」的風格，提出「圓飽生財 金魚游泳」的平實設計理念，並發展多種應用排列，貼心考量店內各式需求。`,
    keywords: ['LOGO設計', '菜單設計', '招牌設計', '企業形象定位']
  },
  {
    id: 14,
    type: 'design',
    project: 'leek-kimchi-packaging',
    mainImage: mainImage14,
    name: '品牌形象識別｜韭菜泡菜包裝設計',
    layoutType: 6,
    content: `於日本高級超市販售，過程輔導農家運用地產優勢研製韭菜泡菜特產，並協助設計符合上架標準之包裝，增加農產加工增值的效益。`,
    keywords: ['包裝設計', '視覺設計']
  },
  {
    id: 15,
    type: 'system',
    project: 'japan-agri-ecom-logistics',
    mainImage: mainImage15,
    name: '產銷系統設計｜日本農產電商物流系統',
    layoutType: 3,
    content: `與物流日商合作，致力於推廣農產品地產地銷的供應永續，為既有概念「蔬菜巴士」開發客製化專屬資訊系統，一站整合產地供應、配送貨態、消費訂單與金流資訊，協助實現物流端自多站農家取貨、集運、沿線配送到府之複雜流程。落地營運的 Vegibus 蔬菜巴士，成功建立日本靜岡縣、茨城縣、千葉縣、大阪府等縣的在地農產物流網，讓消費者享受到低碳足跡、高新鮮度的蔬果，並建立友善永續的在地食農關係。`,
    keywords: ['系統開發', '前端開發', '網站介面設計']
  },
  {
    id: 16,
    type: 'system',
    project: 'auto-robot-control-platform',
    mainImage: mainImage16,
    name: '機電平台開發｜自主移動機器人控制平台',
    layoutType: 7,
    content: `因應農村高齡化勞動力短缺、農業精緻化管理繁瑣等情境，以智慧農機作為未來解方，配合作物管理週期，實現壓草、除草、投藥、收成搬運等全功能農務支援。農用機電整合技術同時考量農場地域模型建構、地圖路徑分析、便利易用的掌上操作系統，並設計以銀髮農戶為對象適應系統的轉型服務流，為農場主減輕經營負擔。`,
    keywords: ['嵌入式系統開發', '前端開發', '網站介面設計']
  },
  {
    id: 17,
    type: 'system',
    project: 'koko-bot',
    mainImage: mainImage17,
    name: '快速擷單工具｜KOKO BOT',
    layoutType: 1,
    content: `LINE不只交友通訊維持感情，更是許多生鮮零售商、餐廳的叫貨好幫手，然而日常用LINE的叫貨過程，卻因為無法系統性地統計，徒增雙方手動「訂單整理」、「金額匯結」的工作量。琥白一站式開發的KOKO LINE用三個步驟，省下日常工作的三十分鐘！`,
    keywords: ['工具開發', '介面設計']
  },
  {
    id: 18,
    type: 'system',
    project: 'koko-scale',
    mainImage: mainImage18,
    name: '雲端產銷工具｜KOKO SCALE',
    layoutType: 1,
    content: `傳統市場中的磅秤只能秤出重量、金額，後續還要手動記錄、彙整當天銷售資訊、列印產品標籤，無法清楚掌握當天的銷售紀錄外，在銷售的過程還要逐筆計算銷售總金額。琥白一站式開發的KOKO SCALE用雲端、藍芽整合管理市場中的銷售數據！`,
    keywords: ['工具開發', '介面設計']
  },
  {
    id: 19,
    type: 'design',
    project: 'kohaku-business-card',
    mainImage: mainImage19,
    name: '商業視覺設計｜琥白名片設計',
    layoutType: 5,
    content: `為琥白股份有限公司名片。琥白局部上光的輪廓代表由正方體打磨成圓體的過程，象徵經由琥白專業的打磨過程後，最後將會變成璀璨的琥珀。`,
    keywords: ['名片設計', '視覺設計']
  }
]

export default workItems
