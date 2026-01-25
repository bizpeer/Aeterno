import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
    const { t, i18n } = useTranslation();
    const { lang } = useParams<{ lang: string }>();
    const currentLang = lang || i18n.language || 'ko';

    return (
        <footer className="bg-BRAND-deepBlue text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-serif font-bold tracking-widest mb-6">AETERNO</h3>
                        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                            {t('footer.brandDesc')}
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">{t('footer.company')}</h4>
                            <ul className="space-y-2 text-sm text-white/60">
                                <li><Link to={`/${currentLang}/brand-story`} className="hover:text-BRAND-aqua transition-colors">About Us</Link></li>
                                <li><Link to={`/${currentLang}/career`} className="hover:text-BRAND-aqua transition-colors">Careers</Link></li>
                                <li><Link to={`/${currentLang}/contact`} className="hover:text-BRAND-aqua transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">{t('footer.legal')}</h4>
                            <ul className="space-y-2 text-sm text-white/60">
                                <li><Link to={`/${currentLang}/privacy`} className="hover:text-BRAND-aqua transition-colors">Privacy Policy</Link></li>
                                <li><Link to={`/${currentLang}/terms`} className="hover:text-BRAND-aqua transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Connected */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">{t('footer.followUs')}</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white/60 hover:text-BRAND-aqua transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-white/60 hover:text-BRAND-aqua transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-white/60 hover:text-BRAND-aqua transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                    <p>&copy; {new Date().getFullYear()} AETERNO. {t('footer.rights')}</p>
                    <p className="mt-2 md:mt-0">{t('footer.designed')}</p>
                </div>
            </div>
        </footer>
    );
}
