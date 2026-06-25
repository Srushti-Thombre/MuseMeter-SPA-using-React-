import styles from "./StatCard.module.css";

interface StatCardProps {
  label: string;
  count: number;
  color: string;
}

export function StatCard({ label, count, color }: StatCardProps) {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <h3 className={styles.label}>{label}</h3>
      <p className={styles.count}>{count}</p>
    </div>
  );
}
