import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { useState } from "react";
import React from "react";


const HouseholdSalaryCalculator = () => {
  const initial = {
    active: true,
    id: 0,
    name: "Új",
    salary: 0,
    afterTax: 0,
    under25: false,
    newlyWed: false,
    newlyWedEligible: false,
    newlyWedDate: "",
    personal: false,
    family: false,
    children: 0,
    handicapped: 0
  }
  const [familyMembers, setFamilyMembers] = useState([{...initial}]);

  const updateFamilyMember = (updateData) => {
    setFamilyMembers((prevFamilyMembers) => {
      const updatedFamilyMembers = prevFamilyMembers.map((familyMember) => {
        return familyMember.active ? { ...familyMember, ...updateData } : familyMember;
      });
      return updatedFamilyMembers;
    });
  };

  const handleChange = (updateDate) => {
    updateFamilyMember(updateDate);
  }

  const handleTabChange = (id) => {
    setFamilyMembers((prevFamilyMembers) => {
      const updatedFamilyMembers = prevFamilyMembers.map((familyMember) => {
        return familyMember.id === id ? { ...familyMember, active: true } : { ...familyMember, active: false };
      });
      return updatedFamilyMembers;
    });
  }

  const addNewMember = () => {
    updateFamilyMember({ active: false });
    const id = familyMembers.length;
    setFamilyMembers((prevFamilyMembers) => {
      const updatedFamilyMembers = [...prevFamilyMembers, { ...initial, id: id }];
      return updatedFamilyMembers;
    });
  }

  const deleteFamilyMember = () => {
    if (familyMembers.length === 1) {
      return;
    }
    const id = familyMembers.findIndex((tab) => tab.active);
    if (id !== -1) {
      setFamilyMembers((prevFamilyMembers) => {
        const updatedFamilyMembers = prevFamilyMembers.filter((tab) => tab.id !== id);
        return updatedFamilyMembers;
      });
      if (familyMembers.length > 1) {
        const newActiveId = id === 0 ? 1 : id - 1;
        setFamilyMembers((prevFamilyMembers) => {
          const updatedFamilyMembers = prevFamilyMembers.map((familyMember) => {
            return familyMember.id === newActiveId ? { ...familyMember, active: true } : familyMember;
          });
          return updatedFamilyMembers;
        });
      }
    }
  }

  return (
    <>
      <div className="flex col gap-05">
        <header>
          <FamilyMemberTabs 
            tabs={familyMembers} 
            onTabChange={handleTabChange} 
            onButtonClick={addNewMember} 
          />
        </header>
        <main className="flex col gap-05">
          <SalaryCalculator 
            tab={familyMembers.find((tab) => tab.active)}
            onChange={handleChange}
            onDelete={deleteFamilyMember}
          />
          <HouseholdSummary
            tabs={familyMembers}
          />
        </main>
      </div>
    </>
  );
};

export default HouseholdSalaryCalculator;
