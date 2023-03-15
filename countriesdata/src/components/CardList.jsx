import { useState, useEffect } from "react";

import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardList() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRegion, setFilterRegion] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.map((d) => ({
          name: d.name,
          flag: d.flags.png,
          population: d.population,
          region: d.region,
          capital: d.capital,
        }));
        setCountries([...transformedData]);
        setFilteredCountries([...transformedData]);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let data = [...countries];
    if (filterRegion) {
      data = data.filter((country) => country.region === filterRegion);
    }
    if (searchText) {
      data = data.filter((country) =>
        country.name.common.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredCountries(data);
  }, [filterRegion, searchText, countries]);

  return (
    <Container className="row mt-4 ms-4 ">
      <Row className="mt-4 d-flex justify-content-between ms-2">
        <Col sm={4}>
          <input
            type="text"
            class="form-control "
            value={searchText}
            id="exampleFormControlInput1"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Col>
        <Col sm={2}>
          <div>
            <select
              className="btn btn-white shadow"
              id="country-select"
              onChange={(e) => setFilterRegion(e.target.value)}
            >
              <option value="" className="btn btn-danger">
                Filter by origion <i class="bi bi-chevron-down"></i>
              </option>
              <option value="">All</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </Col>
      </Row>
      {filteredCountries.map((c) => (
        <Col md="3" className="">
          <Link
            to={`/${c.name.common}`}
            style={{ listStyle: "none" }}
            className="no-link-style"
          >
            <Card className="mt-4 mx-2">
              <Card.Img
                variant="top"
                src={c.flag}
                style={{ width: "auto", height: "200px" }}
              />
              <Card.Body style={{ textDecoration: "none" }}>
                <Card.Title className="">{c.name.common}</Card.Title>
                <div style={{ lineHeight: "0.2" }} className="mt-4">
                  <Card.Text>
                    <span className="fw-bold pe-2">Population:</span>
                    {c.population}
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold pe-2">Region:</span>
                    {c.region}
                  </Card.Text>
                  <Card.Text>
                    <span className="fw-bold pe-2">Capital:</span>
                    {c.capital}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Container>
  );
}

export default CardList;
