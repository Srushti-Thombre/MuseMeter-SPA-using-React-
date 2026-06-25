import { useEffect } from "react";
import { useEntryStore } from "../store/useEntryStore";
import { PageLayout } from "../components/templates";
import { DashboardCharts } from "../components/organisms";

export function Home() {
  const entries = useEntryStore((s) => s.entries);
  const initialize = useEntryStore((s) => s.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <PageLayout title="Welcome to MuseMeter">
      <p>
        Track and relive the art that moves you — books, movies, poems, and
        more.
      </p>
      <DashboardCharts entries={entries} />
    </PageLayout>
  );
}
