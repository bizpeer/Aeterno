import { useTranslation } from 'react-i18next';
import {
    Accessibility,
    Heart,
    Dna,
    Leaf,
    Sparkles,
    Zap,
    CheckCircle
} from 'lucide-react';

export function ScientificEfficacy() {
    const { t } = useTranslation();

    return (
        <div className="leading-relaxed bg-[#F0F7FF] text-[#2D3748] min-h-screen pt-16">
            <header className="py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-blue-600 font-bold tracking-widest uppercase mb-3 block">
                        {t('efficacy.hero.subtitle')}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A365D] mb-6"
                        dangerouslySetInnerHTML={{ __html: t('efficacy.hero.title') }}
                    />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t('efficacy.hero.desc')}
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Body Composition */}
                    <section className="bg-white rounded-[1.25rem] shadow-[0_4px_20px_rgba(0,50,100,0.05)] border border-[#E2E8F0] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,50,100,0.1)]">
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                    <Accessibility className="text-blue-600 w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-bold text-[#1A365D]">{t('efficacy.cards.body.title')}</h2>
                            </div>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                {t('efficacy.cards.body.desc')}
                            </p>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-blue-600">{t('efficacy.cards.body.label')}</span>
                                    <span>{t('efficacy.cards.body.stat')}</span>
                                </div>
                                <div className="w-full bg-[#EDF2F7] h-2 rounded-full overflow-hidden">
                                    <div className="bg-blue-500 h-full w-[82%] transition-all duration-1000"></div>
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-400 italic">{t('efficacy.cards.body.source')}</p>
                    </section>

                    {/* Cholesterol Control */}
                    <section className="bg-white rounded-[1.25rem] shadow-[0_4px_20px_rgba(0,50,100,0.05)] border border-[#E2E8F0] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,50,100,0.1)]">
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mr-4">
                                    <Heart className="text-red-500 w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-bold text-[#1A365D]">{t('efficacy.cards.cholesterol.title')}</h2>
                            </div>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                {t('efficacy.cards.cholesterol.desc')}
                            </p>
                        </div>
                        <p className="text-[10px] text-gray-400 italic">{t('efficacy.cards.cholesterol.source')}</p>
                    </section>

                    {/* Glucose Metabolism */}
                    <section className="bg-white rounded-[1.25rem] shadow-[0_4px_20px_rgba(0,50,100,0.05)] border border-[#E2E8F0] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,50,100,0.1)]">
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mr-4">
                                    <Dna className="text-indigo-500 w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-bold text-[#1A365D]">{t('efficacy.cards.glucose.title')}</h2>
                            </div>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                {t('efficacy.cards.glucose.desc')}
                            </p>
                        </div>
                        <p className="text-[10px] text-gray-400 italic">{t('efficacy.cards.glucose.source')}</p>
                    </section>

                    {/* Intestinal Ecosystem */}
                    <section className="bg-white rounded-[1.25rem] shadow-[0_4px_20px_rgba(0,50,100,0.05)] border border-[#E2E8F0] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,50,100,0.1)]">
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mr-4">
                                    <Leaf className="text-green-500 w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-bold text-[#1A365D]">{t('efficacy.cards.intestine.title')}</h2>
                            </div>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {t('efficacy.cards.intestine.desc')}
                            </p>
                            <div className="bg-green-50 p-3 rounded-lg border border-green-100 mb-4">
                                <p className="text-xs text-green-700 font-bold flex items-center">
                                    <CheckCircle className="mr-1 w-3 h-3" /> {t('efficacy.cards.intestine.badge')}
                                </p>
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-400 italic">{t('efficacy.cards.intestine.source')}</p>
                    </section>

                    {/* Skin Recovery */}
                    <section className="bg-white rounded-[1.25rem] shadow-[0_4px_20px_rgba(0,50,100,0.05)] border border-[#E2E8F0] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,50,100,0.1)]">
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mr-4">
                                    <Sparkles className="text-purple-500 w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-bold text-[#1A365D]">{t('efficacy.cards.skin.title')}</h2>
                            </div>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                {t('efficacy.cards.skin.desc')}
                            </p>
                        </div>
                        <p className="text-[10px] text-gray-400 italic">{t('efficacy.cards.skin.source')}</p>
                    </section>

                    {/* Exercise Recovery */}
                    <section className="bg-blue-50/30 rounded-[1.25rem] shadow-[0_4px_20px_rgba(0,50,100,0.05)] border-2 border-blue-500 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,50,100,0.1)]">
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                    <Zap className="text-white w-5 h-5 fill-current" />
                                </div>
                                <h2 className="text-xl font-bold text-[#1A365D]">{t('efficacy.cards.exercise.title')}</h2>
                            </div>
                            <p className="text-sm font-bold text-blue-700 mb-2">{t('efficacy.cards.exercise.subtitle')}</p>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                {t('efficacy.cards.exercise.desc')}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <span className="text-[10px] font-bold w-10">{t('efficacy.cards.exercise.dsw_label')}</span>
                                    <div className="flex-1 bg-[#EDF2F7] h-4 rounded-full overflow-hidden mx-2">
                                        <div className="bg-blue-600 h-full w-[8.3%] transition-all duration-1000"></div>
                                    </div>
                                    <span className="text-[10px] font-bold text-blue-600">4h</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-[10px] font-bold w-10">{t('efficacy.cards.exercise.tap_label')}</span>
                                    <div className="flex-1 bg-[#EDF2F7] h-4 rounded-full overflow-hidden mx-2">
                                        <div className="bg-gray-400 h-full w-full"></div>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-500">48h</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-400 italic mt-6">{t('efficacy.cards.exercise.source')}</p>
                    </section>

                </div>
            </main>

            <footer className="bg-[#1A365D] py-16 px-6 mt-16 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h4 className="text-blue-300 font-bold mb-4 uppercase tracking-widest text-sm">
                        {t('efficacy.footer.regulatory')}
                    </h4>
                    <p className="text-sm text-blue-100 mb-8 leading-relaxed opacity-90">
                        {t('efficacy.footer.fda')}
                    </p>
                    <div className="h-px bg-blue-800 w-1/4 mx-auto mb-8"></div>
                    <p className="text-xs text-blue-200 mb-4 font-bold uppercase">
                        {t('efficacy.footer.disclaimer_title')}
                    </p>
                    <p className="text-[11px] text-blue-200 leading-loose max-w-2xl mx-auto opacity-70">
                        {t('efficacy.footer.disclaimer_body')}
                    </p>
                    <div className="mt-12 text-blue-400 text-[10px] tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} AETERNO | THE PURITY OF DEPTH
                    </div>
                </div>
            </footer>
        </div>
    );
}
