export interface ArchNodeDef {
  title: string;
  tag: string;
  tagTone: string;
  desc: string;
  accent: string;
}

export const ARCH_COLUMNS: Array<{ heading: string; dot: string; nodes: ArchNodeDef[] }> = [
  {
    heading: '1. Ingress & Client Layer',
    dot: 'bg-metro-cobalt',
    nodes: [
      { title: 'Nginx Reverse Proxy', tag: 'Reverse Proxy / Port 80', tagTone: 'bg-metro-cobalt', desc: 'Dockerized on VPS • Gzip Compression • Rate Limiting & Ban Auditor', accent: 'border-l-metro-cobalt' },
      { title: 'Vue.js 3 SPA', tag: 'Client GUI', tagTone: 'bg-metro-teal', desc: 'Pinia State • Vite Build • Chart Dashboards, Leaflet Maps & Polling Sync', accent: 'border-l-metro-teal' },
    ],
  },
  {
    heading: '2. Application & Compute',
    dot: 'bg-metro-emerald',
    nodes: [
      { title: 'FastAPI Core Server', tag: 'Async Python', tagTone: 'bg-metro-emerald', desc: 'Auth, Operational CRUD APIs, APScheduler Sync Jobs & Excel Imports', accent: 'border-l-metro-emerald' },
      { title: 'Rust Engine Worker', tag: 'Zero-Cost Rust', tagTone: 'bg-metro-mango', desc: 'Axum Service • Dashboard & Matrix Aggregations over PostgreSQL', accent: 'border-l-metro-mango' },
    ],
  },
  {
    heading: '3. Dual-Storage Layer',
    dot: 'bg-metro-amber',
    nodes: [
      { title: 'PostgreSQL (OLTP)', tag: 'Relational', tagTone: 'bg-metro-cobalt', desc: 'ACID transactions: Fleet inventory, drivers, live trips, user authentication', accent: 'border-l-metro-cobalt' },
      { title: 'DuckDB (OLAP)', tag: 'Columnar In-Process', tagTone: 'bg-metro-amber', desc: 'In-process columnar analytics over Postgres-synced snapshots', accent: 'border-l-metro-amber' },
    ],
  },
];

export const ARCH_OPS = [
  { icon: '🛡️', tone: 'bg-metro-crimson', title: 'UFW & fail2ban', sub: 'Host firewall & ban auditor' },
  { icon: '📊', tone: 'bg-metro-purple', title: 'GoAccess Monitoring', sub: 'Real-time HTTP traffic analyzer' },
  { icon: '🐳', tone: 'bg-metro-teal', title: 'Docker VPS Compose', sub: 'Isolated networks & persistent volumes' },
];
