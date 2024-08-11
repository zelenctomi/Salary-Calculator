import React from 'react'


const HouseholdSummary = (tabs) => {
  return (
    <>
      <div className="card flex col col-center gap-1">
        <h3>Háztartás összesített jövedelme</h3>
        <div className="flex table col col-start">
          <div className="flex row th">
            <div className="td">Családtag</div>
            <div className="td">Nettó bér</div>
          </div>
          {tabs.tabs.map((tab) => {
            return (
              <div key={tab.id} className="flex row">
                <div className="td">{tab.name}</div>
                <div className="td">{`${tab.afterTax} Ft`}</div>
              </div>
            );
          })}
          <div className="flex row sum">
            <div className="td">Összesen</div>
            <div className="td">
              {`${Math.round(tabs.tabs.reduce((acc, tab) => {
                return acc + tab.afterTax;
                }, 0) * 100) / 100} Ft`
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseholdSummary;
