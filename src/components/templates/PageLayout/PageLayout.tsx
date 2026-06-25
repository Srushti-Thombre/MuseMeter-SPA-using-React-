import type { ReactNode } from "react";
import styles from "./PageLayout.module.css";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className={styles.layout}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
