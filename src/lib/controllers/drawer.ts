import { appStore, closeDrawer, switchTab } from '@/lib/stores/appStore';

/** Isolated drawer slice: open/close + tab switch are atomic store updates. */
export function renderDrawer() {
  const { drawer } = appStore.get();
  const el = document.getElementById('metro-app-drawer');
  if (el) {
    el.classList.toggle('open', drawer.open);
    el.setAttribute('aria-hidden', drawer.open ? 'false' : 'true');
  }
  document.body.style.overflow = drawer.open ? 'hidden' : '';

  document.querySelectorAll<HTMLElement>('.drawer-tab-content').forEach((tab) => {
    tab.classList.toggle('hidden', tab.id !== `tab-${drawer.tab}`);
  });
  document.querySelectorAll<HTMLElement>('.drawer-nav-btn').forEach((btn) => {
    const active = btn.getAttribute('data-tab') === drawer.tab;
    btn.classList.toggle('bg-white', active);
    btn.classList.toggle('text-black', active);
    btn.classList.toggle('font-bold', active);
    btn.classList.toggle('bg-transparent', !active);
    btn.classList.toggle('text-white', !active);
  });
  if (el && drawer.open) el.scrollTop = 0;
}

export function initDrawerController() {
  renderDrawer();
  const unsub = appStore.subscribe(renderDrawer);
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (target.closest('#drawer-back-btn') || target.closest('#drawer-close-btn')) {
      e.preventDefault();
      closeDrawer();
      return;
    }
    const navBtn = target.closest<HTMLElement>('.drawer-nav-btn');
    if (navBtn) {
      e.preventDefault();
      const tab = navBtn.getAttribute('data-tab');
      if (tab) switchTab(tab);
    }
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
  return unsub;
}
