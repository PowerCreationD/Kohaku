const locale = {
    global: {
        buttons: {
            next: "次へ",
            prev: "前へ",
            back: "戻る",
            close: "閉じる",
            submit_form: "送信する"
        }
    },
    about: {
        description: {
            introduction: `琥白（コハク）の物語は、2021と2022の間に、分野横断の若者達から始まりました
            故郷に期待を持っているこそ、台湾で根を下ろした
            社会に希望を持っているこそ、基盤産業に力を注いでいる`,

            mission_values: `文化の美しいところを広める以外に
            イノベーションを産業に打ち込んで
            情報工学とデザインの力で地域と国際を繋げていく

            事業計画からマーケティング
            デザインから開発
            産地から世界
            伝統から革新

            分野横断な思考を基点として
            サプライチェーンの点と点を繋げていく
            様々な分野でイノベーションを起こす
            風立ちぬ`,
        },

        brand: {
            name: '琥白 Kohaku',
            meaning: `琥珀（コハク）は、天然樹脂の化石であり、宝石である。すべての生命をやさしく包み込めて、輝かしいタイムカプセルになっていく

            白は、余白の美を導く白であり、余韻を感じられるように、私たちのデザインで道を開く`,
        },

        milestone: [
            {
                date: '2021/09',
                content: [
                    '「株式会社エムスクエア・ラボ（m2labo）」、「株式会社やさいバス（Vegibus）」とコラボし',
                    '「創次方股份有限公司」を創設'
                ]
            },
            {
                date: '2022/04',
                content: ['111年文部科學省「U-start創新創業計畫」により第一段階事業補助金受賞']
            },
            {
                date: '2022/07',
                content: ['「琥白股份有限公司」を創設']
            },
            {
                date: '2022/08',
                content: [
                    '「スズキ株式会社（Suzuki）」、「株式会社エムスクエア・ラボ（m2labo）」とコラボし、MobileMoverを開発'
                ]
            },
            {
                date: '2023/03',
                content: ['「株式会社CuboRex」とコラボし、取引の代理を行う']
            },
            {
                date: '2023/07',
                content: ['「株式会社雨風太陽」と業務連携し、ポケットマルシェのデザインを受託']
            }
        ]
    },
    work: {
        project_types: {
            all: '全て',
            planning: '企画発想とイベント実行',
            system: 'システム設計 / 開発と運用',
            trading: '国際貿易サービス',
            product: 'プロダクトデザイン',
            design: 'グラフィックデザイン',
        },
        vegibus: {
            name: '生産・販売統合システム｜日本農産のBtoB物流サービス',
            detail: {
                tags: ["#システム開発", "#フロントエンド開発", "#ウェブデザイン"],
                paragraph: `農産品流通日本企業「やさいバス（Vegibus）」と連携し、地産地消の持続可能な供給を推進しています。やさいバスシステムでは、生産地の供給、配送状況、注文と支払い情報を一元化し、複雑な物流プロセスにおいて、複数の農家からの商品受け取り、集荷、沿線での配送を効率的に実現しました。
                現在では、日本の静岡県、茨城県、千葉県、大阪府などで地域の農産物流通ネットワークを構築し、消費者が高鮮度な野菜や果物を楽しむことができるだけでなく、地域食品生産に対する友好的で持続可能な関係を築いています。`,
            }
        },
        mobile_mover: {
            name: 'ロボット台車開発｜自動移動ロボットの操作インタフェース',
            detail: {
                tags: ["#組み込みシステム開発", "#フロントエンド開発", "#ウェブデザイン"],
                paragraph: `モバイルムーバー（Mobile Mover）は、屋外作業用のモビリティです。高齢化による農業労働力の急激な減少という地域の課題に対処するため、エムスクエア・ラボとスズキが共同で開発し、操作インタフェースを琥白に依頼しました。
                操作方法は、ジョイスティック式、有線追尾式、リモコン式の3つのパターンがあります。スズキの高度な電動車椅子の走行技術による安定した足回りと高い耐環境性により、荷物の搬送や乗車だけでなく、防除などの農作業にも応用することができます。`,
                description: {
                    desc_1: `!!!`,
                    desc_2: `!!!`,
                    desc_3: `!!!`
                }
            },
        },
        woodworking_book: {
            name: 'ブックデザイン｜木工技術の本',
            detail: {
                tags: ["#ブックデザイン", "#グラフィクデザイン", "#イラストデザイン"],
                paragraph: `国立台湾工芸研究開発センターとコラボし、職人にいる現場を実際に伺い、機械操作の映像や口述の情報を収集しました。そして職人の50年間の技術の粋をこの本にまとめ、政府の出版物として出版しました。
                国家書店政府出版品のリンク：https://www.govbooks.com.tw/books/137952`,
            }
        },
        mu_maison: {
            name: '家具デザイン｜慕廂－優雅で可動性を備えた実木家具',
            detail: {
                tags: ["#家具デザイン", "#プロダクトデザイン"],
                paragraph: "現代の居室やオフィスの柔軟性や共有性に対する要求に応えるために、慕廂は実木家具のコンパクトさに重点を置き、組み立てよりたたむことを重視していました。テーブル、椅子、サイドボードのたたむデザインに通じ、優雅で簡単な移動を実現しました。",
                description: {
                    desc_1: `どんな道具も必要なしに設置できる・3つの簡単なステップ`,
                    desc_2: `慎重に選ばれた高品質な木材を使用して、職人の技術力を合わせ、そしてエルム材の強靭な性質が曲線構造に活かされ、松材の柔らかさが繊細なテーブルトップと調和しています。デスクの革張りの表面は、長時間のキーボード操作、マウスの使用、筆記に対して絶対的な快適さを提供します。`,
                    desc_3: `デスクトップを折りたたみ、座席を近づけ、3つの家具の部品を分解せずにセットとして収納できます。堅木製の家具本体の収納により、空間の優雅な変身、楽な配置、即座の生産性再開が可能です。`
                }
            }
        },
        leek_kimchi: {
            name: 'パッケージデザイン｜ニラキムチ',
            detail: {
                tags: ["#パッケージデザイン", "#グラフィックデザイン"],
                paragraph: "農家の地産地消の利点を活かし、ニラの漬け物特産品の開発を支援し、パッケージデザインを提案しました。これにより、農産物の加工付加価値を向上させることができます。",
            }
        },
        hiroshima_station: {
            name: '商業空間｜広島三原駅の無人八百屋',
            detail: {
                tags: ["#空間デザイン", "#視覚デザイン"],
                paragraph: "JR西日本の地域の駅に設置された無人店舗は、陳列設備、空間、店内の視覚的一貫性を調整し、快適さと実用性のバランスを兼ね備え、自由で便利なショッピング体験を提供しました。",
            }
        },
        takahata_business_card: {
            name: 'グラフィックデザイン｜高畠町役場名刺デザイン',
            detail: {
                tags: ["#名刺デザイン", "#グラフィックデザイン"],
                paragraph: "正面のロゴは市内の国家重要文化財である「旧高畠駅」と結びつき、裏面のエレガントなテクスチャーは特産品である「高畠石」から取り入れました。地域の風情に囲まれた細部のディテールは、基層機関と地域のつながりを強化し、初対面の名刺交換により多くの驚きと話題があるようにデザインしました。",
            }
        },
        m2labo_business_card: {
            name: 'グラフィックデザイン｜M2Labo 名刺デザイン',
            detail: {
                tags: ["#名刺デザイン", "#グラフィックデザイン"],
                paragraph: "鮮やかな朝陽と夕陽は日本の国旗を象徴し、両面のイメージは企業が日の出から始まり、日没まで努力を惜しまない精神を表しています。"
            }
        },
        pineapples: {
            name: '国際貿易｜屏東県の金鑽パイナップルを日本へ輸出',
            detail: {
                tags: ["#国際貿易", "#輸出サービス"],
                paragraph: "台湾屏東県の「緑地農特産品生産協同組合」と農産販売日本物流企業「やさいバス」の連携を図り、台湾パイナップルを一番新鮮な状態で日本の地元スーパーマーケットカスミに直接供給しました。これは民間による農産品の輸出革新であり、農家から直接消費者への配送により、製品の新鮮さと価格競争力が大幅に向上し、輸出経路を短縮によって、農民の収益も増やしました。また、日本の人々も鮮度がより高い、そしてより手頃な価格で台湾パイナップルを楽しむことができます。",
            }
        },
        lathe_machine_workshop: {
            name: 'イベント企画｜木工旋盤技術の研究ワークショップ',
            detail: {
                tags: ["#イベント記録", "#映像編集", "#シナリオプランニング"],
                paragraph: `国立台湾工芸研究開発センターとコラボし、現地で映像や口述の情報を収集し、職人の50年間の技術の精華を記録させていただきました。映像編集や映像記録は、活動終了日に上映され、活動の締めくくりとして使用されていました。
                旋盤のイベント記録のリンクはこちら：https://youtu.be/fygtvFBfvxU`,
            }
        }
    },
    contact: {
        introduction: {
            title: `どんな要望でも大歓迎！
            私たちにお気軽にお問い合わせください。`,
            description: `ご要望やりクエスト等ございましたら、下記フォームにご記入いただき、担当者よりご連絡いたします。`
        },
        form: {
            project_type: 'プロジェクトタイプ',
            project_types: {
                planning: '企画発想とイベント実行',
                system: 'システム設計 / 開発と運用',
                trading: '国際貿易サービス',
                product: 'プロダクトデザイン',
                design: 'グラフィックデザイン',
            },
            budget: '予算',
            estimated_project_time: 'プロジェクト予定期間',
            project_content_overview: '内容説明',
            contact_person: '担当者',
            company_brand_name: '会社名',
            contact_number: '電話番号',
            contact_email: 'メールアドレス',
            validation: {
                required: '入力されていません',
                mail_format: "メールアドレスが正しくありません"
            },
        },
        popup: {
            confirm_submit: "確認送信",
            submit_form_confirmation: "フォームを送信してもよろしいですか？",
            thank_you: "ありがとうございます！",
            form_confirmation_message: "ご返信を受け取りました。入力された連絡先のメールアドレスに確認メールを送信します。"
        }
    }
}
export default locale