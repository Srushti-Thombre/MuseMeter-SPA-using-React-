interface ScatterTooltipPayload {
  date: number;
  type: string;
  rating: number;
}

interface ScatterTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: ScatterTooltipPayload }>;
}

export function ScatterTooltip({ active, payload }: ScatterTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  const data = payload[0].payload;

  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "6px",
        padding: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <p>
        <strong>Date:</strong>{" "}
        {new Date(data.date).toLocaleDateString("en-GB")}
      </p>
      <p>
        <strong>Rating:</strong> {data.rating}
      </p>
      <p>
        <strong>Type:</strong> {data.type}
      </p>
    </div>
  );
}
