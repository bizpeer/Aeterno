import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { useTranslation } from 'react-i18next';
// Using placeholder or the copied file if it exists
import productImg from '../../assets/images/product.png';

export function Products() {
    const { t } = useTranslation();
    return (
        <section className="py-32 bg-gray-50 text-BRAND-deepBlue">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-BRAND-teal text-sm font-bold tracking-widest uppercase mb-4 block">
                        Our Collection
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Mineral Balance
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Choose your perfect hydration balance from our premium selection.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <img src={productImg} alt="Aeterno Bottle" className="max-w-xs md:max-w-md drop-shadow-2xl" />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-3xl font-serif font-bold mb-4">Aeterno Soft</h3>
                            <p className="text-gray-600 mb-4">
                                Light, smooth, and refreshing. Perfect for daily hydration.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li>• Hardness: 50</li>
                                <li>• pH: 7.4</li>
                                <li>• Smooth finish</li>
                            </ul>
                            <Button
                                size="sm"
                                variant="outline"
                                className="mt-6 border-BRAND-teal text-BRAND-teal hover:bg-BRAND-teal hover:text-white"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                {t('cta.sample')}
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h3 className="text-3xl font-serif font-bold mb-4">Aeterno Hard</h3>
                            <p className="text-gray-600 mb-4">
                                Rich in minerals for active lifestyles and recovery.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-500">
                                <li>• Hardness: 300</li>
                                <li>• pH: 7.6</li>
                                <li>• Mineral rich</li>
                            </ul>
                            <Button
                                size="sm"
                                variant="outline"
                                className="mt-6 border-BRAND-teal text-BRAND-teal hover:bg-BRAND-teal hover:text-white"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                {t('cta.sample')}
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
