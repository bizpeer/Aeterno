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
            "nav": { "brandData": "Brand Story", "science": "Science", "products": "Products", "engineering": "Engineering", "news": "Media Center", "contact": "Contact" },
            "footer": { "brandDesc": "Pure Depth. Intelligent Hydration.\n1,032m Deep Ocean Water from the East Sea.", "company": "Company", "legal": "Legal", "followUs": "Follow Us", "rights": "All rights reserved.", "designed": "Designed for Premium Hydration." },
            "cta": { "inquire": "Inquire OEM", "balance": "Balance Your Body", "contact": "Contact Us Now" },
            "science": {
                "purity_depth1": "As the depth increases, nutrient salts are concentrated and man-made pollutants disappear.",
                "purity_depth2": "1,000m deep sea is a depth that domestic sewage and industrial pollutants cannot physically reach."
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
                "narration1": "When all the waters of the world compromised with pollution, AETERNO entered into deep silence. An abyss 1,032m deep where even light cannot reach. The water aged there for centuries is not just hydration. It is the most primordial life force that awakens your cells.",
                "narration2": "We do not create water; we draw from the primordial depths."
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
            "nav": { "brandData": "브랜드 스토리", "science": "과학", "products": "제품", "engineering": "엔지니어링", "news": "미디어 센터", "contact": "문의하기" },
            "footer": { "brandDesc": "순수한 깊이. 지능적인 수분 공급.\n동해 수심 1,032m 초심층수.", "company": "회사", "legal": "법적 고지", "followUs": "소셜 미디어", "rights": "All rights reserved.", "designed": "프리미엄 수분 보충을 위해 설계되었습니다." },
            "cta": { "inquire": "OEM 문의하기", "balance": "Balance Your Body", "contact": "지금 상담하기" },
            "science": {
                "purity_depth1": "수심이 깊어질수록 영양염류는 농축되고, 수심이 깊어질 수록 인위적 오염물질은 사라지며,",
                "purity_depth2": "심해 1,000m는 생활하수, 산업 오염물질이 물리적으로 도달할 수 없는 깊이입니다."
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
                "narration1": "세상의 모든 물이 오염과 타협할 때, 에테르노(AETERNO)는 깊은 침묵 속으로 들어갔습니다. 빛조차 닿지 않는 1,032m의 심연. 그곳에서 수세기의 시간 동안 숙성된 물은 단순한 수분이 아닙니다. 그것은 당신의 세포를 깨우는 가장 원초적인 생명력입니다.",
                "narration2": "우리는 물을 만드는 것이 아니라, 태고의 깊이를 길어 올립니다."
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
            "nav": { "brandData": "ブランドストーリー", "science": "科学", "products": "製品", "engineering": "エンジニアリング", "news": "メディアセンター", "contact": "お問い合わせ" },
            "footer": { "brandDesc": "純粋な深み。インテリジェントな水分補給。\n東海の水深1,032mからの海洋深層水。", "company": "会社", "legal": "法的通知", "followUs": "フォローする", "rights": "All rights reserved.", "designed": "プレミアムな水分補給のために設計されました。" },
            "cta": { "inquire": "OEMのお問い合わせ", "balance": "Balance Your Body", "contact": "今すぐ相談する" },
            "science": {
                "purity_depth1": "水深が深くなるほど栄養塩類は濃縮され、人為的な汚染物質は消えていきます。",
                "purity_depth2": "深海1,000mは、生活排水や産業汚染物質が物理的に到達できない深さです。"
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
            "nav": { "brandData": "品牌故事", "science": "科学", "products": "产品", "engineering": "工程", "news": "媒体中心", "contact": "联系我们" },
            "footer": { "brandDesc": "纯净深度。智能补水。\n来自东海1,032米深处的海洋深层水。", "company": "公司", "legal": "法律声明", "followUs": "关注我们", "rights": "All rights reserved.", "designed": "专为优质补水设计。" },
            "cta": { "inquire": "OEM咨询", "balance": "Balance Your Body", "contact": "立即咨询" },
            "science": {
                "purity_depth1": "随着深度增加，营养盐富集，人为污染物消失，",
                "purity_depth2": "1,000米深海是生活污水和工业污染物物理上无法到达的深度。"
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
            "nav": { "brandData": "Kisah Merek", "science": "Sains", "products": "Produk", "engineering": "Teknik", "news": "Pusat Media", "contact": "Kontak" },
            "footer": { "brandDesc": "Kedalaman Murni. Hidrasi Cerdas.\nAir Laut Dalam 1.032m dari Laut Timur.", "company": "Perusahaan", "legal": "Hukum", "followUs": "Ikuti Kami", "rights": "All rights reserved.", "designed": "Dirancang untuk Hidrasi Premium." },
            "cta": { "inquire": "Pertanyaan OEM", "balance": "Balance Your Body", "contact": "Hubungi Kami Sekarang" },
            "science": {
                "purity_depth1": "Seiring bertambahnya kedalaman, garam nutrisi terkonsentrasi dan polutan buatan manusia menghilang,",
                "purity_depth2": "Laut dalam 1.000m adalah kedalaman yang secara fisik tidak dapat dijangkau oleh limbah domestik dan polutan industri."
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
            "nav": { "brandData": "قصة العلامة التجارية", "science": "علم", "products": "منتجات", "engineering": "هندسة", "news": "المركز الإعلامي", "contact": "اتصل بنا" },
            "footer": { "brandDesc": "عمق نقي. ترطيب ذكي.\nمياه المحيط العميقة من عمق 1,032 متر في البحر الشرقي.", "company": "شركة", "legal": "قانوني", "followUs": "تابعنا", "rights": "All rights reserved.", "designed": "صمم للترطيب الممتاز." },
            "cta": { "inquire": "استفسار OEM", "balance": "Balance Your Body", "contact": "اتصل بنا الآن" },
            "science": {
                "purity_depth1": "مع زيادة العمق تتركز الأملاح المغذية وتختفي الملوثات البشرية،",
                "purity_depth2": "عمق 1,000 متر في البحر هو عمق لا يمكن لمياه الصرف الصحي والملوثات الصناعية الوصول إليه فيزيائياً."
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
            "nav": { "brandData": "Historia de la Marca", "science": "Ciencia", "products": "Productos", "engineering": "Ingeniería", "news": "Centro de Medios", "contact": "Contacto" },
            "footer": { "brandDesc": "Profundidad Pura. Hidratación Inteligente.\nAgua de Mar Profunda de 1,032m del Mar del Este.", "company": "Compañía", "legal": "Legal", "followUs": "Síguenos", "rights": "All rights reserved.", "designed": "Diseñado para una Hidratación Premium." },
            "cta": { "inquire": "Consulta OEM", "balance": "Balance Your Body", "contact": "Contáctanos Ahora" },
            "science": {
                "purity_depth1": "A medida que aumenta la profundidad, las sales nutrientes se concentran y los contaminantes artificiales desaparecen,",
                "purity_depth2": "El mar profundo a 1.000 m es una profundidad a la que las aguas residuales domésticas e industriales no pueden llegar físicamente."
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
            "nav": { "brandData": "Histoire de la Marque", "science": "Science", "products": "Produits", "engineering": "Ingénierie", "news": "Centre de Médias", "contact": "Contact" },
            "footer": { "brandDesc": "Profondeur Pure. Hydratation Intelligente.\nEau de Mer Profonde de 1 032m de la Mer de l'Est.", "company": "Entreprise", "legal": "Légal", "followUs": "Suivez-nous", "rights": "All rights reserved.", "designed": "Conçu pour une Hydratation Premium." },
            "cta": { "inquire": "Demande OEM", "balance": "Balance Your Body", "contact": "Contactez-nous" },
            "science": {
                "purity_depth1": "À mesure que la profondeur augmente, les sels nutritifs se concentrent et les polluants artificiels disparaissent,",
                "purity_depth2": "La mer profonde à 1 000 m est une profondeur que les eaux usées domestiques et les polluants industriels ne peuvent physiquement pas atteindre."
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
