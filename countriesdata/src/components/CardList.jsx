import { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardList() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRegion, setFilterRegion] = useState();

  const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
`;

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
  }, [filterRegion, searchText]);

  return (
    <Container className="row mt-4 ms-4">
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
              className="btn btn-primary"
              id="country-select"
              onChange={(e) => setFilterRegion(e.target.value)}
            >
              <option value="" className="btn btn-danger">
                Filter by origion
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
          <Link to={`/${c.name.common}`} style={{ listStyle: "none" }}>
            <Card className="mt-4 mx-2">
              <Card.Img
                variant="top"
                src={c.flag}
                style={{ width: "auto", height: "200px" }}
              />
              <Card.Body style={{ textDecoration: "none" }}>
                <Card.Title className="">{c.name.common}</Card.Title>
                <Card.Text>population:{c.population}</Card.Text>
                <Card.Text>Region:{c.region}</Card.Text>
                <Card.Text>Capital:{c.capital}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Container>
  );
}

export default CardList;
