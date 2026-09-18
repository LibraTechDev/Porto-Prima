export type IconKey =
  | 'laravel' | 'blade' | 'flutter' | 'electron' | 'sqlserver'
  | 'postgresql' | 'mysql' | 'redis' | 'linux' | 'fastapi'
  | 'rust' | 'python' | 'vue' | 'react' | 'astro'
  | 'duckdb' | 'docker' | 'nginx' | 'gitlab' | 'git'
  | 'tailwind' | 'typescript' | 'javascript' | 'nodejs'
  | 'api' | 'server' | 'cicd' | 'generic';

export function normalizeIconKey(name: string): IconKey {
  const key = (name ?? '').toLowerCase().trim();
  if (key.includes('laravel')) return 'laravel';
  if (key.includes('blade')) return 'blade';
  if (key.includes('flutter')) return 'flutter';
  if (key.includes('electron')) return 'electron';
  if (key.includes('sql server') || key.includes('mssql')) return 'sqlserver';
  if (key.includes('postgre')) return 'postgresql';
  if (key.includes('mysql') || key.includes('mariadb')) return 'mysql';
  if (key.includes('redis')) return 'redis';
  if (key.includes('ci/cd') || key.includes('cicd') || key.includes('pipeline')) return 'cicd';
  if (key.includes('linux')) return 'linux';
  if (key.includes('fastapi')) return 'fastapi';
  if (key.includes('rust')) return 'rust';
  if (key.includes('python')) return 'python';
  if (key.includes('vue') || key.includes('pinia')) return 'vue';
  if (key.includes('react') || key.includes('next')) return 'react';
  if (key.includes('astro')) return 'astro';
  if (key.includes('duckdb')) return 'duckdb';
  if (key.includes('docker')) return 'docker';
  if (key.includes('nginx')) return 'nginx';
  if (key.includes('gitlab')) return 'gitlab';
  if (key.includes('git')) return 'git';
  if (key.includes('tailwind') || key.includes('daisyui')) return 'tailwind';
  if (key.includes('typescript') || key === 'ts') return 'typescript';
  if (key.includes('javascript') || key === 'js') return 'javascript';
  if (key.includes('node') || key.includes('express')) return 'nodejs';
  if (key.includes('api') || key.includes('rest')) return 'api';
  if (key.includes('vps') || key.includes('server') || key.includes('ufw') || key.includes('fail2ban') || key.includes('goaccess')) return 'server';
  return 'generic';
}

/** Inner SVG markup per icon (no outer <svg> wrapper). Single source of truth. */
export const ICON_INNERS: Record<IconKey, { inner: string; fill: boolean }> = {
  laravel: { fill: true, inner: `<path fill="#FF2D20" d="M12.002 0l7.25 4.195v8.389L12 16.78l-7.25-4.196V4.195L12.002 0zm0 2.308L6.75 5.346v6.077L12 14.46l5.25-3.037V5.346L12.002 2.31zM3 13.923l8 4.628v4.629l-8-4.63v-4.627zm18 0v4.628l-8 4.629v-4.629l8-4.628z"/>` },
  blade: { fill: false, inner: `<rect x="3" y="3" width="18" height="18" rx="0" stroke="#FF2D20" stroke-width="2" fill="none"/><path d="M7 8l5 4-5 4M13 16h4" stroke="#FF2D20" stroke-width="2" stroke-linecap="round"/>` },
  flutter: { fill: true, inner: `<path fill="#02569B" d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM14.314 11.232L8.528 17.02l3.69 3.69 3.69-3.69 5.776-5.788h-7.37zM21.684 24l-5.776-5.788 3.69-3.69L24 18.986 21.684 24z"/><path fill="#0175C2" d="M12.218 20.71l2.466 2.466L21.684 24l-5.776-5.788-3.69 2.498z"/>` },
  electron: { fill: false, inner: `<ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#47848F" stroke-width="1.8" transform="rotate(0 12 12)"/><ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#9FEAF9" stroke-width="1.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#47848F" stroke-width="1.8" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="2" fill="#9FEAF9"/>` },
  sqlserver: { fill: true, inner: `<path fill="#CC292B" d="M12 2C6.48 2 2 3.34 2 5v14c0 1.66 4.48 3 10 3s10-1.34 10-3V5c0-1.66-4.48-3-10-3zm0 2c4.97 0 8 1.12 8 1.5S16.97 7 12 7 4 5.88 4 5.5 7.03 4 12 4zm8 15c0 .38-3.03 1.5-8 1.5S4 19.38 4 19v-2.5c1.9 1 5.05 1.5 8 1.5s6.1-.5 8-1.5V19zm0-5c0 .38-3.03 1.5-8 1.5S4 14.38 4 14v-2.5c1.9 1 5.05 1.5 8 1.5s6.1-.5 8-1.5V14zm0-5c0 .38-3.03 1.5-8 1.5S4 9.38 4 9V6.5c1.9 1 5.05 1.5 8 1.5s6.1-.5 8-1.5V9z"/>` },
  postgresql: { fill: true, inner: `<path fill="#336791" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"/>` },
  mysql: { fill: true, inner: `<path fill="#00758F" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l4 2.5-4 2.5zm5-4.5h-2V7h2v5z"/>` },
  redis: { fill: true, inner: `<path fill="#DC382D" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.4l7.1 3.6-7.1 3.5-7.1-3.5L12 4.4zM4 9.1l7 3.5v7l-7-3.5V9.1zm9 10.5v-7l7-3.5v7l-7 3.5z"/>` },
  linux: { fill: true, inner: `<path fill="#FCC624" d="M12 2a4 4 0 00-4 4v3.5C8 10.88 7 12 6 13c-1 1-2 2-2 4 0 3 3 5 8 5s8-2 8-5c0-2-1-3-2-4-1-1-2-2.12-2-3.5V6a4 4 0 00-4-4z"/><circle cx="10" cy="6" r="1" fill="#000"/><circle cx="14" cy="6" r="1" fill="#000"/><ellipse cx="12" cy="8" rx="1.5" ry="0.8" fill="#FF5722"/>` },
  fastapi: { fill: true, inner: `<path fill="#05998B" d="M12 2L2 12h8l-2 10 14-12h-8l4-8z"/>` },
  rust: { fill: true, inner: `<path fill="#CE412B" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2.5a7.5 7.5 0 017.3 5.8l-1.8.8A5.7 5.7 0 0012 6.3a5.7 5.7 0 00-5.5 4.8l-1.8-.8A7.5 7.5 0 0112 4.5zM7.5 13h9a1.5 1.5 0 010 3h-9a1.5 1.5 0 010-3z"/>` },
  python: { fill: true, inner: `<path fill="#3776AB" d="M11.9 2C6.8 2 7.1 4.2 7.1 4.2v2.3h4.9v.7H5.2S2 6.8 2 11.9c0 5.1 2.8 4.9 2.8 4.9h1.7v-2.4s-.1-2.8 2.8-2.8h4.8s2.7.1 2.7-2.6V4.2S17 2 11.9 2zm-1.4 1.5a.8.8 0 110 1.6.8.8 0 010-1.6z"/><path fill="#FFD43B" d="M12.1 22c5.1 0 4.8-2.2 4.8-2.2v-2.3H12v-.7h6.8s3.2.4 3.2-4.7c0-5.1-2.8-4.9-2.8-4.9h-1.7v2.4s.1 2.8-2.8 2.8h-4.8s-2.7-.1-2.7 2.6v4.8S7 22 12.1 22zm1.4-1.5a.8.8 0 110-1.6.8.8 0 010 1.6z"/>` },
  vue: { fill: true, inner: `<path fill="#41B883" d="M2 3h3.5L12 14.2 18.5 3H22L12 21 2 3z"/><path fill="#35495E" d="M6.5 3h3L12 7.5 14.5 3h3L12 12 6.5 3z"/>` },
  react: { fill: false, inner: `<ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" stroke-width="1.5" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>` },
  astro: { fill: true, inner: `<path fill="#FF5D01" d="M12 2L9.5 9h5L12 2zm-3.5 8.5L3 17.5 5.5 19l4-2.5-1-6zm7 0l-1 6 4 2.5 2.5-1.5-5.5-7zM12 16a2 2 0 100 4 2 2 0 000-4z"/>` },
  duckdb: { fill: true, inner: `<circle cx="12" cy="12" r="10" fill="#FFF000"/><circle cx="9" cy="10" r="2" fill="#000"/><path fill="#FF9900" d="M12 12c2 0 6 1 6 3s-4 3-6 3-6-1-6-3 4-3 6-3z"/>` },
  docker: { fill: true, inner: `<path fill="#2496ED" d="M13.9 8.2h2v2h-2v-2zm-3.1 0h2v2h-2v-2zm-3.1 0h2v2h-2v-2zm9.3 0h2v2h-2v-2zm-9.3-3.1h2v2h-2v-2zm3.1 0h2v2h-2v-2zm3.1 0h2v2h-2v-2zm6.2 3.1c.3-.1.9-.3 1.5-.1.3.1.5.3.6.5-.2.4-.6.7-1.1.8.2.3.4.6.4 1 0 1.8-1.5 3.3-3.3 3.3H2.8c-.5-1.4-.4-3 .3-4.3 1.2-2.1 3.5-3.3 5.9-3.3h1.3v2H7.7c-.8 0-1.5.3-2 .8 1.4 1.1 3.1 1.7 5 1.7h7.2z"/>` },
  nginx: { fill: true, inner: `<path fill="#009639" d="M12 2L2 7.8v10.4L12 24l10-5.8V7.8L12 2zm-4 14.5V8.5l8 8V8.5h2v9.1l-8-8v8H8z"/>` },
  gitlab: { fill: true, inner: `<path fill="#FC6D26" d="M12 21.5l4.3-13.2H7.7L12 21.5z"/><path fill="#E24329" d="M12 21.5L7.7 8.3H2.3L12 21.5z"/><path fill="#FCA326" d="M2.3 8.3L1 12.3c-.2.6 0 1.2.5 1.6L12 21.5 2.3 8.3z"/><path fill="#E24329" d="M2.3 8.3h5.4L5.3 1.2c-.2-.6-.9-.6-1.1 0L2.3 8.3z"/><path fill="#E24329" d="M12 21.5l4.3-13.2h5.4L12 21.5z"/><path fill="#FCA326" d="M21.7 8.3l1.3 4c.2.6 0 1.2-.5 1.6L12 21.5l9.7-13.2z"/><path fill="#E24329" d="M21.7 8.3h-5.4l2.4-7.1c.2-.6.9-.6 1.1 0l1.9 7.1z"/>` },
  git: { fill: true, inner: `<path fill="#F05032" d="M21.6 10.9L13.1 2.4a1.7 1.7 0 00-2.4 0L8.4 4.7l3 3a1.8 1.8 0 012.3 2.3l2.9 2.9a1.8 1.8 0 11-1.2 1.2l-2.8-2.8v4.5a1.8 1.8 0 11-1.7 0V11a1.8 1.8 0 01-1-2.4L7 6.2 2.4 10.9a1.7 1.7 0 000 2.4l8.5 8.5a1.7 1.7 0 002.4 0l8.3-8.4a1.7 1.7 0 000-2.5z"/>` },
  tailwind: { fill: true, inner: `<path fill="#06B6D4" d="M12 6c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C15 11.8 16.5 13 20 13c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C17 7.2 15.5 6 12 6zM4 13c-3 0-4.8 1.5-5.4 4.5 1.2-1.5 2.7-2.1 4.5-1.8 1 .2 1.8 1 2.6 1.8C7 18.8 8.5 20 12 20c3 0 4.8-1.5 5.4-4.5-1.2 1.5-2.7 2.1-4.5 1.8-1-.2-1.8-1-2.6-1.8C9 14.2 7.5 13 4 13z"/>` },
  typescript: { fill: true, inner: `<rect width="24" height="24" rx="0" fill="#3178C6"/><text x="50%" y="68%" font-family="monospace, sans-serif" font-weight="bold" font-size="13" fill="#FFF" text-anchor="middle">TS</text>` },
  javascript: { fill: true, inner: `<rect width="24" height="24" rx="0" fill="#F7DF1E"/><text x="50%" y="68%" font-family="monospace, sans-serif" font-weight="bold" font-size="13" fill="#000" text-anchor="middle">JS</text>` },
  nodejs: { fill: true, inner: `<path fill="#5FA04E" d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l7 3.9v7.8l-7 3.9-7-3.9V8.1l7-3.9z"/>` },
  api: { fill: false, inner: `<path stroke="#0078D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12zm0 0v7m8-5v7m8-7v7"/>` },
  server: { fill: false, inner: `<rect x="2" y="3" width="20" height="7" stroke="#008A00" stroke-width="2" fill="none"/><rect x="2" y="14" width="20" height="7" stroke="#008A00" stroke-width="2" fill="none"/><circle cx="6" cy="6.5" r="1" fill="#008A00"/><circle cx="6" cy="17.5" r="1" fill="#008A00"/>` },
  cicd: { fill: false, inner: `<path stroke="#107C41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 12a4 4 0 014-4h8a4 4 0 014 4 4 4 0 01-4 4H8a4 4 0 01-4-4z"/><circle cx="8" cy="12" r="1.5" fill="#107C41"/><circle cx="16" cy="12" r="1.5" fill="#107C41"/>` },
  generic: { fill: false, inner: `<polygon points="12 2 2 7 12 12 22 7 12 2" stroke="currentColor" stroke-width="2" fill="none"/><polyline points="2 17 12 22 22 17" stroke="currentColor" stroke-width="2"/><polyline points="2 12 12 17 22 12" stroke="currentColor" stroke-width="2"/>` },
};
