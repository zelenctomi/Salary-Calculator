import React from 'react'


const Family = ({children, handicapped, onChange}) => {
  return (
    <div className="flex row row-start gap-02">
      <div className="flex row row-start col-center gap-02">
        <button id="subtractFromChildren" className="family-button" onClick={onChange}>−</button>
        <div className="child-counter">{children}</div>
        <button id="addToChildren" className="family-button" onClick={onChange}>＋</button>
      </div>
      <div>Eltartott, ebből kedvezményezett</div>
      <div className="flex row row-start col-center gap-02">
        <button id="subtractFromHandicapped" className="family-button" onClick={onChange}>−</button>
        <div className="child-counter">{handicapped}</div>
        <button id="addToHandicapped" className="family-button" onClick={onChange}>＋</button>
      </div>
    </div>
  );
}

export default Family;