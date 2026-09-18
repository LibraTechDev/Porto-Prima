import { STORAGE_KEYS } from '@/constants/metro';
import { createStore, type Store } from '@/lib/store';
import type { AppState, Lang, Theme } from '@/types/content';

function initialLang(): Lang {
  try {
    const v = localStorage.getItem(STORAGE_KEYS.LANG);
    if (v === 'id' || v === 'en') return v;
  } catch {
    /* ignore */
  }
  return typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('id')
    ? 'id'
    : 'en';
}

function initialTheme(): Theme {
  try {
    const v = localStorage.getItem(STORAGE_KEYS.THEME);
    if (v === 'metro' || v === 'metro-dark') return v;
  } catch {
    /* ignore */
  }
  return 'metro';
}

export const appStore: Store<AppState> = createStore<AppState>({
  lang: typeof window !== 'undefined' ? initialLang() : 'id',
  theme: typeof window !== 'undefined' ? initialTheme() : 'metro',
  drawer: { open: false, tab: 'about' },
});

export function setLang(lang: Lang) {
  if (appStore.get().lang === lang) return;
  try {
    localStorage.setItem(STORAGE_KEYS.LANG, lang);
  } catch {
    /* ignore */
  }
  appStore.set({ lang });
}

export function setTheme(theme: Theme) {
  if (appStore.get().theme === theme) return;
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  } catch {
    /* ignore */
  }
  appStore.set({ theme });
}

export function toggleTheme() {
  setTheme(appStore.get().theme === 'metro' ? 'metro-dark' : 'metro');
}

/** Atomic: open + tab switch in one transaction. */
export function openDrawer(tab?: string) {
  const prev = appStore.get().drawer;
  appStore.set({ drawer: { open: true, tab: tab ?? prev.tab } });
}

export function closeDrawer() {
  const prev = appStore.get().drawer;
  if (!prev.open) return;
  appStore.set({ drawer: { ...prev, open: false } });
}

export function switchTab(tab: string) {
  const prev = appStore.get().drawer;
  if (prev.tab === tab && prev.open) return;
  appStore.set({ drawer: { ...prev, tab } });
}
