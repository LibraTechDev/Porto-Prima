/** Isolated welcome slice: one-shot lock-screen dismissal (DOM-local, no store). */
export function initWelcomeController() {
  const el = document.getElementById('welcome-screen');
  if (!el) return () => {};

  document.body.style.overflow = 'hidden';

  let dismissed = false;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    el.classList.add('welcome-dismissed');
    document.body.style.overflow = '';
    window.setTimeout(() => el.setAttribute('hidden', ''), 350);
  };

  el.addEventListener('click', dismiss);
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      dismiss();
    }
  };
  el.addEventListener('keydown', onKey);
  return () => el.removeEventListener('keydown', onKey);
}
