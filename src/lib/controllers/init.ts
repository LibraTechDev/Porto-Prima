import { setLang, toggleTheme } from '@/lib/stores/appStore';
import { initClockController } from './clock';
import { initDrawerController } from './drawer';
import { initI18nController } from './i18n-controller';
import { initThemeController } from './theme';
import { initTilesController } from './tiles';
import { initWelcomeController } from './welcome';

let booted = false;

/** Thin wiring: each slice owns one concern (ACID isolated). */
export function initApp() {
  if (booted) return;
  booted = true;
  initThemeController();
  initI18nController();
  initClockController();
  initDrawerController();
  initTilesController();
  initWelcomeController();

  document.getElementById('btn-lang-id')?.addEventListener('click', () => setLang('id'));
  document.getElementById('btn-lang-en')?.addEventListener('click', () => setLang('en'));
  document.getElementById('btn-theme-toggle')?.addEventListener('click', () => toggleTheme());
}
