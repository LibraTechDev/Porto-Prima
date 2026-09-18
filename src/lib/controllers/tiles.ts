import { openDrawer } from '@/lib/stores/appStore';

/** Isolated tiles slice: event delegation for drawer targets + external links. */
export function initTilesController() {
  const onClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (target.closest('.drawer-nav-btn') || target.closest('#drawer-back-btn') || target.closest('#drawer-close-btn')) return;
    const tile = target.closest<HTMLElement>('.metro-tile');
    if (!tile) return;
    const externalLink = tile.getAttribute('data-external-link');
    if (externalLink) {
      e.preventDefault();
      window.open(externalLink, '_blank', 'noopener,noreferrer');
      return;
    }
    const drawerTarget = tile.getAttribute('data-target');
    if (drawerTarget) {
      e.preventDefault();
      openDrawer(drawerTarget);
    }
  };
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const active = document.activeElement as HTMLElement | null;
      if (active?.classList.contains('metro-tile')) {
        e.preventDefault();
        active.click();
      }
    }
  };
  document.addEventListener('click', onClick);
  window.addEventListener('keydown', onKey);
  return () => {
    document.removeEventListener('click', onClick);
    window.removeEventListener('keydown', onKey);
  };
}
