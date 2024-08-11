import React from 'react'


const FamilyMemberTabs = ({tabs, onTabChange, onButtonClick}) => {

  const setTabName = (name) => name.length > 0 ? name : "?";

  return (
    <>
      <div className="flex row row-start gap-1">
        <div id="familyMembers" className="flex row row-start">
          {tabs.map((tab) => (
            <div key={tab.id}>
              <input 
                key={tab.id}
                id={tab.id}
                type="radio"
                name='FamilyMember'
                checked={tab.active}
                onChange={() => onTabChange(tab.id)}
              />
              <label className="custom-radio" htmlFor={tab.id}>
                <span key={tab.id} className="radio-text">{setTabName(tab.name)}</span>
              </label>
            </div>
          ))}
        </div>
        <button onClick={() => onButtonClick()} id="addNewMember">＋</button>
      </div>
    </>
  );
};

export default FamilyMemberTabs;
