import React from "react";

function DropDown({ options, value, onChange }) {
  console.log(options, value);
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default DropDown;
