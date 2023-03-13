import React from "react";

function FilterDropdown() {
  return (
    <div>
      <select className="btn btn-primary">
        <option value="-1">All</option>
        <option value="1">EU</option>
      </select>
    </div>
  );
}

export default FilterDropdown;
