import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function CardList() {
  const [countries, setCountries] = useState([]);

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
        setCountries(transformedData);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(countries);
  return (
    <Container className="row mt-4 ms-4">
      {countries.map((c) => (
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
              {/* <Button
                variant="primary"
                onClick={() => {
                  // navigate("/RestaurantDetails/" + card.id);
                }}
              >
                See more
              </Button> */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Container>
  );
}

export default CardList;
