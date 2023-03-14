import React from "react";
import { useState, useEffect } from "react";
import FilterDropdown from "./FilterDropdown";

import { Container, Form, Col, Button, Card } from "react-bootstrap";

function CardDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("-1");
  const [countries, setCountries] = useState([]);

  // const filteredList = countries.filter((data) => {
  //   return filterValue === "-1"
  //     ? true
  //     : "" + data.restaurantCategoryId === filterValue;
  // });

  const onFilterValueSelected = (filterValue) => {
    setFilterValue(filterValue);
  };

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
  // return (
  //   <Container>
  //     <ul>
  //       {countries.map((c) => (
  //         <li>{c.name?.common}</li>
  //       ))}
  //     </ul>
  //   </Container>
  // );

  // const navigate = useNavigate();

  // useEffect(() => {
  //   setUpHome(setCardDetails);

  //   console.log(cardDetails);
  // }, []);
  return (
    <div className="container mt-4">
      <div className="px-5">
        <Form.Group
          className="d-flex justify-content-center mt-4"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="text"
            placeholder="Search There Your Favourite Country"
            size="lg"
            className="me-4"
            maxLength={40}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <div className="text-primary">
            <FilterDropdown filterValueSelected={onFilterValueSelected} />
          </div>
        </Form.Group>
        <br></br>
        <br></br>
      </div>
      <div className="row">
        {countries
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((card, index) => (
            <Col md={3} key={index}>
              <Card className="m-2">
                <Card.Img
                  variant="top"
                  src={card.image}
                  style={{ width: "auto", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{card.name}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      // navigate("/RestaurantDetails/" + card.id);
                    }}
                  >
                    See more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default CardDetails;
