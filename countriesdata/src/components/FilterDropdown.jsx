import { useState, useEffect } from "react";
import axios from "axios";

function FilterDropdown() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);
    const filtered = countries.filter(
      (country) => country.region === selectedValue
    );
    setFilteredCountries(filtered);
  };

  return (
    <div>
      <label htmlFor="country-select" className="btn btn-primary">
        Filter by Region:{" "}
      </label>
      <select
        id="country-select"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default FilterDropdown;
