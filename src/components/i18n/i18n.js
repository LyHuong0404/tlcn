import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enLocale from '~/assets/locales/en.json';
import viLocale from '~/assets/locales/vi.json';


const resources = {
    en: { translation: enLocale },
    vi: { translation: viLocale },
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
