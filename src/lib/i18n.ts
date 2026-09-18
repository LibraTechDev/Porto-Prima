import type { Lang, LocalizedString } from '@/types/content';

export function isLocalized(value: unknown): value is LocalizedString {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in (value as Record<string, unknown>) &&
    'en' in (value as Record<string, unknown>)
  );
}

export function t(value: string | LocalizedString | undefined, lang: Lang): string {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return lang === 'id' ? value.id : value.en;
}

export function detectLang(): Lang {
  try {
    const saved = localStorage.getItem('porto_win8_lang');
    if (saved === 'id' || saved === 'en') return saved;
  } catch {
    /* ignore */
  }
  if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('id')) return 'id';
  return 'en';
}
