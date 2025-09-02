import { create } from "zustand";

const useHealthStore = create((set) => ({
  steps: 0,
  weight: 70,
  height: 175,
  waterIntake: 0,
  foodCalories: 0,
  habits: [],

  setSteps: (steps) => set({ steps }),
  setWeight: (weight) => set({ weight }),
  setHeight: (height) => set({ height }),
  addWater: (ml) => set((state) => ({ waterIntake: state.waterIntake + ml })),
  addCalories: (cals) => set((state) => ({ foodCalories: state.foodCalories + cals })),
  addHabit: (habit) => set((state) => ({ habits: [...state.habits, habit] })),
}));

export default useHealthStore;