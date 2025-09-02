import React from "react";

const RadialGauge = ({ value = 0, max = 100, label }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;

  return (
    <svg width="140" height="140" viewBox="0 0 140 140">
      <circle
        cx="70"
        cy="70"
        r={radius}
        stroke="#eee"
        strokeWidth="12"
        fill="none"
      />
      <circle
        cx="70"
        cy="70"
        r={radius}
        stroke="#4cafef"
        strokeWidth="12"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progress}
        strokeLinecap="round"
      />
      <text x="50%" y="50%" textAnchor="middle" dy="6" fontSize="18">
        {value}/{max}
      </text>
      <text x="50%" y="90%" textAnchor="middle" fontSize="14">
        {label}
      </text>
    </svg>
  );
};

export default RadialGauge;