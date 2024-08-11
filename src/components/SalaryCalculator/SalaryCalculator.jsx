import InputFields from "./components/InputFields";
import TaxCuts from "./components/TaxCuts";
import { useState } from "react";
import React from 'react'


const SalaryCalculator = ({tab, onChange, onDelete}) => {

  const calculateAfterTax = (updated) => {
    const salary = updated.salary;
    const szja = salary * 0.15;
    const tb = salary * 0.185;
    let tax = szja + tb;

    // tax cuts
    const under25 = updated.under25 ? calculateUnder25(salary) : 0;
    const newlyWed = updated.newlyWedEligible && updated.newlyWed ? 5000 : 0;
    const personal = updated.personal ? 77300 : 0;
    const family = updated.family ? calculateFamily(updated.children, updated.handicapped) : 0;

    // tax 
    tax = tax - under25;
    tax - personal >= 0 ? tax = tax - personal : tax = 0; 

    // after tax
    let afterTax = salary - tax + newlyWed + family;

    // round
    afterTax = Math.round(afterTax * 100) / 100;
    return afterTax;
  }

  const calculateUnder25 = (salary) => {
    const limit = 499952;
    let under25 = 0;
    if (salary <= limit) {
      under25 = salary * 0.15;
    }
    else if (salary > limit) {
      under25 = limit * 0.15;
    }
    return under25;
  }

  const calculateFamily = (children, handicapped) => {
    const oneHandicapped = 10000;
    const twoHandicapped = 20000;
    const threeOrMoreHandicapped = 33000;
    let family = 0;
    if (handicapped > 2) {
      family = threeOrMoreHandicapped * children;
    }
    else if (handicapped > 1) {
      family = twoHandicapped * children;
    }
    else if (handicapped > 0) {
      family = oneHandicapped * children;
    }
    return family;
  }

  const handleChange = (updateData) => {
    const updatedTab = { ...tab, ...updateData };
    const afterTaxValue = calculateAfterTax(updatedTab);
    onChange({ ...updatedTab, afterTax: afterTaxValue });
  }

  return (
    <>
      <div className="card flex col col-start">
        <button id="delete" onClick={onDelete}>🗑️</button>
        <h2>
          {tab.name} bérének kiszámítása
        </h2>
        <InputFields 
          tab={tab}
          onChange={handleChange}
        />
        <TaxCuts
          tab={tab}
          onChange={handleChange}
        />
        <h3>Számított nettó bér</h3>
        <div>{`${tab.afterTax} Ft`}</div>
      </div>
    </>
  );
};

export default SalaryCalculator;
