import React from "react";
import { Container } from "react-bootstrap";

function Navbar() {
  return (
    <div
      className="d-flex justify-content-between p-4 bg-white border-bottom shadow"
      fluid="md"
    >
      <p className="fw-bold">Where in the world?</p>
      <div>
        {/* <FontAwesomeIcon icon="fa-regular fa-moon" /> */}
        <p>Dark Mode</p>
      </div>
    </div>
  );
}

export default Navbar;
