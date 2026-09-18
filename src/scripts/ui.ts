/**
 * UI Controller for Windows 8 Metro Portfolio
 * Follows ACID state principles (Atomic, Consistent, Isolated, Durable)
 */

type SupportedLang = 'id' | 'en';
type SupportedTheme = 'metro' | 'metro-dark';

const STORAGE_KEYS = {
  LANG: 'porto_win8_lang',
  THEME: 'porto_win8_theme',
} as const;

class MetroStateManager {
  private currentLang: SupportedLang = 'id';
  private currentTheme: SupportedTheme = 'metro';

  constructor() {
    this.init();
  }

  private init() {
    // Durable load from localStorage
    const savedLang = localStorage.getItem(STORAGE_KEYS.LANG) as SupportedLang | null;
    if (savedLang === 'id' || savedLang === 'en') {
      this.currentLang = savedLang;
    } else {
      // Fallback detection
      this.currentLang = navigator.language.toLowerCase().startsWith('id') ? 'id' : 'en';
    }

    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) as SupportedTheme | null;
    if (savedTheme === 'metro' || savedTheme === 'metro-dark') {
      this.currentTheme = savedTheme;
    } else {
      // Default to metro
      this.currentTheme = 'metro';
    }

    // Apply atomic initial state
    this.applyTheme(this.currentTheme);
    this.applyLang(this.currentLang);
    this.setupClock();
    this.setupEventListeners();
  }

  /**
   * Atomic language update
   */
  public setLang(lang: SupportedLang) {
    if (this.currentLang === lang) return;
    this.currentLang = lang;
    localStorage.setItem(STORAGE_KEYS.LANG, lang);
    this.applyLang(lang);
  }

  public getLang(): SupportedLang {
    return this.currentLang;
  }

  private applyLang(lang: SupportedLang) {
    document.documentElement.lang = lang;

    // Update active button indicators
    const btnId = document.getElementById('btn-lang-id');
    const btnEn = document.getElementById('btn-lang-en');
    if (btnId && btnEn) {
      if (lang === 'id') {
        btnId.classList.add('btn-active', 'bg-white', 'text-black', 'font-bold');
        btnEn.classList.remove('btn-active', 'bg-white', 'text-black', 'font-bold');
      } else {
        btnEn.classList.add('btn-active', 'bg-white', 'text-black', 'font-bold');
        btnId.classList.remove('btn-active', 'bg-white', 'text-black', 'font-bold');
      }
    }

    // Toggle visibility of multilingual elements
    const idElements = document.querySelectorAll<HTMLElement>('[data-lang="id"]');
    const enElements = document.querySelectorAll<HTMLElement>('[data-lang="en"]');

    idElements.forEach((el) => {
      el.style.display = lang === 'id' ? '' : 'none';
    });

    enElements.forEach((el) => {
      el.style.display = lang === 'en' ? '' : 'none';
    });
  }

  /**
   * Atomic theme update
   */
  public setTheme(theme: SupportedTheme) {
    if (this.currentTheme === theme) return;
    this.currentTheme = theme;
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    this.applyTheme(theme);
  }

  public toggleTheme() {
    const nextTheme: SupportedTheme = this.currentTheme === 'metro' ? 'metro-dark' : 'metro';
    this.setTheme(nextTheme);
  }

  private applyTheme(theme: SupportedTheme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Update theme toggle icon / label if present
    const themeIcon = document.getElementById('theme-icon-label');
    if (themeIcon) {
      themeIcon.textContent = theme === 'metro' ? 'Metro Dark' : 'Metro Light';
    }
  }

  /**
   * Windows 8 Live Clock
   */
  private setupClock() {
    const clockEl = document.getElementById('win8-clock-time');
    const dateEl = document.getElementById('win8-clock-date');

    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');

      if (clockEl) {
        clockEl.textContent = `${hours}:${minutes}`;
      }

      if (dateEl) {
        const locale = this.currentLang === 'id' ? 'id-ID' : 'en-US';
        const dateString = now.toLocaleDateString(locale, {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        });
        dateEl.textContent = dateString;
      }
    };

    updateClock();
    setInterval(updateClock, 1000);
  }

  /**
   * Open App Drawer to a specific tab
   */
  public openDrawer(targetTabId?: string) {
    const drawer = document.getElementById('metro-app-drawer');
    if (!drawer) {
      console.warn('Metro App Drawer (#metro-app-drawer) not found in DOM');
      return;
    }

    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (targetTabId) {
      this.switchAppTab(targetTabId);
    }
  }

  /**
   * Close App Drawer and restore scrolling
   */
  public closeDrawer() {
    const drawer = document.getElementById('metro-app-drawer');
    if (drawer) {
      drawer.classList.remove('open');
    }
    document.body.style.overflow = '';
  }

  /**
   * Setup UI Event Listeners with Bulletproof Event Delegation
   */
  private setupEventListeners() {
    // Language switcher buttons
    const btnId = document.getElementById('btn-lang-id');
    const btnEn = document.getElementById('btn-lang-en');

    btnId?.addEventListener('click', () => this.setLang('id'));
    btnEn?.addEventListener('click', () => this.setLang('en'));

    // Theme toggle button
    const themeToggleBtn = document.getElementById('btn-theme-toggle');
    themeToggleBtn?.addEventListener('click', () => this.toggleTheme());

    // Global Click Event Delegation
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Drawer Back or Close button
      if (target.closest('#drawer-back-btn') || target.closest('#drawer-close-btn')) {
        e.preventDefault();
        this.closeDrawer();
        return;
      }

      // 2. Drawer Navigation Tabs
      const navBtn = target.closest<HTMLElement>('.drawer-nav-btn');
      if (navBtn) {
        e.preventDefault();
        const tab = navBtn.getAttribute('data-tab');
        if (tab) {
          this.switchAppTab(tab);
        }
        return;
      }

      // 3. Metro Tiles (Drawer targets & External links)
      const tile = target.closest<HTMLElement>('.metro-tile');
      if (tile) {
        // Direct external link (LinkedIn, GitHub, GitLab, Instagram, etc.)
        const externalLink = tile.getAttribute('data-external-link');
        if (externalLink) {
          e.preventDefault();
          window.open(externalLink, '_blank', 'noopener,noreferrer');
          return;
        }

        // Target drawer tab (fms, about, projects, experience, skills, etc.)
        const drawerTarget = tile.getAttribute('data-target');
        if (drawerTarget) {
          e.preventDefault();
          this.openDrawer(drawerTarget);
          return;
        }
      }
    });

    // Keyboard navigation (ESC to close drawer, Enter/Space to activate focused tile)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeDrawer();
        return;
      }

      if (e.key === 'Enter' || e.key === ' ') {
        const active = document.activeElement as HTMLElement | null;
        if (active && active.classList.contains('metro-tile')) {
          e.preventDefault();
          active.click();
        }
      }
    });
  }

  /**
   * Switch App View inside Drawer
   */
  public switchAppTab(tabId: string) {
    const tabs = document.querySelectorAll<HTMLElement>('.drawer-tab-content');
    const navButtons = document.querySelectorAll<HTMLElement>('.drawer-nav-btn');

    tabs.forEach((tab) => {
      if (tab.id === `tab-${tabId}`) {
        tab.classList.remove('hidden');
      } else {
        tab.classList.add('hidden');
      }
    });

    navButtons.forEach((btn) => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('bg-white', 'text-black', 'font-bold');
        btn.classList.remove('bg-transparent', 'text-white');
      } else {
        btn.classList.remove('bg-white', 'text-black', 'font-bold');
        btn.classList.add('bg-transparent', 'text-white');
      }
    });

    // Scroll drawer top
    const drawer = document.getElementById('metro-app-drawer');
    if (drawer) {
      drawer.scrollTop = 0;
    }
  }
}

// Global initialization — safe against ESM late-execution
declare global {
  interface Window {
    __metroState?: MetroStateManager;
  }
}

if (typeof window !== 'undefined') {
  const initApp = () => {
    if (!window.__metroState) {
      window.__metroState = new MetroStateManager();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}


