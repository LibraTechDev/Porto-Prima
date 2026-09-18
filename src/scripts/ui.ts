/**
 * UI entry (ACID thin wrapper).
 * State lives in lib/stores/appStore; rendering lives in lib/controllers/*.
 * This file only boots controllers once (safe against ESM late-execution).
 */
import { initApp } from '@/lib/controllers/init';
import { appStore, closeDrawer, openDrawer, switchTab } from '@/lib/stores/appStore';

declare global {
  interface Window {
    __metroState?: {
      openDrawer: typeof openDrawer;
      closeDrawer: typeof closeDrawer;
      switchAppTab: typeof switchTab;
      getLang: () => string;
    };
  }
}

if (typeof window !== 'undefined') {
  const boot = () => {
    initApp();
    if (!window.__metroState) {
      window.__metroState = {
        openDrawer,
        closeDrawer,
        switchAppTab: switchTab,
        getLang: () => appStore.get().lang,
      };
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
}
