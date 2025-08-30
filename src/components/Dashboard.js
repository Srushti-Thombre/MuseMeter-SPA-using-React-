import React, { useEffect, useState } from "react";
import {
  PieChart, Pie, Cell, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";

function Home() {
  const [entries, setEntries] = useState([]);
  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("musemeter_entries")) || [];
    setEntries(savedEntries);
  }, []);

  // Pie chart data (count per type)
  const typeCounts = entries.reduce((acc, entry) => {
    acc[entry.displayType] = (acc[entry.displayType] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.keys(typeCounts).map(type => ({
    name: type,
    value: typeCounts[type],
  }));

  // Bar chart data (average rating per type)
  const ratingData = Object.values(
    entries.reduce((acc, entry) => {
      if (!acc[entry.displayType]) {
        acc[entry.displayType] = { type: entry.displayType, total: 0, count: 0 };
      }
      acc[entry.displayType].total += Number(entry.rating);
      acc[entry.displayType].count += 1;
      return acc;
    }, {})
  ).map(item => ({
    type: item.type,
    avgRating: (item.total / item.count).toFixed(2),
  }));

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "2rem" }}>📊 Dashboard</h2>

      <div style={{ display: "flex", gap: "3rem" }}>
        {/* Pie Chart */}
        <div>
          <h3>Entries by Type</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Bar Chart */}
        <div>
          <h3>Average Rating per Type</h3>
          <BarChart width={400} height={300} data={ratingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Bar dataKey="avgRating" fill="#3b82f6" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default Home;
