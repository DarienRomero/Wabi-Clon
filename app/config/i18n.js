import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
  es:require('../locales/es.json'),
  en:require('../locales/en.json'),
};
i18n.locale = "es";
i18n.fallbacks = true;


export default i18n;