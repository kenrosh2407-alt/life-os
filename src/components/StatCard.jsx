import React from "react";

const StatCard = ({ title, value, unit }) => (
  <div style={{
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    flex: "1"
  }}>
    <h3>{title}</h3>
    <p style={{ fontSize: "24px", margin: 0 }}>
      {value} {unit}
    </p>
  </div>
);

export default StatCard;