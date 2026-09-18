import { appStore } from '@/lib/stores/appStore';

/** Isolated clock slice: re-renders locale when lang changes. */
export function initClockController() {
  const clockEl = document.getElementById('win8-clock-time');
  const dateEl = document.getElementById('win8-clock-date');
  const render = () => {
    const now = new Date();
    if (clockEl) {
      clockEl.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    }
    if (dateEl) {
      const locale = appStore.get().lang === 'id' ? 'id-ID' : 'en-US';
      dateEl.textContent = now.toLocaleDateString(locale, { weekday: 'long', month: 'long', day: 'numeric' });
    }
  };
  render();
  const timer = window.setInterval(render, 1000);
  const unsub = appStore.subscribe(render);
  return () => {
    window.clearInterval(timer);
    unsub();
  };
}
