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
                        Get in Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
                        Contact Us
                    </h2>

                    {/* Information Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16 items-start text-left">
                        {/* Address */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-BRAND-deepBlue">Address</h3>
                            <p className="text-gray-600 whitespace-pre-line">
                                123 Business Road, Tech District,<br />Seoul, South Korea
                            </p>
                        </div>
                        {/* Phone */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-BRAND-deepBlue">Phone</h3>
                            <p className="text-gray-600">
                                +82 2-1234-5678
                            </p>
                        </div>
                        {/* Email */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-BRAND-deepBlue">Email</h3>
                            <p className="text-gray-600">
                                contact@aeterno.com
                            </p>
                        </div>
                    </div>

                    {/* Google Map Embed */}
                    <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden mb-12 shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.332309852233!2d127.027610015!3d37.49794200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1e3456789%3A0xabcdef12345678!2sGangnam-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1625000000000!5m2!1sen!2skr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>

                    <p className="text-gray-600">
                        Leave your detailed inquiries below.
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
