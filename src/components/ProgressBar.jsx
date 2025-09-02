import React from "react";

const ProgressBar = ({ value = 0, max = 100, label }) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div style={{ marginBottom: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{label}</span>
        <span>{value}/{max}</span>
      </div>
      <div style={{ height: "10px", background: "#eee", borderRadius: "5px" }}>
        <div
          style={{
            width: `${percentage}%`,
            background: "#4cafef",
            height: "100%",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;