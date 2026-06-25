import type { MuseMeterEntry } from "../../../types";
import { EntryCard } from "../EntryCard";

interface EntryGridProps {
  entries: MuseMeterEntry[];
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

export function EntryGrid({
  entries,
  onDelete,
  onToggleFavorite,
}: EntryGridProps) {
  if (entries.length === 0) {
    return <p>No entries found.</p>;
  }

  return (
    <div className="row">
      {entries.map((entry) => (
        <div className="col-md-4 mb-4" key={entry.id}>
          <EntryCard
            entry={entry}
            onDelete={onDelete}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}
    </div>
  );
}
