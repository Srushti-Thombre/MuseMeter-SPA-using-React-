import { useEntryStore } from "../store/useEntryStore";
import { PageLayout } from "../components/templates";
import { EntryForm } from "../components/molecules";

export function AddEntry() {
  const addEntry = useEntryStore((s) => s.addEntry);

  return (
    <PageLayout title="Add a New Entry">
      <EntryForm onSubmit={addEntry} />
    </PageLayout>
  );
}
