import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { supabase } from '../../lib/supabase';
import { useNavigate, useParams } from 'react-router-dom';

interface Product {
    id: string;
    name: string;
    description: string;
    images: string[];
}

export function Products() {
    const navigate = useNavigate();
    const { lang } = useParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error loading products:', error);
            setLoading(false);
            return;
        }
        if (data) setProducts(data);
        setLoading(false);
    };

    if (loading) return null;

    return (
        <section id="products" className="py-32 bg-gray-50 text-BRAND-deepBlue">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all group flex flex-col"
                        >
                            <div className="aspect-square mb-8 overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center p-4">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <h3 className="text-2xl font-serif font-bold mb-3">{product.name}</h3>
                            <p className="text-gray-500 mb-6 flex-grow line-clamp-2">
                                {product.description}
                            </p>

                            <Button
                                size="sm"
                                variant="outline"
                                className="w-full border-BRAND-teal text-BRAND-teal hover:bg-BRAND-teal hover:text-white transition-all font-bold"
                                onClick={() => navigate(`/${lang}/products/${product.id}`)}
                            >
                                Details
                            </Button>
                        </motion.div>
                    ))}

                    {/* Show placeholder if no products */}
                    {products.length === 0 && (
                        <div className="col-span-full py-20 text-center text-gray-400">
                            No products found. Please add products in the admin panel.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
