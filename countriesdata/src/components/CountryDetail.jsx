import React from "react";

function CountryDetail({ country }) {
  return (
    <div>
      <div>
        <h1>{country.name}</h1>
        <img src={country.flag} alt={country.name} />
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
        {/* Add any additional details you want to display */}
      </div>
    </div>
  );
}

export default CountryDetail;
