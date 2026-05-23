import en from './messages/en.json';
import ja from './messages/ja.json';

export type Locale = 'ja' | 'en';
export const locales: Locale[] = ['ja', 'en'];
export const defaultLocale: Locale = 'ja';

const dictionaries = { en, ja } as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type Dictionary = ReturnType<typeof getDictionary>;
