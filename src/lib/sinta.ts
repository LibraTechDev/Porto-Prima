import { SINTA_TONE_MAP } from '@/constants/metro';
import type { PublicationItem, SintaRank } from '@/types/content';

const RANK_ORDER: SintaRank[] = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'];

/** Accepts legacy "SINTA 3", "sinta-2", "S3" -> normalized "S3". */
export function normalizeSinta(input?: string | null): SintaRank | null {
  if (!input) return null;
  const m = input.toUpperCase().replace(/[^0-9]/g, '');
  if (m >= '1' && m <= '6') return (`S${m}` as SintaRank);
  return null;
}

export function formatSinta(rank: SintaRank | string | undefined | null): string {
  const n = normalizeSinta(typeof rank === 'string' ? rank : null);
  return n ? `SINTA ${n.slice(1)}` : '';
}

export function getSintaTone(rank: SintaRank | string | undefined | null): string {
  const n = normalizeSinta(typeof rank === 'string' ? rank : null);
  if (!n) return 'bg-white/10';
  return SINTA_TONE_MAP[n] ?? 'bg-white/10';
}

export function sortBySintaRank<T extends PublicationItem>(pubs: T[]): T[] {
  return [...pubs].sort((a, b) => {
    const ra = normalizeSinta(a.sinta as string);
    const rb = normalizeSinta(b.sinta as string);
    const ia = ra ? RANK_ORDER.indexOf(ra) : 99;
    const ib = rb ? RANK_ORDER.indexOf(rb) : 99;
    return ia - ib;
  });
}

export function countByRank(pubs: PublicationItem[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const p of pubs) {
    const n = normalizeSinta(p.sinta as string);
    if (n) out[n] = (out[n] ?? 0) + 1;
  }
  return out;
}
