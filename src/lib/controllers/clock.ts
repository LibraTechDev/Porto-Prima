import { appStore } from '@/lib/stores/appStore';

/** Isolated clock slice: re-renders locale when lang changes. */
export function initClockController() {
  const clockEl = document.getElementById('win8-clock-time');
  const dateEl = document.getElementById('win8-clock-date');
  const welcomeClockEl = document.getElementById('welcome-clock-time');
  const welcomeDateEl = document.getElementById('welcome-clock-date');
  const render = () => {
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    if (clockEl) {
      clockEl.textContent = time;
    }
    if (welcomeClockEl) {
      welcomeClockEl.textContent = time;
    }
    if (dateEl || welcomeDateEl) {
      const locale = appStore.get().lang === 'id' ? 'id-ID' : 'en-US';
      const date = now.toLocaleDateString(locale, { weekday: 'long', month: 'long', day: 'numeric' });
      if (dateEl) dateEl.textContent = date;
      if (welcomeDateEl) welcomeDateEl.textContent = date;
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
