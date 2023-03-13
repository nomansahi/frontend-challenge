import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilterDropdown from "./FilterDropdown";

function InputSearch() {
  return (
    <Container fluid="lg">
      <Row width="full" className="mt-4 d-flex justify-content-between">
        <Col sm={8}>
          <input
            type="email"
            class="form-control "
            id="exampleFormControlInput1"
            placeholder="Search"
          />
        </Col>
        <Col>
          <FilterDropdown />
        </Col>
      </Row>
    </Container>
  );
}

export default InputSearch;
