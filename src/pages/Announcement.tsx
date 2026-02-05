import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';
import { Loader2 } from 'lucide-react';

interface Announcement {
    id: string;
    image_url: string;
    order_index: number;
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
                .order('order_index', { ascending: true });

            if (error) throw error;
            if (data) setAnnouncements(data);
        } catch (error) {
            console.error('Error loading announcements:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-BRAND-deepBlue mb-12">
                        {t('nav.announcement')}
                    </h1>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-8 h-8 animate-spin text-BRAND-teal" />
                        </div>
                    ) : announcements.length > 0 ? (
                        <div className="space-y-12">
                            {announcements.map((item, index) => (
                                <div key={item.id} className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg aspect-[16/9] relative">
                                    <img
                                        src={item.image_url}
                                        alt={`Announcement ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-12">
                            {/* Default Placeholders if no data */}
                            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm aspect-[16/9] flex items-center justify-center border border-dashed border-gray-200">
                                <div className="text-gray-400 flex flex-col items-center">
                                    <span className="text-4xl mb-4">📢</span>
                                    <p className="text-lg">No announcements yet.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
