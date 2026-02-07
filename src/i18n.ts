import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "welcome": "Primordial Purity. Intelligent Hydration.",
            "hero": {
                "subTitle": "Premium Deep Ocean Mineral Water",
                "essence1": "The essence of water lies in its depth.\nAnd that depth is felt by your body first.",
                "essence2": "We do not create water;\nwe draw from the primordial depths."
            },
            "nav": { "brandData": "Brand Story", "science": "Science", "clinical": "Clinical Efficacy", "products": "Products", "engineering": "Engineering", "news": "Media Center", "announcement": "Announcement", "contact": "Contact" },
            "footer": { "brandDesc": "Pure Depth. Intelligent Hydration.\n1,032m Deep Ocean Water from the East Sea.", "company": "Company", "legal": "Legal", "followUs": "Follow Us", "rights": "All rights reserved.", "designed": "Designed for Premium Hydration." },
            "cta": { "inquire": "Inquire OEM", "balance": "Balance Your Body", "contact": "Contact Us Now" },
            "science": {
                "purity_depth1": "As the depth increases, nutrient salts are concentrated and man-made pollutants disappear.",
                "purity_depth2": "1,000m deep sea is a depth that domestic sewage and industrial pollutants cannot physically reach.",
                "table": {
                    "depth": "Depth",
                    "classification": "Classification",
                    "organic": "Organic Matter",
                    "micro": "Micro Plastics",
                    "safety": "Safety Grade",
                    "surface": "Surface",
                    "threshold": "Deep Sea Threshold",
                    "purezone": "AETERNO Pure Zone",
                    "high": "High",
                    "low": "Low",
                    "zero": "0.0 mg/L",
                    "detected": "Detected",
                    "risk": "Risk Exist",
                    "notDetected": "Not Detected"
                }
            },
            "news": {
                "title": "Media Center",
                "video": "Video Materials",
                "brochure": "Brochure & PDF",
                "other": "Other Resources",
                "download": "Download"
            },
            "engineering": {
                "title": "Best Marine Technology in Korea",
                "subtitle": "Engineering for Purity",
                "purity": "Water created before the industrial age. Purity cannot be artificial. It is only discovered.",
                "desalination": "AETERNO is produced with precisely controlled hardness through desalination and mineral concentration technology.",
                "intake": {
                    "title": "Ultra-Deep Intake",
                    "desc": "Sourced from 1,032m depth, 17.5km offshore to ensure zero contamination."
                },
                "mineral": {
                    "title": "Mineral Balancing",
                    "desc": "World-class desalination and mineral concentration process."
                },
                "aseptic": {
                    "title": "Aseptic Filling",
                    "desc": "NASA-grade aseptic filling system for absolute safety."
                }
            },
            "brandStory": {
                "philosophyTitle": "\"Water that has traveled for a thousand years.\"",
                "philosophyBody1": "Deep in the East Sea, 1,032 meters below the surface, exists a purity untouched by modern civilization. Aeterno captures this pristine essence, preserved in high pressure and low temperature for centuries.",
                "philosophyBody2": "It is not just water. It is history, science, and the purest form of hydration nature has to offer.",
                "narration1": "When all the waters of the world compromised with pollution, AETERNO entered into deep silence. An abyss 1,032m deep where even light cannot reach. The water aged there for centuries is not just hydration. It is the most primordial life force that awakens your cells.",
                "narration2": "We do not create water; we draw from the primordial depths.",
                "ceoMessage": {
                    "title": "CEO’s Message",
                    "body": "AETERNO is not just water. It is pure depth refined by nature and validated by science.\n\nSourced from ultra-deep ocean waters over 1,000 meters below the surface, AETERNO is born in an environment untouched by modern pollution, naturally aged through time and darkness. We honor this depth and deliver it as the most reliable hydration for everyday life.\n\nGuided by nature, science, and trust, AETERNO will continue to set a new standard for premium hydration.\n\nThank you.",
                    "signature": "CEO of AETERNO, S.H. Lee"
                }
            },
            "efficacy": {
                "hero": {
                    "title": "Scientific Efficacy and Clinical Value of Drinkable Deep Sea Water",
                    "desc": "Deep Sea Water (DSW) is primordial water existing at depths below 200m where sunlight cannot reach. This report analyzes the unique mineral composition of DSW and its scientific mechanisms for human metabolism, cardiovascular health, and fatigue recovery.",
                    "badges": { "temp": "Low Temp (2℃)", "ratio": "Ideal Mg:Ca (3:1)", "purity": "Clean/Pathogen Free" },
                    "abstract": { "title": "Research Abstract", "text": "Recent clinical studies suggest that desalinated DSW intake significantly improves lipid profiles, accelerates lactate decomposition after exercise, and alleviates atopic dermatitis symptoms. The high bioavailability of trace minerals, especially Magnesium (Mg), acts as a key mechanism for these physiological benefits.", "btn": "Explore Data" }
                },
                "minerals": {
                    "subtitle": "Component Analysis",
                    "title": "Unrivaled Mineral Profile",
                    "desc": "Unlike surface water or regular mineral water, DSW is rich in essential minerals like magnesium, calcium, and potassium, with a balance similar to human body fluids for rapid absorption.",
                    "analysis": {
                        "title": "Core Components",
                        "mg": { "title": "Magnesium", "desc": "Enzyme activation, energy metabolism. Overwhelmingly rich in DSW." },
                        "ca": { "title": "Calcium", "desc": "Bone health and muscle contraction regulation." },
                        "k": { "title": "Potassium", "desc": "Blood pressure maintenance and fluid balance." },
                        "insight": { "title": "Insight", "desc": "The Mg:Ca ratio (approx. 3:1) of DSW is known to be optimized for human absorption." }
                    },
                    "chart": { "title": "Main Mineral Content by Source (mg/L)", "all": "View All Comparison", "mg": "Magnesium Focused Analysis", "source": "*Source: Comparative Analysis of Mineral Content in DSW (2021)" },
                    "labels": { "mg": "Magnesium (Mg)", "ca": "Calcium (Ca)", "k": "Potassium (K)", "na": "Sodium (Na)", "dsw": "Deep Sea Water", "surface": "Surface Water", "mineral": "Mineral Water" }
                },
                "clinical": {
                    "subtitle": "Evidence Based",
                    "title": "Clinical Efficacy Dashboard",
                    "desc": "Check out the four major clinical benefits of DSW proven through various clinical trials and animal experiments.",
                    "tabs": {
                        "cardio": { "title": "Cardiovascular", "sub": "BP & Blood Flow" },
                        "metabolic": { "title": "Metabolic", "sub": "Obesity & Diabetes" },
                        "fatigue": { "title": "Fatigue", "sub": "Lactate Removal" },
                        "skin": { "title": "Dermatology", "sub": "Atopy Alleviation" }
                    },
                    "chart": { "title": "Research Data Visualization", "interactive": "Interactive" },
                    "findings": "Key Findings"
                },
                "safety": {
                    "title": "Safety and Production Process",
                    "desc": "Drinkable deep sea water undergoes strict legal standards for intake, desalination, and mineral adjustment. Sodium (NaCl) is removed via Reverse Osmosis (RO) and electrodialysis while beneficial minerals (Mg, Ca, K) are preserved.",
                    "steps": {
                        "intake": { "title": "Intake", "desc": "Sourced from pristine deep sea below 200m" },
                        "desalination": { "title": "Desalination", "desc": "Salt removal and filtration via RO filters" },
                        "modulation": { "title": "Modulation", "desc": "Hardness adjustment and mineral balance optimization" }
                    },
                    "hardness": {
                        "title": "Classification by Hardness",
                        "soft": "Soft Water (0~50)",
                        "moderate": "Moderate (50~150)",
                        "hard": "Hard Water (300~1000+)",
                        "dsw_main": "(*DSW Main Products)",
                        "formula": "*Hardness = (Ca × 2.5) + (Mg × 4.1)"
                    }
                },
                "references": "References"
            }
        }
    },
    ko: {
        translation: {
            "welcome": "태초의 순수한 깊이, 지능적인 수분공급",
            "hero": {
                "subTitle": "Premium Deep Ocean Mineral Water",
                "essence1": "물의 본질은 깊이에 있습니다.\n그리고 그 깊이는, 당신의 몸이 먼저 알아봅니다.",
                "essence2": "우리는 물을 만드는 것이 아니라,\n태고의 깊이를 길어 올립니다."
            },
            "nav": { "brandData": "브랜드 스토리", "science": "과학", "clinical": "과학적 효능", "products": "제품", "engineering": "엔지니어링", "news": "미디어 센터", "announcement": "공지사항", "contact": "문의하기" },
            "footer": { "brandDesc": "순수한 깊이. 지능적인 수분 공급.\n동해 수심 1,032m 초심층수.", "company": "회사", "legal": "법적 고지", "followUs": "소셜 미디어", "rights": "All rights reserved.", "designed": "프리미엄 수분 보충을 위해 설계되었습니다." },
            "cta": { "inquire": "OEM 문의하기", "balance": "Balance Your Body", "contact": "지금 상담하기" },
            "science": {
                "purity_depth1": "수심이 깊어질수록 영양염류는 농축되고, 수심이 깊어질 수록 인위적 오염물질은 사라지며,",
                "purity_depth2": "심해 1,000m는 생활하수, 산업 오염물질이 물리적으로 도달할 수 없는 깊이입니다.",
                "table": {
                    "depth": "Depth (깊이)",
                    "classification": "Classification (구분)",
                    "organic": "Organic Matter (유기물)",
                    "micro": "Micro Plastics (미세플라스틱)",
                    "safety": "Safety Grade (안전 등급)",
                    "surface": "표층수 (Surface)",
                    "threshold": "해양심층수 기준 (Deep Sea Threshold)",
                    "purezone": "AETERNO Pure Zone",
                    "high": "High",
                    "low": "Low",
                    "zero": "0.0 mg/L",
                    "detected": "Detected",
                    "risk": "Risk Exist",
                    "notDetected": "Not Detected"
                }
            },
            "news": {
                "title": "미디어 센터",
                "video": "영상 자료",
                "brochure": "브로셔 및 PDF",
                "other": "기타 자료",
                "download": "다운로드"
            },
            "engineering": {
                "title": "Best Marine Technology in Korea",
                "subtitle": "Engineering for Purity",
                "purity": "산업화 시대 이전 생성된 물. 순수함은 인위적일 수 없습니다. 단지 발견될 뿐입니다.",
                "desalination": "탈염(Desalination) 및 미네랄 농축 기술을 통해 경도(Hardness)를 정밀하게 조절하여 생산합니다.",
                "intake": {
                    "title": "초심층 취수",
                    "desc": "해안에서 17.5km, 수심 1,032m 아래에서 오염 없이 취수합니다."
                },
                "mineral": {
                    "title": "미네랄 컨트롤",
                    "desc": "세계 최고 수준의 탈염 및 미네랄 농축 공정입니다."
                },
                "aseptic": {
                    "title": "무균 충진",
                    "desc": "최첨단 무균 충진(Aseptic Filling) 시스템으로 안전을 보장합니다."
                }
            },
            "brandStory": {
                "philosophyTitle": "\"천 년의 시간이 빚어낸 물\"",
                "philosophyBody1": "동해 수심 1,032m, 현대 문명이 닿지 않은 순수함이 그곳에 있습니다. 에테르노(AETERNO)는 수세기에 걸쳐 고압과 저온 속에서 보존된 태고의 정수를 담아냅니다.",
                "philosophyBody2": "이것은 단순한 물이 아닙니다. 자연이 선사할 수 있는 가장 순수한 형태의 수분이며, 동시에 역사이자 과학입니다.",
                "narration1": "세상의 모든 물이 오염과 타협할 때, 에테르노(AETERNO)는 깊은 침묵 속으로 들어갔습니다. 빛조차 닿지 않는 1,032m의 심연. 그곳에서 수세기의 시간 동안 숙성된 물은 단순한 수분이 아닙니다. 그것은 당신의 세포를 깨우는 가장 원초적인 생명력입니다.",
                "narration2": "우리는 물을 만드는 것이 아니라, 태고의 깊이를 길어 올립니다.",
                "ceoMessage": {
                    "title": "대표이사 인사말",
                    "body": "AETERNO는 단순한 물이 아닌, 자연이 가장 깊은 곳에서 완성한 본질적인 순수함과 과학적 가치를 전합니다.\n\n1,000미터가 넘는 심해에서 오랜 시간 순환하며 숙성된 해양심층수는 오염으로부터 완전히 분리된 환경 속에서 탄생한 자연의 결정체입니다. AETERNO는 이 깊이를 존중하고, 과학으로 검증하여 당신의 일상과 건강에 가장 신뢰할 수 있는 물을 제공합니다.\n\n앞으로도 AETERNO는 자연, 과학, 그리고 신뢰를 기준으로 프리미엄 수분 섭취의 새로운 기준을 만들어가겠습니다.\n\n감사합니다.",
                    "signature": "AETERNO 대표 이상화 드림"
                }
            },
            "efficacy": {
                "hero": {
                    "title": "먹는 해양심층수의 과학적 효능과 임상적 가치",
                    "desc": "해양심층수(Deep Sea Water, DSW)는 태양광이 도달하지 않는 수심 200m 이하의 심해에 존재하는 고유수입니다. 본 리포트는 DSW의 독특한 미네랄 구성과 그것이 인체 대사, 심혈관 건강, 피로 회복에 미치는 과학적 메커니즘을 종합적으로 분석합니다.",
                    "badges": { "temp": "연중 저수온 (2℃)", "ratio": "Mg:Ca 이상적 비율 (3:1)", "purity": "병원균 불검출 (Clean)" },
                    "abstract": { "title": "연구 요약 (Abstract)", "text": "최근 임상 연구들은 탈염된 해양심층수 섭취가 혈중 지질 프로필 개선, 운동 후 젖산 분해 가속화, 그리고 아토피 피부염 증상 완화에 유의미한 효과가 있음을 시사합니다. 특히 마그네슘(Mg)을 비롯한 미량 미네랄의 높은 생체 이용률이 이러한 생리학적 이점의 핵심 기전으로 작용합니다.", "btn": "데이터 탐색 시작" }
                },
                "minerals": {
                    "subtitle": "Component Analysis",
                    "title": "독보적인 미네랄 조성 (Mineral Profile)",
                    "desc": "해양심층수는 표층수나 일반 생수와 달리 마그네슘, 칼슘, 칼륨 등 필수 미네랄이 풍부하며, 체액과 유사한 미네랄 밸런스를 가지고 있어 흡수가 빠릅니다.",
                    "analysis": {
                        "title": "핵심 성분 분석",
                        "mg": { "title": "마그네슘 (Magnesium)", "desc": "효소 활성화, 에너지 대사 관여. DSW에 압도적으로 풍부." },
                        "ca": { "title": "칼슘 (Calcium)", "desc": "뼈 건강 및 근육 수축 조절." },
                        "k": { "title": "칼륨 (Potassium)", "desc": "혈압 유지 및 체내 수분 평형." },
                        "insight": { "title": "Insight", "desc": "해양심층수의 Mg:Ca 비율(약 3:1)은 인체 흡수에 최적화된 비율로 알려져 있습니다." }
                    },
                    "chart": { "title": "수원별 주요 미네랄 함량 비교 (mg/L)", "all": "전체 비교 보기", "mg": "마그네슘 집중 분석", "source": "*출처: Comparative Analysis of Mineral Content in DSW (2021)" },
                    "labels": { "mg": "마그네슘 (Mg)", "ca": "칼슘 (Ca)", "k": "칼륨 (K)", "na": "나트륨 (Na)", "dsw": "해양심층수", "surface": "표층수", "mineral": "일반 생수" }
                },
                "clinical": {
                    "subtitle": "Evidence Based",
                    "title": "임상 효능 대시보드 (Clinical Efficacy)",
                    "desc": "다양한 임상 시험 및 동물 실험을 통해 입증된 해양심층수의 4대 주요 효능을 확인해보세요.",
                    "tabs": {
                        "cardio": { "title": "심혈관 건강", "sub": "혈압 및 혈류 개선" },
                        "metabolic": { "title": "대사 질환", "sub": "비만 및 당뇨 관리" },
                        "fatigue": { "title": "운동/피로", "sub": "젖산 분해 가속" },
                        "skin": { "title": "피부 건강", "sub": "아토피 완화" }
                    },
                    "chart": { "title": "연구 데이터 시각화", "interactive": "Interactive" },
                    "findings": "주요 연구 결과 (Key Findings)"
                },
                "safety": {
                    "title": "안전성 및 생산 공정",
                    "desc": "먹는 해양심층수는 엄격한 법적 기준에 따라 취수, 탈염, 미네랄 조정 과정을 거칩니다. 특히 역삼투압(RO) 및 전기투석 방식을 통해 염분(NaCl)은 제거하고 유익한 미네랄(Mg, Ca, K)은 보존합니다.",
                    "steps": {
                        "intake": { "title": "취수 (Intake)", "desc": "수심 200m 이하 청정 해역에서 취수" },
                        "desalination": { "title": "탈염 및 정제 (Desalination)", "desc": "역삼투압 필터로 염분 제거 및 이물질 여과" },
                        "modulation": { "title": "미네랄 조정 (Modulation)", "desc": "경도 조절 및 미네랄 밸런스 최적화" }
                    },
                    "hardness": {
                        "title": "경도(Hardness)에 따른 분류",
                        "soft": "연수 (Soft Water, 0~50)",
                        "moderate": "중경수 (Moderate, 50~150)",
                        "hard": "경수 (Hard Water, 300~1000+)",
                        "dsw_main": "(*DSW 주력 제품군)",
                        "formula": "*경도 = (칼슘 함량 × 2.5) + (마그네슘 함량 × 4.1)"
                    }
                },
                "references": "참고문헌 (References)"
            }
        }
    },
    ja: {
        translation: {
            "welcome": "太古の純粋な深み、知的な水分補給",
            "hero": {
                "subTitle": "Premium Deep Ocean Mineral Water",
                "essence1": "水の本質はその深さにあります。\nそしてその深さは、あなたの体が最初に感じ取ります。",
                "essence2": "私たちは水を作るのではありません。\n太古の深みを汲み上げているのです。"
            },
            "nav": { "brandData": "ブランドストーリー", "science": "科学", "products": "製品", "engineering": "エンジニアリング", "news": "メディアセンター", "announcement": "お知らせ", "contact": "お問い合わせ" },
            "footer": { "brandDesc": "純粋な深み。インテリジェントな水分補給。\n東海の水深1,032mからの海洋深層水。", "company": "会社", "legal": "法的通知", "followUs": "フォローする", "rights": "All rights reserved.", "designed": "プレミアムな水分補給のために設計されました。" },
            "cta": { "inquire": "OEMのお問い合わせ", "balance": "Balance Your Body", "contact": "今すぐ相談する" },
            "science": {
                "purity_depth1": "水深が深くなるほど栄養塩類は濃縮され、人為的な汚染物質は消えていきます。",
                "purity_depth2": "深海1,000mは、生活排水や産業汚染物質が物理的に到達できない深さです。",
                "table": {
                    "depth": "水深 (Depth)",
                    "classification": "区分 (Classification)",
                    "organic": "有機物 (Organic Matter)",
                    "micro": "マイクロプラスチック (Micro Plastics)",
                    "safety": "安全等級 (Safety Grade)",
                    "surface": "表層水 (Surface)",
                    "threshold": "海洋深層水基準 (Deep Sea Threshold)",
                    "purezone": "AETERNO Pure Zone",
                    "high": "高 (High)",
                    "low": "低 (Low)",
                    "zero": "0.0 mg/L",
                    "detected": "検出 (Detected)",
                    "risk": "リスクあり (Risk Exist)",
                    "notDetected": "不検出 (Not Detected)"
                }
            },
            "news": {
                "title": "メディアセンター",
                "video": "動画資料",
                "brochure": "パンフレット & PDF",
                "other": "その他の資料",
                "download": "ダウンロード"
            },
            "engineering": {
                "title": "Best Marine Technology in Korea",
                "subtitle": "Engineering for Purity",
                "purity": "産業化時代以前に生成された水。純粋さは人為的であり得ません。ただ発見されるのみです。",
                "desalination": "脱塩(Desalination)およびミネラル濃縮技術を通じて硬度(Hardness)を精密に調節して生産されます。",
                "intake": {
                    "title": "超深層取水",
                    "desc": "海岸から17.5km、水深1,032m下から汚染なしに取水します。"
                },
                "mineral": {
                    "title": "ミネラル制御",
                    "desc": "世界最高水準の脱塩およびミネラル濃縮プロセスです。"
                },
                "aseptic": {
                    "title": "無菌充填",
                    "desc": "最先端の無菌充填(Aseptic Filling)システムで安全を保証します。"
                }
            },
            "brandStory": {
                "philosophyTitle": "「千年の時が作り上げた水」",
                "philosophyBody1": "東海の水深1,032m、現代文明が触れることのない純粋さがそこにあります。エテルノ(AETERNO)は、数世紀にわたり高圧と低温の中で保存された太古の精髄を捉えています。",
                "philosophyBody2": "これは単なる水ではありません。歴史であり、科学であり、自然が提供できる最も純粋な水分補給の形です。",
                "narration1": "世界のすべての水が汚染と妥協したとき、エテルノ(AETERNO)は深い沈黙の中へと入っていきました。光さえ届かない1,032mの深淵。そこで何世紀もの間熟成された水は、単なる水分ではありません。それはあなたの細胞を目覚めさせる、最も原始的な生命力です。",
                "narration2": "私たちは水を作るのではありません。太古의 深みを汲み上げているのです。"
            },
            "efficacy": {
                "hero": {
                    "title": "飲む海洋深層水の科学的効能と臨床的価値",
                    "desc": "海洋深層水(Deep Sea Water, DSW)は太陽光が到達しない水深200m以下の深海に存在する固有水です。本レポートはDSWの独特なミネラル構成と、それが人体代謝、心血管の健康、疲労回復に及ぼす科学的メカ니ズムを総合的に分析します。",
                    "badges": { "temp": "年中低水温 (2℃)", "ratio": "Mg:Ca 理想的割合 (3:1)", "purity": "病原菌不検出 (Clean)" },
                    "abstract": { "title": "研究要約 (Abstract)", "text": "最近の臨床研究は、脱塩された海洋深層水の摂取が血中脂質プロファイルの改善、運動後の乳酸分解の加速、そしてアトピー性皮膚炎の症状緩和に有意な効果があることを示唆しています。特にマグネ슘(Mg)をはじめとする微量ミネラルの高い生体利用率が、これらの生理学的利点の核心的なメカニズムとして機能します。", "btn": "データ探索開始" }
                },
                "minerals": {
                    "subtitle": "Component Analysis",
                    "title": "独歩的なミネラル組成 (Mineral Profile)",
                    "desc": "海洋深層水は表層水や一般的なミネラルウォーターとは異なり、マグネシウム、カルシウム、カリウムなどの必須ミネラルが豊富で、体液に近いミネラルバランスを持っているため吸収が速いです。",
                    "analysis": {
                        "title": "核心成分分析",
                        "mg": { "title": "マグネシウム (Magnesium)", "desc": "酵素活性化、エネルギー代謝に関与。DSWに圧倒的に豊富。" },
                        "ca": { "title": "カルシウム (Calcium)", "desc": "骨の健康および筋肉収縮の調節。" },
                        "k": { "title": "カリウム (Potassium)", "desc": "血圧維持および体内の水分平衡。" },
                        "insight": { "title": "Insight", "desc": "海洋深層水のMg:Ca比(約3:1)は、人体への吸収に最適化された比率として知られています。" }
                    },
                    "chart": { "title": "水源別主要ミネラル含有量比較 (mg/L)", "all": "全体比較を表示", "mg": "マグネシウム集中分析", "source": "*出典: Comparative Analysis of Mineral Content in DSW (2021)" },
                    "labels": { "mg": "マグネシウム (Mg)", "ca": "カルシウム (Ca)", "k": "カリウム (K)", "na": "ナトリウム (Na)", "dsw": "海洋深層水", "surface": "表層水", "mineral": "一般の水" }
                },
                "clinical": {
                    "subtitle": "Evidence Based",
                    "title": "臨床効能ダッシュボード (Clinical Efficacy)",
                    "desc": "様々な臨床試験および動物実験を通じて立証された海洋深層水の4大主要効能を確認してください。",
                    "tabs": {
                        "cardio": { "title": "心血管の健康", "sub": "血圧および血流改善" },
                        "metabolic": { "title": "代謝疾患", "sub": "肥満および糖尿病管理" },
                        "fatigue": { "title": "運動/疲労", "sub": "乳酸分解加速" },
                        "skin": { "title": "皮膚の健康", "sub": "アトピー緩和" }
                    },
                    "chart": { "title": "研究データ可視化", "interactive": "Interactive" },
                    "findings": "主要な研究結果 (Key Findings)"
                },
                "safety": {
                    "title": "安全性および生産工程",
                    "desc": "飲む海洋深層水は厳格な法的基準に従い、取水、脱塩、ミネラル調整の工程を経て生産されます。特に逆浸透圧(RO)および電気透析方式を通じて塩分(NaCl)は除去し、有益なミネラル(Mg, Ca, K)は保存します。",
                    "steps": {
                        "intake": { "title": "取水 (Intake)", "desc": "水深200m以下の清浄海域で取水" },
                        "desalination": { "title": "脱塩および精製 (Desalination)", "desc": "逆浸透圧フィルターで塩分除去および異物濾過" },
                        "modulation": { "title": "ミネラル調整 (Modulation)", "desc": "硬度調節およびミネラルバランス最適化" }
                    },
                    "hardness": {
                        "title": "硬度(Hardness)による分類",
                        "soft": "軟水 (Soft Water, 0~50)",
                        "moderate": "中硬水 (Moderate, 50~150)",
                        "hard": "硬水 (Hard Water, 300~1000+)",
                        "dsw_main": "(*DSW主力製品群)",
                        "formula": "*硬度 = (カルシウム含有量 × 2.5) + (マグネシウム含有量 × 4.1)"
                    }
                },
                "references": "参考文献 (References)"
            }
        }
    },
    zh: {
        translation: {
            "welcome": "太古的纯净深度，智能补水",
            "hero": {
                "subTitle": "Premium Deep Ocean Mineral Water",
                "essence1": "水的本质在于深度。\n而那种深度，您的身体会最先感受到。",
                "essence2": "我们不创造水；\n我们汲取太古深处的精华。"
            },
            "nav": { "brandData": "品牌故事", "science": "科学", "products": "产品", "engineering": "工程", "news": "媒体中心", "announcement": "公告", "contact": "联系我们" },
            "footer": { "brandDesc": "纯净深度。智能补水。\n来自东海1,032米深处的海洋深层水。", "company": "公司", "legal": "法律声明", "followUs": "关注我们", "rights": "All rights reserved.", "designed": "专为优质补水设计。" },
            "cta": { "inquire": "OEM咨询", "balance": "Balance Your Body", "contact": "立即咨询" },
            "science": {
                "purity_depth1": "随着深度增加，营养盐富集，人为污染物消失，",
                "purity_depth2": "1,000米深海是生活污水和工业污染物物理上无法到达的深度。",
                "table": {
                    "depth": "深度 (Depth)",
                    "classification": "分类 (Classification)",
                    "organic": "有机物 (Organic Matter)",
                    "micro": "微塑料 (Micro Plastics)",
                    "safety": "安全等级 (Safety Grade)",
                    "surface": "表层水 (0m Surface)",
                    "threshold": "海洋深层水标准 (Deep Sea Threshold)",
                    "purezone": "AETERNO 纯净区 (Pure Zone)",
                    "high": "高 (High)",
                    "low": "低 (Low)",
                    "zero": "0.0 mg/L",
                    "detected": "检出 (Detected)",
                    "risk": "存在风险 (Risk Exist)",
                    "notDetected": "未检出 (Not Detected)"
                }
            },
            "news": {
                "title": "媒体中心",
                "video": "视频资料",
                "brochure": "手册与 PDF",
                "other": "其他资源",
                "download": "下载"
            },
            "engineering": {
                "title": "Best Marine Technology in Korea",
                "subtitle": "Engineering for Purity",
                "purity": "工业化时代之前生成的水。纯净无法人造，只能被发现。",
                "desalination": "通过脱盐和矿物质浓缩技术精确控制硬度进行生产。",
                "intake": {
                    "title": "超深取水",
                    "desc": "离岸17.5公里，从1,032米深处无污染取水。"
                },
                "mineral": {
                    "title": "矿物质控制",
                    "desc": "世界顶级的脱盐和矿物质浓缩工艺。"
                },
                "aseptic": {
                    "title": "无菌灌装",
                    "desc": "最先进的无菌灌装（Aseptic Filling）系统确保安全。"
                }
            },
            "brandStory": {
                "philosophyTitle": "“历经千年的水”",
                "philosophyBody1": "在东海1,032米深处，存在着现代文明未曾触及的纯净。AETERNO捕捉这种深藏数世纪的太古精华，这种精华在数世纪的高压和低温下得以保存。",
                "philosophyBody2": "它不仅仅是水。它是历史，是科学，是自然所能提供的最纯净的补水方式。",
                "narration1": "当世界上所有的水都向污染妥协时，AETERNO进入了深深的沉黙。在光线都无法触及的1032米深渊，在那里熟成了数世纪的水不只是水分。它是唤醒你细胞的最原始生命力。",
                "narration2": "我们不创造水；我们汲取太古深处的精华。"
            },
            "efficacy": {
                "hero": {
                    "title": "饮用海洋深层水的科学功效与临床价值",
                    "desc": "海洋深层水（Deep Sea Water, DSW）是存在于太阳光无法到达的200米以下深海中的特有水资源。本报告综合分析了DSW独特的矿物质成分及其对人体代谢、心血管健康和疲劳恢复的科学机制。",
                    "badges": { "temp": "全年低温 (2℃)", "ratio": "理想 Mg:Ca 比例 (3:1)", "purity": "未检出病原体 (Clean)" },
                    "abstract": { "title": "研究摘要 (Abstract)", "text": "近期临床研究表明，饮用脱盐后的海洋深层水可显著改善血脂水平，加速运动后乳酸的分解，并缓解特应性皮炎症状。特别是以镁（Mg）为首的微量矿物质的高生物利用率，是这些生理益处的核心机制。", "btn": "开始探索数据" }
                },
                "minerals": {
                    "subtitle": "Component Analysis",
                    "title": "独特的矿物质成分 (Mineral Profile)",
                    "desc": "与表层水或普通矿泉水不同，海洋深层水富含镁、钙、钾等必需矿物质，且具有与人体体液相似的矿物质平衡，吸收速度更快。",
                    "analysis": {
                        "title": "核心成分分析",
                        "mg": { "title": "镁 (Magnesium)", "desc": "激活酶，参与能量代谢。DSW中含量极高。" },
                        "ca": { "title": "钙 (Calcium)", "desc": "调节骨骼健康和肌肉收缩。" },
                        "k": { "title": "钾 (Potassium)", "desc": "维持血压和体内水分平衡。" },
                        "insight": { "title": "洞察 (Insight)", "desc": "海洋深层水的 Mg:Ca 比例（约 3:1）被认为是最适合人体吸收的比例。" }
                    },
                    "chart": { "title": "各水源主要矿物质含量比较 (mg/L)", "all": "查看完整对比", "mg": "镁元素集中分析", "source": "*来源: Comparative Analysis of Mineral Content in DSW (2021)" },
                    "labels": { "mg": "镁 (Mg)", "ca": "钙 (Ca)", "k": "钾 (K)", "na": "钠 (Na)", "dsw": "海洋深层水", "surface": "表层水", "mineral": "普通矿泉水" }
                },
                "clinical": {
                    "subtitle": "Evidence Based",
                    "title": "临床功效仪表盘 (Clinical Efficacy)",
                    "desc": "了解通过各种临床试验和动物实验证明的海洋深层水四大核心功效。",
                    "tabs": {
                        "cardio": { "title": "心血管健康", "sub": "改善血压和血流" },
                        "metabolic": { "title": "代谢性疾病", "sub": "肥胖和糖尿病管理" },
                        "fatigue": { "title": "运动/疲劳", "sub": "加速乳酸分解" },
                        "skin": { "title": "皮肤健康", "sub": "缓解特应性皮炎" }
                    },
                    "chart": { "title": "研究数据可视化", "interactive": "交互式" },
                    "findings": "主要研究结果 (Key Findings)"
                },
                "safety": {
                    "title": "安全性及生产工艺",
                    "desc": "饮用海洋深层水需遵循严格的法定标准，经过取水、脱盐、矿物质调整等工序。特别是通过反渗透（RO）和电渗析方式去除盐分（NaCl），同时保留有益的矿物质（Mg, Ca, K）。",
                    "steps": {
                        "intake": { "title": "取水 (Intake)", "desc": "在200米以下清净海域取水" },
                        "desalination": { "title": "脱盐与净化 (Desalination)", "desc": "通过反渗透滤芯去除盐分并过滤杂质" },
                        "modulation": { "title": "矿物质调整 (Modulation)", "desc": "硬度调节和矿物质平衡优化" }
                    },
                    "hardness": {
                        "title": "按硬度 (Hardness) 分类",
                        "soft": "软水 (Soft Water, 0~50)",
                        "moderate": "中硬水 (Moderate, 50~150)",
                        "hard": "硬水 (Hard Water, 300~1000+)",
                        "dsw_main": "(*DSW 主流产品系列)",
                        "formula": "*硬度 = (钙含量 × 2.5) + (镁含量 × 4.1)"
                    }
                },
                "references": "参考文献 (References)"
            }
        }
    },
    id: {
        translation: {
            "welcome": "Kedalaman Murni Purba, Hidrasi Cerdas",
            "hero": {
                "subTitle": "Premium Deep Ocean Mineral Water",
                "essence1": "Hakikat air terletak pada kedalamannya.\nDan kedalaman itu dirasakan oleh tubuh Anda terlebih dahulu.",
                "essence2": "Kami tidak menciptakan air;\nkami menimba dari kedalaman purba."
            },
            "nav": { "brandData": "Kisah Merek", "science": "Sains", "products": "Produk", "engineering": "Teknik", "news": "Pusat Media", "announcement": "Pengumuman", "contact": "Kontak" },
            "footer": { "brandDesc": "Kedalaman Murni. Hidrasi Cerdas.\nAir Laut Dalam 1.032m dari Laut Timur.", "company": "Perusahaan", "legal": "Hukum", "followUs": "Ikuti Kami", "rights": "All rights reserved.", "designed": "Dirancang untuk Hidrasi Premium." },
            "cta": { "inquire": "Pertanyaan OEM", "balance": "Balance Your Body", "contact": "Hubungi Kami Sekarang" },
            "science": {
                "purity_depth1": "Seiring bertambahnya kedalaman, garam nutrisi terkonsentrasi dan polutan buatan manusia menghilang,",
                "purity_depth2": "Laut dalam 1.000m adalah kedalaman yang secara fisik tidak dapat dijangkau oleh limbah domestik dan polutan industri.",
                "table": {
                    "depth": "Kedalaman (Depth)",
                    "classification": "Klasifikasi (Classification)",
                    "organic": "Bahan Organik (Organic Matter)",
                    "micro": "Mikroplastik (Micro Plastics)",
                    "safety": "Tingkat Keamanan (Safety Grade)",
                    "surface": "Permukaan (Surface)",
                    "threshold": "Batas Laut Dalam (Deep Sea Threshold)",
                    "purezone": "Zona Murni AETERNO",
                    "high": "Tinggi (High)",
                    "low": "Rendah (Low)",
                    "zero": "0.0 mg/L",
                    "detected": "Terdeteksi (Detected)",
                    "risk": "Ada Risiko (Risk Exist)",
                    "notDetected": "Tidak Terdeteksi (Not Detected)"
                }
            },
            "news": {
                "title": "Pusat Media",
                "video": "Materi Video",
                "brochure": "Brosur & PDF",
                "other": "Sumber Daya Lainnya",
                "download": "Unduh"
            },
            "engineering": {
                "title": "Best Marine Technology in Korea",
                "subtitle": "Engineering for Purity",
                "purity": "Air yang tercipta sebelum era industrialisasi. Kemurnian tidak bisa dibuat-buat. Itu hanya bisa ditemukan.",
                "desalination": "Dihasilkan dengan kekerasan yang dikontrol secara presisi melalui teknologi desalinasi dan konsentrasi mineral.",
                "intake": {
                    "title": "Pengambilan Sangat Dalam",
                    "desc": "Diambil dari kedalaman 1.032m, 17,5km dari pantai untuk memastikan nol kontaminasi."
                },
                "mineral": {
                    "title": "Penyeimbangan Mineral",
                    "desc": "Proses desalinasi dan konsentrasi mineral kelas dunia."
                },
                "aseptic": {
                    "title": "Pengisian Aseptik",
                    "desc": "Sistem pengisian aseptik (Aseptic Filling) tercanggih untuk keamanan mutlak."
                }
            },
            "brandStory": {
                "philosophyTitle": "\"Air yang telah mengalir selama seribu tahun.\"",
                "philosophyBody1": "Jauh di dalam Laut Timur, 1.032 meter di bawah permukaan, terdapat kemurnian yang tak tersentuh oleh peradaban modern. Aeterno menangkap esensi murni ini, yang preserved dalam tekanan tinggi dan suhu rendah selama berabad-abad.",
                "philosophyBody2": "Ini bukan sekadar air. Ini adalah sejarah, sains, dan bentuk hidrasi paling murni yang ditawarkan alam.",
                "narration1": "Ketika semua air di dunia berkompromi dengan polusi, AETERNO masuk ke dalam keheningan yang dalam. Sebuah jurang sedalam 1.032m yang bahkan cahaya tidak bisa mencapainya. Air yang menua di sana selama berabad-abad bukan sekadar hidrasi. Itu adalah kekuatan hidup paling primordial yang membangunkan sel-sel Anda.",
                "narration2": "Kami tidak menciptakan air; kami menimba dari kedalaman purba."
            },
            "efficacy": {
                "hero": {
                    "title": "Khasiat Ilmiah dan Nilai Klinis Air Laut Dalam yang Dapat Diminum",
                    "desc": "Air Laut Dalam (Deep Sea Water, DSW) adalah air istimewa yang ada di laut dalam dengan kedalaman di bawah 200m di mana cahaya matahari tidak dapat menjangkau. Laporan ini menganalisis secara komprehensif komposisi mineral unik DSW dan mekanisme ilmiahnya bagi metabolisme tubuh manusia, kesehatan kardiovaskular, dan pemulihan kelelahan.",
                    "badges": { "temp": "Suhu Rendah Sepanjang Tahun (2℃)", "ratio": "Rasio Mg:Ca Ideal (3:1)", "purity": "Bebas Patogen (Clean)" },
                    "abstract": { "title": "Ringkasan Penelitian (Abstract)", "text": "Studi klinis terbaru menunjukkan bahwa konsumsi DSW yang telah didesalinasi secara signifikan meningkatkan profil lipid darah, mempercepat penguraian laktat setelah berolahraga, dan meredakan gejala dermatitis atopik. Bioavailabilitas tinggi dari mineral mikro, terutama Magnesium (Mg), menjadi mekanisme kunci bagi manfaat fisiologis ini.", "btn": "Mulai Eksplorasi Data" }
                },
                "minerals": {
                    "subtitle": "Analisis Komponen",
                    "title": "Profil Mineral yang Tak Tertandingi (Mineral Profile)",
                    "desc": "Berbeda dengan air permukaan atau air mineral biasa, DSW kaya akan mineral penting seperti magnesium, kalsium, dan kalium, serta memiliki keseimbangan mineral yang mirip dengan cairan tubuh sehingga cepat diserap.",
                    "analysis": {
                        "title": "Analisis Komponen Utama",
                        "mg": { "title": "Magnesium (Magnesium)", "desc": "Aktivasi enzim, terlibat dalam metabolisme energi. Sangat melimpah di DSW." },
                        "ca": { "title": "Kalsium (Calcium)", "desc": "Kesehatan tulang dan pengaturan kontraksi otot." },
                        "k": { "title": "Kalium (Potassium)", "desc": "Pemeliharaan tekanan darah dan keseimbangan cairan tubuh." },
                        "insight": { "title": "Insight", "desc": "Rasio Mg:Ca (sekitar 3:1) dari air laut dalam dikenal sebagai rasio yang dioptimalkan untuk penyerapan oleh tubuh manusia." }
                    },
                    "chart": { "title": "Perbandingan Kandungan Mineral Utama Berdasarkan Sumber (mg/L)", "all": "Lihat Semua Perbandingan", "mg": "Analisis Fokus Magnesium", "source": "*Sumber: Analisis Komparatif Kandungan Mineral dalam DSW (2021)" },
                    "labels": { "mg": "Magnesium (Mg)", "ca": "Kalsium (Ca)", "k": "Kalium (K)", "na": "Natrium (Na)", "dsw": "Air Laut Dalam", "surface": "Air Permukaan", "mineral": "Air Mineral Biasa" }
                },
                "clinical": {
                    "subtitle": "Evidence Based",
                    "title": "Dashboard Khasiat Klinis (Clinical Efficacy)",
                    "desc": "Lihat empat khasiat utama air laut dalam yang telah dibuktikan melalui berbagai uji klinis dan eksperimen hewan.",
                    "tabs": {
                        "cardio": { "title": "Kesehatan Jantung", "sub": "Peningkatan TD & Aliran Darah" },
                        "metabolic": { "title": "Penyakit Metabolik", "sub": "Manajemen Obesitas & Diabetes" },
                        "fatigue": { "title": "Olahraga/Kelelahan", "sub": "Akselerasi Penguraian Laktat" },
                        "skin": { "title": "Kesehatan Kulit", "sub": "Meredakan Atopi" }
                    },
                    "chart": { "title": "Visualisasi Data Penelitian", "interactive": "Interaktif" },
                    "findings": "Temuan Kunci (Key Findings)"
                },
                "safety": {
                    "title": "Keamanan dan Proses Produksi",
                    "desc": "Air laut dalam yang dapat diminum melewati proses pengambilan, desalinasi, dan penyesuaian mineral sesuai dengan standar hukum yang ketat. Khususnya, kadar garam (NaCl) dihilangkan melalui metode Reverse Osmosis (RO) dan elektrodialisis sementara mineral bermanfaat (Mg, Ca, K) tetap dipertahankan.",
                    "steps": {
                        "intake": { "title": "Pengambilan (Intake)", "desc": "Pengambilan air di wilayah laut bersih di bawah kedalaman 200m" },
                        "desalination": { "title": "Desalinasi & Pemurnian (Desalination)", "desc": "Penghilangan garam dan filtrasi zat asing melalui filter RO" },
                        "modulation": { "title": "Penyesuaian Mineral (Modulation)", "desc": "Penyesuaian kesadahan dan optimalisasi keseimbangan mineral" }
                    },
                    "hardness": {
                        "title": "Klasifikasi Berdasarkan Kesadahan (Hardness)",
                        "soft": "Air Lunak (Soft Water, 0~50)",
                        "moderate": "Kesadahan Sedang (Moderate, 50~150)",
                        "hard": "Air Sadah (Hard Water, 300~1000+)",
                        "dsw_main": "(*Lini Produk Utama DSW)",
                        "formula": "*Kesadahan = (Kandungan Kalsium × 2.5) + (Kandungan Magnesium × 4.1)"
                    }
                },
                "references": "Referensi (References)"
            }
        }
    },
    ar: {
        translation: {
            "welcome": "نقاء أزلي، ترطيب ذكي",
            "hero": {
                "subTitle": "Premium Deep Ocean Mineral Water",
                "essence1": "جوهر الماء يكمن في عمقه.\nوهذا العمق يشعر به جسدك أولاً.",
                "essence2": "نحن لا نصنع الماء؛\nبل نستخلصه من الأعماق الأزلية."
            },
            "nav": { "brandData": "قصة العلامة التجارية", "science": "علم", "products": "منتجات", "engineering": "هندسة", "news": "المركز الإعلامي", "announcement": "إعلان", "contact": "اتصل بنا" },
            "footer": { "brandDesc": "عمق نقي. ترطيب ذكي.\nمياه المحيط العميقة من عمق 1,032 متر في البحر الشرقي.", "company": "شركة", "legal": "قانوني", "followUs": "تابعنا", "rights": "All rights reserved.", "designed": "صمم للترطيب الممتاز." },
            "cta": { "inquire": "استفسار OEM", "balance": "Balance Your Body", "contact": "اتصل بنا الآن" },
            "science": {
                "purity_depth1": "مع زيادة العمق تتركز الأملاح المغذية وتختفي الملوثات البشرية،",
                "purity_depth2": "عمق 1,000 متر في البحر هو عمق لا يمكن لمياه الصرف الصحي والملوثات الصناعية الوصول إليه فيزيائياً.",
                "table": {
                    "depth": "العمق (Depth)",
                    "classification": "التصنيف (Classification)",
                    "organic": "المادة العضوية (Organic Matter)",
                    "micro": "البلاستيك الدقيق (Micro Plastics)",
                    "safety": "درجة الأمان (Safety Grade)",
                    "surface": "السطح (Surface)",
                    "threshold": "حد البحر العميق (Deep Sea Threshold)",
                    "purezone": "منطقة AETERNO النقية",
                    "high": "عالي (High)",
                    "low": "منخفض (Low)",
                    "zero": "0.0 ملغ/لتر",
                    "detected": "مكتشف (Detected)",
                    "risk": "خطر موجود (Risk Exist)",
                    "notDetected": "غير مكتشف (Not Detected)"
                }
            },
            "news": {
                "title": "المركز الإعلامي",
                "video": "مواد الفيديو",
                "brochure": "كتيبات و PDF",
                "other": "موارد أخرى",
                "download": "تحميل"
            },
            "engineering": {
                "title": "Best Marine Technology in Korea",
                "subtitle": "Engineering for Purity",
                "purity": "الماء الذي خلق قبل العصر الصناعي. النقاء لا يمكن تصنيعه، بل يكتشف فقط.",
                "desalination": "يتم إنتاجه بصلابة محكومة بدقة من خلال تقنية تحلية المياه وتركيز المعادن.",
                "intake": {
                    "title": "سحب فائق العمق",
                    "desc": "يتم الحصول عليه من عمق 1032 متراً، على بعد 17.5 كم من الشاطئ لضمان عدم التلوث."
                },
                "mineral": {
                    "title": "توازن المعادن",
                    "desc": "عملية تحلية المياه وتركيز المعادن بمستوى عالمي."
                },
                "aseptic": {
                    "title": "تعبئة معقمة",
                    "desc": "نظام التعبئة المعقمة (Aseptic Filling) الأكثر تقدماً لضمان السلامة المطلقة."
                }
            },
            "brandStory": {
                "philosophyTitle": "\"مياه سافرت لمسافات عبر ألف عام\"",
                "philosophyBody1": "في أعماق البحر الشرقي، على عمق 1,032 متراً تحت السطح، يوجد نقاء لم تمسه الحضارة الحديثة. تلتقي شركة إتيرنو بهذا الجوهر الأصيل، المحفوظ في ضغط عالٍ ودرجة حرارة منخفضة لعدة قرون.",
                "philosophyBody2": "إنها ليست مجرد ماء. إنها تاريخ وعلم، وأنقى شكل من أشكال الترطيب التي تقدمها الطبيعة.",
                "narration1": "عندما تساومت جميع مياه العالم مع التلوث، دخلت AETERNO في صمت عميق. هاوية بعمق 1,032 متراً حيث لا يمكن حتى للضوء أن يصل إليها. الماء الذي تعتق هناك لقرون ليس مجرد ترطيب. إنه قوة الحياة الأكثر أزلية التي توقظ خلاياك.",
                "narration2": "نحن لا نصنع الماء؛ بل نستخلصه من الأعماق الأزلية."
            },
            "efficacy": {
                "hero": {
                    "title": "الفعالية العلمية والقيمة السريرية لمياه أعماق البحار الصالحة للشرب",
                    "desc": "مياه أعماق البحار (DSW) هي مياه فريدة توجد في أعماق المحيط التي تزيد عن 200 متر حيث لا يصل ضوء الشمس. يحلل هذا التقرير بشكل شامل التركيبة المعدنية الفريدة لـ DSW وآلياتها العلمية لاستقلاب جسم الإنسان، وصحة القلب والأوعية الدموية، والتعافي من التعب.",
                    "badges": { "temp": "درجة حرارة منخفضة طوال العام (2℃)", "ratio": "نسبة مثالية Mg:Ca (3:1)", "purity": "خالية من مسببات الأمراض (Clean)" },
                    "abstract": { "title": "ملخص البحث (Abstract)", "text": "تشير الدراسات السريرية الحديثة إلى أن تناول مياه أعماق البحار المحلاة يحسن بشكل كبير مستويات الدهون في الدم، ويسرع تحلل اللاكتات بعد التمرين، ويخفف أعراض التهاب الجلد التأتبي. يعد التوافر البيولوجي العالي للمعادن النادرة، وخاصة المغنيسيوم (Mg)، آلية رئيسية لهذه الفوائد الفسيولوجية.", "btn": "ابدأ استكشاف البيانات" }
                },
                "minerals": {
                    "subtitle": "تحليل المكونات",
                    "title": "تركيبة معدنية لا تضاهى (Mineral Profile)",
                    "desc": "على عكس المياه السطحية أو المياه المعدنية العادية، فإن DSW غنية بالمعادن الأساسية مثل المغنيسيوم والكالسيوم والبوتاسيوم، ولها توازن معدني مشابه لسوائل الجسم مما يجعلها سريعة الامتصاص.",
                    "analysis": {
                        "title": "تحليل المكونات الأساسية",
                        "mg": { "title": "المغنيسيوم (Magnesium)", "desc": "تنشيط الإنزيمات، والمشاركة في استقلاب الطاقة. متوفر بكثرة في DSW." },
                        "ca": { "title": "الكالسيوم (Calcium)", "desc": "صحة العظام وتنظيم انقباض العضلات." },
                        "k": { "title": "البوتاسيوم (Potassium)", "desc": "الحفاظ على ضغط الدم وتوازن السوائل في الجسم." },
                        "insight": { "title": "نظرة متعمقة", "desc": "تُعرف نسبة Mg:Ca (حوالي 3:1) في مياه أعماق البحار بأنها النسبة المثالية للامتصاص في جسم الإنسان." }
                    },
                    "chart": { "title": "مقارنة محتوى المعادن الرئيسي حسب المصدر (ملجم/لتر)", "all": "عرض المقارنة الكاملة", "mg": "تحليل مركز على المغنيسيوم", "source": "*المصدر: التحليل المقارن للمحتوى المعدني في DSW (2021)" },
                    "labels": { "mg": "المغنيسيوم (Mg)", "ca": "الكالسيوم (Ca)", "k": "البوتاسيوم (K)", "na": "الصوديوم (Na)", "dsw": "مياه أعماق البحار", "surface": "المياه السطحية", "mineral": "المياه المعدنية العادية" }
                },
                "clinical": {
                    "subtitle": "مبني على الأدلة",
                    "title": "لوحة بيانات الفعالية السريرية (Clinical Efficacy)",
                    "desc": "تعرف على الفوائد السريرية الأربعة الرئيسية لمياه أعماق البحار والتي تم إثباتها من خلال تجارب سريرية وتجارب حيوانية مختلفة.",
                    "tabs": {
                        "cardio": { "title": "صحة القلب", "sub": "تحسين الضغط وتدفق الدم" },
                        "metabolic": { "title": "الأمراض الأيضية", "sub": "إدارة السمنة والسكري" },
                        "fatigue": { "title": "الرياضة/التعب", "sub": "تسريع تحلل اللاكتات" },
                        "skin": { "title": "صحة البشرة", "sub": "تخفيف أعراض الحساسية" }
                    },
                    "chart": { "title": "تصوير بيانات البحث", "interactive": "تفاعلي" },
                    "findings": "النتائج الرئيسية (Key Findings)"
                },
                "safety": {
                    "title": "الأمان وعملية الإنتاج",
                    "desc": "تخضع مياه أعماق البحار الصالحة للشرب لمعايير قانونية صارمة لعمليات السحب، والتحلية، وضبط المعادن. يتم إزالة الأملاح (NaCl) عبر التناضح العكسي (RO) والديال الكهربائي مع الحفاظ على المعادن المفيدة (Mg, Ca, K).",
                    "steps": {
                        "intake": { "title": "السحب (Intake)", "desc": "السحب من مناطق بحرية نظيفة تحت عمق 200 متر" },
                        "desalination": { "title": "التحلية والتنقية (Desalination)", "desc": "إزالة الأملاح وفلترة الشوائب عبر فلاتر التناضح العكسي" },
                        "modulation": { "title": "ضبط المعادن (Modulation)", "desc": "ضبط العسر وتحسين التوازن المعدني" }
                    },
                    "hardness": {
                        "title": "التصنيف حسب العسر (Hardness)",
                        "soft": "ماء يسر (Soft Water, 0~50)",
                        "moderate": "ماء متوسط العسر (Moderate, 50~150)",
                        "hard": "ماء عسر (Hard Water, 300~1000+)",
                        "dsw_main": "(*مجموعة منتجات DSW الرئيسية)",
                        "formula": "*العسر = (محتوى الكالسيوم × 2.5) + (محتوى المغنيسيوم × 4.1)"
                    }
                },
                "references": "المراجع (References)"
            }
        }
    },
    es: {
        translation: {
            "welcome": "Pureza Primordial, Hidratación Inteligente",
            "hero": {
                "subTitle": "Premium Deep Ocean Mineral Water",
                "essence1": "La esencia del agua reside en su profundidad.\nY esa profundidad la siente tu cuerpo primero.",
                "essence2": "Nosotros no creamos el agua;\nla extraemos de las profundidades primordiales."
            },
            "nav": { "brandData": "Historia de la Marca", "science": "Ciencia", "products": "Productos", "engineering": "Ingeniería", "news": "Centro de Medios", "announcement": "Anuncio", "contact": "Contacto" },
            "footer": { "brandDesc": "Profundidad Pura. Hidratación Inteligente.\nAgua de Mar Profunda de 1,032m del Mar del Este.", "company": "Compañía", "legal": "Legal", "followUs": "Síguenos", "rights": "All rights reserved.", "designed": "Diseñado para una Hidratación Premium." },
            "cta": { "inquire": "Consulta OEM", "balance": "Balance Your Body", "contact": "Contáctanos Ahora" },
            "science": {
                "purity_depth1": "A medida que aumenta la profundidad, las sales nutrientes se concentran y los contaminantes artificiales desaparecen,",
                "purity_depth2": "El mar profundo a 1.000 m es una profundidad a la que las aguas residuales domésticas e industriales no pueden llegar físicamente.",
                "table": {
                    "depth": "Profundidad (Depth)",
                    "classification": "Clasificación (Classification)",
                    "organic": "Materia Orgánica (Organic Matter)",
                    "micro": "Microplásticos (Micro Plastics)",
                    "safety": "Grado de Seguridad (Safety Grade)",
                    "surface": "Superficie (Surface)",
                    "threshold": "Umbral de Mar Profundo",
                    "purezone": "AETERNO Zona Pura",
                    "high": "Alta (High)",
                    "low": "Baja (Low)",
                    "zero": "0.0 mg/L",
                    "detected": "Detectado",
                    "risk": "Existe Riesgo",
                    "notDetected": "No Detectado"
                }
            },
            "news": {
                "title": "Centro de Medios",
                "video": "Materiales de Video",
                "brochure": "Folletos y PDF",
                "other": "Otros Recursos",
                "download": "Descargar"
            },
            "engineering": {
                "title": "Best Marine Technology in Korea",
                "subtitle": "Engineering for Purity",
                "purity": "Agua creada antes de la era industrial. La pureza no puede ser artificial. Solo se descubre.",
                "desalination": "AETERNO se produce con una dureza controlada con precisión mediante tecnología de desalinización y concentración de minerales.",
                "intake": {
                    "title": "Toma Ultra Profunda",
                    "desc": "Extraída de 1.032 m de profundidad, a 17,5 km de la costa para garantizar una contaminación cero."
                },
                "mineral": {
                    "title": "Equilibrio Mineral",
                    "desc": "Proceso de desalinización y concentración de minerales de clase mundial."
                },
                "aseptic": {
                    "title": "Llenado Aséptico",
                    "desc": "Sistema de llenado aséptico (Aseptic Filling) de última generación para una seguridad absoluta."
                }
            },
            "brandStory": {
                "philosophyTitle": "\"Agua que ha viajado durante mil años.\"",
                "philosophyBody1": "En las profundidades del Mar del Este, a 1.032 metros bajo la superficie, existe una pureza no tocada por la civilización moderna. Aeterno captura esta esencia prístina, conservada en alta presión y baja temperatura durante siglos.",
                "philosophyBody2": "No es solo agua. Es historia, ciencia y la forma más pura de hidratación que la naturaleza puede ofrecer.",
                "narration1": "Cuando todas las aguas del mundo se vieron comprometidas por la contaminación, AETERNO entró en un profundo silencio. Un abismo de 1.032m de profundidad al que ni siquiera la luz puede llegar. El agua que ha envejecido allí durante siglos no es solo hidratación. Es la fuerza vital más primordial que despierta tus células.",
                "narration2": "Nosotros no creamos el agua; la extraemos de las profundidades primordiales."
            },
            "efficacy": {
                "hero": {
                    "title": "Eficacia Científica y Valor Clínico del Agua de Mar Profunda Potable",
                    "desc": "El agua de mar profunda (Deep Sea Water, DSW) es un agua única que se encuentra en las profundidades por debajo de los 200 m, donde no llega la luz solar. Este informe analiza de manera integral la composición mineral única de la DSW y sus mecanismos científicos para el metabolismo humano, la salud cardiovascular y la recuperación de la fatiga.",
                    "badges": { "temp": "Baja Temp (2℃) todo el año", "ratio": "Relación Mg:Ca Ideal (3:1)", "purity": "Libre de Patógenos (Clean)" },
                    "abstract": { "title": "Resumen de Investigación (Abstract)", "text": "Estudios clínicos recientes sugieren que la ingesta de DSW desalinizada mejora significativamente los perfiles lipídicos en sangre, acelera la descomposición del lactato después del ejercicio y alivia los síntomas de la dermatitis atópica. La alta biodisponibilidad de los oligoelementos, especialmente el Magnesio (Mg), actúa como un mecanismo clave para estos beneficios fisiológicos.", "btn": "Iniciar Exploración de Datos" }
                },
                "minerals": {
                    "subtitle": "Análisis de Componentes",
                    "title": "Perfil Mineral Inigualable (Mineral Profile)",
                    "desc": "A diferencia del agua superficial o el agua mineral común, la DSW es rica en minerales esenciales como magnesio, calcio y potasio, y posee un equilibrio mineral similar al de los fluidos corporales, lo que permite una absorción rápida.",
                    "analysis": {
                        "title": "Análisis de Componentes Clave",
                        "mg": { "title": "Magnesio (Magnesium)", "desc": "Activación enzimática, participa en el metabolismo energético. Extremadamente abundante en la DSW." },
                        "ca": { "title": "Calcio (Calcium)", "desc": "Salud ósea y regulación de la contracción muscular." },
                        "k": { "title": "Potasio (Potassium)", "desc": "Mantenimiento de la presión arterial y equilibrio hídrico corporal." },
                        "insight": { "title": "Insight", "desc": "La relación Mg:Ca (aprox. 3:1) del agua de mar profunda es conocida por ser la relación optimizada para la absorción en el cuerpo humano." }
                    },
                    "chart": { "title": "Comparación del Contenido Mineral Principal por Fuente (mg/L)", "all": "Ver Comparación Completa", "mg": "Análisis Enfocado en Magnesio", "source": "*Fuente: Análisis comparativo del contenido mineral en DSW (2021)" },
                    "labels": { "mg": "Magnesio (Mg)", "ca": "Calcio (Ca)", "k": "Potasio (K)", "na": "Sodio (Na)", "dsw": "Agua de Mar Profunda", "surface": "Agua Superficial", "mineral": "Agua Mineral Común" }
                },
                "clinical": {
                    "subtitle": "Basado en la Evidencia",
                    "title": "Panel de Eficacia Clínica (Clinical Efficacy)",
                    "desc": "Consulte los cuatro beneficios clínicos principales del agua de mar profunda demostrados a través de diversos ensayos clínicos y experimentos con animales.",
                    "tabs": {
                        "cardio": { "title": "Salud Cardio", "sub": "Mejora de PA y Flujo Sanguíneo" },
                        "metabolic": { "title": "Enf. Metabólicas", "sub": "Gestión de Obesidad y Diabetes" },
                        "fatigue": { "title": "Ejercicio/Fatiga", "sub": "Aceleración de Descomposición de Lactato" },
                        "skin": { "title": "Salud de la Piel", "sub": "Alivio de Atopía" }
                    },
                    "chart": { "title": "Visualización de Datos de Investigación", "interactive": "Interactivo" },
                    "findings": "Hallazgos Clave (Key Findings)"
                },
                "safety": {
                    "title": "Seguridad y Proceso de Producción",
                    "desc": "El agua de mar profunda potable se somete a estrictos estándares legales de toma, desalinización y ajuste de minerales. Específicamente, se elimina la sal (NaCl) mediante ósmosis inversa (RO) y electrodiálisis, mientras que se preservan los minerales beneficiosos (Mg, Ca, K).",
                    "steps": {
                        "intake": { "title": "Toma (Intake)", "desc": "Extracción en áreas marinas limpias por debajo de los 200 m" },
                        "desalination": { "title": "Desalinización (Desalination)", "desc": "Eliminación de sal y filtrado de impurezas mediante filtros de RO" },
                        "modulation": { "title": "Ajuste de Minerales (Modulation)", "desc": "Ajuste de la dureza y optimización del equilibrio mineral" }
                    },
                    "hardness": {
                        "title": "Clasificación según Dureza (Hardness)",
                        "soft": "Agua Blanda (Soft Water, 0~50)",
                        "moderate": "Dureza Moderada (50~150)",
                        "hard": "Agua Dura (Hard Water, 300~1000+)",
                        "dsw_main": "(*Línea de productos principales de DSW)",
                        "formula": "*Dureza = (Contenido de Calcio × 2.5) + (Contenido de Magnesio × 4.1)"
                    }
                },
                "references": "Referencias (References)"
            }
        }
    },
    fr: {
        translation: {
            "welcome": "Pureté Primordiale, Hydratation Intelligente",
            "hero": {
                "subTitle": "Premium Deep Ocean Mineral Water",
                "essence1": "L'essence de l'eau réside dans sa profondeur.\nEt cette profondeur est ressentie par votre corps en premier.",
                "essence2": "Nous ne créons pas l'eau ;\nnous la puisons dans les profondeurs primordiales."
            },
            "nav": { "brandData": "Histoire de la Marque", "science": "Science", "products": "Produits", "engineering": "Ingénierie", "news": "Centre de Médias", "announcement": "Annonce", "contact": "Contact" },
            "footer": { "brandDesc": "Profondeur Pure. Hydratation Intelligente.\nEau de Mer Profonde de 1 032m de la Mer de l'Est.", "company": "Entreprise", "legal": "Légal", "followUs": "Suivez-nous", "rights": "All rights reserved.", "designed": "Conçu pour une Hydratation Premium." },
            "cta": { "inquire": "Demande OEM", "balance": "Balance Your Body", "contact": "Contactez-nous" },
            "science": {
                "purity_depth1": "À mesure que la profondeur augmente, les sels nutritifs se concentrent et les polluants artificiels disparaissent,",
                "purity_depth2": "La mer profonde à 1 000 m est une profondeur que les eaux usées domestiques et les polluants industriels ne peuvent physiquement pas atteindre.",
                "table": {
                    "depth": "Profondeur (Depth)",
                    "classification": "Classification",
                    "organic": "Matière Organique (Organic Matter)",
                    "micro": "Microplastiques (Micro Plastics)",
                    "safety": "Niveau de Sécurité (Safety Grade)",
                    "surface": "Surface",
                    "threshold": "Seuil de Mer Profonde",
                    "purezone": "AETERNO Zone Pure",
                    "high": "Élevé (High)",
                    "low": "Faible (Low)",
                    "zero": "0.0 mg/L",
                    "detected": "Détecté",
                    "risk": "Risque Existant",
                    "notDetected": "Non Détecté"
                }
            },
            "news": {
                "title": "Centre de Médias",
                "video": "Matériels Vidéo",
                "brochure": "Brochures & PDF",
                "other": "Autres Ressources",
                "download": "Télécharger"
            },
            "engineering": {
                "title": "Best Marine Technology in Korea",
                "subtitle": "Engineering for Purity",
                "purity": "Une eau créée avant l'ère industrielle. La pureté ne peut être artificielle. Elle ne peut être que découverte.",
                "desalination": "AETERNO est produit avec une dureté contrôlée avec précision grâce à une technologie de dessalement et de concentration minérale.",
                "intake": {
                    "title": "Prise Ultra-Profonde",
                    "desc": "Puisée à 1 032 m de profondeur, à 17,5 km au large pour garantir une contamination nulle."
                },
                "mineral": {
                    "title": "Équilibrage Minéral",
                    "desc": "Processus de dessalement et de concentration minérale de classe mondiale."
                },
                "aseptic": {
                    "title": "Remplissage Aseptique",
                    "desc": "Système de remplissage aseptique (Aseptic Filling) de pointe pour une sécurité absolue."
                }
            },
            "brandStory": {
                "philosophyTitle": "\"De l'eau qui a voyagé pendant mille ans.\"",
                "philosophyBody1": "Dans les profondeurs de la Mer de l'Est, à 1 032 mètres sous la surface, existe une pureté préservée de la civilisation moderne. Aeterno capture cette essence originelle, préservée par une haute pression et une basse température depuis des siècles.",
                "philosophyBody2": "Ce n'est pas seulement de l'eau. C'est l'histoire, la science et la forme d'hydratation la plus pure que la nature puisse offrir.",
                "narration1": "Quand toutes les eaux du monde ont été compromises par la pollution, AETERNO est entré dans un profond silence. Un abysse de 1 032 m de profondeur où même la lumière ne peut parvenir. L'eau qui y a vieilli pendant des siècles n'est pas qu'une simple hydratation. C'est la force vitale la plus primordiale qui éveille vos cellules.",
                "narration2": "Nous ne créons pas l'eau ; nous la puisons dans les profondeurs primordiales."
            },
            "efficacy": {
                "hero": {
                    "title": "Efficacité Scientifique et Valeur Clinique de l'Eau de Mer Profonde Potable",
                    "desc": "L'eau de mer profonde (Deep Sea Water, DSW) est une eau unique située dans les profondeurs au-delà de 200 m, là où la lumière du soleil ne peut parvenir. Ce rapport analyse de manière exhaustive la composition minérale unique de la DSW et ses mécanismes scientifiques pour le métabolisme humain, la santé cardiovasculaire et la récupération de la fatigue.",
                    "badges": { "temp": "Basse Temp (2℃) toute l'année", "ratio": "Ratio Mg:Ca Idéal (3:1)", "purity": "Sans Pathogènes (Clean)" },
                    "abstract": { "title": "Résumé de Recherche (Abstract)", "text": "Des études cliniques récentes suggèrent que la consommation de DSW dessalée améliore considérablement les profils lipidiques sanguins, accélère la décomposition du lactate après l'exercice et atténue les symptômes de la dermatite atopique. La biodisponibilité élevée des oligo-éléments, en particulier le Magnésium (Mg), constitue un mécanisme clé de ces bienfaits physiologiques.", "btn": "Commencer l'Exploration des Données" }
                },
                "minerals": {
                    "subtitle": "Analyse des Composants",
                    "title": "Profil Minéral Inégalé (Mineral Profile)",
                    "desc": "Contrairement à l'eau de surface ou à l'eau minérale ordinaire, la DSW est riche en minéraux essentiels comme le magnésium, le calcium et le potassium, et possède un équilibre minéral proche des fluides corporels pour une absorption rapide.",
                    "analysis": {
                        "title": "Analyse des Composants Clés",
                        "mg": { "title": "Magnésium (Magnesium)", "desc": "Activation enzymatique, participe au métabolisme énergétique. Extrêmement abondant dans la DSW." },
                        "ca": { "title": "Calcium (Calcium)", "desc": "Santé osseuse et régulation de la contraction musculaire." },
                        "k": { "title": "Potassium (Potassium)", "desc": "Maintien de la pression artérielle et équilibre hydrique corporel." },
                        "insight": { "title": "Insight", "desc": "Le ratio Mg:Ca (environ 3:1) de l'eau de mer profonde est reconnu comme le ratio optimisé pour l'absorption par le corps humain." }
                    },
                    "chart": { "title": "Comparaison de la Teneur en Minéraux Principaux par Source (mg/L)", "all": "Voir Toute la Comparaison", "mg": "Analyse Ciblée sur le Magnésium", "source": "*Source: Analyse comparative de la teneur en minéraux dans la DSW (2021)" },
                    "labels": { "mg": "Magnésium (Mg)", "ca": "Calcium (Ca)", "k": "Potassium (K)", "na": "Sodium (Na)", "dsw": "Eau de Mer Profonde", "surface": "Eau de Surface", "mineral": "Eau Minérale Ordinaire" }
                },
                "clinical": {
                    "subtitle": "Basé sur les Preuves",
                    "title": "Tableau de Bord de l'Efficacité Clinique (Clinical Efficacy)",
                    "desc": "Découvrez les quatre principaux bienfaits cliniques de l'eau de mer profonde prouvés par divers essais cliniques et expériences animales.",
                    "tabs": {
                        "cardio": { "title": "Santé Cardio", "sub": "Amélioration de TA & Flux Sanguin" },
                        "metabolic": { "title": "Mal. Métaboliques", "sub": "Gestion Obésité & Diabète" },
                        "fatigue": { "title": "Exercice/Fatigue", "sub": "Accélération Décomposition Lactate" },
                        "skin": { "title": "Santé de la Peau", "sub": "Atténuation de l'Atopie" }
                    },
                    "chart": { "title": "Visualisation des Données de Recherche", "interactive": "Interactif" },
                    "findings": "Résultats Clés (Key Findings)"
                },
                "safety": {
                    "title": "Sécurité et Processus de Production",
                    "desc": "L'eau de mer profonde potable est soumise à des normes légales strictes de prélèvement, de dessalement et d'ajustement minéral. Le sel (NaCl) est éliminé par osmose inverse (RO) et électrodialyse tandis que les minéraux bénéfiques (Mg, Ca, K) sont préservés.",
                    "steps": {
                        "intake": { "title": "Prélèvement (Intake)", "desc": "Prélèvement dans des zones marines propres sous 200 m de profondeur" },
                        "desalination": { "title": "Dessalement & Purification (Desalination)", "desc": "Élimination du sel et filtration des impuretés via des filtres RO" },
                        "modulation": { "title": "Modulation (Modulation)", "desc": "Ajustement de la dureté et optimisation de l'équilibre minéral" }
                    },
                    "hardness": {
                        "title": "Classification par Dureté (Hardness)",
                        "soft": "Eau Douce (Soft Water, 0~50)",
                        "moderate": "Dureté Modérée (50~150)",
                        "hard": "Eau Dure (Hard Water, 300~1000+)",
                        "dsw_main": "(*Ligne de produits phares DSW)",
                        "formula": "*Dureté = (Teneur en Calcium × 2.5) + (Teneur en Magnésium × 4.1)"
                    }
                },
                "references": "Références (References)"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ko", // Initial fallback, will be overridden by router
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
