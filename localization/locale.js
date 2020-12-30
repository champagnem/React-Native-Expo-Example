import i18n from 'i18n-js';
import en from './en';
import fr from './fr';

i18n.fallbacks = true;
i18n.translations = { fr, en };

export default i18n;