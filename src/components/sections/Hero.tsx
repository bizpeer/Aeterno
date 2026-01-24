import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '../common/Button';
// Using the deep sea image for background now
import heroBg from '../../assets/images/deep-sea.jpg';

export function Hero() {
    const { t } = useTranslation();

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image/Video Overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroBg}
                    alt="Deep Sea"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-BRAND-deepBlue via-transparent to-transparent opacity-90" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-BRAND-aqua font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-4">
                        1,032m Depth
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                >
                    {t('welcome')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="text-white/80 max-w-lg mx-auto text-lg font-light mb-12"
                >
                    Deep Ocean Mineral Water
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="flex flex-col md:flex-row gap-4 mb-16"
                >
                    <Button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-BRAND-teal hover:bg-BRAND-teal/90 text-white min-w-[200px]"
                    >
                        {t('cta.inquire')}
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-white border-white hover:bg-white hover:text-BRAND-deepBlue min-w-[200px]"
                    >
                        {t('cta.sample')}
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8 }}
                >
                    <div className="animate-bounce text-white/50">
                        <span className="text-xs tracking-widest uppercase">Scroll</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
