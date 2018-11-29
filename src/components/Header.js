import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <header className="app-header">
    <p>{title}</p>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
