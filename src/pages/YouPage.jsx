import React from "react";
import RadialGauge from "../components/RadialGauge";
import ProgressBar from "../components/ProgressBar";
import StatCard from "../components/StatCard";
import useHealthStore from "../store/useHealthStore";

const YouPage = () => {
  const { steps, weight, height, waterIntake, foodCalories } = useHealthStore();

  return (
    <div style={{ padding: "20px" }}>
      <h1>You</h1>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <RadialGauge value={steps} max={10000} label="Steps" />
      </div>

      <ProgressBar value={waterIntake} max={3000} label="Water Intake (ml)" />
      <ProgressBar value={foodCalories} max={2500} label="Calories" />

      <div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
        <StatCard title="Weight" value={weight} unit="kg" />
        <StatCard title="Height" value={height} unit="cm" />
      </div>
    </div>
  );
};

export default YouPage;