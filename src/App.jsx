import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";
import React from "react";


function App() {
  return (
    <div className="flex col col-center gap-1">
      <h1>Bérkalkulátor</h1>
      <HouseholdSalaryCalculator />
    </div>
  );
}

export default App;
