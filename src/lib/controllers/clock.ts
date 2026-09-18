import { appStore } from '@/lib/stores/appStore';

/** Isolated clock slice: re-renders locale when lang changes. */
export function initClockController() {
  const clockEl = document.getElementById('win8-clock-time');
  const dateEl = document.getElementById('win8-clock-date');
  const welcomeClockEl = document.getElementById('welcome-clock-time');
  const welcomeDateEl = document.getElementById('welcome-clock-date');

  // FIX #9: Pisahkan render jam (tiap detik via interval) dan render tanggal/locale
  // (hanya saat lang berubah via store). Sebelumnya appStore.subscribe memanggil
  // render() penuh termasuk setInterval — menyebabkan double-render setiap detik.
  const renderTime = () => {
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    if (clockEl) clockEl.textContent = time;
    if (welcomeClockEl) welcomeClockEl.textContent = time;
  };

  const renderDate = (lang: string) => {
    if (!dateEl && !welcomeDateEl) return;
    const locale = lang === 'id' ? 'id-ID' : 'en-US';
    const date = new Date().toLocaleDateString(locale, { weekday: 'long', month: 'long', day: 'numeric' });
    if (dateEl) dateEl.textContent = date;
    if (welcomeDateEl) welcomeDateEl.textContent = date;
  };

  // Inisialisasi awal
  renderTime();
  renderDate(appStore.get().lang);

  // Timer untuk jam — hanya update teks jam, ringan
  const timer = window.setInterval(renderTime, 1000);

  // Store subscribe hanya untuk update locale tanggal saat lang berubah
  const unsub = appStore.subscribe((s) => renderDate(s.lang));

  return () => {
    window.clearInterval(timer);
    unsub();
  };
}
