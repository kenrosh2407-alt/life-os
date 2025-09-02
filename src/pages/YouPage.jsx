// src/pages/YouPage.jsx
import React from "react";
import StatCard from "../components/StatCard";
import RadialGauge from "../components/RadialGauge";
import ProgressBar from "../components/ProgressBar";
import useHealthStore from "../store/useHealthStore";

export default function YouPage() {
  const {
    steps,
    stepGoal,
    waterMl,
    waterGoalMl,
    weightKg,
    heightCm,
    calories,
    calorieGoal,
    setSteps,
    addWater,
    setWeight,
    setHeight,
  } = useHealthStore();

  const bmi =
    heightCm > 0 ? +(weightKg / Math.pow(heightCm / 100, 2)).toFixed(1) : 0;

  // Fake “Activity rings” numbers (you can wire to real data later)
  const activity = {
    move: Math.min(100, Math.round((calories / calorieGoal) * 100) || 0),
    exercise: Math.min(100, Math.round((steps / stepGoal) * 100) || 0),
    stand: Math.min(100, Math.round((waterMl / waterGoalMl) * 100) || 0),
    overall: Math.min(
      100,
      Math.round(
        ((calories / calorieGoal +
          steps / stepGoal +
          waterMl / waterGoalMl) /
          3) *
          100
      ) || 0
    ),
  };

  return (
    <div className="shell">
      {/* Frosted page header */}
      <div className="pageTop">
        <h1>Summary</h1>
      </div>

      <div className="grid">
        {/* Activity Rings */}
        <StatCard title="Activity" time="9:41 AM" className="card--tall">
          <div className="ringsWrap">
            <RadialGauge value={activity} />
          </div>

          <div className="legend">
            <span className="dot dot--move" /> Move
            <span className="dot dot--exercise" /> Exercise
            <span className="dot dot--stand" /> Stand
          </div>

          <div className="pillRow">
            <button className="pill" onClick={() => setSteps(steps + 500)}>
              +500 steps
            </button>
            <button className="pill" onClick={() => addWater(250)}>
              +250 ml water
            </button>
          </div>
        </StatCard>

        {/* Weight */}
        <StatCard title="Weight" time="edit">
          <div className="statNumber">
            {weightKg}
            <span className="uom">kg</span>
          </div>
          <div className="row gap">
            <button
              className="pill"
              onClick={() => setWeight(Math.max(1, +(weightKg - 0.5).toFixed(1)))}
            >
              −0.5
            </button>
            <button
              className="pill"
              onClick={() => setWeight(+(weightKg + 0.5).toFixed(1))}
            >
              +0.5
            </button>
          </div>
        </StatCard>

        {/* Height */}
        <StatCard title="Height" time="edit">
          <div className="statNumber">
            {heightCm}
            <span className="uom">cm</span>
          </div>
          <div className="row gap">
            <button
              className="pill"
              onClick={() => setHeight(Math.max(50, heightCm - 1))}
            >
              −1
            </button>
            <button className="pill" onClick={() => setHeight(heightCm + 1)}>
              +1
            </button>
          </div>
        </StatCard>

        {/* BMI */}
        <StatCard title="BMI">
          <div className="statNumber">{bmi}</div>
        </StatCard>

        {/* Calories */}
        <StatCard title="Calories" time={`${Math.min(100, Math.round((calories / calorieGoal) * 100))}%`}>
          <ProgressBar value={(calories / calorieGoal) * 100} />
          <div className="row space">
            <div className="muted">
              {calories} / {calorieGoal} kcal
            </div>
            <button
              className="pill"
              onClick={() => alert("Hook this to your logger later")}
            >
              log
            </button>
          </div>
        </StatCard>
      </div>

      {/* Bottom tab-like bar (static for now) */}
      <nav className="tabs">
        <button className="tabs__btn tabs__btn--active">
          <span>❤️</span>
          <small>Summary</small>
        </button>
        <button className="tabs__btn">
          <span>👥</span>
          <small>Sharing</small>
        </button>
        <button className="tabs__btn">
          <span>🔎</span>
          <small>Browse</small>
        </button>
      </nav>
    </div>
  );
}