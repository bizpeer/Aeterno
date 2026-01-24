import { motion } from 'framer-motion';

export function Engineering() {
    return (
        <section className="py-32 bg-BRAND-deepBlue text-white">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <span className="text-BRAND-aqua text-sm font-bold tracking-widest uppercase mb-4 block">
                        Engineering
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        17.5km Intake Line
                    </h2>
                    <p className="max-w-2xl text-white/70 text-lg">
                        State-of-the-art infrastructure to access the untouched depths.
                    </p>
                </div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 pl-8 md:pl-16 space-y-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -left-[41px] md:-left-[73px] top-0 w-6 h-6 bg-BRAND-teal rounded-full ring-4 ring-BRAND-deepBlue" />
                        <h3 className="text-2xl font-bold mb-2">Sea Intake</h3>
                        <p className="text-white/60">Water is sourced through a seamless 17.5km pipe.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -left-[41px] md:-left-[73px] top-0 w-6 h-6 bg-white rounded-full ring-4 ring-BRAND-deepBlue" />
                        <h3 className="text-2xl font-bold mb-2">Clean Room Processing</h3>
                        <p className="text-white/60">Bottled in a NASA-grade Class 100 clean room environment.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="absolute -left-[41px] md:-left-[73px] top-0 w-6 h-6 bg-BRAND-aqua rounded-full ring-4 ring-BRAND-deepBlue" />
                        <h3 className="text-2xl font-bold mb-2">Micro-Filtration</h3>
                        <p className="text-white/60">Multi-stage filtration preserves minerals while removing impurities.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
