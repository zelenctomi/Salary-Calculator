import Eligibility from "./Eligibility";
import NewlyWedPopup from "./NewlyWedPopup";
import { useState } from "react";
import React from 'react'


const NewlyWed = ({eligible, date, onChange}) => {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  }
  
  const checkEligibility = (date) => {
    const currentDate = new Date();
    const selectedDate = new Date(date);

    // Check if the date is valid and the format is YYYY/MM/DD
    const dateFormat = /^\d{4}\/\d{2}\/\d{2}$/;
    if (!date.match(dateFormat) || isNaN(selectedDate.getTime())) {
      console.log("Invalid date format");
      return;
    }

    // Check if the selected date is within the range of no more than 2 years ago and at least 1 month ago
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(currentDate.getFullYear() - 2);
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(currentDate.getMonth() - 1);

    if (selectedDate > twoYearsAgo && selectedDate <= oneMonthAgo) {
      onChange({newlyWedEligible: true, newlyWedDate: date});
    } else {
      onChange({newlyWedEligible: false, newlyWedDate: date});
    }
    togglePopup();
  }


  return (
    <>
      <button id="dateButton" onClick={togglePopup}>{date === "" ? "Dátum hozzáadása" : "Dátum módosítása"}</button>
      {popup && 
        <NewlyWedPopup 
          closePopup={togglePopup}
          saveDate={checkEligibility}
        />
      }
      {date !== "" &&
        <Eligibility 
          eligible={eligible} 
        />
      }
    </>
  );
}

export default NewlyWed;