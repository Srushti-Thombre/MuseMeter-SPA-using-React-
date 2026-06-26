import styles from "./Rating.module.css";

interface RatingProps {
    value: number;
    max?: number;
    onChange?: (value: number) => void;
    readonly?: boolean;
}

export function Rating({ value, max = 5, onChange, readonly = false }: RatingProps) {
    return (
        <div className={styles.rating}>
            {Array.from({ length: max }, (_, i) => {
                const starValue = i + 1;
                return (
                    <span
                        key={starValue}
                        className={`${styles.star} ${starValue <= value ? styles.filled : ""} ${
                            !readonly ? styles.clickable : ""
                        }`}
                        onClick={() => !readonly && onChange?.(starValue)}
                        role={readonly ? undefined : "button"}
                        tabIndex={readonly ? undefined : 0}
                        onKeyDown={(e) => {
                            if (!readonly && (e.key === "Enter" || e.key === " ")) {
                                onChange?.(starValue);
                            }
                        }}
                    >
                        &#9733;
                    </span>
                );
            })}
        </div>
    );
}
