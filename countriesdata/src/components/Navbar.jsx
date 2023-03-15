import React from "react";
import {faBear}
function Navbar() {
  return (
    <div
      className="d-flex justify-content-between p-4 bg-white border-bottom shadow"
      fluid="md"
    >
      <p className="fw-bold ps-4">Where in the world?</p>
      <div>
        {/* <FontAwesomeIcon icon="fa-regular fa-moon" /> */}
        <p>
          <i class="fa-regular fa-moon"></i> Dark Mode
        </p>
      </div>
    </div>
  );
}

export default Navbar;
