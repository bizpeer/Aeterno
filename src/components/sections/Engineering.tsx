import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import intakeImg from '../../assets/images/intake-process.jpg';
import desalinationImg from '../../assets/images/desalination-process.jpg';
import asepticImg from '../../assets/images/aseptic-filling.jpg';

export function Engineering() {
    const { t } = useTranslation();

    return (
        <section className="bg-BRAND-deepBlue text-white pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Intro Section */}
                <div className="mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-BRAND-aqua text-sm font-bold tracking-[0.3em] uppercase mb-4 block"
                    >
                        {t('engineering.title')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-serif font-bold mb-8"
                    >
                        {t('engineering.subtitle')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-3xl mx-auto text-white/80 text-lg md:text-xl font-light leading-relaxed italic"
                    >
                        "{t('engineering.purity')}"
                    </motion.p>
                </div>

                {/* 1. Intake Process Section */}
                <div className="mb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative group lg:order-2"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img src={intakeImg} alt="Intake Process" className="w-full h-auto" />
                                {/* Water Flow Animation Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-BRAND-aqua/20 to-transparent pointer-events-none"
                                    animate={{
                                        x: ['-100%', '100%'],
                                        opacity: [0, 0.5, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-BRAND-teal/20 blur-3xl -z-10 rounded-full" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 lg:order-1"
                        >
                            <div className="flex items-center space-x-4">
                                <span className="text-5xl font-serif font-bold text-white/10">01</span>
                                <h3 className="text-3xl font-bold text-BRAND-aqua">{t('engineering.intake.title')}</h3>
                            </div>
                            <p className="text-white/70 text-lg leading-relaxed whitespace-pre-line">
                                {t('engineering.intake.desc')}
                            </p>
                            <div className="pt-4">
                                <div className="h-[2px] w-24 bg-gradient-to-r from-BRAND-aqua to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 2. Desalination & Mineral Section */}
                <div className="mb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img src={desalinationImg} alt="Desalination Process" className="w-full h-auto" />
                            </div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-BRAND-aqua/10 blur-3xl -z-10 rounded-full" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center space-x-4">
                                <span className="text-5xl font-serif font-bold text-white/10">02</span>
                                <h3 className="text-3xl font-bold text-BRAND-aqua">{t('engineering.mineral.title')}</h3>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                                <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium">
                                    {t('engineering.desalination')}
                                </p>
                                <p className="text-white/60 text-base leading-relaxed">
                                    {t('engineering.mineral.desc')}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 3. Aseptic Filling Section */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:order-2"
                        >
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img src={asepticImg} alt="Aseptic Filling" className="w-full h-auto" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 lg:order-1"
                        >
                            <div className="flex items-center space-x-4">
                                <span className="text-5xl font-serif font-bold text-white/10">03</span>
                                <h3 className="text-3xl font-bold text-BRAND-aqua">{t('engineering.aseptic.title')}</h3>
                            </div>
                            <p className="text-white/70 text-lg leading-relaxed">
                                {t('engineering.aseptic.desc')}
                            </p>
                            <div className="grid grid-cols-3 gap-4 pt-10">
                                <div className="text-center">
                                    <div className="text-BRAND-aqua font-bold text-xl mb-1">Class 100</div>
                                    <div className="text-white/40 text-xs uppercase tracking-widest">Cleanliness</div>
                                </div>
                                <div className="text-center border-x border-white/10">
                                    <div className="text-BRAND-aqua font-bold text-xl mb-1">UV</div>
                                    <div className="text-white/40 text-xs uppercase tracking-widest">Sterilization</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-BRAND-aqua font-bold text-xl mb-1">24/7</div>
                                    <div className="text-white/40 text-xs uppercase tracking-widest">Monitoring</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
