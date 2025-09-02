import { create } from "zustand";

const useHealthStore = create((set) => ({
  steps: 2500,
  water: 0.75,     // liters
  weight: 72,
  heightCm: 175,
  calories: 900,

  addSteps: (n) => set((s) => ({ steps: s.steps + n })),
  addWater: (l) => set((s) => ({ water: +(s.water + l).toFixed(2) })),
  addCalories: (n) => set((s) => ({ calories: s.calories + n })),
  setWeight: (kg) => set(() => ({ weight: +kg })),
  setHeight: (cm) => set(() => ({ heightCm: +cm })),
}));

export default useHealthStore;