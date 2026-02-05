import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import heroBg from '../assets/images/company-exterior.png';
import { Play, FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from '../components/common/Button';
import { supabase } from '../lib/supabase';

interface MediaAsset {
    id: string;
    type: 'video' | 'material';
    title: string;
    thumbnail_url: string;
    youtube_link: string;
    file_url?: string;
    order_index: number;
}

export function News() {
    const { t } = useTranslation();
    const [videos, setVideos] = useState<MediaAsset[]>([]);
    const [materials, setMaterials] = useState<MediaAsset[]>([]);
    const [, setLoading] = useState(true);

    useEffect(() => {
        loadMedia();
    }, []);

    const loadMedia = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('media_assets')
            .select('*')
            .order('order_index', { ascending: true });

        if (error) {
            console.error('Error loading media assets:', error);
            setLoading(false);
            return;
        }
        if (data) {
            setVideos(data.filter(item => item.type === 'video'));
            setMaterials(data.filter(item => item.type === 'material'));
        }
        setLoading(false);
    };

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
                            {videos.length > 0 ? videos.map((video) => (
                                <motion.a
                                    key={video.id}
                                    href={video.youtube_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5 }}
                                    className="group relative aspect-video bg-white/5 rounded-xl overflow-hidden block border border-white/10"
                                >
                                    <img src={video.thumbnail_url} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white text-sm font-medium">{video.title}</p>
                                    </div>
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ExternalLink className="text-white w-4 h-4" />
                                    </div>
                                </motion.a>
                            )) : (
                                <div className="col-span-full py-10 text-center text-white/20 italic">No videos updated.</div>
                            )}
                        </div>
                    </div>

                    {/* Material Section (Right) */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
                            <FileText className="text-BRAND-aqua w-6 h-6" />
                            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">{t('news.brochure')}</h2>
                        </div>
                        <div className="space-y-4">
                            {materials.map((item) => (
                                <div key={item.id} className="bg-white/5 p-6 rounded-xl flex items-center justify-between group hover:bg-white/10 transition-colors border border-white/5">
                                    <div className="flex items-center space-x-6">
                                        <div className="w-16 h-20 bg-BRAND-teal/20 rounded-lg flex items-center justify-center shrink-0">
                                            {item.thumbnail_url ? (
                                                <img src={item.thumbnail_url} className="w-full h-full object-cover rounded-lg" alt="" />
                                            ) : (
                                                <FileText className="text-BRAND-aqua w-8 h-8 opacity-50" />
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-1">{item.title}</h3>
                                            <p className="text-white/40 text-sm">{item.type === 'material' ? 'PDF/Resource' : 'Video'}</p>
                                        </div>
                                    </div>
                                    {item.file_url ? (
                                        <a href={item.file_url} target="_blank" rel="noopener noreferrer">
                                            <Button variant="ghost" className="text-BRAND-aqua hover:text-white">
                                                <Download className="w-5 h-5" />
                                            </Button>
                                        </a>
                                    ) : (
                                        <a href={item.youtube_link} target="_blank" rel="noopener noreferrer">
                                            <Button variant="ghost" className="text-BRAND-aqua hover:text-white">
                                                <ExternalLink className="w-5 h-5" />
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            ))}
                            {materials.length === 0 && (
                                <div className="py-10 text-center text-white/20 italic">No materials updated.</div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Resource Library Board (at the bottom as requested) */}
                <div className="mt-24 space-y-8">
                    <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wider italic">Resource Repository</h2>
                        <span className="text-xs text-BRAND-teal uppercase font-bold tracking-widest ml-auto">Verified Archive</span>
                    </div>

                    <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/10">
                        <table className="w-full text-left">
                            <thead className="bg-white/10 text-white/40 text-xs uppercase tracking-widest font-bold">
                                <tr>
                                    <th className="px-8 py-6">Category</th>
                                    <th className="px-8 py-6">Resource Title</th>
                                    <th className="px-8 py-6 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[...videos, ...materials].sort((a, b) => b.order_index - a.order_index).map((asset) => (
                                    <tr key={asset.id} className="hover:bg-white/10 transition-colors">
                                        <td className="px-8 py-6">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-tighter ${asset.type === 'video' ? 'bg-BRAND-aqua/20 text-BRAND-aqua' : 'bg- BRAND-teal/20 text-BRAND-teal'}`}>
                                                {asset.type.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="text-white font-medium">{asset.title}</div>
                                            <div className="text-white/20 text-[10px] mt-1">ID: {asset.id}</div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button
                                                onClick={() => window.open(asset.file_url || asset.youtube_link, '_blank')}
                                                className="text-BRAND-aqua hover:underline text-sm font-bold flex items-center justify-end"
                                            >
                                                Open <ExternalLink className="w-4 h-4 ml-2" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {(videos.length + materials.length) === 0 && (
                                    <tr>
                                        <td colSpan={3} className="px-8 py-20 text-center text-white/20 italic">The repository is currently empty.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
