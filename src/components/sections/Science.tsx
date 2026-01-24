import { motion } from 'framer-motion';
import { Activity, Database, Droplet } from 'lucide-react';
import { Button } from '../common/Button';

const stats = [
    {
        icon: Database,
        value: "1,032",
        unit: "m",
        label: "Depth",
        desc: "Sourced from the deepest point in the East Sea, ensuring absolute isolation from surface pollutants."
    },
    {
        icon: Activity,
        value: "100",
        unit: "atm",
        label: "Pressure",
        desc: "Matured under immense pressure, resulting in smaller water clusters for smooth absorption."
    },
    {
        icon: Droplet,
        value: "3:1:1",
        unit: "Mg:Ca:K",
        label: "Balance",
        desc: "The perfect mineral ratio similar to the human body's amniotic fluid."
    }
];

export function Science() {
    return (
        <section className="py-32 bg-white text-BRAND-deepBlue">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-BRAND-teal text-sm font-bold tracking-widest uppercase mb-4 block">
                        The Science of Happiness
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Purity by Numbers
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-8">
                        Experience the joy of pure hydration. Our water is not just healthy; it's a daily source of vitality and pleasure.
                    </p>
                    <div className="flex justify-center gap-4">
                        <div className="bg-BRAND-teal/10 px-6 py-2 rounded-full text-BRAND-teal font-semibold text-sm">
                            #PureJoy
                        </div>
                        <div className="bg-BRAND-teal/10 px-6 py-2 rounded-full text-BRAND-teal font-semibold text-sm">
                            #HealthyLife
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="inline-flex items-center justify-center p-4 bg-BRAND-deepBlue/5 rounded-full mb-6">
                                <stat.icon className="w-8 h-8 text-BRAND-deepBlue" />
                            </div>
                            <div className="text-5xl font-bold font-serif text-BRAND-deepBlue mb-2">
                                {stat.value}<span className="text-2xl ml-1 text-BRAND-teal">{stat.unit}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{stat.label}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {stat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        size="lg"
                        className="shadow-xl bg-BRAND-deepBlue text-white hover:bg-BRAND-deepBlue/90"
                    >
                        Start Your Healthy Journey
                    </Button>
                </div>
            </div>
        </section>
    );
}
