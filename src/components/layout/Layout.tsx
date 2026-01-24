import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const { lang } = useParams<{ lang: string }>();
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        if (lang) {
            if (['ko', 'en', 'ja', 'zh', 'id', 'ar', 'es', 'fr'].includes(lang)) {
                i18n.changeLanguage(lang);
                // Set HTML dir attribute for RTL
                document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
                document.documentElement.lang = lang;
            } else {
                // Invalid language, redirect to default
                navigate('/ko', { replace: true });
            }
        }
    }, [lang, i18n, navigate]);

    return (
        <HelmetProvider>
            <Helmet>
                <html lang={lang || 'ko'} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
            </Helmet>
            <div className="flex flex-col min-h-screen bg-BRAND-deepBlue text-white font-sans selection:bg-BRAND-teal selection:text-white">
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    );
}
