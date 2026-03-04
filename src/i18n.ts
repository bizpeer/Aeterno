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
                "title": "1,032m Below",
                "subtitle": "Where Time and Pressure Create Perfection",
                "purity_depth1": "At depths of around 1,032 meters, ocean water exhibits stable temperature conditions, increased mineral presence, and minimal interaction with surface-origin influences.",
                "purity_depth2": "AETERNO captures this naturally occurring mineral profile of Mg(3):Ca(1):K(1) at its source.",
                "hashtags": {
                    "aeterno1032": "#AETERNO1032"
                },
                "stats": {
                    "depth": {
                        "desc": "Sourced approximately 17.5 km offshore at a depth of 1,032 meters, where the water is naturally isolated from typical surface conditions."
                    },
                    "pressure": {
                        "desc": "Shaped by the natural High hydrostatic pressur of the deep sea, maintaining its inherent mineral balance."
                    },
                    "balance": {
                        "desc": "Featuring a naturally occurring mineral profile with a distinctive mineral ratio, sourced from deep ocean waters."
                    }
                },
                "summary": {
                    "title": "AETERNO Deep Ocean Water",
                    "desc": "Collected 17.5 km offshore at a depth of 1,032 meters, featuring a naturally occurring mineral composition with a 3:1:1 ratio of Mg, Ca, and K.",
                    "tagline": "Purely defined by its origin."
                },
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
                    "desc": "The Gold Standard of Deep-Sea Water: World-Leading 17.5km Intake Infrastructure for Pristine Source Integrity."
                },
                "mineral": {
                    "title": "Mineral Balancing",
                    "desc": "World-class desalination and mineral concentration process."
                },
                "aseptic": {
                    "title": "Aseptic Filling",
                    "desc": "The Sanctuary of Purity: An Untouched Filling Process Dedicated to Your Uncompromising Safety."
                }
            },
            "brandStory": {
                "philosophyTitle": "\"Water that has traveled for a thousand years.\"",
                "philosophyBody1": "Sourced 1,032 meters below the surface of the East Sea, Aeterno offers deep sea water protected from modern environmental impact. Preserved by natural high pressure and cold temperatures for centuries, Aeterno delivers a unique mineral profile.",
                "philosophyBody2": "Beyond standard refreshment, this is deep-sea hydration enriched by nature’s ancient mineral profile.",
                "narration1": "In a world of increasing environmental challenges, AETERNO remains in profound silence. Sourced from an abyss 1,032m deep where light cannot reach, this water has been naturally preserved for centuries. It is more than just hydration; it is a pristine gift from the depths, delivering a unique mineral profile to refresh your body.",
                "narration2": "We do not create water; we source it from the Earth's primordial depths.",
                "ceoMessage": {
                    "title": "CEO’s Message",
                    "body": "AETERNO is not just water. It is pure depth refined by nature and validated by science.\n\nSourced from ultra-deep ocean waters over 1,000 meters below the surface, AETERNO is born in an environment untouched by modern pollution, naturally aged through time and darkness. We honor this depth and deliver it as the most reliable hydration for everyday life.\n\nGuided by nature, science, and trust, AETERNO will continue to set a new standard for premium hydration.\n\nThank you.",
                    "signature": "CEO of AETERNO, S.H. Lee"
                }
            },
            "efficacy": {
                "hero": {
                    "title": "Clinical Benefits of <br>Deep Sea Water",
                    "subtitle": "Premium Hydration Science",
                    "desc": "Scientifically validated physiological improvements through mineral-rich water."
                },
                "cards": {
                    "body": {
                        "title": "Body Composition",
                        "desc": "DSW intake significantly reduces body fat percentage and increases muscle mass and Basal Metabolic Rate (BMR).",
                        "label": "Fat Reduction",
                        "stat": "Significant",
                        "source": "Shuya Yuzawa et al., Water, 2024."
                    },
                    "cholesterol": {
                        "title": "Cholesterol Control",
                        "desc": "Proven to lower serum total cholesterol and LDL-C levels while inhibiting lipid peroxidation in hypercholesterolemic subjects.",
                        "source": "Zhao-Yang Fu et al., J Med Food, 2012."
                    },
                    "glucose": {
                        "title": "Glucose Metabolism",
                        "desc": "Magnesium-enriched DSW reduces fasting insulin levels and improves HOMA-IR indices in prediabetic adults.",
                        "source": "Ji Yeon Ham et al., Nutrients, 2020."
                    },
                    "intestine": {
                        "title": "Intestinal Ecosystem",
                        "desc": "94.9% improvement rate in constipation. Boosts beneficial bacteria like Blautia and increases short-chain fatty acids.",
                        "badge": "Constipation Relief: 94.9%",
                        "source": "Hiroaki Takeuchi et al., Nutrients, 2020."
                    },
                    "skin": {
                        "title": "Skin Recovery",
                        "desc": "Restores mineral balance in patients with atopic eczema (AEDS) and reduces allergic inflammation/IgE levels.",
                        "source": "Kimata et al., Acta Medica, 2002."
                    },
                    "exercise": {
                        "title": "Exercise Recovery",
                        "subtitle": "4-Hour Complete Recovery",
                        "desc": "DSW eliminates exercise-induced muscle damage and restores aerobic power within 4 hours, whereas tap water requires 48 hours.",
                        "dsw_label": "DSW",
                        "tap_label": "TAP",
                        "source": "Chien-Wen Hou et al., J Int Soc Sports Nutr, 2013."
                    }
                },
                "footer": {
                    "regulatory": "Regulatory Notice",
                    "fda": "“These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.”",
                    "disclaimer_title": "General Disclaimer",
                    "disclaimer_body": "The information provided by AETERNO is for educational purposes only and is not intended as medical advice, diagnosis, or treatment. While we reference third-party independent research regarding deep sea minerals, these studies are not conducted by the FDA and do not necessarily reflect the clinical efficacy of AETERNO products. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition."
                }
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
                "title": "수심 1,032m 아래",
                "subtitle": "시간과 압력이 만들어낸 완벽함",
                "purity_depth1": "수심 1,032m에서 해양심층수는 안정적인 저온 상태를 유지하며, 농축된 미네랄과 표층수로부터 완전히 격리된 순수성을 보여줍니다.",
                "purity_depth2": "에터노(AETERNO)는 마그네슘(3):칼슘(1):칼륨(1)의 천연 미네랄 밸런스를 취수원 그대로 담아냅니다.",
                "hashtags": {
                    "aeterno1032": "#AETERNO1032"
                },
                "stats": {
                    "depth": {
                        "desc": "해안에서 약 17.5km, 수심 1,032m 지점에서 취수하여 표층 오염원으로부터 자연적으로 완전히 격리되어 있습니다."
                    },
                    "pressure": {
                        "desc": "심해의 강력한 수압을 통해 형성되어, 본연의 미네랄 밸런스를 고스란히 유지하고 있습니다."
                    },
                    "balance": {
                        "desc": "심해의 기원으로부터 얻어진 독특한 미네랄 비율과 천연 미네랄 프로필을 특징으로 합니다."
                    }
                },
                "summary": {
                    "title": "AETERNO Deep Ocean Water",
                    "desc": "해안에서 17.5km, 수심 1,032m 지점에서 취수하여 마그네슘, 칼슘, 칼륨이 3:1:1의 천연 미네랄 조성을 갖추고 있습니다.",
                    "tagline": "그 근원으로부터 정의되는 순수함."
                },
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
                "philosophyBody1": "동해 수심 1,032m, 현대 문명이 닿지 않은 순수함이 그곳에 있습니다. 에터노(AETERNO)는 수세기에 걸쳐 고압과 저온 속에서 보존된 태고의 정수를 담아냅니다.",
                "philosophyBody2": "이것은 단순한 물이 아닙니다. 자연이 선사할 수 있는 가장 순수한 형태의 수분이며, 동시에 역사이자 과학입니다.",
                "narration1": "세상의 모든 물이 오염과 타협할 때, 에터노(AETERNO)는 깊은 침묵 속으로 들어갔습니다. 빛조차 닿지 않는 1,032m의 심연. 그곳에서 수세기의 시간 동안 숙성된 물은 단순한 수분이 아닙니다. 그것은 당신의 세포를 깨우는 가장 원초적인 생명력입니다.",
                "narration2": "우리는 물을 만드는 것이 아니라, 태고의 깊이를 길어 올립니다.",
                "ceoMessage": {
                    "title": "대표이사 인사말",
                    "body": "AETERNO는 단순한 물이 아닌, 자연이 가장 깊은 곳에서 완성한 본질적인 순수함과 과학적 가치를 전합니다.\n\n1,000미터가 넘는 심해에서 오랜 시간 순환하며 숙성된 해양심층수는 오염으로부터 완전히 분리된 환경 속에서 탄생한 자연의 결정체입니다. AETERNO는 이 깊이를 존중하고, 과학으로 검증하여 당신의 일상과 건강에 가장 신뢰할 수 있는 물을 제공합니다.\n\n앞으로도 AETERNO는 자연, 과학, 그리고 신뢰를 기준으로 프리미엄 수분 섭취의 새로운 기준을 만들어가겠습니다.\n\n감사합니다.",
                    "signature": "AETERNO 대표 이상화 드림"
                }
            },
            "efficacy": {
                "hero": {
                    "title": "해양심층수의 <br>임상적 효능",
                    "subtitle": "프리미엄 수분 공급 과학",
                    "desc": "미네랄이 풍부한 물을 통한 과학적으로 입증된 생리적 개선 효과."
                },
                "cards": {
                    "body": {
                        "title": "체성분 개선",
                        "desc": "해양심층수 섭취는 체지방률을 유의미하게 감소시키고 근육량과 기초대사율(BMR)을 증가시킵니다.",
                        "label": "체지방 감소",
                        "stat": "유의미함",
                        "source": "Shuya Yuzawa et al., Water, 2024."
                    },
                    "cholesterol": {
                        "title": "콜레스테롤 조절",
                        "desc": "고콜레스테롤 혈증 피험자의 혈청 총 콜레스테롤과 LDL-C 수치를 낮추고 지질 과산화를 억제하는 것으로 입증되었습니다.",
                        "source": "Zhao-Yang Fu et al., J Med Food, 2012."
                    },
                    "glucose": {
                        "title": "당 대사 개선",
                        "desc": "마그네슘이 강화된 해양심층수는 당뇨 전단계 성인의 공복 인슐린 수치를 낮추고 HOMA-IR 지수를 개선합니다.",
                        "source": "Ji Yeon Ham et al., Nutrients, 2020."
                    },
                    "intestine": {
                        "title": "장내 생태계",
                        "desc": "변비 개선율 94.9%. Blautia와 같은 유익균을 증식시키고 단쇄 지방산을 증가시킵니다.",
                        "badge": "변비 개선: 94.9%",
                        "source": "Hiroaki Takeuchi et al., Nutrients, 2020."
                    },
                    "skin": {
                        "title": "피부 회복",
                        "desc": "아토피 피부염(AEDS) 환자의 미네랄 균형을 회복시키고 알레르기 염증 및 IgE 수치를 감소시킵니다.",
                        "source": "Kimata et al., Acta Medica, 2002."
                    },
                    "exercise": {
                        "title": "운동 후 회복",
                        "subtitle": "4시간 내 완벽 회복",
                        "desc": "해양심층수는 운동으로 인한 근육 손상을 제거하고 4시간 이내에 유산소 능력을 회복시키는 반면, 수돗물은 48시간이 소요됩니다.",
                        "dsw_label": "해양심층수",
                        "tap_label": "수돗물",
                        "source": "Chien-Wen Hou et al., J Int Soc Sports Nutr, 2013."
                    }
                },
                "footer": {
                    "regulatory": "법규 준수 공지",
                    "fda": "“이 진술은 식품의약국(FDA)의 평가를 받지 않았습니다. 본 제품은 질병의 진단, 치료, 치유 또는 예방을 목적으로 하지 않습니다.”",
                    "disclaimer_title": "일반 면책 조항",
                    "disclaimer_body": "AETERNO가 제공하는 정보는 교육 목적으로만 제공되며 의료적 조언, 진단 또는 치료를 대신할 수 없습니다. 당사는 해양 심층 미네랄에 관한 제3자 독립 연구를 참조하지만, 이러한 연구는 FDA에서 수행한 것이 아니며 반드시 AETERNO 제품의 임상적 효능을 반영하는 것은 아닙니다. 의료 상태와 관련하여 질문이 있는 경우 항상 의사 또는 기타 자격을 갖춘 의료 제공자의 조언을 구하십시오."
                }
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
                "narration2": "私たちは水を作るのではありません。太古の深みを汲み上げているのです。"
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
