import React, { useState } from 'react';
import { Button } from '../common/Button';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';

export function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        contactPoint: '', // Email or Phone
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const { error } = await supabase
                .from('inquiries')
                .insert([
                    {
                        contact_point: formData.contactPoint,
                        message: formData.message,
                    }
                ]);

            if (error) throw error;

            alert('Thank you! We will reach out to your provided contact immediately.');
            setFormData({ contactPoint: '', message: '' });
        } catch (error) {
            console.error('Error submitting inquiry:', error);
            alert('Something went wrong. Please try again later.');
        }
    };

    return (
        <section id="contact" className="py-32 bg-white text-BRAND-deepBlue">
            <div className="container mx-auto px-6 max-w-2xl">
                <div className="text-center mb-12">
                    <span className="text-BRAND-teal text-sm font-bold tracking-widest uppercase mb-4 block">
                        Easy Access
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        Partner with AETERNO
                    </h2>
                    <p className="text-gray-600">
                        Simple steps to premium hydration. Leave your contact info, and we'll handle the rest.
                    </p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-sm"
                >
                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Email or Phone Number</label>
                        <input
                            type="text"
                            placeholder="e.g., name@company.com or 010-1234-5678"
                            className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:border-BRAND-teal focus:ring-2 focus:ring-BRAND-teal/20 outline-none transition-all text-lg"
                            required
                            value={formData.contactPoint}
                            onChange={e => setFormData({ ...formData, contactPoint: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2 text-gray-700">Quick Message (Optional)</label>
                        <textarea
                            placeholder="Need OEM? Samples? Just let us know briefly."
                            className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:border-BRAND-teal focus:ring-2 focus:ring-BRAND-teal/20 outline-none transition-all h-24 resize-none"
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg py-6 font-bold tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                        {t('cta.contact')}
                    </Button>

                    <p className="text-center text-xs text-gray-400 mt-4">
                        * We value your time. No complex forms, just direct connection.
                    </p>
                </motion.form>
            </div>
        </section>
    );
}
