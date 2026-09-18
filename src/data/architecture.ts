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
      { title: 'Nginx Reverse Proxy', tag: 'TLS / Port 443', tagTone: 'bg-metro-cobalt', desc: 'Dockerized on VPS • SSL Termination • Rate Limiting & Ban Auditor', accent: 'border-l-metro-cobalt' },
      { title: 'Vue.js 3 SPA', tag: 'Client GUI', tagTone: 'bg-metro-teal', desc: 'Pinia State • Vite Build • Real-time Telemetry Maps & Fleet Monitoring', accent: 'border-l-metro-teal' },
    ],
  },
  {
    heading: '2. Application & Compute',
    dot: 'bg-metro-emerald',
    nodes: [
      { title: 'FastAPI Core Server', tag: 'Async Python', tagTone: 'bg-metro-emerald', desc: 'Auth, Operational CRUD APIs, WebSocket Streamer, Task Dispatcher', accent: 'border-l-metro-emerald' },
      { title: 'Rust Engine Worker', tag: 'Zero-Cost Rust', tagTone: 'bg-metro-mango', desc: 'Raw Telemetry Ingestion, Parquet Crunching, Metric Aggregation Engine', accent: 'border-l-metro-mango' },
    ],
  },
  {
    heading: '3. Dual-Storage Layer',
    dot: 'bg-metro-amber',
    nodes: [
      { title: 'PostgreSQL (OLTP)', tag: 'Relational', tagTone: 'bg-metro-cobalt', desc: 'ACID transactions: Fleet inventory, drivers, live trips, user authentication', accent: 'border-l-metro-cobalt' },
      { title: 'DuckDB (OLAP)', tag: 'Columnar In-Process', tagTone: 'bg-metro-amber', desc: 'Sub-second analytical queries over millions of vehicle telematics rows', accent: 'border-l-metro-amber' },
    ],
  },
];

export const ARCH_OPS = [
  { icon: '🛡️', tone: 'bg-metro-crimson', title: 'UFW & fail2ban', sub: 'Host firewall & ban auditor' },
  { icon: '📊', tone: 'bg-metro-purple', title: 'GoAccess Monitoring', sub: 'Real-time HTTP traffic analyzer' },
  { icon: '🐳', tone: 'bg-metro-teal', title: 'Docker VPS Compose', sub: 'Isolated networks & persistent volumes' },
];
