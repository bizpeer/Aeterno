import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import heroBg from '../assets/images/company-exterior.png';
import { Play, FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from '../components/common/Button';

export function News() {
    const { t } = useTranslation();

    const videoLinks = [
        { id: '1', title: 'Aeterno Brand Story', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        { id: '2', title: 'The Science of Deep Water', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        { id: '3', title: 'Pure Extraction Process', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        { id: '4', title: 'Global Partnership 2026', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    ];

    const brochures = [
        { id: '1', title: 'Product Catalog 2026', desc: 'Detailed specifications of our minerals.', link: '#' },
        { id: '2', title: 'Company Profile', desc: 'Learn about our history and vision.', link: '#' },
        { id: '3', title: 'Science Whitepaper', desc: 'The research behind our deep ocean water.', link: '#' },
    ];

    return (
        <div className="bg-BRAND-deepBlue min-h-screen pt-20">
            {/* Header / Company Exterior */}
            <section className="relative h-[50vh] w-full overflow-hidden">
                <img
                    src={heroBg}
                    alt="Company Exterior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-white tracking-widest"
                    >
                        {t('news.title')}
                    </motion.h1>
                </div>
            </section>

            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Video Section (Left) */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
                            <Play className="text-BRAND-aqua w-6 h-6" />
                            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{t('news.video')}</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {videoLinks.map((video) => (
                                <motion.a
                                    key={video.id}
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5 }}
                                    className="group relative aspect-video bg-white/5 rounded-xl overflow-hidden block"
                                >
                                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white text-sm font-medium">{video.title}</p>
                                    </div>
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ExternalLink className="text-white w-4 h-4" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Brochure Section (Right) */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
                            <FileText className="text-BRAND-aqua w-6 h-6" />
                            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{t('news.brochure')}</h2>
                        </div>
                        <div className="space-y-4">
                            {brochures.map((item) => (
                                <div key={item.id} className="bg-white/5 p-6 rounded-xl flex items-center justify-between group hover:bg-white/10 transition-colors">
                                    <div className="flex items-center space-x-6">
                                        <div className="w-16 h-20 bg-BRAND-teal/20 rounded-lg flex items-center justify-center shrink-0">
                                            <FileText className="text-BRAND-aqua w-8 h-8 opacity-50" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-1">{item.title}</h3>
                                            <p className="text-white/40 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" className="text-BRAND-aqua hover:text-white">
                                        <Download className="w-5 h-5" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Other Materials (Bottom) */}
                <div className="mt-24 space-y-8">
                    <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{t('news.other')}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="aspect-[4/3] bg-white/5 rounded-2xl border border-white/10 p-8 flex flex-col justify-between hover:border-BRAND-teal/50 transition-colors">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-BRAND-aqua/10 rounded-full flex items-center justify-center">
                                        <ExternalLink className="text-BRAND-aqua w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white">Press Release #{i}</h4>
                                    <p className="text-white/40 text-sm leading-relaxed">Detailed info about recent activities and developments in the field of mineral science.</p>
                                </div>
                                <span className="text-xs text-white/20 uppercase tracking-widest font-bold">2026.01.{10 + i}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
