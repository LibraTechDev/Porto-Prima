export type Lang = 'id' | 'en';
export type Theme = 'metro' | 'metro-dark';
export type TileSize = 'small' | 'standard' | 'wide' | 'large';
export type SintaRank = 'S1' | 'S2' | 'S3' | 'S4' | 'S5' | 'S6';

export interface LocalizedString {
  id: string;
  en: string;
}

export interface LocalizedArray {
  id: string[];
  en: string[];
}

export type Localizable<T = string> = T | LocalizedString;

export interface DrawerState {
  open: boolean;
  tab: string;
}

export interface AppState {
  lang: Lang;
  theme: Theme;
  drawer: DrawerState;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  company: string;
  period: LocalizedString;
  location: LocalizedString;
  description: LocalizedString;
  highlights?: LocalizedArray;
  badges: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: LocalizedString;
  major: LocalizedString;
  period: string;
  note?: LocalizedString;
  badges: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: LocalizedString;
  description: LocalizedString;
  category: LocalizedString;
  tech: string[];
  featured?: boolean;
  architecture?: {
    frontend: string;
    backend: string;
    oltp: string;
    olap: string;
    service: string;
    ops: string[];
  };
  link?: string;
  linkText?: LocalizedString;
}

export interface PublicationItem {
  id: string;
  title: LocalizedString;
  journal: string;
  volume: string;
  year: string;
  /** Normalized rank: 'S1'..'S6'. Legacy "SINTA 2" strings are normalized at runtime. */
  sinta?: SintaRank | string;
  note?: LocalizedString;
  link?: string;
}

export interface SkillItem {
  name: string;
  level: LocalizedString;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  name: LocalizedString;
  skills: SkillItem[];
}

export interface OrganizationItem {
  id: string;
  role: LocalizedString;
  organization: string;
  period: LocalizedString;
  duration?: string;
  category?: string;
  description: LocalizedString;
  certificateUrl?: string;
  detailsUrl?: string;
  badges?: string[];
  isHighlighted?: boolean;
}

export interface TileDef {
  size: TileSize;
  color: string;
  title: Localizable;
  subtitle?: Localizable;
  badge?: string;
  target?: string;
  externalLink?: string;
  liveTicker?: LocalizedArray;
  watermark?: string;
}

export interface TileGroupDef {
  id: string;
  accent: string;
  title: LocalizedString;
  tiles: TileDef[];
}
