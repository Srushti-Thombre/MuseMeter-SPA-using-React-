import type { MuseMeterEntry } from "../types";

const STORAGE_KEY = "musemeter_entries";

export function loadEntries(): MuseMeterEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: MuseMeterEntry[] = JSON.parse(raw);
    return parsed;
  } catch {
    return [];
  }
}

export function saveEntries(entries: MuseMeterEntry[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}
