import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function BrandStory() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="py-32 bg-BRAND-deepBlue overflow-hidden">
            <div className="container mx-auto px-6 relative">
                <motion.div
                    style={{ y, opacity }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <span className="text-BRAND-teal text-sm font-bold tracking-widest uppercase mb-4 block">
                        Our Philosophy
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-12 leading-tight">
                        "Water that has traveled for a thousand years."
                    </h2>
                    <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
                        <p>
                            Deep in the East Sea, 1,032 meters below the surface, exists a purity untouched by modern civilization.
                            Aeterno captures this pristine essence, preserved in high pressure and low temperature for centuries.
                        </p>
                        <p>
                            It is not just water. It is history, science, and the purest form of hydration nature has to offer.
                        </p>
                    </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-BRAND-teal/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-BRAND-aqua/5 rounded-full blur-3xl translate-y-1/4 translate-x-1/4 pointer-events-none" />
            </div>
        </section>
    );
}
