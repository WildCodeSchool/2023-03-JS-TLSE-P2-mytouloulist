/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NavBar.css";

function NavBar({ isFiltersMenuVisible, setIsFiltersMenuVisible, navBarRef }) {
  const [filterMainName, setFilterMainName] = useState("Culture et Sport");
  const [filterDateName, setFilterDateName] = useState("Flexible");
  const [filterTagName, setFilterTagName] = useState([
    "Tag 1",
    "Tag 2",
    "Tag 3",
  ]);

  return (
    <nav ref={navBarRef}>
      <button
        type="button"
        onClick={() => setFilterTagName([...filterTagName, "tag"])}
      >
        Add tag
      </button>
      <button type="button" onClick={() => setFilterTagName([])}>
        Remove tag
      </button>
      <ul>
        {/* define a li containing logo and website name */}
        <li>
          <img src="/assets/myLogo.png" alt="Logo MyTouloulist" />
          <h1>myTouloulist</h1>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setIsFiltersMenuVisible(!isFiltersMenuVisible)}
          >
            <img
              src="/assets/filter_icon.png"
              alt="filter button icon"
              id="filter_icon"
            />
            <div className="header_filters">
              <div className="header_main_filters">
                <p>{filterMainName} | </p>
                <p>{filterDateName}</p>
              </div>
              <div className="header_tags_filters">
                {/* map the filterTagName element to display p */}
                {filterTagName.map((el) => (
                  <p key={el}>| {el}</p>
                ))}
              </div>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  isFiltersMenuVisible: PropTypes.bool.isRequired,
  setIsFiltersMenuVisible: PropTypes.func.isRequired,
  navBarRef: PropTypes.shape({ current: PropTypes.node.isRequired }).isRequired,
};

export default NavBar;
