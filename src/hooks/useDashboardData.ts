import { useMemo } from "react";
import type { MuseMeterEntry, EntryType } from "../types";
import { CATEGORY_CONFIG } from "../constants/categories";

interface PieDataItem {
    name: string;
    value: number;
    color: string;
}

interface RatingDataItem {
    type: string;
    avgRating: number;
}

interface ScatterDataItem {
    date: number;
    type: string;
    typeIndex: number;
    rating: number;
}

interface DashboardData {
    typeCounts: Record<EntryType, number>;
    pieData: PieDataItem[];
    ratingData: RatingDataItem[];
    scatterPlotData: ScatterDataItem[];
}

export function useDashboardData(entries: MuseMeterEntry[]): DashboardData {
    return useMemo(() => {
        const typeCounts: Record<EntryType, number> = {
            book: 0,
            movie: 0,
            poem: 0,
            music: 0,
            "theatre-play": 0,
        };

        const ratingsByType: Record<EntryType, { total: number; count: number }> = {
            book: { total: 0, count: 0 },
            movie: { total: 0, count: 0 },
            poem: { total: 0, count: 0 },
            music: { total: 0, count: 0 },
            "theatre-play": { total: 0, count: 0 },
        };

        for (const entry of entries) {
            typeCounts[entry.type]++;
            ratingsByType[entry.type].total += entry.rating;
            ratingsByType[entry.type].count++;
        }

        const pieData: PieDataItem[] = CATEGORY_CONFIG.map((c) => ({
            name: c.label,
            value: typeCounts[c.type],
            color: c.color,
        }));

        const ratingData: RatingDataItem[] = CATEGORY_CONFIG.map((c) => {
            const stats = ratingsByType[c.type];
            return {
                type: c.label,
                avgRating:
                    stats.count === 0
                        ? 0
                        : Number((stats.total / stats.count).toFixed(2)),
            };
        });

        const scatterPlotData: ScatterDataItem[] = entries.map((entry) => ({
            date: entry.dateAdded,
            type: CATEGORY_CONFIG.find((c) => c.type === entry.type)?.label ?? "",
            typeIndex: CATEGORY_CONFIG.findIndex((c) => c.type === entry.type),
            rating: entry.rating,
        }));

        return { typeCounts, pieData, ratingData, scatterPlotData };
    }, [entries]);
}
