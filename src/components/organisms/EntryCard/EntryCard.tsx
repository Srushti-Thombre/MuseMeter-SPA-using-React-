import type { MuseMeterEntry } from "../../../types";
import { Button, Rating } from "../../atoms";
import styles from "./EntryCard.module.css";

interface EntryCardProps {
    entry: MuseMeterEntry;
    onDelete: (id: string) => void;
    onToggleFavorite: (id: string) => void;
}

export function EntryCard({ entry, onDelete, onToggleFavorite }: EntryCardProps) {
    return (
        <div className={`card shadow-sm ${styles.card}`}>
            <div className="card-body">
                <h5 className="card-title">
                    {entry.title}{" "}
                    {entry.isFavorite && <span className={styles.favIcon}>&#11088;</span>}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{entry.displayType}</h6>
                <Rating value={entry.rating} readonly />
                <p className="card-text mt-2">{entry.thoughts}</p>
                <div className={styles.actions}>
                    <Button
                        variant={entry.isFavorite ? "warning" : "outline-warning"}
                        size="sm"
                        onClick={() => onToggleFavorite(entry.id)}
                    >
                        {entry.isFavorite ? "Unfavorite" : "Favorite"}
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => onDelete(entry.id)}>
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}
