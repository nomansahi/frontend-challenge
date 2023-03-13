import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function Card() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.map((d) => ({
          name: d.name,
        }));
        setCountries(transformedData);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(countries);
  return (
    <Container>
      <ul>
        {countries.map((c) => (
          <li>{c.name?.common}</li>
        ))}
      </ul>
    </Container>
  );
}

export default Card;
