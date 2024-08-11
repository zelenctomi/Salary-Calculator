import { useState } from 'react';
import NewlyWed from './NewlyWed';
import Family from './Family';
import React from 'react'


const TaxCuts = ({tab, onChange}) => {

  const handleFamilyButtonClick = (e) => {
    const children = tab.children;
    const handicapped = tab.handicapped;
    let value = 0;
    if (e.target.id === 'subtractFromChildren' && children > 0) {
      if (handicapped > children - 1) {
        value = children - 1;
        onChange({children: value, handicapped: value});
      }
      else {
        value = children - 1;
        onChange({children: value});
      }
    } else if (e.target.id === 'addToChildren' && children < 9) {
      value = children + 1;
      onChange({children: value});
    } else if (e.target.id === 'subtractFromHandicapped' && handicapped > 0) {
      value = handicapped - 1;
      onChange({handicapped: value});
    } else if (e.target.id === 'addToHandicapped' && handicapped < children && handicapped < 3) {
      value = handicapped + 1;
      onChange({handicapped: value});
    }
  }

  const handleChange = (key, value) => {
    onChange({ [key]: value });
  }

  return (
    <>
      <h3>Kedvezmények</h3>
      <div className="flex col gap-05">
        <div className="flex row row-start col-center gap-05">
          <label className="switch">
            <input 
              type="checkbox" 
              id="under25"
              checked={tab.under25}
              onChange={(e) => handleChange(e.target.id, e.target.checked)}
            />
            <span className="slider"></span>
          </label>
          <label htmlFor="under25" className="buttonPadding">25 év alattiak SZJA mentessége</label>
        </div>
        <div className="flex row row-start col-center gap-05">
          <label className="switch">
            <input 
              type="checkbox"
              id="newlyWed"
              checked={tab.newlyWed}
              onChange={(e) => handleChange(e.target.id, e.target.checked)}
            />
            <span className="slider"></span>
          </label>
          <label htmlFor="newlyWed" className="buttonPadding">Friss házasok kedvezménye</label>
          {tab.newlyWed && 
          <NewlyWed
            eligible={tab.newlyWedEligible}
            date={tab.newlyWedDate}
            onChange={onChange}
          />
          }
        </div>
        <div className="flex row row-start col-center gap-05">
          <label className="switch">
            <input 
              type="checkbox"
              id="personal"
              checked={tab.personal}
              onChange={(e) => handleChange(e.target.id, e.target.checked)}
            />
            <span className="slider"></span>
          </label>
          <label htmlFor="personal" className="buttonPadding">Személyi adókedvezmény</label>
        </div>
        <div className="flex row row-start col-center gap-05">
          <label className="switch">
            <input 
              type="checkbox"
              id="family"
              checked={tab.family}
              onChange={(e) => handleChange(e.target.id, e.target.checked)}
            />
            <span className="slider"></span>
          </label>
          <label htmlFor="family" className="buttonPadding">Családi kedvezmény</label>
        </div>
        {tab.family && 
        <Family
          children={tab.children}
          handicapped={tab.handicapped}
          onChange={handleFamilyButtonClick}
        />
        }
      </div>
    </>
  );
}

export default TaxCuts;