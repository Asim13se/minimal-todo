import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {format as formatDate, isDate} from 'date-fns';
import {ar, en} from 'date-fns/locale';
import i18nResources from './i18nResources';

const DateFNSLocales = {en, ar};

i18n.use(initReactI18next).init({
  resources: i18nResources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
    format: (value, format, lng) => {
      if (isDate(value)) {
        const locale = DateFNSLocales[lng];
        return formatDate(value, format, {locale});
      }
      return value;
    },
  },
});

export default i18n;
