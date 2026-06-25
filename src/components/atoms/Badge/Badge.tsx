import type { ReactNode } from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
    color: string;
    children: ReactNode;
}

export function Badge({ color, children }: BadgeProps) {
    return (
        <span className={styles.badge} style={{ backgroundColor: color }}>
            {children}
        </span>
    );
}
