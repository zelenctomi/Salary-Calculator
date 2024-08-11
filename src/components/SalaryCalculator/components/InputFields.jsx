import React from 'react'


const InputFields = ({tab, onChange}) => {
  const handleSalaryChange = (salary) => {
    if (isNaN(salary) || salary < 0 || salary > 9999999) return;
    const rounded = Math.round(salary * 100) / 100;
    onChange({salary: rounded});
  }

  const handleNameChange = (name) => {
    if (name.length > 15) return;
    onChange({name: name});
  }

  return (
    <div className="flex col gap-05">
      <div className="flex col gap-02">
        <label htmlFor="name">Családtag Neve</label>
        <input 
          type="text" 
          id="name"
          value={tab.name}
          onChange={(e) => handleNameChange(e.target.value)}
        />
      </div>
      <div className="flex col gap-02">
        <label htmlFor="salary">Bruttó Bér</label>
        <input 
          type="text"
          id="salary" 
          value={tab.salary}
          onChange={(e) => handleSalaryChange(e.target.value)}
        />
      </div>
      <div className="flex col gap-02">
        <input 
          type="range"
          name="range"
          id="range"
          min={0}
          max={1000000}
          value={tab.salary}
          onChange={(e) => handleSalaryChange(e.target.value)}
        />
      </div>
      <div className="flex row row-center gap-05">
        <button className="percentage" onClick={() => handleSalaryChange(Number(tab.salary) - Number(tab.salary * 0.01))}>-1%</button>
        <button className="percentage" onClick={() => handleSalaryChange(Number(tab.salary) - Number(tab.salary * 0.05))}>-5%</button>
        <button className="percentage" onClick={() => handleSalaryChange(Number(tab.salary) + Number(tab.salary * 0.01))}>+1%</button>
        <button className="percentage" onClick={() => handleSalaryChange(Number(tab.salary) + Number(tab.salary * 0.05))}>+5%</button>
      </div>
    </div>
  );
}

export default InputFields;