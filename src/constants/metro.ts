export const STORAGE_KEYS = {
  LANG: 'porto_win8_lang',
  THEME: 'porto_win8_theme',
} as const;

export const DRAWER_TABS = [
  { id: 'about', label: { id: 'Tentang', en: 'About' } },
  { id: 'fms', label: { id: 'Fleet Management', en: 'Fleet Management' } },
  { id: 'experience', label: { id: 'Pengalaman', en: 'Experience' } },
  { id: 'organizations', label: { id: 'Organisasi', en: 'Organizations' } },
  { id: 'projects', label: { id: 'Proyek & GitLab', en: 'Projects & GitLab' } },
  { id: 'skills', label: { id: 'Keahlian', en: 'Skills' } },
  { id: 'publications', label: { id: 'Publikasi', en: 'Publications' } },
  { id: 'education', label: { id: 'Pendidikan', en: 'Education' } },
  { id: 'contact', label: { id: 'Kontak', en: 'Contact' } },
] as const;

export type DrawerTabId = (typeof DRAWER_TABS)[number]['id'];

export const TILE_SIZE_CLASSES: Record<string, string> = {
  small: 'col-span-1 row-span-1 h-20 min-h-[5rem]',
  standard: 'col-span-1 row-span-1 h-36 min-h-[9rem]',
  wide: 'col-span-1 sm:col-span-2 row-span-1 h-36 min-h-[9rem]',
  large: 'col-span-1 sm:col-span-2 row-span-2 h-[19rem] min-h-[19rem]',
};

export const SINTA_TONE_MAP: Record<string, string> = {
  S1: 'bg-metro-mango',
  S2: 'bg-metro-cobalt',
  S3: 'bg-metro-emerald',
  S4: 'bg-white/10',
  S5: 'bg-white/10',
  S6: 'bg-white/10',
};
