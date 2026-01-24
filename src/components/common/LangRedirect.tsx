import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function LangRedirect() {
    const navigate = useNavigate();

    useEffect(() => {
        // Detect browser language or default to 'ko'
        const supportedLangs = ['ko', 'en', 'ja', 'zh', 'id', 'ar', 'es', 'fr'];
        const browserLang = navigator.language.split('-')[0];
        const targetLang = supportedLangs.includes(browserLang) ? browserLang : 'ko';

        navigate(`/${targetLang}`, { replace: true });
    }, [navigate]);

    return null;
}
