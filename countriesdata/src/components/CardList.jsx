import { useState, useEffect } from "react";
import FilterDropdown from "./FilterDropdown";
import { Card, Col, Container, Row } from "react-bootstrap";

function CardList() {
  const [countries, setCountries] = useState([]);
  const [filteredData, setFilteredData] = useState("");

  const filteredCountries = countries.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(filteredData.toLowerCase());
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const setFilteredData = data.map((d) => ({
          name: d.name,
          flag: d.flags.png,
          population: d.population,
          region: d.region,
          capital: d.capital,
        }));
        setCountries(setFilteredData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="row mt-4 ms-4">
      <Row width="full" className="mt-4 d-flex justify-content-between">
        <Col sm={8}>
          <input
            type="text"
            class="form-control "
            value={filteredData}
            id="exampleFormControlInput1"
            placeholder="Search"
            onChange={(e) => setFilteredData(e.target.value)}
          />
        </Col>
        <Col>
          <FilterDropdown />
        </Col>
      </Row>
      {filteredCountries.map((c) => (
        <Col md="3">
          <Card className="m-2">
            <Card.Img
              variant="top"
              src={c.flag}
              style={{ width: "auto", height: "200px" }}
            />
            <Card.Body>
              <Card.Title className="">{c.name.common}</Card.Title>
              <Card.Text>population:{c.population}</Card.Text>
              <Card.Text>Region:{c.region}</Card.Text>
              <Card.Text>Capital:{c.capital}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Container>
  );
}

export default CardList;
