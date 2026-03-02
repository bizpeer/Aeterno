import { motion } from 'framer-motion';
import { Activity, Database, Droplet } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../common/Button';

const stats = [
    {
        icon: Database,
        value: "1,032",
        unit: "m",
        label: "Depth",
        desc: "science.stats.depth.desc"
    },
    {
        icon: Activity,
        value: "100",
        unit: "atm",
        label: "Pressure",
        desc: "science.stats.pressure.desc"
    },
    {
        icon: Droplet,
        value: "3:1:1",
        unit: "Mg:Ca:K",
        label: "Balance",
        desc: "science.stats.balance.desc"
    }
];

export function Science() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { lang } = useParams<{ lang: string }>();
    const currentLang = lang || 'ko';

    return (
        <section className="py-32 bg-slate-50 text-BRAND-deepBlue">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-BRAND-teal text-sm font-bold tracking-widest uppercase mb-4 block">
                        {t('science.title')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                        {t('science.subtitle')}
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto space-y-4 mb-12"
                    >
                        <p className="text-xl md:text-2xl font-serif text-BRAND-deepBlue leading-relaxed font-medium">
                            "{t('science.purity_depth1')}"
                        </p>
                        <p className="text-lg text-gray-500 font-light italic">
                            {t('science.purity_depth2')}
                        </p>
                    </motion.div>

                    <div className="flex justify-center gap-4">
                        <div className="bg-BRAND-teal/10 px-6 py-2 rounded-full text-BRAND-teal font-semibold text-sm">
                            #PureZone
                        </div>
                        <div className="bg-BRAND-teal/10 px-6 py-2 rounded-full text-BRAND-teal font-semibold text-sm">
                            {t('science.hashtags.aeterno1032')}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="inline-flex items-center justify-center p-4 bg-BRAND-deepBlue/5 rounded-full mb-6">
                                <stat.icon className="w-8 h-8 text-BRAND-deepBlue" />
                            </div>
                            <div className="text-5xl font-bold font-serif text-BRAND-deepBlue mb-2">
                                {stat.value}<span className="text-2xl ml-1 text-BRAND-teal">{stat.unit}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{stat.label}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {t(stat.desc)}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* New Summary Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto mt-24 mb-24"
                >
                    <div className="bg-white rounded-[32px] p-12 md:p-20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-gray-100 text-center relative overflow-hidden group">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-BRAND-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 space-y-8">
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-BRAND-deepBlue tracking-tight">
                                {t('science.summary.title')}
                            </h3>

                            <div className="h-0.5 w-16 bg-BRAND-teal mx-auto opacity-30" />

                            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                                {t('science.summary.desc')}
                            </p>

                            <div className="pt-6">
                                <span className="text-BRAND-teal font-serif italic text-2xl md:text-3xl">
                                    "{t('science.summary.tagline')}"
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="text-center">
                    <Button
                        onClick={() => navigate(`/${currentLang}/news`)}
                        size="lg"
                        className="shadow-2xl bg-BRAND-deepBlue text-white hover:bg-BRAND-deepBlue/90 px-12 py-8 text-xl rounded-full"
                    >
                        Start Your Healthy Journey
                    </Button>
                </div>
            </div>
        </section>
    );
}
