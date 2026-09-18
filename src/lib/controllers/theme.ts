import { appStore } from '@/lib/stores/appStore';

/** Isolated theme slice: single writer for data-theme + label. */
export function initThemeController() {
  const apply = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    const label = document.getElementById('theme-icon-label');
    if (label) label.textContent = theme === 'metro' ? 'Metro Dark' : 'Metro Light';
  };
  apply(appStore.get().theme);
  return appStore.subscribe((s) => apply(s.theme));
}
