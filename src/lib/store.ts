export type Listener<T> = (state: T) => void;

export interface Store<T extends object> {
  get: () => T;
  set: (patch: Partial<T> | ((prev: T) => Partial<T>)) => void;
  subscribe: (fn: Listener<T>) => () => void;
}

/**
 * Minimal ACID-style store:
 * - Atomic: single set() notifies once
 * - Consistent: single source of truth
 * - Isolated: slices subscribe independently
 * - Durable: optional localStorage persistence
 */
export function createStore<T extends object>(initial: T, persistKey?: string): Store<T> {
  let state: T = { ...initial };

  if (persistKey) {
    try {
      const raw = localStorage.getItem(persistKey);
      if (raw) state = { ...state, ...JSON.parse(raw) };
    } catch {
      /* ignore corrupt storage */
    }
  }

  const listeners = new Set<Listener<T>>();

  const get = () => state;

  const set = (patch: Partial<T> | ((prev: T) => Partial<T>)) => {
    const delta = typeof patch === 'function' ? (patch as (p: T) => Partial<T>)(state) : patch;
    const next = { ...state, ...delta };
    // Atomic guard: skip notify when nothing changed
    if (JSON.stringify(next) === JSON.stringify(state)) return;
    state = next;
    if (persistKey) {
      try {
        localStorage.setItem(persistKey, JSON.stringify(state));
      } catch {
        /* storage full / blocked */
      }
    }
    listeners.forEach((fn) => fn(state));
  };

  const subscribe = (fn: Listener<T>) => {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  };

  return { get, set, subscribe };
}
