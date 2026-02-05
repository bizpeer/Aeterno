import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Button } from '../components/common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    description: string;
    images: string[];
    details: any;
}

export function ProductDetail() {
    const { id, lang } = useParams<{ id: string, lang: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        loadProduct();
    }, [id]);

    const loadProduct = async () => {
        if (!id) return;
        setLoading(true);
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error loading product:', error);
            setLoading(false);
            return;
        }
        if (data) setProduct(data);
        setLoading(false);
    };

    if (loading) {
        return <div className="min-h-screen bg-BRAND-deepBlue flex items-center justify-center text-white">Loading...</div>;
    }

    if (!product) {
        return <div className="min-h-screen bg-BRAND-deepBlue flex items-center justify-center text-white">Product not found.</div>;
    }

    return (
        <div className="min-h-screen bg-white text-BRAND-deepBlue pt-32 pb-20">
            <div className="container mx-auto px-6">
                <button
                    onClick={() => navigate(`/${lang}/products`)}
                    className="flex items-center text-gray-500 hover:text-BRAND-teal mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" /> Back to Collection
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-gray-50 rounded-3xl overflow-hidden relative group">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeImageIndex}
                                    src={product.images[activeImageIndex]}
                                    alt={product.name}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {product.images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => setActiveImageIndex(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={() => setActiveImageIndex(prev => prev === product.images.length - 1 ? 0 : prev + 1)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImageIndex(i)}
                                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImageIndex === i ? 'border-BRAND-teal' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-BRAND-teal font-bold tracking-widest uppercase mb-4 block">Premium Hydration</span>
                            <h1 className="text-5xl font-serif font-bold mb-6 italic">{product.name}</h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="bg-gray-50 p-8 rounded-2xl mb-8 space-y-4">
                                <h3 className="font-bold uppercase text-sm tracking-wider text-gray-400">Specifications</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(product.details || {}).map(([key, value]: [string, any]) => (
                                        <div key={key}>
                                            <span className="block text-xs text-gray-400 uppercase">{key}</span>
                                            <span className="font-bold">{value}</span>
                                        </div>
                                    ))}
                                    {/* Default specs if none provided */}
                                    {!product.details && (
                                        <>
                                            <div>
                                                <span className="block text-xs text-gray-400 uppercase">pH Level</span>
                                                <span className="font-bold">7.4 - 7.6</span>
                                            </div>
                                            <div>
                                                <span className="block text-xs text-gray-400 uppercase">Origin</span>
                                                <span className="font-bold">Natural Spring</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="w-full md:w-auto px-12 py-6 text-lg font-bold shadow-xl hover:shadow-BRAND-teal/20 transition-all transform hover:-translate-y-1"
                                onClick={() => navigate(`/${lang}/contact`)}
                            >
                                Contact for Inquiry
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
