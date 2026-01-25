import { motion } from 'framer-motion';
import { Activity, Database, Droplet } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../common/Button';
import scienceGraphImg from '../../assets/images/science-graph.png';
import waterDensityImg from '../../assets/images/water-density.jpg';

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
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { lang } = useParams<{ lang: string }>();
    const currentLang = lang || 'ko';

    return (
        <section className="py-32 bg-white text-BRAND-deepBlue">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-BRAND-teal text-sm font-bold tracking-widest uppercase mb-4 block">
                        The Science of Happiness
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                        Purity by Numbers
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
                            #AETERNO1000
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
                            className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="inline-flex items-center justify-center p-4 bg-BRAND-deepBlue/5 rounded-full mb-6">
                                <stat.icon className="w-8 h-8 text-BRAND-deepBlue" />
                            </div>
                            <div className="text-5xl font-bold font-serif text-BRAND-deepBlue mb-2">
                                {stat.value}<span className="text-2xl ml-1 text-BRAND-teal">{stat.unit}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{stat.label}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {stat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Science Visualization Section */}
                <div className="space-y-24 mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-6 flex flex-col justify-center"
                        >
                            <h4 className="text-BRAND-deepBlue font-bold mb-4 text-center">{t('science.table.classification')}</h4>
                            <img src={scienceGraphImg} alt="Science Graph" className="w-full h-auto" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex flex-col"
                        >
                            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-2xl h-full flex flex-col">
                                <table className="w-full h-full text-sm text-left">
                                    <thead className="text-xs text-white uppercase bg-BRAND-deepBlue">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">{t('science.table.depth')}</th>
                                            <th scope="col" className="px-6 py-4">{t('science.table.classification')}</th>
                                            <th scope="col" className="px-6 py-4">{t('science.table.organic')}</th>
                                            <th scope="col" className="px-6 py-4">{t('science.table.micro')}</th>
                                            <th scope="col" className="px-6 py-4">{t('science.table.safety')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr className="border-b hover:bg-gray-50 transition-colors">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">0m (Surface)</th>
                                            <td className="px-6 py-4">{t('science.table.surface')}</td>
                                            <td className="px-6 py-4 text-red-500 font-bold">{t('science.table.high')}</td>
                                            <td className="px-6 py-4">{t('science.table.detected')}</td>
                                            <td className="px-6 py-4 font-bold text-gray-400 text-xl">C</td>
                                        </tr>
                                        <tr className="border-b hover:bg-gray-50 transition-colors">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">200m</th>
                                            <td className="px-6 py-4 text-xs">{t('science.table.threshold')}</td>
                                            <td className="px-6 py-4 text-orange-400 font-bold">{t('science.table.low')}</td>
                                            <td className="px-6 py-4">{t('science.table.risk')}</td>
                                            <td className="px-6 py-4 font-bold text-BRAND-teal text-xl">B</td>
                                        </tr>
                                        <tr className="bg-BRAND-deepBlue/5 hover:bg-BRAND-deepBlue/10 transition-colors">
                                            <th scope="row" className="px-6 py-4 font-bold text-BRAND-deepBlue whitespace-nowrap">1,032m</th>
                                            <td className="px-6 py-4 font-bold text-BRAND-deepBlue">{t('science.table.purezone')}</td>
                                            <td className="px-6 py-4 font-bold text-BRAND-aqua">{t('science.table.zero')}</td>
                                            <td className="px-6 py-4 font-bold text-BRAND-aqua">{t('science.table.notDetected')}</td>
                                            <td className="px-6 py-4 font-bold text-BRAND-deepBlue text-3xl">A+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img src={waterDensityImg} alt="Water Molecule Density" className="w-full h-auto" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h3 className="text-3xl font-serif font-bold text-BRAND-deepBlue">Optimal Absorption</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Under the immense pressure of 100 atm at 1,032m depth, AETERNO's water molecules form smaller, more dense clusters. This unique structure allows for faster and deeper hydration at a cellular level, providing a smoothness that surface water simply cannot match.
                            </p>
                            <div className="h-1 w-20 bg-BRAND-teal" />
                        </motion.div>
                    </div>
                </div>

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
