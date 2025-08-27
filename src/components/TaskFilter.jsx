import React from "react";

export default function TaskFilter({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-2 mb-4">
      {["Todas", "Pendentes", "Concluídas"].map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded ${filter === f ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
