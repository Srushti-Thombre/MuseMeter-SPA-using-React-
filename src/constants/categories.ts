import type { CategoryConfig, EntryType } from "../types";

export const CATEGORY_CONFIG: CategoryConfig[] = [
  { type: "book", label: "Book", color: "#3b82f6" },
  { type: "movie", label: "Movie", color: "#10b981" },
  { type: "poem", label: "Poem", color: "#f59e0b" },
  { type: "music", label: "Music", color: "#ef4444" },
  { type: "theatre-play", label: "Theatre Play", color: "#8b5cf6" },
];

export const ENTRY_TYPE_OPTIONS: { value: EntryType; label: string }[] =
  CATEGORY_CONFIG.map((c) => ({ value: c.type, label: c.label }));
