import { appStore } from '@/lib/stores/appStore';
import type { Lang } from '@/types/content';

/** Isolated i18n slice: lang attr + button state + [data-lang] visibility. */
export function applyLang(lang: Lang) {
  document.documentElement.lang = lang;
  const btnId = document.getElementById('btn-lang-id');
  const btnEn = document.getElementById('btn-lang-en');
  if (btnId && btnEn) {
    const on = ['btn-active', 'bg-white', 'text-black', 'font-bold'];
    if (lang === 'id') {
      btnId.classList.add(...on);
      btnEn.classList.remove(...on);
    } else {
      btnEn.classList.add(...on);
      btnId.classList.remove(...on);
    }
  }
  document.querySelectorAll<HTMLElement>('[data-lang="id"]').forEach((el) => {
    el.style.display = lang === 'id' ? '' : 'none';
  });
  document.querySelectorAll<HTMLElement>('[data-lang="en"]').forEach((el) => {
    el.style.display = lang === 'en' ? '' : 'none';
  });
}

export function initI18nController() {
  applyLang(appStore.get().lang);
  return appStore.subscribe((s) => applyLang(s.lang));
}
