import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CountryDetail() {
  const [country, setCountry] = useState(null);
  const { countryCode } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
      .then((response) => response.json())
      .then((data) => setCountry(data))
      .catch((error) => console.error(error));
  }, [countryCode]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      ...
    </div>
  );
}
export default CountryDetail;
