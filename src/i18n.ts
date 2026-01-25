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
            "nav": { "brandData": "Brand Story", "science": "Science", "products": "Products", "engineering": "Engineering", "contact": "Contact" },
            "footer": { "brandDesc": "Pure Depth. Intelligent Hydration.\n1,032m Deep Ocean Water from the East Sea.", "company": "Company", "legal": "Legal", "followUs": "Follow Us", "rights": "All rights reserved.", "designed": "Designed for Premium Hydration." },
            "cta": { "inquire": "Inquire OEM", "balance": "Balance Your Body", "contact": "Contact Us Now" },
            "news": {
                "title": "Media Center",
                "video": "Video Materials",
                "brochure": "Brochure & PDF",
                "other": "Other Resources",
                "download": "Download"
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
            "nav": { "brandData": "브랜드 스토리", "science": "과학", "products": "제품", "engineering": "엔지니어링", "contact": "문의하기" },
            "footer": { "brandDesc": "순수한 깊이. 지능적인 수분 공급.\n동해 수심 1,032m 초심층수.", "company": "회사", "legal": "법적 고지", "followUs": "소셜 미디어", "rights": "All rights reserved.", "designed": "프리미엄 수분 보충을 위해 설계되었습니다." },
            "cta": { "inquire": "OEM 문의하기", "balance": "Balance Your Body", "contact": "지금 상담하기" },
            "news": {
                "title": "미디어 센터",
                "video": "영상 자료",
                "brochure": "브로셔 및 PDF",
                "other": "기타 자료",
                "download": "다운로드"
            }
        }
    },
    ja: {
        translation: {
            "welcome": "純粋な深み。インテリジェントな水分補給。",
            "nav": { "brandData": "ブランドストーリー", "science": "科学", "products": "製品", "engineering": "エンジニアリング", "contact": "お問い合わせ" },
            "footer": { "brandDesc": "純粋な深み。インテリジェントな水分補給。\n東海の水深1,032mからの海洋深層水。", "company": "会社", "legal": "法的通知", "followUs": "フォローする", "rights": "All rights reserved.", "designed": "プレミアムな水分補給のために設計されました。" },
            "cta": { "inquire": "OEMのお問い合わせ", "sample": "サンプル請求", "contact": "今すぐ相談する" }
        }
    },
    zh: {
        translation: {
            "welcome": "纯净深度。智能补水。",
            "nav": { "brandData": "品牌故事", "science": "科学", "products": "产品", "engineering": "工程", "contact": "联系我们" },
            "footer": { "brandDesc": "纯净深度。智能补水。\n来自东海1,032米深处的海洋深层水。", "company": "公司", "legal": "法律声明", "followUs": "关注我们", "rights": "All rights reserved.", "designed": "专为优质补水设计。" },
            "cta": { "inquire": "OEM咨询", "sample": "索取样品", "contact": "立即咨询" }
        }
    },
    id: {
        translation: {
            "welcome": "Kedalaman Murni. Hidrasi Cerdas.",
            "nav": { "brandData": "Kisah Merek", "science": "Sains", "products": "Produk", "engineering": "Teknik", "contact": "Kontak" },
            "footer": { "brandDesc": "Kedalaman Murni. Hidrasi Cerdas.\nAir Laut Dalam 1.032m dari Laut Timur.", "company": "Perusahaan", "legal": "Hukum", "followUs": "Ikuti Kami", "rights": "All rights reserved.", "designed": "Dirancang untuk Hidrasi Premium." },
            "cta": { "inquire": "Pertanyaan OEM", "sample": "Minta Sampel", "contact": "Hubungi Kami Sekarang" }
        }
    },
    ar: {
        translation: {
            "welcome": "عمق نقي. ترطيب ذكي.",
            "nav": { "brandData": "قصة العلامة التجارية", "science": "علم", "products": "منتجات", "engineering": "هندسة", "contact": "اتصل بنا" },
            "footer": { "brandDesc": "عمق نقي. ترطيب ذكي.\nمياه المحيط العميقة من عمق 1,032 متر في البحر الشرقي.", "company": "شركة", "legal": "قانوني", "followUs": "تابعنا", "rights": "All rights reserved.", "designed": "صمم للترطيب الممتاز." },
            "cta": { "inquire": "استفسار OEM", "sample": "طلب عينة", "contact": "اتصل بنا الآن" }
        }
    },
    es: {
        translation: {
            "welcome": "Profundidad Pura. Hidratación Inteligente.",
            "nav": { "brandData": "Historia de la Marca", "science": "Ciencia", "products": "Productos", "engineering": "Ingeniería", "contact": "Contacto" },
            "footer": { "brandDesc": "Profundidad Pura. Hidratación Inteligente.\nAgua de Mar Profunda de 1,032m del Mar del Este.", "company": "Compañía", "legal": "Legal", "followUs": "Síguenos", "rights": "All rights reserved.", "designed": "Diseñado para una Hidratación Premium." },
            "cta": { "inquire": "Consulta OEM", "sample": "Solicitar Muestra", "contact": "Contáctanos Ahora" }
        }
    },
    fr: {
        translation: {
            "welcome": "Profondeur Pure. Hydratation Intelligente.",
            "nav": { "brandData": "Histoire de la Marque", "science": "Science", "products": "Produits", "engineering": "Ingénierie", "contact": "Contact" },
            "footer": { "brandDesc": "Profondeur Pure. Hydratation Intelligente.\nEau de Mer Profonde de 1 032m de la Mer de l'Est.", "company": "Entreprise", "legal": "Légal", "followUs": "Suivez-nous", "rights": "All rights reserved.", "designed": "Conçu pour une Hydratation Premium." },
            "cta": { "inquire": "Demande OEM", "sample": "Demander un Échantillon", "contact": "Contactez-nous" }
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
