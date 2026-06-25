import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";
import type { MuseMeterEntry } from "../../../types";
import { useDashboardData } from "../../../hooks/useDashboardData";
import { CATEGORY_CONFIG } from "../../../constants/categories";
import { StatCard } from "../../molecules";
import { ScatterTooltip } from "./ScatterTooltip";
import styles from "./DashboardCharts.module.css";

interface DashboardChartsProps {
  entries: MuseMeterEntry[];
}

export function DashboardCharts({ entries }: DashboardChartsProps) {
  const data = useDashboardData(entries);

  return (
    <div className={styles.container}>
      <div className={styles.summaryRow}>
        {CATEGORY_CONFIG.map((cat) => (
          <StatCard
            key={cat.type}
            label={cat.label}
            count={data.typeCounts[cat.type]}
            color={cat.color}
          />
        ))}
      </div>

      <div className={styles.chartGrid}>
        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Entries by Type</h3>
          <PieChart width={280} height={280}>
            <Pie
              data={data.pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {data.pieData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Average Rating per Type</h3>
          <BarChart width={280} height={280} data={data.ratingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Bar dataKey="avgRating" fill="#6b7280" />
          </BarChart>
        </div>

        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Logging Activity Over Time</h3>
          <ScatterChart width={280} height={280}>
            <CartesianGrid />
            <XAxis
              dataKey="date"
              type="number"
              domain={["auto", "auto"]}
              tick={false}
            />
            <YAxis
              dataKey="typeIndex"
              type="number"
              tickFormatter={(index: number) =>
                CATEGORY_CONFIG[index]?.label ?? ""
              }
            />
            <ZAxis dataKey="rating" range={[50, 200]} />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              content={<ScatterTooltip />}
            />
            <Scatter
              name="Entries"
              data={data.scatterPlotData}
              fill="#f472b6"
            />
          </ScatterChart>
        </div>
      </div>
    </div>
  );
}
