export type EntryType = "book" | "movie" | "poem" | "music" | "theatre-play";

export interface MuseMeterEntry {
  id: string;
  title: string;
  type: EntryType;
  displayType: string;
  rating: number;
  thoughts: string;
  isFavorite: boolean;
  dateAdded: number;
}

export interface CategoryConfig {
  type: EntryType;
  label: string;
  color: string;
}
