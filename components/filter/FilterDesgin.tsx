import React from "react";

const SearchWithSelect = () => {
  return (
    <div className="d-flex mb-3 flex-wrap">
      {/* Search group: 60% on desktop, full width on mobile */}
      <div
        className="input-group search-group me-2 flex-grow-1"
        style={{ flex: "0 0 60%", maxWidth: "60%" }}
      >
        <input
          type="text"
          className="form-control rounded-start-pill"
          placeholder="Search..."
        />
        <button className="btn btn-outline-secondary rounded-end-pill" type="button">
          <i className="bi bi-search"></i>
        </button>
      </div>

      {/* Select dropdown: 40% on desktop, full width on mobile */}
      <div style={{ flex: "0 0 36%", maxWidth: "36%" }}>
        <select className="form-select rounded-pill w-100" defaultValue="All">
          <option value="All">All</option>
          <option value="New">New</option>
        </select>
      </div>
    </div>
  );
};

export default SearchWithSelect;
