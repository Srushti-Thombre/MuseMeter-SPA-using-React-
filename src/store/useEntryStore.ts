import { create } from "zustand";
import type { EntryType, MuseMeterEntry } from "../types";
import { loadEntries, saveEntries } from "../utils/storage";

interface EntryStore {
    entries: MuseMeterEntry[];
    initialize: () => void;
    addEntry: (data: {
        title: string;
        type: EntryType;
        displayType: string;
        rating: number;
        thoughts: string;
    }) => void;
    deleteEntry: (id: string) => void;
    toggleFavorite: (id: string) => void;
}

export const useEntryStore = create<EntryStore>((set, get) => ({
    entries: [],

    initialize: () => {
        set({ entries: loadEntries() });
    },

    addEntry: (data) => {
        const newEntry: MuseMeterEntry = {
            id: crypto.randomUUID(),
            title: data.title,
            type: data.type,
            displayType: data.displayType,
            rating: data.rating,
            thoughts: data.thoughts,
            isFavorite: false,
            dateAdded: Date.now(),
        };
        const updated = [newEntry, ...get().entries];
        saveEntries(updated);
        set({ entries: updated });
    },

    deleteEntry: (id) => {
        const updated = get().entries.filter((e) => e.id !== id);
        saveEntries(updated);
        set({ entries: updated });
    },

    toggleFavorite: (id) => {
        const updated = get().entries.map((e) =>
            e.id === id ? { ...e, isFavorite: !e.isFavorite } : e
        );
        saveEntries(updated);
        set({ entries: updated });
    },
}));
