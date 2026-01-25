import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from '../common/Button';
import logoImg from '../../assets/images/logo.png';

export function Navbar() {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const { lang } = useParams<{ lang: string }>();
    const currentLang = lang || i18n.language || 'ko';
    const navigate = useNavigate();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Close dropdown when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const supportedLangs = [
        { code: 'ko', label: '한국어' },
        { code: 'en', label: 'English' },
        { code: 'ja', label: '日本語' },
        { code: 'zh', label: '中文' },
        { code: 'id', label: 'Bahasa Indonesia' },
        { code: 'ar', label: 'العربية' },
        { code: 'es', label: 'Español' },
        { code: 'fr', label: 'Français' }
    ];

    const changeLanguage = (newLang: string) => {
        // basename(/Aeterno)은 포함되지 않은 순수 경로를 가져옵니다.
        const currentPath = window.location.hash.includes('#')
            ? window.location.hash.split('#')[1]
            : window.location.pathname.replace(import.meta.env.BASE_URL, '') || '/';

        const segments = currentPath.split('/').filter(Boolean);

        // 첫 번째 세그먼트가 언어 코드인 경우 교체, 아니면 추가
        if (segments.length > 0 && supportedLangs.some(l => l.code === segments[0])) {
            segments[0] = newLang;
        } else {
            segments.unshift(newLang);
        }

        navigate(`/${segments.join('/')}`);
        setIsLangMenuOpen(false);
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { key: 'brandData', to: `/${currentLang}/brand-story` },
        { key: 'science', to: `/${currentLang}/science` },
        { key: 'products', to: `/${currentLang}/products` },
        { key: 'engineering', to: `/${currentLang}/engineering` },
        { key: 'news', to: `/${currentLang}/news` },
        { key: 'contact', to: `/${currentLang}/contact` },
    ];

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-BRAND-deepBlue/90 backdrop-blur-md py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to={`/${currentLang}`} className="flex items-center">
                    <img src={logoImg} alt="AETERNO" className="h-8 md:h-10 w-auto brightness-0 invert" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.key}
                            to={link.to}
                            className="text-white/80 hover:text-BRAND-aqua transition-colors text-sm uppercase tracking-wider"
                        >
                            {t(`nav.${link.key}`)}
                        </Link>
                    ))}

                    {/* Language Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <Button
                            variant="ghost"
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className="text-white hover:text-BRAND-aqua uppercase min-w-[80px] flex items-center justify-between gap-2"
                        >
                            <Globe className="w-4 h-4" />
                            <span>{currentLang.toUpperCase()}</span>
                            <ChevronDown className={clsx("w-3 h-3 transition-transform", isLangMenuOpen && "rotate-180")} />
                        </Button>

                        {isLangMenuOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 overflow-hidden border border-gray-100 flex flex-col">
                                {supportedLangs.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={clsx(
                                            "px-4 py-2 text-left hover:bg-gray-50 text-sm transition-colors",
                                            currentLang === lang.code ? "text-BRAND-deepBlue font-bold bg-gray-50" : "text-gray-600"
                                        )}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span>{lang.label}</span>
                                            <span className="text-xs uppercase text-gray-400">{lang.code}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-BRAND-deepBlue border-t border-white/10 p-6 flex flex-col space-y-4 shadow-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.key}
                            to={link.to}
                            className="text-white/90 hover:text-BRAND-aqua text-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t(`nav.${link.key}`)}
                        </Link>
                    ))}
                    <div className="border-t border-white/10 pt-4 mt-2 grid grid-cols-2 gap-2">
                        {supportedLangs.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={clsx(
                                    "px-3 py-2 text-left text-sm rounded transition-colors",
                                    currentLang === lang.code ? "bg-white text-BRAND-deepBlue font-bold" : "text-white/70 hover:bg-white/10"
                                )}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
