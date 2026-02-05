import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';
import { Loader2, FileText, ExternalLink, Calendar } from 'lucide-react';

interface Announcement {
    id: string;
    title: string;
    content: string;
    thumbnail_url: string;
    file_url?: string;
    created_at: string;
}

export function Announcement() {
    const { t } = useTranslation();
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAnnouncements();
    }, []);

    const loadAnnouncements = async () => {
        try {
            const { data, error } = await supabase
                .from('announcements')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            if (data) setAnnouncements(data);
        } catch (error) {
            console.error('Error loading announcements:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleItemClick = (url?: string) => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    const latestAnnouncements = announcements.slice(0, 2);
    const archiveAnnouncements = announcements.slice(2, 5);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-BRAND-teal" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50/50 pt-32 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-BRAND-deepBlue mb-4">
                            {t('nav.announcement')}
                        </h1>
                        <p className="text-gray-500">AETERNO의 핵심 소식과 기술 자료를 확인하세요.</p>
                    </div>

                    {/* Latest 2 Section */}
                    {latestAnnouncements.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                            {latestAnnouncements.map((item) => (
                                <motion.div
                                    key={item.id}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
                                >
                                    <div
                                        className="aspect-[16/9] overflow-hidden relative cursor-pointer group"
                                        onClick={() => handleItemClick(item.file_url || item.thumbnail_url)}
                                    >
                                        <img
                                            src={item.thumbnail_url}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="bg-white/90 p-3 rounded-full shadow-lg">
                                                <ExternalLink className="w-6 h-6 text-BRAND-teal" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-grow">
                                        <div className="flex items-center text-xs text-gray-400 mb-3 space-x-3">
                                            <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {new Date(item.created_at).toLocaleDateString()}</span>
                                            {item.file_url && (
                                                <span className="flex items-center text-BRAND-teal font-bold">
                                                    <FileText className="w-3 h-3 mr-1" /> PDF/Attachment
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="text-xl font-bold text-BRAND-deepBlue mb-4 line-clamp-2">{item.title}</h2>
                                        <p className="text-[13px] text-gray-600 leading-relaxed line-clamp-6 whitespace-pre-line">
                                            {item.content}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 mb-20">
                            <p className="text-gray-400">등록된 최신 공지사항이 없습니다.</p>
                        </div>
                    )}

                    {/* Archive Section (Last 3) */}
                    {archiveAnnouncements.length > 0 && (
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Past Announcements</h3>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                {archiveAnnouncements.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => handleItemClick(item.file_url || item.thumbnail_url)}
                                        className="flex items-center p-6 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer group"
                                    >
                                        <div className="w-20 h-12 bg-gray-100 rounded overflow-hidden mr-6 flex-shrink-0">
                                            <img src={item.thumbnail_url} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="" />
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-BRAND-deepBlue group-hover:text-BRAND-teal transition-colors line-clamp-1">{item.title}</h4>
                                            <span className="text-[11px] text-gray-400">{new Date(item.created_at).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex-shrink-0 ml-4">
                                            {item.file_url?.toLowerCase().endsWith('.pdf') ? (
                                                <FileText className="w-5 h-5 text-gray-300 group-hover:text-BRAND-teal transition-colors" />
                                            ) : (
                                                <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-BRAND-teal transition-colors" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
