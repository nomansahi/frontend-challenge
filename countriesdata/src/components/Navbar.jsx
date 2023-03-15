import React from "react";
function Navbar() {
  return (
    <div
      className="d-flex justify-content-between p-4 bg-white border-bottom shadow"
      fluid="md"
    >
      <p className="fw-bold ps-4">Where in the world?</p>
      <div>
        <p>
          <i class="bi bi-moon"></i> Dark Mode
        </p>
      </div>
    </div>
  );
}

export default Navbar;
