import { useState } from 'react';
import React from 'react'


const NewlyWedPopup = ({closePopup, saveDate}) => {
  const [date, setDate] = useState('');


  const handleDate = (date) => {
    const parts = date.split('/');
    if (parts.some(part => isNaN(part))) return;
    if (date.length > 10) return;
    setDate(date);
  }

  return (
    <>
      <div id="popup-bg" onClick={closePopup}></div>
      <dialog open className="flex col col-center gap-1">
        <p>
          A kedvezmény először a házzasságkötést követő hónapban vehető igénybe 
          és a házassági életközösség alatt legfeljebb 24 hónapon keresztül jár.
        </p>
        <div className="flex col gap-02">
          <label htmlFor="date">Add meg a házasságkötés dátumát:</label>
          <input 
            type="text"
            id="date"
            placeholder="YYYY/MM/DD"
            value={date}
            onChange={(e) => handleDate(e.target.value)}
          />
        </div>
        <button id="saveDate" onClick={() => saveDate(date)}>Mentés</button>
      </dialog>
    </>
  );
}

export default NewlyWedPopup;