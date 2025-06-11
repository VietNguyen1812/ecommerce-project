"use client";
import { useStore } from "@/store/slices/userSlice";

export default function Home() {
  const { bears, increasePopulation, removeAllBears } = useStore(); // hool and use client-side state management
  // using Zustand for state management
  console.log(bears, increasePopulation, removeAllBears);
  return (
    <div>
      <h1>Welcome to the E-commerce App</h1>
      <p>Bears in store: {bears}</p>
      <button onClick={increasePopulation}>Increase Bears</button>
      <button onClick={removeAllBears}>Remove All Bears</button>
      {/* Add more components or features as needed */}
    </div>
  );
}
