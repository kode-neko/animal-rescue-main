import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es.json';
import en from './en.json';

function initI18n() {
  const lang = navigator.language;
  i18n
    .use(initReactI18next)
    .init({
      resources: { es: { translation: es }, en: { translation: en } },
      lng: lang,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default initI18n;
