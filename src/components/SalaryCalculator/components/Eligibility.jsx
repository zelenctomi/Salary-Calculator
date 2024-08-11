import React from 'react'


const Eligibility = ({ eligible }) => {
  return (
      <div 
      id="eligibility"
      className={eligible ? "green" : "red"}
      >
      {eligible ? "Jogosult" : "Nem jogosult"}
      </div>
  );
}

export default Eligibility;