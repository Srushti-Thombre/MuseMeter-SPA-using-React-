import { Select } from "../../atoms";
import { ENTRY_TYPE_OPTIONS } from "../../../constants/categories";
import styles from "./FilterSort.module.css";

interface FilterSortProps {
  filterType: string;
  onFilterChange: (type: string) => void;
  sortOption: string;
  onSortChange: (sort: string) => void;
  showFavorites: boolean;
  onToggleFavorites: () => void;
}

const SORT_OPTIONS = [
  { value: "date", label: "Date Added" },
  { value: "rating", label: "Rating (High \u2192 Low)" },
];

const FILTER_OPTIONS = [
  { value: "all", label: "All Types" },
  ...ENTRY_TYPE_OPTIONS.map((o) => ({ value: o.value, label: o.label })),
];

export function FilterSort({
  filterType,
  onFilterChange,
  sortOption,
  onSortChange,
  showFavorites,
  onToggleFavorites,
}: FilterSortProps) {
  return (
    <div className={styles.controls}>
      <Select
        options={FILTER_OPTIONS}
        value={filterType}
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <Select
        options={SORT_OPTIONS}
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
      />
      <button
        className={`btn ${showFavorites ? "btn-warning" : "btn-outline-warning"} w-100`}
        onClick={onToggleFavorites}
      >
        {showFavorites ? "Show All" : "Show Favorites \u2B50"}
      </button>
    </div>
  );
}
