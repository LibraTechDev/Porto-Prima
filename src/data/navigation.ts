import { DRAWER_TABS } from '@/constants/metro';

export const drawerTabs = DRAWER_TABS;

export interface ContactDef {
  label: string;
  value: string;
  sub: string;
  href?: string;
  tone: string;
}
