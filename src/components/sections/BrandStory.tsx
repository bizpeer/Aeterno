import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import abyssImg from '../../assets/images/brand-story-abyss.png';

export function BrandStory() {
    const { t } = useTranslation();
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div className="bg-BRAND-deepBlue overflow-hidden">
            {/* Philosophy Section (Existing) */}
            <section ref={ref} className="py-32 relative">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        style={{ y, opacity }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="text-BRAND-teal text-sm font-bold tracking-widest uppercase mb-4 block">
                            {t('nav.brandData')}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
                            {t('brandStory.philosophyTitle')}
                        </h2>
                        <div className="space-y-1 text-lg text-white/70 font-light leading-relaxed">
                            <p>
                                {t('brandStory.philosophyBody1')}
                            </p>
                            <p>
                                {t('brandStory.philosophyBody2')}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-BRAND-teal/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-BRAND-aqua/5 rounded-full blur-3xl translate-y-1/4 translate-x-1/4 pointer-events-none" />
            </section>

            {/* Immersive Deep Sea Narration Section (New) */}
            <section className="relative min-h-screen flex items-center py-24 bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                            className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,186,188,0.2)]"
                        >
                            <img
                                src={abyssImg}
                                alt="AETERNO Deep Sea Abyss"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="space-y-12"
                        >
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 80 }}
                                    className="h-1 bg-BRAND-aqua"
                                />
                                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light font-serif italic">
                                    "{t('brandStory.narration1')}"
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="pt-8"
                            >
                                <h3 className="text-3xl md:text-5xl font-serif font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-BRAND-aqua to-BRAND-teal">
                                    {t('brandStory.narration2')}
                                </h3>
                            </motion.div>

                            <div className="pt-12 flex space-x-8">
                                <div className="text-center">
                                    <div className="text-BRAND-aqua text-2xl font-bold mb-1">1,032m</div>
                                    <div className="text-white/40 text-[10px] uppercase tracking-widest">Ultimate Depth</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-BRAND-aqua text-2xl font-bold mb-1">2°C</div>
                                    <div className="text-white/40 text-[10px] uppercase tracking-widest">Constant Temp</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-BRAND-aqua text-2xl font-bold mb-1">3:1:1</div>
                                    <div className="text-white/40 text-[10px] uppercase tracking-widest">Mineral Ratio</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CEO Message Section (New) */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-BRAND-teal text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
                            >
                                {t('brandStory.ceoMessage.title')}
                            </motion.span>
                            <div className="h-px w-12 bg-gray-200 mx-auto" />
                        </div>

                        <div className="space-y-6 text-[13px] text-gray-600 leading-[1.8] font-light text-center md:text-left">
                            {t('brandStory.ceoMessage.body').split('\n').map((line, i) => (
                                <p key={i} className={line.trim() === '' ? 'h-4' : ''}>
                                    {line}
                                </p>
                            ))}
                        </div>

                        <div className="mt-16 text-right">
                            <p className="text-BRAND-deepBlue font-serif italic text-lg">
                                {t('brandStory.ceoMessage.signature')}
                            </p>
                            <div className="mt-2 h-0.5 w-24 bg-BRAND-teal/30 ml-auto" />
                        </div>
                    </motion.div>
                </div>

                {/* Subtle decorative background */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-10" />
            </section>
        </div>
    );
}
