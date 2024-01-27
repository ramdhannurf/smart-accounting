import type {InitOptions} from 'i18next';

export const FALLBACK_LOCALE = 'in';
export const supportedLocales = ['en', 'in'] as const;
export type Locales = (typeof supportedLocales)[number];

// You can name the cookie to whatever you want
export const LANGUAGE_COOKIE = 'lang';

export function getOptions(lang = FALLBACK_LOCALE, ns = 'common'): InitOptions {
  return {
    // debug: true, // Set to true to see 
    supportedLngs: supportedLocales,
    fallbackLng: FALLBACK_LOCALE,
    lng: lang,
    ns,
  };
}
